import { TrendingUp, Cog, Users, Globe, Shield, Brain, Target, Rocket, Trophy } from "lucide-react";

export default function ManagementConsulting() {
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
              <span className="text-gradient">Management &</span><br />
              <span className="text-foreground">Strategic Consulting</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Elite management consulting for complex organizational transformation, 
              strategic positioning, and operational excellence in dynamic global markets.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Transformational Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guiding organizations through fundamental transformation while maintaining 
              operational excellence and strategic market positioning
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">Organizational Evolution</h3>
              <p className="text-lg text-muted-foreground mb-8">
                OKIMAS specializes in the fundamental re-engineering of organizational structures, 
                operational models, and strategic frameworks to achieve sustainable competitive 
                advantages in rapidly evolving market environments.
              </p>
              <div className="space-y-6">
                <div className="bg-card/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-primary">Strategic Transformation</h4>
                  <p className="text-muted-foreground">Comprehensive organizational redesign for enhanced agility, innovation capacity, and market responsiveness.</p>
                </div>
                <div className="bg-card/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-accent">Operational Excellence</h4>
                  <p className="text-muted-foreground">Process optimization, efficiency enhancement, and performance management for sustained competitive advantage.</p>
                </div>
                <div className="bg-card/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-primary">Leadership Development</h4>
                  <p className="text-muted-foreground">Executive coaching and leadership capability enhancement for complex global operating environments.</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Executive strategic consulting" 
                className="rounded-2xl shadow-2xl" 
              />
            </div>
          </div>

          <div className="bg-card/30 rounded-2xl p-12 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Consulting Domains</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Growth Strategy</h4>
                <p className="text-muted-foreground">Market expansion, product innovation, and sustainable growth framework development</p>
              </div>
              <div className="text-center">
                <Cog className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Operations Transformation</h4>
                <p className="text-muted-foreground">Process reengineering, automation integration, and operational efficiency optimization</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Organizational Design</h4>
                <p className="text-muted-foreground">Structure optimization, culture transformation, and change management execution</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Global Expansion</h4>
                <p className="text-muted-foreground">International market entry, cross-border operations, and global scaling strategies</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Risk Management</h4>
                <p className="text-muted-foreground">Enterprise risk assessment, mitigation strategies, and resilience framework development</p>
              </div>
              <div className="text-center">
                <Brain className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Innovation Strategy</h4>
                <p className="text-muted-foreground">Innovation ecosystem design, R&D optimization, and emerging technology integration</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/30 p-8 rounded-xl">
              <Target className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Strategic Precision</h3>
              <p className="text-muted-foreground">Precise diagnosis of organizational challenges and targeted intervention strategies for maximum impact and sustainable results.</p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl">
              <Rocket className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-xl font-semibold mb-4">Accelerated Implementation</h3>
              <p className="text-muted-foreground">Rapid deployment of strategic initiatives through proven methodologies and change management expertise.</p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl">
              <Trophy className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Sustainable Excellence</h3>
              <p className="text-muted-foreground">Building organizational capabilities and cultural foundations for long-term competitive advantage and market leadership.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
