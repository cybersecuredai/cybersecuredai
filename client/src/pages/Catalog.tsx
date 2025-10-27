import { MarketingLayout } from "@/components/MarketingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Catalog() {
  return (
    <MarketingLayout>
      <div className="ai-dashboard-bg min-h-screen py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-white mb-2">Catalog</h1>
            <Badge className="bg-cyan-600/80">Internal</Badge>
          </header>

          <Card className="bg-surface/60 border-surface-light">
            <CardHeader>
              <CardTitle className="text-white">Product Catalog</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              Placeholder for internal pricing and product management.
            </CardContent>
          </Card>
        </div>
      </div>
    </MarketingLayout>
  );
}
