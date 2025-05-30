import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, ChevronDown } from "lucide-react";

const services = [
  { name: "Sovereign Capability Enhancement", href: "/services/sovereign-capability" },
  { name: "Frontier Scientific Exploration", href: "/services/frontier-scientific" },
  { name: "AI & Digital Transformation", href: "/services/ai-consulting" },
  { name: "Venture Capital Orchestration", href: "/services/venture-capital" },
  { name: "M&A & Strategic Investment", href: "/services/ma-strategic" },
  { name: "Strategic Assets Brokerage", href: "/services/assets-brokerage" },
  { name: "Geostrategic Engagement", href: "/services/geostrategic" },
  { name: "Management Consulting", href: "/services/management-consulting" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/">
              <Button variant="ghost" className="text-2xl font-bold text-primary hover:text-foreground transition-colors duration-300 p-0">
                OKIMAS
              </Button>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-96 p-4 space-y-2">
                      {services.map((service) => (
                        <Link key={service.href} href={service.href}>
                          <NavigationMenuLink className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-lg transition-all">
                            {service.name}
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link href="/about">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                About
              </Button>
            </Link>
            
            <Link href="/insights">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Insights
              </Button>
            </Link>
            
            <Link href="/industries">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Industries
              </Button>
            </Link>
            
            <Link href="/careers">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Careers
              </Button>
            </Link>
            
            <Link href="/services/philosophy">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Philosophy
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background border-border">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/about" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground transition-colors">
                      About
                    </Button>
                  </Link>
                  
                  <Link href="/insights" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground transition-colors">
                      Insights
                    </Button>
                  </Link>
                  
                  <Link href="/industries" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground transition-colors">
                      Industries
                    </Button>
                  </Link>
                  
                  <Link href="/careers" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground transition-colors">
                      Careers
                    </Button>
                  </Link>
                  
                  <Link href="/services/philosophy" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground transition-colors">
                      Philosophy
                    </Button>
                  </Link>
                  
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-2 px-3">Services</p>
                    <div className="space-y-1">
                      {services.map((service) => (
                        <Link key={service.href} href={service.href} onClick={() => setIsOpen(false)}>
                          <Button variant="ghost" className="w-full justify-start text-sm text-muted-foreground hover:text-foreground transition-colors">
                            {service.name}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                      Contact
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
