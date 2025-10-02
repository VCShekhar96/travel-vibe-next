import { Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-beach.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Discover Your Next
          <span className="block bg-gradient-luxury bg-clip-text text-transparent">
            Dream Destination
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Explore breathtaking locations, create unforgettable memories, and embark on the adventure of a lifetime
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-glow p-4 md:p-6 max-w-3xl mx-auto animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <Input 
                placeholder="Where to?" 
                className="border-0 focus-visible:ring-0 p-0 h-auto"
              />
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
              <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
              <Input 
                placeholder="When?" 
                type="date"
                className="border-0 focus-visible:ring-0 p-0 h-auto"
              />
            </div>
            <Button variant="hero" size="lg" className="w-full">
              <Search className="w-5 h-5" />
              Search
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 text-white">
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">500+</div>
            <div className="text-white/80">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">10K+</div>
            <div className="text-white/80">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">4.9★</div>
            <div className="text-white/80">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
