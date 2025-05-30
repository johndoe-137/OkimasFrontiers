import { Crown, Eye, Network, Atom, Globe, Cog } from "lucide-react";

export default function Philosophy() {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000')"
          }}
        />
        <div className="absolute inset-0 gradient-overlay" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-gradient">Operational</span><br />
              <span className="text-foreground">Philosophy</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              The foundational principles and defining differentiators that establish 
              OKIMAS as a singular force in global strategic advisory and implementation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">The Essence of Our Approach</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              OKIMAS operates on the conviction that transformative strategic initiatives require 
              a synthesis of profound technological understanding, sophisticated geopolitical insight, 
              and the ability to orchestrate complex multi-stakeholder ecosystems.
            </p>
          </div>

          <div className="space-y-24">
            {/* Core Principles */}
            <div>
              <h3 className="text-3xl font-bold mb-12 text-center">Foundational Principles</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-card/30 p-8 rounded-xl">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Crown className="text-primary text-2xl" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-center">Strategic Abstraction</h4>
                  <p className="text-muted-foreground text-center">Operating beyond conventional frameworks to identify and realize opportunities that transcend traditional industry boundaries and conventional thinking.</p>
                </div>
                <div className="bg-card/30 p-8 rounded-xl">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="text-accent text-2xl" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-center">Discreet Excellence</h4>
                  <p className="text-muted-foreground text-center">Maintaining the highest standards of confidentiality and discretion while delivering exceptional results for high-consequence strategic initiatives.</p>
                </div>
                <div className="bg-card/30 p-8 rounded-xl">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Network className="text-primary text-2xl" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-center">Network Synthesis</h4>
                  <p className="text-muted-foreground text-center">Orchestrating diverse, globally distributed stakeholder ecosystems to achieve outcomes that exceed the sum of individual capabilities.</p>
                </div>
                <div className="bg-card/30 p-8 rounded-xl">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Atom className="text-accent text-2xl" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-center">Technology Integration</h4>
                  <p className="text-muted-foreground text-center">Seamlessly synthesizing emerging technological paradigms with strategic objectives to create sustainable competitive advantages.</p>
                </div>
                <div className="bg-card/30 p-8 rounded-xl">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="text-primary text-2xl" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-center">Global Perspective</h4>
                  <p className="text-muted-foreground text-center">Maintaining a comprehensive understanding of global dynamics, cultural nuances, and geopolitical considerations in all strategic initiatives.</p>
                </div>
                <div className="bg-card/30 p-8 rounded-xl">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Cog className="text-accent text-2xl" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-center">Adaptive Execution</h4>
                  <p className="text-muted-foreground text-center">Implementing flexible, responsive execution frameworks that adapt to rapidly evolving technological and market landscapes.</p>
                </div>
              </div>
            </div>

            {/* Differentiators */}
            <div>
              <h3 className="text-3xl font-bold mb-12 text-center">Defining Differentiators</h3>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="border-l-4 border-primary pl-8">
                    <h4 className="text-xl font-semibold mb-4">Unprecedented Access</h4>
                    <p className="text-muted-foreground">OKIMAS maintains exclusive relationships with senior decision-makers across governmental, corporate, and financial spheres, enabling access to opportunities that remain invisible to conventional advisory practices.</p>
                  </div>
                  <div className="border-l-4 border-accent pl-8">
                    <h4 className="text-xl font-semibold mb-4">Multi-Dimensional Expertise</h4>
                    <p className="text-muted-foreground">Our leadership embodies a rare synthesis of deep technological understanding, sophisticated financial acumen, and nuanced geopolitical insight, enabling comprehensive solution architectures.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-8">
                    <h4 className="text-xl font-semibold mb-4">Frontier Technology Mastery</h4>
                    <p className="text-muted-foreground">Positioning at the absolute vanguard of technological advancement, from quantum computing to advanced AI, enables identification and realization of paradigm-shifting opportunities.</p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="border-l-4 border-accent pl-8">
                    <h4 className="text-xl font-semibold mb-4">Strategic Orchestration</h4>
                    <p className="text-muted-foreground">Sophisticated ability to coordinate complex, multi-year, multi-stakeholder initiatives involving governments, corporations, and international organizations simultaneously.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-8">
                    <h4 className="text-xl font-semibold mb-4">Risk Mitigation Excellence</h4>
                    <p className="text-muted-foreground">Advanced frameworks for identifying, assessing, and mitigating complex multi-dimensional risks across technological, geopolitical, and financial domains.</p>
                  </div>
                  <div className="border-l-4 border-accent pl-8">
                    <h4 className="text-xl font-semibold mb-4">Cultural Intelligence</h4>
                    <p className="text-muted-foreground">Deep understanding of cultural, regulatory, and operational nuances across diverse international markets, enabling effective cross-border collaboration and execution.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-card/30 rounded-2xl p-12 text-center">
              <h3 className="text-3xl font-bold mb-8">The OKIMAS Value Proposition</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
                OKIMAS exists to serve as the strategic nexus for initiatives that transcend conventional possibilities. 
                We enable our clients to achieve outcomes that reshape markets, enhance national capabilities, 
                and establish sustainable competitive advantages in an increasingly complex global landscape.
              </p>
              <div className="text-primary font-semibold text-lg">
                "Strategic Evolution Beyond Conventional"
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
