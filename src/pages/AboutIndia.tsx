import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Users, Landmark, Globe } from "lucide-react";

const AboutIndia = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4">About India</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              A Land of Rich Heritage, Diverse Culture, and Timeless Beauty
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold font-playfair mb-6 bg-gradient-heritage bg-clip-text text-transparent">
                Welcome to Incredible India
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                India, officially the Republic of India, is a country in South Asia that stands as the world's largest democracy and the seventh-largest country by land area. With a civilization dating back thousands of years, India offers an unparalleled tapestry of experiences, from the snow-capped Himalayas in the north to the tropical beaches of the south.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Known for its incredible diversity, India is home to 28 states and 8 union territories, each with its own unique culture, language, cuisine, and traditions. The country boasts 38 UNESCO World Heritage Sites, showcasing its rich historical and architectural legacy.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-card p-8 rounded-2xl shadow-soft text-center hover:shadow-medium transition-all hover:scale-105">
                <Globe className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-3xl font-bold font-playfair mb-2">38</h3>
                <p className="text-muted-foreground">UNESCO Sites</p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-soft text-center hover:shadow-medium transition-all hover:scale-105">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold font-playfair mb-2">1.4B+</h3>
                <p className="text-muted-foreground">Population</p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-soft text-center hover:shadow-medium transition-all hover:scale-105">
                <Landmark className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-3xl font-bold font-playfair mb-2">28</h3>
                <p className="text-muted-foreground">States</p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-soft text-center hover:shadow-medium transition-all hover:scale-105">
                <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-3xl font-bold font-playfair mb-2">500+</h3>
                <p className="text-muted-foreground">Destinations</p>
              </div>
            </div>

            {/* Cultural Diversity */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold font-playfair mb-4 text-secondary">Cultural Diversity</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  India is a vibrant mosaic of cultures, religions, and traditions. Home to Hinduism, Buddhism, Jainism, and Sikhism, India has been a spiritual beacon for millennia. The country celebrates numerous festivals throughout the year, including Diwali, Holi, Eid, Christmas, and many regional celebrations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With over 22 officially recognized languages and hundreds of dialects, India's linguistic diversity is unmatched. Each region offers its own unique art forms, music, dance, and culinary traditions, making every journey through India a new adventure.
                </p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <img 
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80" 
                  alt="Indian cultural diversity"
                  className="rounded-2xl shadow-medium w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Geography & Nature */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="order-2 md:order-1 animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1532664189809-02133fee698d?w=800&q=80" 
                  alt="Indian landscapes"
                  className="rounded-2xl shadow-medium w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <h3 className="text-3xl font-bold font-playfair mb-4 text-primary">Natural Wonders</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  India's geography is as diverse as its culture. From the towering peaks of the Himalayas to the sun-kissed beaches of Goa and Kerala, from the Thar Desert in Rajasthan to the lush tea gardens of Darjeeling, India's landscapes are breathtaking in their variety.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The country is blessed with rich biodiversity, home to Bengal tigers, Asian elephants, Indian rhinoceros, and countless other species. India's national parks and wildlife sanctuaries offer unforgettable safari experiences and opportunities to connect with nature.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutIndia;
