import { MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const destinations = [
  {
    id: 1,
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
    category: "Heritage",
    rating: 4.9,
    reviews: 15420,
  },
  {
    id: 2,
    name: "Goa Beaches",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    category: "Beach",
    rating: 4.8,
    reviews: 9876,
  },
  {
    id: 3,
    name: "Shimla Hills",
    location: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    category: "Hill Station",
    rating: 4.7,
    reviews: 7234,
  },
  {
    id: 4,
    name: "Varanasi Ghats",
    location: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80",
    category: "Spiritual",
    rating: 4.9,
    reviews: 11543,
  },
];

const Destinations = () => {
  const navigate = useNavigate();

  return (
    <section id="destinations" className="py-20 px-4 bg-background font-poppins">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 bg-gradient-heritage bg-clip-text text-transparent">
            Featured Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover India's most iconic and beloved tourist attractions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {destination.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold font-playfair mb-1">{destination.name}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{destination.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    <span className="font-semibold">{destination.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {destination.reviews.toLocaleString()} reviews
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-all"
                  onClick={() => {
                    const path = destination.category.toLowerCase().replace(' ', '-');
                    navigate(`/${path === 'beach' ? 'beaches' : path === 'hill-station' ? 'hill-stations' : path}`);
                  }}
                >
                  Explore More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-saffron hover:shadow-glow font-semibold"
            onClick={() => navigate('/gallery')}
          >
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
