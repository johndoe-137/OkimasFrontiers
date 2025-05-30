import { User, Globe, Shield, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-gradient">Leadership</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A rare confluence of strategic competencies and profound operational experience 
              driving transformative initiatives at the global scale
            </p>
          </div>

          {/* Rickard De Mas Palenius */}
          <div className="mb-24">
            <div className="bg-card/30 rounded-2xl p-12">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Rickard De Mas Palenius</h2>
                <p className="text-xl text-primary font-semibold mb-6">CIO, Founder, Partner</p>
                <p className="text-lg text-muted-foreground mb-8">
                  The Principal Architect of Transformative Systems & Advanced Venture Realization
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Strategic Technology & Enterprise Architecture</h3>
                  <p className="text-muted-foreground">
                    Possesses proven ability to synthesize emergent technological paradigms—spanning advanced computational intelligence, 
                    quantum-domain security frameworks, and enterprise-scale AI/ML deployments—with fundamental operational objectives.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-accent">Advanced Venture Realization</h3>
                  <p className="text-muted-foreground">
                    Specialized focus on identifying, nurturing, and strategically accelerating early-stage initiatives with 
                    genuine paradigm-shifting potential, including sophisticated capital acquisition strategies and global market positioning.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Quantum & AI-Driven Ecosystems</h3>
                  <p className="text-muted-foreground">
                    Primary conceptualizer of novel operational frameworks leveraging quantum-informational systems, 
                    advanced AI constructs, and distributed ledger technologies for next-generation business applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rohit Naidu */}
          <div className="mb-24">
            <div className="bg-card/30 rounded-2xl p-12">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Rohit Naidu</h2>
                <p className="text-xl text-accent font-semibold mb-6">Founder and Managing Partner</p>
                <p className="text-lg text-muted-foreground mb-8">
                  The Primary Conduit for Global Strategic Alliances & High-Influence Market Nexus
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-accent">High-Level Governmental & Sovereign Entity Engagement</h3>
                  <p className="text-muted-foreground">
                    Distinguished tenure as senior governmental representative for a major global economic power, 
                    with direct mandate for accelerating international expansion of advanced technology sectors.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Global Network Orchestration</h3>
                  <p className="text-muted-foreground">
                    Maintains exceptionally broad global network encompassing senior government echelons, 
                    international technology corporations, and sophisticated financial institutions across multiple continents.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-accent">Complex Risk Assessment & Strategic Orchestration</h3>
                  <p className="text-muted-foreground">
                    Pronounced acuity in assessing multi-dimensional risks across geopolitical, technological, and financial domains, 
                    with systematic approach to multi-stage strategic orchestration in sensitive international environments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Background */}
          <div className="bg-card/30 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-8">About OKIMAS</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              OKIMAS functions as a singular global entity, operating beyond conventional advisory frameworks 
              to serve as a pivotal nexus for endeavors of profound strategic import. With command centers 
              strategically positioned within premier global financial capitals and agile operational reach 
              extending across pivotal emerging and established economic theaters worldwide, OKIMAS enables 
              initiatives that fundamentally reshape national capabilities and global markets.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Global Presence</h4>
                <p className="text-muted-foreground text-sm">Strategic positioning across premier financial capitals and emerging economic theaters</p>
              </div>
              <div>
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Discreet Operations</h4>
                <p className="text-muted-foreground text-sm">Confidential facilitation of high-consequence strategic initiatives and complex negotiations</p>
              </div>
              <div>
                <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Transformative Impact</h4>
                <p className="text-muted-foreground text-sm">Enabling paradigm-shifting outcomes through sophisticated strategic orchestration</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
