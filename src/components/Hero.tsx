import { Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden font-poppins">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center animate-fade-in">
        <div className="mb-6">
          <span className="inline-block bg-secondary/20 text-white px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-sm mb-4">
            🇮🇳 Explore Incredible India
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-playfair">
          Discover the Magic of
          <span className="block bg-gradient-india bg-clip-text text-transparent">
            Incredible India
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          From majestic heritage sites to serene beaches, embark on an unforgettable journey through India's diverse landscapes
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-saffron hover:shadow-glow font-semibold"
            onClick={() => navigate('/heritage')}
          >
            Explore Heritage
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/90 hover:bg-white text-foreground font-semibold"
            onClick={() => navigate('/contact')}
          >
            Plan Your Trip
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-white">
          <div className="text-center">
            <div className="text-4xl font-bold mb-1 font-playfair">38</div>
            <div className="text-white/80 text-sm">UNESCO Sites</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-1 font-playfair">28</div>
            <div className="text-white/80 text-sm">States</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-1 font-playfair">500+</div>
            <div className="text-white/80 text-sm">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-1 font-playfair">5000</div>
            <div className="text-white/80 text-sm">Years History</div>
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
