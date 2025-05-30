import { Building, Shield, Cpu, Factory, Satellite, Leaf, Heart, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Industries() {
  const industries = [
    {
      icon: Shield,
      title: "Defense & Security",
      description: "Strategic technology integration and capability enhancement for national security organizations and defense contractors.",
      capabilities: [
        "Advanced cybersecurity frameworks",
        "Critical infrastructure protection",
        "Quantum-domain security systems",
        "Strategic technology assessment"
      ]
    },
    {
      icon: Cpu,
      title: "Technology & AI",
      description: "Digital transformation and AI implementation for technology leaders and emerging tech companies.",
      capabilities: [
        "Enterprise AI architecture",
        "Quantum computing applications",
        "Blockchain and DLT systems",
        "Advanced automation platforms"
      ]
    },
    {
      icon: Building,
      title: "Financial Services",
      description: "Strategic capital deployment and sophisticated investment solutions for institutional financial entities.",
      capabilities: [
        "Alternative investment strategies",
        "Risk management frameworks",
        "Regulatory compliance systems",
        "Digital financial infrastructure"
      ]
    },
    {
      icon: Factory,
      title: "Advanced Manufacturing",
      description: "Operational transformation and technology integration for precision manufacturing and industrial companies.",
      capabilities: [
        "Industry 4.0 implementation",
        "Supply chain optimization",
        "Robotics and automation",
        "Quality management systems"
      ]
    },
    {
      icon: Satellite,
      title: "Aerospace & Space",
      description: "Strategic positioning and technology advancement for aerospace manufacturers and space technology companies.",
      capabilities: [
        "Satellite communication systems",
        "Launch vehicle optimization",
        "Space-based infrastructure",
        "Aerospace supply chain management"
      ]
    },
    {
      icon: Leaf,
      title: "Clean Technology",
      description: "Sustainable innovation and environmental technology solutions for clean energy and environmental companies.",
      capabilities: [
        "Renewable energy systems",
        "Carbon capture technologies",
        "Environmental monitoring",
        "Sustainable manufacturing processes"
      ]
    },
    {
      icon: Heart,
      title: "Healthcare & Biotechnology",
      description: "Advanced healthcare solutions and biotechnology innovation for pharmaceutical and medical device companies.",
      capabilities: [
        "Digital health platforms",
        "Biotechnology research acceleration",
        "Regulatory compliance frameworks",
        "Medical device innovation"
      ]
    },
    {
      icon: GraduationCap,
      title: "Education & Research",
      description: "Strategic research collaboration and knowledge transfer for academic institutions and research organizations.",
      capabilities: [
        "Research commercialization",
        "Technology transfer programs",
        "International collaboration frameworks",
        "Innovation ecosystem development"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-gradient">Industry</span><br />
              <span className="text-foreground">Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep sector specialization across critical industries driving global technological 
              advancement and strategic economic development
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Strategic Industry Focus</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              OKIMAS maintains specialized expertise across industries that form the backbone 
              of modern economic and technological infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-card/30 p-8 hover:bg-card/50 transition-all duration-300">
                <div className="mb-6">
                  <industry.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{industry.title}</h3>
                <p className="text-muted-foreground mb-6">{industry.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-3 text-accent">Key Capabilities</h4>
                  <ul className="space-y-2">
                    {industry.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="text-muted-foreground text-sm flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Innovation */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Cross-Industry Innovation</h2>
              <p className="text-lg text-muted-foreground mb-8">
                OKIMAS specializes in identifying and facilitating synergies between industries, 
                creating opportunities for transformative innovation through strategic cross-sector collaboration.
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">Technology Transfer</h4>
                  <p className="text-muted-foreground">Facilitating the adaptation of breakthrough technologies across industry boundaries for accelerated innovation.</p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="font-semibold text-lg mb-2">Strategic Partnerships</h4>
                  <p className="text-muted-foreground">Orchestrating complex multi-industry partnerships that leverage complementary capabilities and market access.</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">Market Convergence</h4>
                  <p className="text-muted-foreground">Identifying emerging market convergence opportunities and positioning clients for competitive advantage.</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Cross-industry collaboration" 
                className="rounded-2xl shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Market Access */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-card/30 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-8">Global Market Access</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Our industry expertise extends across all major global markets, enabling seamless 
              international expansion and cross-border strategic initiatives for our clients.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Established Markets</h4>
                <p className="text-muted-foreground text-sm">Deep relationships in mature economies with sophisticated regulatory frameworks</p>
              </div>
              <div>
                <Satellite className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Emerging Markets</h4>
                <p className="text-muted-foreground text-sm">Strategic positioning in high-growth emerging economies and frontier markets</p>
              </div>
              <div>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Strategic Regions</h4>
                <p className="text-muted-foreground text-sm">Specialized access to strategically significant regions and economic zones</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}