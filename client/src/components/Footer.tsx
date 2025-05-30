import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">OKIMAS</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              A global nexus for strategic evolution, frontier realization, and high-consequence capital deployment.
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 OKIMAS. All strategic initiatives confidential.
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Capabilities</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services/sovereign-capability">
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors">
                    Sovereign Enhancement
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/services/frontier-scientific">
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors">
                    Frontier Exploration
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/services/ai-consulting">
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors">
                    AI Transformation
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/services/venture-capital">
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors">
                    Venture Capital
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/services/geostrategic">
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors">
                    Geostrategic Engagement
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about">
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors">
                    Leadership
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/insights">
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors">
                    Insights
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/industries">
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors">
                    Industries
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors">
                    Careers
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors">
                    Strategic Inquiry
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
