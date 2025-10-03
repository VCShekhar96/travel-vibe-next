import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Binoculars } from "lucide-react";
import { Button } from "@/components/ui/button";

const wildlifeDestinations = [
  {
    id: 1,
    name: "Jim Corbett National Park",
    location: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80",
    description: "India's oldest national park, famous for Bengal tigers and diverse wildlife in beautiful Himalayan foothills.",
    wildlife: "Bengal Tigers, Elephants, Leopards"
  },
  {
    id: 2,
    name: "Ranthambore National Park",
    location: "Rajasthan",
    image: "https://images.unsplash.com/photo-1612544386345-6894e8d4f0d7?w=800&q=80",
    description: "Historic park with ancient fort ruins, offering excellent tiger sighting opportunities.",
    wildlife: "Bengal Tigers, Sloth Bears, Crocodiles"
  },
  {
    id: 3,
    name: "Kaziranga National Park",
    location: "Assam",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80",
    description: "UNESCO World Heritage Site, home to two-thirds of the world's great one-horned rhinoceros.",
    wildlife: "One-horned Rhino, Tigers, Wild Buffalo"
  },
  {
    id: 4,
    name: "Gir National Park",
    location: "Gujarat",
    image: "https://images.unsplash.com/photo-1543467675-e446894b49cc?w=800&q=80",
    description: "The only natural habitat of the Asiatic Lion in the world.",
    wildlife: "Asiatic Lions, Leopards, Deer"
  },
  {
    id: 5,
    name: "Periyar Wildlife Sanctuary",
    location: "Kerala",
    image: "https://images.unsplash.com/photo-1508196622903-befbdfe0c134?w=800&q=80",
    description: "Scenic sanctuary with picturesque lake, known for elephant herds and boat safaris.",
    wildlife: "Elephants, Tigers, Sambar Deer"
  },
  {
    id: 6,
    name: "Sundarbans National Park",
    location: "West Bengal",
    image: "https://images.unsplash.com/photo-1623607249498-b5c5faa3c2c6?w=800&q=80",
    description: "World's largest mangrove forest, home to the famous Royal Bengal Tigers.",
    wildlife: "Bengal Tigers, Crocodiles, Dolphins"
  }
];

const Wildlife = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1920&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4">Wildlife Sanctuaries</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Experience India's Incredible Biodiversity and Exotic Wildlife
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 bg-gradient-green bg-clip-text text-transparent">
                Wild Adventures
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Encounter majestic creatures in their natural habitats across India's protected reserves
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wildlifeDestinations.map((destination, index) => (
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
                      <Binoculars className="w-8 h-8 text-primary drop-shadow-lg" />
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
                      <p className="text-xs text-foreground font-medium">{destination.wildlife}</p>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      Plan Safari
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

export default Wildlife;
