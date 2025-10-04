import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Varanasi = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1920&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4">Varanasi</h1>
            <p className="text-xl md:text-2xl">The Eternal City of Light</p>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-8 bg-card border-y">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-muted-foreground">Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold">Best Time to Visit</p>
                  <p className="text-sm text-muted-foreground">October to March</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold">Ghats Open</p>
                  <p className="text-sm text-muted-foreground">24 Hours Daily</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold font-playfair mb-6 text-foreground">The Spiritual Capital of India</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Varanasi, also known as Kashi or Benares, is one of the oldest continuously inhabited cities in the world, with a history spanning over 3,000 years. Situated on the banks of the sacred Ganges River, this ancient city is the spiritual heart of India and one of the most revered pilgrimage destinations for Hindus, Buddhists, and Jains alike.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <img 
                  src="https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&q=80" 
                  alt="Varanasi Ghats at sunrise"
                  className="rounded-lg shadow-medium w-full h-64 object-cover hover-lift"
                />
                <img 
                  src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80" 
                  alt="Evening Ganga Aarti ceremony"
                  className="rounded-lg shadow-medium w-full h-64 object-cover hover-lift"
                />
              </div>

              <h3 className="text-3xl font-bold font-playfair mb-4 mt-12 text-foreground">The Sacred Ghats</h3>
              <p className="text-muted-foreground mb-6">
                Varanasi is renowned for its magnificent ghats—stone steps leading down to the Ganges River. There are approximately 88 ghats stretching along the crescent-shaped riverbank, each with its own unique history and significance. The ghats are the lifeblood of Varanasi, where pilgrims perform sacred rituals, cremate their dead, and seek spiritual purification in the holy waters of the Ganges.
              </p>

              <p className="text-muted-foreground mb-6">
                Dashashwamedh Ghat is the most famous and spiritually significant ghat, where the spectacular Ganga Aarti ceremony takes place every evening. This mesmerizing ritual involves priests performing synchronized movements with fire lamps while chanting ancient Vedic hymns, creating an unforgettable spiritual experience. Thousands of devotees and tourists gather daily to witness this magnificent ceremony that has been performed for centuries.
              </p>

              <p className="text-muted-foreground mb-6">
                Manikarnika Ghat, known as the great cremation ground, is believed to be where Lord Shiva stood when he created the universe. Hindus believe that dying in Varanasi and being cremated at this ghat liberates the soul from the cycle of rebirth, granting moksha (salvation). The cremation fires here have been burning continuously for thousands of years, making it one of the most sacred sites in Hinduism.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <img 
                  src="https://images.unsplash.com/photo-1606125098618-c29a03c4c309?w=800&q=80" 
                  alt="Boat ride on the Ganges"
                  className="rounded-lg shadow-medium w-full h-64 object-cover hover-lift"
                />
                <img 
                  src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80" 
                  alt="Ancient temple architecture"
                  className="rounded-lg shadow-medium w-full h-64 object-cover hover-lift"
                />
              </div>

              <h3 className="text-3xl font-bold font-playfair mb-4 mt-12 text-foreground">Temples and Spiritual Heritage</h3>
              <p className="text-muted-foreground mb-6">
                Varanasi is home to over 2,000 temples, earning it the name "City of Temples." The Kashi Vishwanath Temple, dedicated to Lord Shiva, is the most sacred temple in the city and one of the twelve Jyotirlingas. The temple's golden spire and dome are iconic landmarks of Varanasi's skyline. Pilgrims believe that a visit to this temple can wash away sins and grant spiritual liberation.
              </p>

              <p className="text-muted-foreground mb-6">
                The narrow lanes, or galis, of Varanasi form a labyrinth of ancient architecture, small shrines, and vibrant markets. These winding alleys have remained largely unchanged for centuries, preserving the authentic medieval character of the city. Walking through these lanes is like stepping back in time, where traditional silk weaving, brass work, and spiritual practices continue as they have for generations.
              </p>

              <h3 className="text-3xl font-bold font-playfair mb-4 mt-12 text-foreground">Cultural Significance</h3>
              <p className="text-muted-foreground mb-6">
                Varanasi has been a center of learning and culture for thousands of years. The city has produced numerous saints, poets, philosophers, and musicians who have shaped Indian spirituality and arts. The legendary Buddha gave his first sermon at nearby Sarnath after attaining enlightenment, establishing one of the four most important Buddhist pilgrimage sites.
              </p>

              <p className="text-muted-foreground mb-6">
                The city is also famous for its classical music tradition, particularly the Benares Gharana of Hindustani classical music. Many legendary musicians and vocalists have emerged from Varanasi, contributing significantly to Indian classical arts. The city continues to be a hub for traditional performing arts, with regular concerts and cultural events.
              </p>

              <p className="text-muted-foreground mb-6">
                Varanasi's famous Banarasi silk sarees are world-renowned for their intricate designs and superior quality. The art of weaving these exquisite sarees has been passed down through generations, with weavers creating masterpieces that take months to complete. The city's markets are filled with these beautiful textiles, along with brass artifacts, wooden toys, and religious items.
              </p>

              <h3 className="text-3xl font-bold font-playfair mb-4 mt-12 text-foreground">Experiencing Varanasi</h3>
              <p className="text-muted-foreground mb-6">
                A sunrise boat ride on the Ganges is an essential Varanasi experience. As the first rays of sunlight illuminate the ancient ghats and temples, pilgrims perform their morning rituals, and the city slowly awakens to another day of spiritual devotion. The sight of the sun rising over the sacred river, with the silhouettes of temples and the sounds of morning prayers, creates a profound and moving experience.
              </p>

              <p className="text-muted-foreground mb-6">
                The city's street food is legendary, offering delicious treats like kachori-sabzi, chaat, lassi, and the famous Banarasi paan. The food culture reflects the city's diversity and ancient culinary traditions, with recipes passed down through countless generations. Evening walks along the ghats, attending the Ganga Aarti, and exploring the ancient temples provide an immersive spiritual and cultural experience.
              </p>
            </div>

            {/* Booking Section */}
            <Card className="mt-12 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold font-playfair mb-6 text-foreground">Plan Your Visit</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Visiting Hours
                    </h4>
                    <p className="text-muted-foreground">Ghats: Open 24 hours</p>
                    <p className="text-muted-foreground">Temples: 4:00 AM - 11:00 PM (varies by temple)</p>
                    <p className="text-muted-foreground">Ganga Aarti: 6:00 PM daily at Dashashwamedh Ghat</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      How to Reach
                    </h4>
                    <p className="text-muted-foreground"><strong>By Air:</strong> Lal Bahadur Shastri Airport (25 km from city center)</p>
                    <p className="text-muted-foreground"><strong>By Train:</strong> Varanasi Junction and Mughalsarai Junction</p>
                    <p className="text-muted-foreground"><strong>By Road:</strong> Well-connected by national highways</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary" />
                      Contact Information
                    </h4>
                    <p className="text-muted-foreground">Tourist Information: +91-542-2506688</p>
                    <p className="text-muted-foreground">UP Tourism Office: +91-542-2208916</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button variant="default" size="lg" className="flex-1">
                      Book Hotel
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Inquiry
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Varanasi;
