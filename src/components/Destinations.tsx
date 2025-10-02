import { MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mountainsImg from "@/assets/destination-mountains.jpg";
import cityImg from "@/assets/destination-city.jpg";
import islandImg from "@/assets/destination-island.jpg";
import safariImg from "@/assets/destination-safari.jpg";

const destinations = [
  {
    id: 1,
    name: "Swiss Alps",
    country: "Switzerland",
    image: mountainsImg,
    price: "$2,499",
    rating: 4.9,
    reviews: 342,
  },
  {
    id: 2,
    name: "Historic Rome",
    country: "Italy",
    image: cityImg,
    price: "$1,899",
    rating: 4.8,
    reviews: 521,
  },
  {
    id: 3,
    name: "Maldives Paradise",
    country: "Maldives",
    image: islandImg,
    price: "$3,299",
    rating: 5.0,
    reviews: 289,
  },
  {
    id: 4,
    name: "Safari Adventure",
    country: "Kenya",
    image: safariImg,
    price: "$2,799",
    rating: 4.9,
    reviews: 198,
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">
            Popular Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked destinations that promise extraordinary experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {destination.price}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{destination.country}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-semibold">{destination.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {destination.reviews} reviews
                </p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Explore All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
