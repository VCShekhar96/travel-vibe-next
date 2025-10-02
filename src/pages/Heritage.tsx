import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const heritageDestinations = [
  {
    id: 1,
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
    description: "An ivory-white marble mausoleum, one of the Seven Wonders of the World, built by Mughal Emperor Shah Jahan.",
    builtIn: "1648"
  },
  {
    id: 2,
    name: "Red Fort",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&q=80",
    description: "Historic fortification and UNESCO World Heritage Site, showcasing Mughal architecture at its finest.",
    builtIn: "1648"
  },
  {
    id: 3,
    name: "Hampi",
    location: "Karnataka",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
    description: "Ancient village with magnificent ruins of the Vijayanagara Empire, a UNESCO World Heritage Site.",
    builtIn: "14th Century"
  },
  {
    id: 4,
    name: "Ajanta Caves",
    location: "Maharashtra",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    description: "Rock-cut Buddhist cave monuments featuring ancient paintings and sculptures dating back to 2nd century BCE.",
    builtIn: "2nd Century BCE"
  },
  {
    id: 5,
    name: "Qutub Minar",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    description: "73-meter tall victory tower with intricate carvings, representing the beginning of Muslim rule in India.",
    builtIn: "1193"
  },
  {
    id: 6,
    name: "Konark Sun Temple",
    location: "Odisha",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    description: "13th-century Sun Temple designed as a colossal chariot with elaborate stone carvings.",
    builtIn: "1250"
  },
  {
    id: 7,
    name: "Hawa Mahal",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
    description: "The Palace of Winds, featuring 953 small windows decorated with intricate latticework.",
    builtIn: "1799"
  },
  {
    id: 8,
    name: "Mysore Palace",
    location: "Karnataka",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80",
    description: "Grand historical palace with Indo-Saracenic architecture, illuminated by thousands of lights.",
    builtIn: "1912"
  }
];

const Heritage = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1920&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4">Heritage Sites</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Explore India's Magnificent Historical Monuments
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 bg-gradient-heritage bg-clip-text text-transparent">
                Timeless Monuments
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Journey through centuries of architectural brilliance and cultural heritage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {heritageDestinations.map((destination, index) => (
                <Card 
                  key={destination.id}
                  className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 text-sm mb-2">
                        <Clock className="w-4 h-4" />
                        <span>Built in {destination.builtIn}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold font-playfair mb-2">{destination.name}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{destination.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {destination.description}
                    </p>
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

export default Heritage;
