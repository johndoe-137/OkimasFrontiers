import { Gem, Factory, Sprout, Cpu, Shield, Globe, Scale } from "lucide-react";

export default function AssetsBrokerage() {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000')"
          }}
        />
        <div className="absolute inset-0 gradient-overlay" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-gradient">Strategic Assets</span><br />
              <span className="text-foreground">Brokerage</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Sophisticated brokerage of high-value physical assets, critical commodities, 
              and strategic geopolitical resources through elite global networks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Critical Resource Orchestration</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Facilitating access to strategically significant physical assets and commodities 
              that underpin national capabilities and global economic stability
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">Strategic Resource Categories</h3>
              <p className="text-lg text-muted-foreground mb-8">
                OKIMAS maintains exclusive relationships with primary producers, strategic reserves, 
                and resource-rich entities worldwide, enabling access to critical materials that 
                shape technological advancement and national security considerations.
              </p>
              <div className="space-y-4">
                <div className="bg-card/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 text-primary">Rare Earth Elements & Critical Minerals</h4>
                  <p className="text-muted-foreground text-sm">Essential materials for advanced technology manufacturing, renewable energy systems, and defense applications</p>
                </div>
                <div className="bg-card/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 text-accent">Energy & Strategic Commodities</h4>
                  <p className="text-muted-foreground text-sm">Traditional and alternative energy resources, including strategic petroleum reserves and renewable energy infrastructure</p>
                </div>
                <div className="bg-card/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 text-primary">Advanced Manufacturing Materials</h4>
                  <p className="text-muted-foreground text-sm">Specialized alloys, semiconductor materials, and precision manufacturing components for high-technology applications</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Strategic resources facility" 
                className="rounded-2xl shadow-2xl" 
              />
            </div>
          </div>

          <div className="bg-card/30 rounded-2xl p-12 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Asset Classes & Specializations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gem className="text-primary text-2xl" />
                </div>
                <h4 className="font-semibold mb-3">Precious Metals</h4>
                <p className="text-muted-foreground text-sm">Gold, platinum, palladium, and rare metal strategic reserves</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="text-accent text-2xl" />
                </div>
                <h4 className="font-semibold mb-3">Industrial Assets</h4>
                <p className="text-muted-foreground text-sm">Manufacturing facilities, production equipment, and infrastructure assets</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sprout className="text-primary text-2xl" />
                </div>
                <h4 className="font-semibold mb-3">Agricultural Resources</h4>
                <p className="text-muted-foreground text-sm">Strategic agricultural commodities and food security assets</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="text-accent text-2xl" />
                </div>
                <h4 className="font-semibold mb-3">Technology Components</h4>
                <p className="text-muted-foreground text-sm">Advanced semiconductors, quantum materials, and specialized technology assets</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/30 p-8 rounded-xl">
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Strategic Security</h3>
              <p className="text-muted-foreground">Comprehensive security protocols for high-value asset transactions, including provenance verification and chain-of-custody management.</p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl">
              <Globe className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-xl font-semibold mb-4">Global Logistics</h3>
              <p className="text-muted-foreground">Sophisticated logistics and transportation networks for secure movement of strategic assets across international borders.</p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl">
              <Scale className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
              <p className="text-muted-foreground">Expert navigation of international trade regulations, export controls, and strategic asset governance frameworks.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
