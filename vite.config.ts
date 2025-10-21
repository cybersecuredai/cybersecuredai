import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

/**
 * Plugin to skip Public Health Dashboard when SKIP_PUBLIC_HEALTH_DASHBOARD is set.
 * Returns a virtual placeholder module to avoid heavy component load during CI.
 */
function skipPublicHealthDashboard(): Plugin {
  const virtualModuleId = "virtual:public-health-dashboard";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "skip-public-health-dashboard",
    resolveId(id) {
      if (process.env.SKIP_PUBLIC_HEALTH_DASHBOARD === "1") {
        if (id.includes("PublicHealthDashboard")) {
          return resolvedVirtualModuleId;
        }
      }
      return null;
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export default function PublicHealthDashboard() { return null; }`;
      }
      return null;
    },
  };
}

/**
 * Plugin to provide fallbacks for missing assets.
 * When an asset from attached_assets/ is missing, returns a tiny inline SVG placeholder
 * instead of failing the build.
 */
function assetsFallback(): Plugin {
  const attachedAssetsPath = path.resolve(import.meta.dirname, "attached_assets");
  const placeholderSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect width="1" height="1" fill="transparent"/></svg>`;

  return {
    name: "assets-fallback",
    enforce: "pre", // Run before Vite's built-in asset handling
    async resolveId(source, importer) {
      // Handle @assets/* alias imports
      if (source.startsWith("@assets/")) {
        const assetPath = source.replace("@assets/", "");
        const fullPath = path.join(attachedAssetsPath, assetPath);
        
        // Check if file exists
        const fs = await import("fs/promises");
        try {
          await fs.access(fullPath);
          // File exists, return the path and let Vite handle it normally
          return fullPath;
        } catch {
          // File doesn't exist, return a special ID that we'll handle in load
          console.warn(`[assets-fallback] Missing asset: ${source} - using placeholder`);
          return "\0virtual-missing-asset:" + source;
        }
      }

      // Handle absolute paths that resolve into attached_assets
      if (source.startsWith(attachedAssetsPath)) {
        const fs = await import("fs/promises");
        try {
          await fs.access(source);
          return null; // Let default handling proceed
        } catch {
          console.warn(`[assets-fallback] Missing asset: ${source} - using placeholder`);
          return "\0virtual-missing-asset:" + source;
        }
      }

      // Handle any id that includes "attached_assets/" (including file names with spaces)
      if (source.includes("attached_assets/")) {
        const assetPart = source.split("attached_assets/")[1];
        if (assetPart) {
          const fullPath = path.join(attachedAssetsPath, assetPart);
          const fs = await import("fs/promises");
          try {
            await fs.access(fullPath);
            return fullPath;
          } catch {
            console.warn(`[assets-fallback] Missing asset: ${source} - using placeholder`);
            return "\0virtual-missing-asset:" + source;
          }
        }
      }

      return null;
    },
    async load(id) {
      // Handle our virtual missing asset modules
      if (id.startsWith("\0virtual-missing-asset:")) {
        const dataUri = `data:image/svg+xml;base64,${Buffer.from(placeholderSvg).toString("base64")}`;
        return `export default ${JSON.stringify(dataUri)}`;
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    skipPublicHealthDashboard(),
    assetsFallback(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
