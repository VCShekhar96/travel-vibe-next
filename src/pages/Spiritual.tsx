import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const spiritualPlaces = [
  {
    id: 1,
    name: "Varanasi",
    location: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80",
    description: "The spiritual capital of India, one of the oldest living cities where the Ganges flows with divine grace.",
    significance: "Hinduism, Buddhism, Jainism"
  },
  {
    id: 2,
    name: "Golden Temple",
    location: "Amritsar, Punjab",
    image: "https://images.unsplash.com/photo-1580066248338-2eb6c3c93044?w=800&q=80",
    description: "The holiest Sikh shrine, covered in gold, welcoming all faiths with free community meals.",
    significance: "Sikhism"
  },
  {
    id: 3,
    name: "Tirupati Balaji",
    location: "Andhra Pradesh",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    description: "One of the richest and most visited pilgrimage sites, dedicated to Lord Venkateswara.",
    significance: "Hinduism"
  },
  {
    id: 4,
    name: "Rishikesh",
    location: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    description: "Yoga capital of the world, nestled in the Himalayas along the holy Ganges river.",
    significance: "Yoga, Meditation, Hinduism"
  },
  {
    id: 5,
    name: "Bodh Gaya",
    location: "Bihar",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80",
    description: "The place where Buddha attained enlightenment under the Bodhi Tree.",
    significance: "Buddhism"
  },
  {
    id: 6,
    name: "Meenakshi Temple",
    location: "Madurai, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    description: "Ancient temple with towering gopurams, dedicated to Goddess Meenakshi and Lord Shiva.",
    significance: "Hinduism"
  }
];

const Spiritual = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1920&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4">Spiritual Places</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Journey to India's Sacred Sites of Divine Peace
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 bg-gradient-saffron bg-clip-text text-transparent">
                Sacred Sanctuaries
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover inner peace at India's most revered spiritual destinations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spiritualPlaces.map((destination, index) => (
                <Card 
                  key={destination.id}
                  className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Sparkles className="w-8 h-8 text-secondary drop-shadow-lg" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold font-playfair mb-2">{destination.name}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{destination.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {destination.description}
                    </p>
                    <div className="bg-muted rounded-lg p-3 mb-4">
                      <p className="text-xs text-foreground font-medium">{destination.significance}</p>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Spiritual;
