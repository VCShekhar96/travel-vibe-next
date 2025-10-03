import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

const beachDestinations = [
  {
    id: 1,
    name: "Goa Beaches",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    description: "Famous for golden sands, vibrant nightlife, and Portuguese heritage. Perfect blend of relaxation and adventure.",
    features: "Water Sports, Nightlife, Seafood"
  },
  {
    id: 2,
    name: "Radhanagar Beach",
    location: "Andaman & Nicobar",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    description: "Pristine white sand beach with crystal-clear turquoise waters, ranked among Asia's best beaches.",
    features: "Snorkeling, Diving, Sunset Views"
  },
  {
    id: 3,
    name: "Varkala Beach",
    location: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    description: "Stunning cliff beach with natural springs, offering a unique combination of spirituality and seaside beauty.",
    features: "Cliff Views, Ayurveda, Yoga"
  },
  {
    id: 4,
    name: "Marina Beach",
    location: "Chennai, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&q=80",
    description: "One of the longest urban beaches in the world, perfect for morning walks and evening strolls.",
    features: "Urban Beach, Local Cuisine"
  },
  {
    id: 5,
    name: "Palolem Beach",
    location: "South Goa",
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&q=80",
    description: "Crescent-shaped beach known for its calm waters, swaying palms, and relaxed atmosphere.",
    features: "Kayaking, Dolphin Watching"
  },
  {
    id: 6,
    name: "Kovalam Beach",
    location: "Kerala",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80",
    description: "Iconic crescent beach with lighthouse, known for its shallow waters and Ayurvedic treatments.",
    features: "Lighthouse, Surfing, Spa"
  }
];

const Beaches = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4">Indian Beaches</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Discover Paradise Along India's Stunning Coastlines
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-accent">
                Sun, Sand & Serenity
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From the Arabian Sea to the Bay of Bengal, explore India's most beautiful beaches
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beachDestinations.map((destination, index) => (
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
                      <Waves className="w-8 h-8 text-white drop-shadow-lg" />
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
                      <p className="text-xs text-foreground font-medium">{destination.features}</p>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                      Explore Beach
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

export default Beaches;
