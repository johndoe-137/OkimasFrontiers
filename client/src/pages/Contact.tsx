import ContactForm from "@/components/ContactForm";
import { Eye, Clock, Globe, CheckCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-muted min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-gradient">Initiate Strategic</span><br />
              <span className="text-foreground">Engagement</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Begin a confidential dialogue about transformative strategic initiatives 
              and paradigm-shifting opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Strategic Inquiry</h2>
              <p className="text-lg text-muted-foreground mb-8">
                OKIMAS engages with visionary leaders, sovereign entities, and transformative organizations 
                seeking to realize strategic initiatives of exceptional scope and complexity.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <Eye className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Confidential Consultation</h4>
                    <p className="text-muted-foreground">All strategic inquiries are handled with the highest levels of discretion and confidentiality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-accent text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Rapid Response</h4>
                    <p className="text-muted-foreground">Priority engagement within 48 hours for qualified strategic initiatives</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Global Coordination</h4>
                    <p className="text-muted-foreground">Seamless coordination across time zones and jurisdictions for international initiatives</p>
                  </div>
                </div>
              </div>

              <div className="bg-card/30 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-primary">Strategic Engagement Criteria</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-accent text-sm mt-1 flex-shrink-0" />
                    <span>Transformative technology or market opportunities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-accent text-sm mt-1 flex-shrink-0" />
                    <span>Multi-stakeholder coordination requirements</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-accent text-sm mt-1 flex-shrink-0" />
                    <span>Cross-border or sovereign-level implications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-accent text-sm mt-1 flex-shrink-0" />
                    <span>Strategic capital or investment facilitation needs</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
