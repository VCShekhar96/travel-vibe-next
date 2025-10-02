import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

const hillStations = [
  {
    id: 1,
    name: "Shimla",
    location: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    description: "The Queen of Hills, famous for colonial architecture, toy train, and panoramic Himalayan views.",
    altitude: "2,276 m",
    bestTime: "Mar-Jun, Sep-Dec"
  },
  {
    id: 2,
    name: "Manali",
    location: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
    description: "Adventure capital offering skiing, trekking, and breathtaking mountain landscapes year-round.",
    altitude: "2,050 m",
    bestTime: "Oct-Feb, Mar-Jun"
  },
  {
    id: 3,
    name: "Darjeeling",
    location: "West Bengal",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    description: "Famous for tea plantations, toy train, and stunning views of Kanchenjunga peak.",
    altitude: "2,042 m",
    bestTime: "Apr-Jun, Sep-Nov"
  },
  {
    id: 4,
    name: "Ooty",
    location: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
    description: "The Nilgiri Queen with botanical gardens, lakes, and pleasant weather throughout the year.",
    altitude: "2,240 m",
    bestTime: "Oct-Mar"
  },
  {
    id: 5,
    name: "Munnar",
    location: "Kerala",
    image: "https://images.unsplash.com/photo-1586276019676-454c7f0d29fa?w=800&q=80",
    description: "Scenic hill station with sprawling tea estates, misty mountains, and diverse wildlife.",
    altitude: "1,600 m",
    bestTime: "Sep-Mar"
  },
  {
    id: 6,
    name: "Nainital",
    location: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    description: "Picturesque lake town surrounded by mountains, perfect for boating and nature walks.",
    altitude: "2,084 m",
    bestTime: "Mar-Jun, Sep-Nov"
  }
];

const HillStations = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4">Hill Stations</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Escape to the Serene Heights of India's Mountain Retreats
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-primary">
                Mountain Paradise
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the tranquility of misty mountains, lush valleys, and cool climate
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hillStations.map((destination, index) => (
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
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Mountain className="w-4 h-4" />
                      {destination.altitude}
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
                      <p className="text-xs text-foreground"><span className="font-semibold">Best Time:</span> {destination.bestTime}</p>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      Explore Station
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

export default HillStations;
