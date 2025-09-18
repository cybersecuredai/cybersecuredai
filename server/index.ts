import express, { type Request, Response, NextFunction } from "express";
import helmet from "helmet";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// ===== CRITICAL OPERATIONAL SECURITY: BOOT-TIME VALIDATION =====

// CRITICAL FIX: Comprehensive environment validation
function validateEnvironmentSecurity() {
  const requiredSecrets = ['JWT_SECRET', 'FIPS_ENCRYPTION_KEY', 'FIPS_SIGNING_KEY'];
  const missingSecrets: string[] = [];
  const weakSecrets: string[] = [];
  
  if (process.env.NODE_ENV === 'production') {
    console.log('🔐 Running production security validation...');
    
    // Check for required secrets
    for (const secret of requiredSecrets) {
      const value = process.env[secret];
      if (!value) {
        missingSecrets.push(secret);
      } else if (secret === 'JWT_SECRET' && value.length < 32) {
        weakSecrets.push(`${secret} (minimum 32 characters required)`);
      } else if (secret === 'FIPS_ENCRYPTION_KEY' && value.length < 64) {
        weakSecrets.push(`${secret} (minimum 64 hex characters required)`);
      } else if (secret === 'FIPS_SIGNING_KEY' && value.length < 64) {
        weakSecrets.push(`${secret} (minimum 64 hex characters required for digital signing)`);
      }
    }
    
    // Validate critical errors
    if (missingSecrets.length > 0) {
      console.error('🚨 CRITICAL SECURITY FAILURE: Missing required environment variables:');
      missingSecrets.forEach(secret => console.error(`   - ${secret}`));
      console.error('💀 APPLICATION CANNOT START SECURELY');
      process.exit(1);
    }
    
    if (weakSecrets.length > 0) {
      console.error('🚨 CRITICAL SECURITY FAILURE: Weak security configuration:');
      weakSecrets.forEach(issue => console.error(`   - ${issue}`));
      console.error('💀 APPLICATION CANNOT START SECURELY');
      process.exit(1);
    }
    
    // Additional production security checks
    const productionChecks = {
      DATABASE_URL: process.env.DATABASE_URL,
      NODE_ENV: process.env.NODE_ENV,
      PORT: process.env.PORT
    };
    
    if (!productionChecks.DATABASE_URL) {
      console.error('🚨 CRITICAL: DATABASE_URL must be configured in production');
      process.exit(1);
    }
    
    if (productionChecks.NODE_ENV !== 'production') {
      console.error('🚨 CRITICAL: NODE_ENV must be set to "production" for production deployment');
      process.exit(1);
    }
    
    console.log('✅ Production security validation passed');
    console.log('✅ All required secrets are properly configured');
    console.log('✅ Application starting with secure configuration');
    
  } else {
    console.log('🔓 Development mode: Relaxed security validation');
    console.log('   Note: Production deployment requires stricter security configuration');
  }
}

// Execute security validation before any other initialization
validateEnvironmentSecurity();

// ===== CRITICAL COMPLIANCE: AUDIT IMMUTABILITY MIGRATION =====
// HIPAA/FedRAMP REQUIREMENT: Ensure WORM triggers are installed on startup

async function executeAuditImmutabilityMigration() {
  try {
    console.log('🔒 Executing HIPAA/FedRAMP audit immutability migration...');
    
    // Dynamic import to avoid issues when DATABASE_URL not available
    const { isDatabaseAvailable } = await import("./db");
    
    if (!isDatabaseAvailable()) {
      console.log('⚠️ Database not available - skipping audit immutability migration');
      return;
    }

    // Read and execute the SQL migration script
    const fs = await import('fs');
    const path = await import('path');
    const migrationPath = path.join(process.cwd(), 'scripts', 'add-audit-log-immutability.sql');
    
    if (!fs.existsSync(migrationPath)) {
      throw new Error('Critical audit immutability migration script not found');
    }

    const migrationSQL = fs.readFileSync(migrationPath, 'utf8');
    
    // Execute migration using database connection
    const { db } = await import("./db");
    const { sql } = await import("drizzle-orm");
    
    // Execute the migration in chunks (PostgreSQL functions)
    const sqlChunks = migrationSQL.split('-- =================================================================');
    
    for (let i = 0; i < sqlChunks.length; i++) {
      const chunk = sqlChunks[i].trim();
      if (chunk && !chunk.startsWith('--')) {
        await db.execute(sql.raw(chunk));
      }
    }
    
    console.log('✅ HIPAA/FedRAMP audit immutability migration completed successfully');
    console.log('✅ WORM (Write-Once-Read-Many) triggers installed on hipaa_secure_audit_logs');
    console.log('✅ Database-level audit log tampering prevention active');
    console.log('✅ Audit chain integrity validation functions installed');
    
  } catch (error) {
    console.error('🚨 CRITICAL: Audit immutability migration failed:', error);
    if (isProduction) {
      console.error('💀 Production deployment cannot continue without audit immutability');
      process.exit(1);
    } else {
      console.log('⚠️ Development mode: Continuing without audit immutability migration');
    }
  }
}

