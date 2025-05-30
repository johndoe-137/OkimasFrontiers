import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Insights from "@/pages/Insights";
import Industries from "@/pages/Industries";
import Careers from "@/pages/Careers";
import SovereignCapability from "@/pages/services/SovereignCapability";
import FrontierScientific from "@/pages/services/FrontierScientific";
import AIConsulting from "@/pages/services/AIConsulting";
import VentureCapital from "@/pages/services/VentureCapital";
import MAStrategic from "@/pages/services/MAStrategic";
import AssetsBrokerage from "@/pages/services/AssetsBrokerage";
import Geostrategic from "@/pages/services/Geostrategic";
import Philosophy from "@/pages/services/Philosophy";
import ManagementConsulting from "@/pages/services/ManagementConsulting";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/insights" component={Insights} />
          <Route path="/industries" component={Industries} />
          <Route path="/careers" component={Careers} />
          <Route path="/contact" component={Contact} />
          <Route path="/services/sovereign-capability" component={SovereignCapability} />
          <Route path="/services/frontier-scientific" component={FrontierScientific} />
          <Route path="/services/ai-consulting" component={AIConsulting} />
          <Route path="/services/venture-capital" component={VentureCapital} />
          <Route path="/services/ma-strategic" component={MAStrategic} />
          <Route path="/services/assets-brokerage" component={AssetsBrokerage} />
          <Route path="/services/geostrategic" component={Geostrategic} />
          <Route path="/services/philosophy" component={Philosophy} />
          <Route path="/services/management-consulting" component={ManagementConsulting} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
