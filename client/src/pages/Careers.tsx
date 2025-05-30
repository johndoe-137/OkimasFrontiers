import { Users, Globe, Trophy, Target, ArrowRight, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Careers() {
  const positions = [
    {
      title: "Senior Strategic Advisor",
      department: "Strategic Advisory",
      location: "Global / Remote",
      type: "Full-time",
      description: "Lead complex multi-stakeholder strategic initiatives across government, corporate, and international organization spheres.",
      requirements: [
        "15+ years strategic consulting experience",
        "Advanced degree in relevant field",
        "Proven track record in international business",
        "Security clearance preferred"
      ]
    },
    {
      title: "Principal Technology Architect",
      department: "Technology Advisory",
      location: "Multiple Locations",
      type: "Full-time",
      description: "Design and implement advanced technology solutions for enterprise-scale digital transformation initiatives.",
      requirements: [
        "Deep expertise in AI/ML and quantum computing",
        "10+ years enterprise architecture experience",
        "Track record in emerging technology implementation",
        "PhD in Computer Science or related field preferred"
      ]
    },
    {
      title: "Investment Director",
      department: "Capital Advisory",
      location: "Financial Centers",
      type: "Full-time",
      description: "Lead venture capital and strategic investment initiatives for transformative technology companies.",
      requirements: [
        "Extensive venture capital or private equity experience",
        "Strong network in technology and finance sectors",
        "MBA from top-tier institution",
        "Proven deal execution capabilities"
      ]
    },
    {
      title: "Geopolitical Risk Analyst",
      department: "Strategic Intelligence",
      location: "Global",
      type: "Full-time",
      description: "Assess and mitigate complex geopolitical risks for international strategic initiatives.",
      requirements: [
        "Advanced degree in International Relations or Political Science",
        "Government or diplomatic service experience",
        "Multilingual capabilities preferred",
        "Regional expertise in key markets"
      ]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Strategic Excellence",
      description: "Commitment to delivering transformative outcomes that exceed conventional possibilities and reshape market dynamics."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Deep understanding of international markets, cultural nuances, and geopolitical considerations in all strategic initiatives."
    },
    {
      icon: Users,
      title: "Collaborative Innovation",
      description: "Fostering diverse, high-performing teams that synthesize expertise across technology, finance, and strategic domains."
    },
    {
      icon: Trophy,
      title: "Continuous Growth",
      description: "Investment in professional development and knowledge advancement to maintain position at the frontier of strategic advisory."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-gradient">Strategic</span><br />
              <span className="text-foreground">Careers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a distinguished team of strategic advisors shaping the future of global 
              technology, finance, and geopolitical collaboration
            </p>
          </div>
        </div>
      </section>

      {/* Why OKIMAS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose OKIMAS</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience unparalleled professional growth while working on transformative 
              initiatives that shape national capabilities and global markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card/30 p-8 text-center hover:bg-card/50 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Current Opportunities</h2>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <Card key={index} className="bg-card/30 p-8 hover:bg-card/50 transition-all duration-300">
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-semibold">{position.title}</h3>
                      <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">{position.type}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 mb-4 text-muted-foreground">
                      <span className="font-medium">{position.department}</span>
                      <span>{position.location}</span>
                    </div>
                    <p className="text-muted-foreground mb-6">{position.description}</p>
                    <div>
                      <h4 className="font-semibold mb-3">Key Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-muted-foreground text-sm flex items-center">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:col-span-1 flex flex-col justify-center">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mb-4">
                      Apply Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Culture */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Professional Excellence Environment</h2>
              <p className="text-lg text-muted-foreground mb-8">
                OKIMAS provides an exceptional professional environment that combines intellectual 
                rigor with global impact, offering unique opportunities for career advancement 
                and strategic influence.
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">Global Exposure</h4>
                  <p className="text-muted-foreground">Direct involvement in high-level international initiatives and strategic government relationships.</p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="font-semibold text-lg mb-2">Competitive Compensation</h4>
                  <p className="text-muted-foreground">Industry-leading compensation packages reflecting the strategic value and complexity of our engagements.</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">Professional Development</h4>
                  <p className="text-muted-foreground">Continuous learning opportunities through advanced training, executive education, and strategic conferences.</p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="font-semibold text-lg mb-2">Flexible Arrangements</h4>
                  <p className="text-muted-foreground">Flexible work arrangements supporting global collaboration and work-life integration.</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional team collaboration" 
                className="rounded-2xl shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Careers */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Join Our Strategic Team</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Interested in contributing to transformative strategic initiatives? 
            We welcome inquiries from exceptional professionals seeking to advance their careers 
            in high-impact strategic advisory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Submit Application
            </Button>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Career Inquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}