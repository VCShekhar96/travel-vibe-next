import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Landmark, Waves, Mountain, Sparkles, Binoculars, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const categories = [
    { icon: Landmark, title: "Heritage Sites", path: "/heritage", color: "text-secondary" },
    { icon: Waves, title: "Beaches", path: "/beaches", color: "text-accent" },
    { icon: Mountain, title: "Hill Stations", path: "/hill-stations", color: "text-primary" },
    { icon: Sparkles, title: "Spiritual Places", path: "/spiritual", color: "text-secondary" },
    { icon: Binoculars, title: "Wildlife", path: "/wildlife", color: "text-primary" },
    { icon: Camera, title: "Gallery", path: "/gallery", color: "text-accent" },
  ];

  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      <Hero />
      
      {/* Categories Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 bg-gradient-heritage bg-clip-text text-transparent">
              Explore by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your adventure across India's magnificent landscapes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={category.title}
                className="group cursor-pointer border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate(category.path)}
              >
                <CardContent className="p-6 text-center">
                  <category.icon className={`w-12 h-12 mx-auto mb-3 ${category.color} group-hover:scale-110 transition-transform`} />
                  <h3 className="font-semibold text-sm">{category.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Destinations />
      
      {/* Why Choose India Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              Why Visit India?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of ancient traditions and modern marvels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold font-playfair mb-3">Rich Heritage</h3>
                <p className="text-muted-foreground">
                  5000 years of civilization with 38 UNESCO World Heritage Sites
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-all">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-xl font-bold font-playfair mb-3">Diverse Culture</h3>
                <p className="text-muted-foreground">
                  28 states, each with unique traditions, festivals, and cuisines
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-all">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">🌄</div>
                <h3 className="text-xl font-bold font-playfair mb-3">Natural Beauty</h3>
                <p className="text-muted-foreground">
                  From Himalayas to beaches, deserts to rainforests
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-saffron hover:shadow-glow font-semibold"
              onClick={() => navigate('/about')}
            >
              Discover More About India
            </Button>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
