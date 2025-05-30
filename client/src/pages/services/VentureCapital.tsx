import { Building, Crown, Globe, Atom, Leaf, Shield, Search, Handshake, TrendingUp } from "lucide-react";

export default function VentureCapital() {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000')"
          }}
        />
        <div className="absolute inset-0 gradient-overlay" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-gradient">Venture Capital</span><br />
              <span className="text-foreground">Orchestration</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Global orchestration of sophisticated venture capital through elite international 
              networks, connecting paradigm-shifting ventures with discerning institutional capital.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Strategic Capital Deployment</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Facilitating connections between visionary entrepreneurs and sophisticated capital sources 
              across sovereign wealth funds, family offices, and institutional investors
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Investment strategy meeting" 
                className="rounded-2xl shadow-2xl" 
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Elite Capital Networks</h3>
              <p className="text-lg text-muted-foreground mb-8">
                OKIMAS maintains direct relationships with the most sophisticated capital sources 
                globally, including sovereign wealth funds, ultra-high-net-worth family offices, 
                and strategic corporate investors seeking transformative opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Building className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sovereign Wealth Funds</h4>
                    <p className="text-muted-foreground text-sm">Direct access to national investment vehicles and strategic development funds</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Crown className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ultra-High-Net-Worth Family Offices</h4>
                    <p className="text-muted-foreground text-sm">Exclusive partnerships with generational wealth management entities</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Building className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Strategic Corporate Investors</h4>
                    <p className="text-muted-foreground text-sm">Technology giants and conglomerates seeking disruptive innovations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card/30 rounded-2xl p-12 mb-20">
            <h3 className="text-3xl font-bold mb-8 text-center">Investment Focus Areas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Atom className="text-primary text-2xl" />
                </div>
                <h4 className="font-semibold mb-3">Deep Technology</h4>
                <p className="text-muted-foreground text-sm">Quantum computing, AI, biotechnology, and advanced materials</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-accent text-2xl" />
                </div>
                <h4 className="font-semibold mb-3">Sustainable Innovation</h4>
                <p className="text-muted-foreground text-sm">Clean technology, renewable energy, and environmental solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-primary text-2xl" />
                </div>
                <h4 className="font-semibold mb-3">Global Infrastructure</h4>
                <p className="text-muted-foreground text-sm">Digital infrastructure, smart cities, and connectivity solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-accent text-2xl" />
                </div>
                <h4 className="font-semibold mb-3">Strategic Security</h4>
                <p className="text-muted-foreground text-sm">Cybersecurity, defense technology, and critical infrastructure protection</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/30 p-8 rounded-xl">
              <Search className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Due Diligence Excellence</h3>
              <p className="text-muted-foreground">Comprehensive technical and commercial evaluation of high-impact technological ventures and deep-tech opportunities.</p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl">
              <Handshake className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-xl font-semibold mb-4">Strategic Partnership Facilitation</h3>
              <p className="text-muted-foreground">Orchestrating complex multi-party arrangements between ventures, investors, and strategic partners.</p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl">
              <TrendingUp className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Value Creation Acceleration</h3>
              <p className="text-muted-foreground">Post-investment strategic guidance for scaling operations, market expansion, and sustainable growth.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
