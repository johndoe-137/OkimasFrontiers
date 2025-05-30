import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, Atom, Brain, Rocket, Handshake, Crown, Network, Shield, Cog } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000')"
          }}
        />
        <div className="absolute inset-0 gradient-overlay" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-gradient">Strategic Evolution</span><br />
              <span className="text-foreground">Beyond Conventional</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl">
              OKIMAS operates as a singular global nexus for endeavors of profound strategic import, 
              serving as the discreet enabler behind initiatives that fundamentally reshape national 
              capabilities and global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/about">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold text-lg px-8 py-4">
                  Discover Our Approach
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-semibold text-lg px-8 py-4">
                  Initiate Engagement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Core Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Operating beyond conventional advisory frameworks to serve pivotal global strategic initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/services/sovereign-capability">
              <Card className="group bg-card/30 p-8 hover:bg-card/50 transition-all duration-300 cursor-pointer">
                <div className="mb-6">
                  <Globe className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Sovereign Capability Enhancement</h3>
                <p className="text-muted-foreground mb-4">Strategic modernization of national infrastructure and sovereign capabilities through advanced technological integration.</p>
                <div className="text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Explore Capability →
                </div>
              </Card>
            </Link>

            <Link href="/services/frontier-scientific">
              <Card className="group bg-card/30 p-8 hover:bg-card/50 transition-all duration-300 cursor-pointer">
                <div className="mb-6">
                  <Atom className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Frontier Scientific Exploration</h3>
                <p className="text-muted-foreground mb-4">Maturation of exotic technologies and incubation of paradigm-shifting deep-tech ventures.</p>
                <div className="text-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Explore Frontier →
                </div>
              </Card>
            </Link>

            <Link href="/services/ai-consulting">
              <Card className="group bg-card/30 p-8 hover:bg-card/50 transition-all duration-300 cursor-pointer">
                <div className="mb-6">
                  <Brain className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI & Digital Transformation</h3>
                <p className="text-muted-foreground mb-4">Comprehensive business and technology consulting for enterprise-scale AI/ML deployments.</p>
                <div className="text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Explore AI →
                </div>
              </Card>
            </Link>

            <Link href="/services/venture-capital">
              <Card className="group bg-card/30 p-8 hover:bg-card/50 transition-all duration-300 cursor-pointer">
                <div className="mb-6">
                  <Rocket className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Venture Capital Orchestration</h3>
                <p className="text-muted-foreground mb-4">Global orchestration of sophisticated venture capital through elite international networks.</p>
                <div className="text-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Explore Capital →
                </div>
              </Card>
            </Link>

            <Link href="/services/geostrategic">
              <Card className="group bg-card/30 p-8 hover:bg-card/50 transition-all duration-300 cursor-pointer">
                <div className="mb-6">
                  <Handshake className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Geostrategic Engagement</h3>
                <p className="text-muted-foreground mb-4">High-level diplomatic facilitation and apex global network cultivation for strategic initiatives.</p>
                <div className="text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Explore Engagement →
                </div>
              </Card>
            </Link>

            <Link href="/services/management-consulting">
              <Card className="group bg-card/30 p-8 hover:bg-card/50 transition-all duration-300 cursor-pointer">
                <div className="mb-6">
                  <Crown className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Strategic Management</h3>
                <p className="text-muted-foreground mb-4">Elite management consulting for complex organizational transformation and strategic positioning.</p>
                <div className="text-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Explore Strategy →
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">Global Strategic Positioning</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                With command centers strategically positioned within premier global financial capitals 
                and operational reach extending across pivotal emerging and established economic theaters 
                worldwide, OKIMAS operates at the intersection of technology, capital, and geopolitical influence.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Network className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Global Network Access</h4>
                    <p className="text-muted-foreground">Senior echelons of government, technology corporations, and financial institutions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Shield className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Discreet Operations</h4>
                    <p className="text-muted-foreground">Confidential facilitation of high-consequence strategic initiatives</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Cog className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Systems Integration</h4>
                    <p className="text-muted-foreground">Synthesis of advanced technologies with strategic objectives</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Global business network" 
                className="rounded-2xl shadow-2xl animate-float" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
