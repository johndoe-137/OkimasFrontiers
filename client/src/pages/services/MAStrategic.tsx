import { Building, Handshake, TrendingUp, Globe, Cog, Shield, DollarSign, Scale, Users } from "lucide-react";

export default function MAStrategic() {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000')"
          }}
        />
        <div className="absolute inset-0 gradient-overlay" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-gradient">M&A & Strategic</span><br />
              <span className="text-foreground">Investment</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Sophisticated merger, acquisition, and strategic investment brokerage for 
              transformative corporate transactions and strategic capital deployment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Strategic Transaction Architecture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Orchestrating complex corporate transactions that reshape industries and create 
              sustainable competitive advantages in global markets
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">Complex Deal Structuring</h3>
              <p className="text-lg text-muted-foreground mb-8">
                OKIMAS specializes in architecting sophisticated M&A transactions that transcend 
                conventional deal structures, incorporating strategic technology transfers, 
                cross-border regulatory considerations, and multi-stakeholder value optimization.
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">Cross-Border Transaction Excellence</h4>
                  <p className="text-muted-foreground">Navigating complex international regulatory frameworks and cultural considerations for seamless global transactions.</p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="font-semibold text-lg mb-2">Technology Asset Valuation</h4>
                  <p className="text-muted-foreground">Sophisticated assessment of intellectual property, technological capabilities, and innovation potential in transaction valuations.</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">Strategic Synergy Realization</h4>
                  <p className="text-muted-foreground">Post-merger integration strategies that maximize operational synergies and accelerate value creation.</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Strategic merger and acquisition planning" 
                className="rounded-2xl shadow-2xl" 
              />
            </div>
          </div>

          <div className="bg-card/30 rounded-2xl p-12 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Transaction Categories</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Strategic Acquisitions</h4>
                <p className="text-muted-foreground">Technology-driven acquisitions for market expansion and capability enhancement</p>
              </div>
              <div className="text-center">
                <Handshake className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Joint Ventures</h4>
                <p className="text-muted-foreground">Strategic partnerships and joint venture structures for shared innovation and market access</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Management Buyouts</h4>
                <p className="text-muted-foreground">Sophisticated management-led acquisitions and private equity partnerships</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Cross-Border Mergers</h4>
                <p className="text-muted-foreground">International consolidation and market entry through strategic combinations</p>
              </div>
              <div className="text-center">
                <Cog className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Asset Carve-Outs</h4>
                <p className="text-muted-foreground">Strategic divestiture and spin-off transactions for focused value creation</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Distressed Situations</h4>
                <p className="text-muted-foreground">Turnaround and restructuring transactions for value recovery and optimization</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/30 p-8 rounded-xl">
              <DollarSign className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Valuation Excellence</h3>
              <p className="text-muted-foreground">Sophisticated financial modeling and valuation methodologies incorporating intangible assets, technology premiums, and strategic value.</p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl">
              <Scale className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-xl font-semibold mb-4">Regulatory Navigation</h3>
              <p className="text-muted-foreground">Expert guidance through complex regulatory approval processes, antitrust considerations, and international compliance requirements.</p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl">
              <Users className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Stakeholder Alignment</h3>
              <p className="text-muted-foreground">Sophisticated stakeholder management ensuring alignment of interests across shareholders, management, and regulatory bodies.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
