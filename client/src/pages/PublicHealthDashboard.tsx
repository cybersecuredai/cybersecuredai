import { MarketingLayout } from "@/components/MarketingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PublicHealthDashboard() {
  return (
    <MarketingLayout>
      <div className="ai-dashboard-bg min-h-screen py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-white mb-2">Public Health Dashboard</h1>
            <Badge className="bg-green-600/80">Preview</Badge>
          </header>

          <Card className="bg-surface/60 border-surface-light">
            <CardHeader>
              <CardTitle className="text-white">Overview</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Minimal placeholder component to enable build. The full implementation will be wired in a follow-up.
            </CardContent>
          </Card>
        </div>
      </div>
    </MarketingLayout>
  );
}
