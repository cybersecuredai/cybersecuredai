import { MarketingLayout } from "@/components/MarketingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Enhanced4DBrainIcon } from "@/components/LazyCustomIcons";

export default function APEXSystem() {
  return (
    <MarketingLayout>
      <div className="ai-dashboard-bg min-h-screen py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <header className="mb-10 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl border border-purple-500/50 bg-gradient-to-br from-purple-900/40 to-slate-800/40 mb-4">
              <Enhanced4DBrainIcon className="w-10 h-10 text-purple-400" size={40} />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">APEX Genetic AI</h1>
            <Badge className="bg-purple-600/80">Self‑Evolving Intelligence</Badge>
          </header>

          <Card className="bg-surface/60 border-surface-light">
            <CardHeader>
              <CardTitle className="text-white">Overview</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              APEX is a genetic AI engine designed to evolve defense strategies continuously.
              This is a minimal placeholder page to support routing and builds.
            </CardContent>
          </Card>
        </div>
      </div>
    </MarketingLayout>
  );
}
