import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { useLocation } from "wouter";

interface MarketingLayoutProps {
  children: ReactNode;
}

export function MarketingLayout({ children }: MarketingLayoutProps) {
  const [location] = useLocation();
  const isHome = location === '/';
  return (
    <div className="min-h-screen ai-dashboard-bg marketing-website">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer tone={isHome ? 'lighter' : 'default'} />
    </div>
  );
}