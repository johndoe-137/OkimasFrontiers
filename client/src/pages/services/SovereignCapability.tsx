import { Shield, Satellite, Database } from "lucide-react";

export default function SovereignCapability() {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000')"
          }}
        />
        <div className="absolute inset-0 gradient-overlay" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-gradient">Sovereign Capability</span><br />
              <span className="text-foreground">Enhancement</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Strategic modernization of national infrastructure and sovereign capabilities through 
              the integration of advanced technological paradigms and operational frameworks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-8">National Infrastructure Modernization</h2>
              <p className="text-lg text-muted-foreground mb-8">
                OKIMAS provides comprehensive strategic advisory for the fundamental transformation 
                of national infrastructure systems, integrating cutting-edge technologies with 
                sovereign operational requirements.
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">Critical Infrastructure Protection</h4>
                  <p className="text-muted-foreground">Advanced cybersecurity frameworks and resilient system architectures for national critical infrastructure protection.</p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="font-semibold text-lg mb-2">Digital Sovereignty Frameworks</h4>
                  <p className="text-muted-foreground">Comprehensive strategies for maintaining technological independence and data sovereignty in an interconnected world.</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">Strategic Technology Integration</h4>
                  <p className="text-muted-foreground">Seamless integration of emerging technologies into existing sovereign operational frameworks and governance structures.</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Critical infrastructure and cybersecurity systems" 
                className="rounded-2xl shadow-2xl" 
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/30 p-8 rounded-xl">
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Security Architecture</h3>
              <p className="text-muted-foreground">Next-generation security frameworks designed for sovereign-level threat protection and operational continuity.</p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl">
              <Satellite className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-xl font-semibold mb-4">Communications Infrastructure</h3>
              <p className="text-muted-foreground">Secure, resilient communication networks enabling sovereign operational independence and strategic coordination.</p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl">
              <Database className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Data Governance</h3>
              <p className="text-muted-foreground">Comprehensive data sovereignty solutions ensuring national control over critical information assets and flows.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
