import { Brain, TrendingUp, Users, Shield, Cog, MessageSquare } from "lucide-react";

export default function AIConsulting() {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000')"
          }}
        />
        <div className="absolute inset-0 gradient-overlay" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-gradient">AI & Digital</span><br />
              <span className="text-foreground">Transformation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Comprehensive business and technology consulting for enterprise-scale AI/ML deployments 
              and fundamental digital transformation initiatives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-8">Enterprise AI Implementation</h2>
              <p className="text-lg text-muted-foreground mb-8">
                OKIMAS specializes in the synthesis of emergent AI paradigms with fundamental 
                operational objectives, ensuring ethical deployment and strategic value realization 
                across complex organizational ecosystems.
              </p>
              <div className="space-y-6">
                <div className="bg-card/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-primary">Strategic AI Architecture</h4>
                  <p className="text-muted-foreground">Comprehensive AI system design integrating machine learning, natural language processing, and computer vision for enterprise transformation.</p>
                </div>
                <div className="bg-card/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-accent">Ethical AI Governance</h4>
                  <p className="text-muted-foreground">Robust governance frameworks ensuring responsible AI deployment, bias mitigation, and regulatory compliance across global markets.</p>
                </div>
                <div className="bg-card/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-primary">Digital Infrastructure Modernization</h4>
                  <p className="text-muted-foreground">Cloud-native architectures, edge computing integration, and scalable data platforms supporting advanced AI workloads.</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="AI technology implementation" 
                className="rounded-2xl shadow-2xl" 
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">Digital Transformation Domains</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive transformation across all aspects of modern enterprise operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card/30 p-8 rounded-xl">
              <Brain className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Intelligent Automation</h3>
              <p className="text-muted-foreground">Advanced process automation using AI-driven decision making and adaptive workflow optimization.</p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl">
              <TrendingUp className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
              <p className="text-muted-foreground">Sophisticated forecasting models and business intelligence systems for strategic decision support.</p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl">
              <Users className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Customer Intelligence</h3>
              <p className="text-muted-foreground">Advanced customer behavior analysis and personalization engines for enhanced engagement and retention.</p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl">
              <Shield className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-xl font-semibold mb-4">Cybersecurity AI</h3>
              <p className="text-muted-foreground">Next-generation threat detection and response systems using machine learning and behavioral analysis.</p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl">
              <Cog className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Operations Optimization</h3>
              <p className="text-muted-foreground">AI-driven supply chain optimization, resource allocation, and operational efficiency enhancement.</p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl">
              <MessageSquare className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-xl font-semibold mb-4">Conversational AI</h3>
              <p className="text-muted-foreground">Advanced natural language processing for customer service, internal knowledge management, and decision support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
