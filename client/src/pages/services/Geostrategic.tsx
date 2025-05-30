import { Flag, Building, Shield, Cog, Leaf, GraduationCap, Eye, Compass, Network, Users, Globe, Handshake } from "lucide-react";

export default function Geostrategic() {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541872705-1f73c6400ec9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=1000')"
          }}
        />
        <div className="absolute inset-0 gradient-overlay" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-gradient">Geostrategic</span><br />
              <span className="text-foreground">Engagement</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              High-level diplomatic facilitation and apex global network cultivation for 
              complex international strategic initiatives and cross-border collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Diplomatic & Strategic Networks</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Facilitating complex multi-national initiatives through sophisticated diplomatic channels 
              and strategic relationship cultivation at the highest levels of global leadership
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="International diplomatic engagement" 
                className="rounded-2xl shadow-2xl" 
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Elite Network Orchestration</h3>
              <p className="text-lg text-muted-foreground mb-8">
                OKIMAS maintains privileged access to senior governmental echelons, international 
                organization leadership, and strategic decision-makers across multiple continents, 
                enabling sophisticated cross-border collaboration and strategic initiative facilitation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Users className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold">Senior Government Relations</h4>
                    <p className="text-muted-foreground text-sm">Direct access to ministerial and cabinet-level decision makers across key economies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="text-accent text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold">International Organization Leadership</h4>
                    <p className="text-muted-foreground text-sm">Strategic relationships with multilateral institutions and global governance bodies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Handshake className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold">Cross-Cultural Facilitation</h4>
                    <p className="text-muted-foreground text-sm">Nuanced understanding of cultural dynamics and geopolitical sensitivities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card/30 rounded-2xl p-12 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Strategic Engagement Categories</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Flag className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Bilateral Relations</h4>
                <p className="text-muted-foreground">Strategic facilitation of government-to-government cooperation and technology transfer agreements</p>
              </div>
              <div className="text-center">
                <Building className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Trade & Investment</h4>
                <p className="text-muted-foreground">Cross-border investment facilitation and international trade relationship development</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Security Cooperation</h4>
                <p className="text-muted-foreground">Strategic security partnerships and defense technology collaboration frameworks</p>
              </div>
              <div className="text-center">
                <Cog className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Technology Diplomacy</h4>
                <p className="text-muted-foreground">International coordination on emerging technology governance and standards development</p>
              </div>
              <div className="text-center">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Sustainable Development</h4>
                <p className="text-muted-foreground">Multilateral initiatives for climate, energy, and sustainable development cooperation</p>
              </div>
              <div className="text-center">
                <GraduationCap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-3">Knowledge Exchange</h4>
                <p className="text-muted-foreground">Academic and research collaboration facilitation between international institutions</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/30 p-8 rounded-xl">
              <Eye className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Discreet Facilitation</h3>
              <p className="text-muted-foreground">Confidential coordination of sensitive international negotiations and strategic dialogue facilitation.</p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl">
              <Compass className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-xl font-semibold mb-4">Strategic Navigation</h3>
              <p className="text-muted-foreground">Expert guidance through complex geopolitical landscapes and multi-stakeholder decision environments.</p>
            </div>
            <div className="bg-card/30 p-8 rounded-xl">
              <Network className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Network Cultivation</h3>
              <p className="text-muted-foreground">Systematic development and maintenance of strategic relationships across governmental and international spheres.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
