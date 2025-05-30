import { FileText, TrendingUp, Globe, Brain, Calendar, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Insights() {
  const reports = [
    {
      title: "Global Technology Sovereignty Report 2024",
      category: "Strategic Analysis",
      date: "December 2024",
      description: "Comprehensive analysis of emerging technology governance frameworks and their implications for national strategic positioning.",
      type: "White Paper"
    },
    {
      title: "Quantum Computing Market Dynamics",
      category: "Technology Assessment",
      date: "November 2024",
      description: "In-depth evaluation of quantum computing commercialization trends and strategic investment opportunities.",
      type: "Research Report"
    },
    {
      title: "Cross-Border Investment in Deep Technology",
      category: "Investment Intelligence",
      date: "October 2024",
      description: "Analysis of international capital flows into frontier technology sectors and emerging regulatory considerations.",
      type: "Market Brief"
    }
  ];

  const blogs = [
    {
      title: "The Future of Sovereign Capability Enhancement",
      author: "OKIMAS Strategic Team",
      date: "January 2025",
      description: "Exploring the intersection of national infrastructure modernization and advanced technology integration.",
      readTime: "8 min read"
    },
    {
      title: "AI Governance in Multi-Stakeholder Environments",
      author: "Technology Advisory Practice",
      date: "December 2024",
      description: "Best practices for implementing ethical AI frameworks across complex organizational ecosystems.",
      readTime: "12 min read"
    },
    {
      title: "Strategic Asset Allocation in Uncertain Markets",
      author: "Investment Strategy Team",
      date: "November 2024",
      description: "Navigating geopolitical volatility through sophisticated portfolio diversification strategies.",
      readTime: "6 min read"
    }
  ];

  const whitepapers = [
    {
      title: "Frontier Technology Maturation: A Strategic Framework",
      focus: "Deep Technology",
      pages: "47 pages",
      description: "Comprehensive methodology for identifying, evaluating, and accelerating breakthrough technologies from research to market readiness.",
      downloadSize: "2.3 MB"
    },
    {
      title: "Geostrategic Risk Assessment in Global Operations",
      focus: "International Strategy",
      pages: "62 pages", 
      description: "Advanced framework for assessing and mitigating complex geopolitical risks in multinational strategic initiatives.",
      downloadSize: "3.1 MB"
    },
    {
      title: "Next-Generation Infrastructure Investment Models",
      focus: "Infrastructure Finance",
      pages: "38 pages",
      description: "Innovative financing structures for large-scale infrastructure modernization and technology integration projects.",
      downloadSize: "1.8 MB"
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
              <span className="text-foreground">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thought leadership and strategic intelligence on transformative technologies, 
              global market dynamics, and sophisticated investment opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card/30 p-8 text-center">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Research Reports</h3>
              <p className="text-muted-foreground">In-depth analysis of emerging technologies and market opportunities</p>
            </Card>
            <Card className="bg-card/30 p-8 text-center">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Strategic Insights</h3>
              <p className="text-muted-foreground">Thought leadership on complex global strategic initiatives</p>
            </Card>
            <Card className="bg-card/30 p-8 text-center">
              <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">White Papers</h3>
              <p className="text-muted-foreground">Comprehensive frameworks for transformative business challenges</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Reports */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Research Reports</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <Card key={index} className="bg-card/30 p-8 hover:bg-card/50 transition-all duration-300">
                <div className="mb-4">
                  <span className="text-sm text-primary font-semibold">{report.category}</span>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    {report.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{report.title}</h3>
                <p className="text-muted-foreground mb-6">{report.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-accent">{report.type}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:text-primary/80"
                    onClick={() => window.open('#', '_blank')}
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Strategic Blog</h2>
          <div className="space-y-8">
            {blogs.map((blog, index) => (
              <Card key={index} className="bg-card/30 p-8 hover:bg-card/50 transition-all duration-300">
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-3">
                    <div className="mb-2">
                      <span className="text-sm text-muted-foreground">{blog.author} • {blog.date} • {blog.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{blog.title}</h3>
                    <p className="text-muted-foreground">{blog.description}</p>
                  </div>
                  <div className="lg:col-span-1 text-right">
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open('#', '_blank')}
                    >
                      Read Article
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* White Papers */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">White Papers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <Card key={index} className="bg-card/30 p-8 hover:bg-card/50 transition-all duration-300">
                <div className="mb-4">
                  <span className="text-sm text-accent font-semibold">{paper.focus}</span>
                  <div className="text-sm text-muted-foreground mt-1">{paper.pages} • {paper.downloadSize}</div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{paper.title}</h3>
                <p className="text-muted-foreground mb-6">{paper.description}</p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Download PDF
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Strategic Intelligence Updates</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Receive exclusive insights on emerging technologies, market dynamics, and strategic opportunities
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Request Intelligence Briefings
          </Button>
        </div>
      </section>
    </div>
  );
}