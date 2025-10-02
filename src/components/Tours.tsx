import { Clock, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const tours = [
  {
    id: 1,
    title: "European Grand Tour",
    duration: "14 Days",
    groupSize: "12-16 people",
    departure: "Every Saturday",
    price: "$3,999",
    features: ["Luxury Hotels", "All Meals", "Expert Guide", "Transportation"],
    badge: "Bestseller",
  },
  {
    id: 2,
    title: "Asian Adventure",
    duration: "10 Days",
    groupSize: "8-12 people",
    departure: "Monthly",
    price: "$2,799",
    features: ["Cultural Tours", "Local Cuisine", "Temples Visit", "City Tours"],
    badge: "Popular",
  },
  {
    id: 3,
    title: "Caribbean Cruise",
    duration: "7 Days",
    groupSize: "50+ people",
    departure: "Weekly",
    price: "$2,299",
    features: ["Cruise Ship", "Island Hopping", "Water Sports", "Entertainment"],
    badge: "New",
  },
];

const Tours = () => {
  return (
    <section id="tours" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-sunset bg-clip-text text-transparent">
            Featured Tours
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carefully curated tour packages for unforgettable journeys
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <Card 
              key={tour.id} 
              className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="bg-gradient-ocean text-white pb-8">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-2xl">{tour.title}</CardTitle>
                  <Badge className="bg-accent text-accent-foreground hover:bg-accent/90">
                    {tour.badge}
                  </Badge>
                </div>
                <div className="text-3xl font-bold">{tour.price}</div>
                <div className="text-white/80 text-sm">per person</div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="w-5 h-5 text-primary" />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>{tour.departure}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-6">
                  <h4 className="font-semibold mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {tour.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="hero" className="w-full">
                  Book This Tour
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
