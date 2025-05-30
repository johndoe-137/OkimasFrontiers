import { Atom, Rocket, Dna, Satellite, Zap, Shield, Microscope } from "lucide-react";

export default function FrontierScientific() {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000')"
          }}
        />
        <div className="absolute inset-0 gradient-overlay" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-gradient">Frontier Scientific</span><br />
              <span className="text-foreground">Exploration</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Exotic technology maturation and deep-tech venture incubation at the absolute 
              vanguard of scientific possibility and commercial viability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Deep-Tech Innovation Ecosystem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Orchestrating breakthrough technologies from fundamental research to market-ready solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Quantum computing laboratory" 
                className="rounded-2xl shadow-2xl" 
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Quantum Domain Advancement</h3>
              <p className="text-lg text-muted-foreground mb-8">
                OKIMAS maintains a key advisory role in pioneering quantum research initiatives, 
                focusing on practical applications of fundamental physics for next-generation 
                computational and security paradigms.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Atom className="text-accent text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold">Quantum Computing Applications</h4>
                    <p className="text-muted-foreground text-sm">Next-generation computational intelligence and cryptographic security systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold">Quantum Security Frameworks</h4>
                    <p className="text-muted-foreground text-sm">Revolutionary encryption and secure communication protocols</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Microscope className="text-accent text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold">Materials Science Innovation</h4>
                    <p className="text-muted-foreground text-sm">Advanced materials and nanotechnology applications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card/30 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-primary text-2xl" />
              </div>
              <h4 className="font-semibold mb-2">Deep-Tech Incubation</h4>
              <p className="text-muted-foreground text-sm">Strategic acceleration of paradigm-shifting technology ventures</p>
            </div>
            <div className="bg-card/30 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dna className="text-accent text-2xl" />
              </div>
              <h4 className="font-semibold mb-2">Biotech Innovation</h4>
              <p className="text-muted-foreground text-sm">Advanced biotechnology and synthetic biology applications</p>
            </div>
            <div className="bg-card/30 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Satellite className="text-primary text-2xl" />
              </div>
              <h4 className="font-semibold mb-2">Space Technologies</h4>
              <p className="text-muted-foreground text-sm">Next-generation aerospace and satellite communication systems</p>
            </div>
            <div className="bg-card/30 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-accent text-2xl" />
              </div>
              <h4 className="font-semibold mb-2">Energy Systems</h4>
              <p className="text-muted-foreground text-sm">Revolutionary energy storage and generation technologies</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
