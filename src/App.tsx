import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutIndia from "./pages/AboutIndia";
import Heritage from "./pages/Heritage";
import Beaches from "./pages/Beaches";
import HillStations from "./pages/HillStations";
import Spiritual from "./pages/Spiritual";
import Wildlife from "./pages/Wildlife";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TajMahal from "./pages/destinations/TajMahal";
import GoldenTemple from "./pages/destinations/GoldenTemple";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutIndia />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/beaches" element={<Beaches />} />
          <Route path="/hill-stations" element={<HillStations />} />
          <Route path="/spiritual" element={<Spiritual />} />
          <Route path="/wildlife" element={<Wildlife />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destinations/taj-mahal" element={<TajMahal />} />
          <Route path="/destinations/golden-temple" element={<GoldenTemple />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