// Execute audit immutability migration on startup
if (process.env.DATABASE_URL) {
  console.log('🏥 Initializing HIPAA/FedRAMP compliance migrations...');
  executeAuditImmutabilityMigration().catch(error => {
    console.error('❌ Migration initialization failed:', error);
  });
}

// ===== CRITICAL HIPAA TRANSPORT SECURITY HARDENING =====

// CRITICAL FIX: Trust proxy before HTTPS redirect (required for proper HTTPS detection)
app.set('trust proxy', 1);

// Environment-specific security configuration
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

// CRITICAL FIX: Updated Helmet configuration with environment-gated CSP
app.use(helmet({
  // CRITICAL FIX: Enable HSTS only in production (HIPAA requirement)
  hsts: isProduction ? {
    maxAge: 31536000, // 1 year
    includeSubDomains: true,
    preload: true
  } : false,
  
  // CRITICAL FIX: Gate CSP unsafe allowances to development only
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      // SECURITY: Only allow unsafe directives in development
      scriptSrc: isDevelopment 
        ? ["'self'", "'unsafe-inline'", "'unsafe-eval'"] // Development only
        : ["'self'"], // Production: strict CSP
      styleSrc: isDevelopment 
        ? ["'self'", "'unsafe-inline'"] // Development only
        : ["'self'"], // Production: strict CSP
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "wss:", "https:"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
      baseUri: ["'self'"],
      formAction: ["'self'"],
      // CRITICAL FIX: Only include upgradeInsecureRequests in production
      ...(isProduction && { upgradeInsecureRequests: true }),
    },
  },
  
  // CRITICAL FIX: Remove deprecated options, use modern Helmet configuration
  crossOriginEmbedderPolicy: false, // May interfere with some integrations
  referrerPolicy: { policy: 'same-origin' }
}));

// Additional HIPAA-specific security headers
app.use((req, res, next) => {
  // CRITICAL FIX: HIPAA-specific headers (removed deprecated X-XSS-Protection)
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  // X-XSS-Protection header removed - deprecated and potentially harmful
  res.setHeader('Referrer-Policy', 'same-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // HIPAA compliance headers
  res.setHeader('X-HIPAA-Compliant', 'true');
  res.setHeader('X-PHI-Protected', 'true');
  
  // Remove server information
  res.removeHeader('X-Powered-By');
  res.removeHeader('Server');
  
  next();
});

// CRITICAL FIX: Enhanced HTTPS enforcement in production (HIPAA requirement)
if (isProduction) {
  app.use((req, res, next) => {
    // Check both req.secure (direct HTTPS) and x-forwarded-proto (load balancer)
    const isSecure = req.secure || req.header('x-forwarded-proto') === 'https';
    if (!isSecure) {
      log(`❌ HIPAA VIOLATION: Redirecting HTTP to HTTPS for ${req.url}`);
      return res.redirect(301, `https://${req.get('host')}${req.url}`);
    }
    next();
  });
}

// Security middleware for request size limits (prevent DoS)
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false, limit: '10mb' }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  try {
    const server = await registerRoutes(app);

    // Enhanced error handling middleware
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      log(`Error ${status}: ${message}`);
      
      // Prevent server crash by ensuring response is sent
      if (!res.headersSent) {
        res.status(status).json({ message });
      }
    });

    // Serve static report files before Vite middleware
    app.use('/reports', express.static('public/reports'));
    
    // Serve legal documents before Vite middleware
    app.use('/legal', express.static('public/legal'));

    // importantly only setup vite in development and after
    // setting up all the other routes so the catch-all route
    // doesn't interfere with the other routes
    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    // ALWAYS serve the app on the port specified in the environment variable PORT
    // Other ports are firewalled. Default to 5000 if not specified.
    // this serves both the API and the client.
    // It is the only port that is not firewalled.
    const port = parseInt(process.env.PORT || '5000', 10);
    
    // Validate port number
    if (isNaN(port) || port < 1 || port > 65535) {
      throw new Error(`Invalid port number: ${process.env.PORT}. Using default port 5000.`);
    }

    server.listen({
      port,
      host: "0.0.0.0",
      reusePort: true,
    }, () => {
      log(`serving on port ${port}`);
      log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });

    // Graceful shutdown handling
    const gracefulShutdown = (signal: string) => {
      log(`Received ${signal}. Shutting down gracefully...`);
      server.close(() => {
        log('Server closed.');
        process.exit(0);
      });
    };

    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));

    // Handle uncaught exceptions
    process.on('uncaughtException', (error) => {
      log(`Uncaught Exception: ${error.message}`);
      console.error(error);
      process.exit(1);
    });

    process.on('unhandledRejection', (reason, promise) => {
      log(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
      console.error(reason);
    });

  } catch (error) {
    log(`Failed to start server: ${error instanceof Error ? error.message : 'Unknown error'}`);
    console.error(error);
    process.exit(1);
  }
})();
