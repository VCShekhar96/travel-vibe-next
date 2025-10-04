import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TirupatiBalaji = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1920&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4">Tirupati Balaji</h1>
            <p className="text-xl md:text-2xl">Abode of Lord Venkateswara</p>
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
                  <p className="text-sm text-muted-foreground">Tirupati, Andhra Pradesh</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold">Temple Hours</p>
                  <p className="text-sm text-muted-foreground">2:30 AM - 1:00 AM (Next Day)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold">Best Time</p>
                  <p className="text-sm text-muted-foreground">September to February</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold font-playfair mb-6 text-foreground">The Richest Temple in the World</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Tirupati Balaji Temple, officially known as Sri Venkateswara Swamy Vaari Temple, is one of the most visited and richest religious sites in the world. Perched atop the seven hills of Tirumala, at an elevation of 853 meters, this ancient temple dedicated to Lord Venkateswara (an incarnation of Lord Vishnu) attracts over 50,000 pilgrims daily and up to 100,000 during festivals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <img 
                  src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80" 
                  alt="Tirupati temple gopuram"
                  className="rounded-lg shadow-medium w-full h-64 object-cover hover-lift"
                />
                <img 
                  src="https://images.unsplash.com/photo-1582632909276-e8f71a0ac558?w=800&q=80" 
                  alt="Temple architecture details"
                  className="rounded-lg shadow-medium w-full h-64 object-cover hover-lift"
                />
              </div>

              <h3 className="text-3xl font-bold font-playfair mb-4 mt-12 text-foreground">Divine History and Legend</h3>
              <p className="text-muted-foreground mb-6">
                According to Hindu mythology, Lord Venkateswara took residence on the Venkata hill after a quarrel with Goddess Lakshmi, his divine consort. The legend tells that Lord Vishnu descended to earth in the form of Venkateswara to save humanity from the trials of Kali Yuga. He borrowed money from Kubera, the god of wealth, to pay for his wedding expenses, and devotees continue to donate to help the Lord repay this debt.
              </p>

              <p className="text-muted-foreground mb-6">
                The temple's history dates back over 2,000 years, with references found in ancient Tamil and Sanskrit texts. The temple complex has been mentioned in various religious scriptures, including the Vedas and Puranas. Over the centuries, numerous dynasties including the Pallavas, Cholas, and Vijayanagara rulers have contributed to the temple's expansion and embellishment, adding to its architectural grandeur.
              </p>

              <p className="text-muted-foreground mb-6">
                The name "Tirupati" literally means "the abode of Lakshmi," and the seven hills of Tirumala are believed to represent the seven hoods of Adisesha, the serpent on which Lord Vishnu reclines. Each hill has its own significance in Hindu mythology, and pilgrims often trek through all seven hills as an act of devotion.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <img 
                  src="https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80" 
                  alt="Pilgrims at Tirupati"
                  className="rounded-lg shadow-medium w-full h-64 object-cover hover-lift"
                />
                <img 
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80" 
                  alt="Evening prayers at temple"
                  className="rounded-lg shadow-medium w-full h-64 object-cover hover-lift"
                />
              </div>

              <h3 className="text-3xl font-bold font-playfair mb-4 mt-12 text-foreground">Architectural Marvel</h3>
              <p className="text-muted-foreground mb-6">
                The temple showcases magnificent Dravidian architecture with its towering gopurams (temple towers), intricate carvings, and golden vimana (dome) over the sanctum sanctorum. The main temple complex is built in a unique blend of Dravidian and Vijayanagara architectural styles, reflecting the various dynasties that patronized it over the centuries.
              </p>

              <p className="text-muted-foreground mb-6">
                The most striking feature is the Ananda Nilayam Vimana, a three-tiered gopuram covered with gold plates, which crowns the main sanctum. The sanctum houses the magnificent idol of Lord Venkateswara, standing 8 feet tall, adorned with precious jewels and gold ornaments. The idol is believed to be self-manifested (Swayambhu) and possesses divine magnetic properties.
              </p>

              <h3 className="text-3xl font-bold font-playfair mb-4 mt-12 text-foreground">Sacred Traditions and Rituals</h3>
              <p className="text-muted-foreground mb-6">
                The temple follows ancient traditions with strict adherence to Vaikhanasa Agama rules. The daily rituals begin with Suprabhatam (morning awakening) at 3:00 AM and continue throughout the day with various sevas (services). The most popular ritual is the Abhishekam, where the deity is bathed with sacred substances including milk, honey, and fragrant oils.
              </p>

              <p className="text-muted-foreground mb-6">
                One of the most unique traditions is the hair tonsuring ceremony, where devotees offer their hair to the deity as a symbol of surrendering their ego. This practice is so widespread that the temple's hundi (donation box) receives offerings worth crores of rupees, including cash, gold, and precious jewels, making it the richest temple in India.
              </p>

              <p className="text-muted-foreground mb-6">
                The temple is famous for its prasadam (blessed food), particularly the Tirupati Laddu, which has been granted a Geographical Indication tag. These laddus are prepared using a secret recipe and are distributed to millions of devotees annually. The preparation and distribution of prasadam is a massive operation involving hundreds of workers.
              </p>

              <h3 className="text-3xl font-bold font-playfair mb-4 mt-12 text-foreground">Pilgrimage Experience</h3>
              <p className="text-muted-foreground mb-6">
                Pilgrims can reach the temple either by trekking the ancient path of approximately 2,100 steps through dense forests or by road. The trek, taking 3-4 hours, is considered a spiritual journey where devotees chant "Om Namo Venkatesaya" with each step. The ghat road offers breathtaking views of the surrounding hills and valleys.
              </p>

              <p className="text-muted-foreground mb-6">
                The Tirumala Tirupati Devasthanams (TTD), which administers the temple, has implemented sophisticated queue management systems to handle the massive influx of pilgrims. Special entry tickets can be booked online, and there are different darshan options ranging from free general darshan to special paid sevas. Despite the crowds, the experience of having darshan of Lord Venkateswara is profoundly moving and spiritually uplifting for millions of devotees.
              </p>

              <p className="text-muted-foreground mb-6">
                The temple town also houses several other important shrines including the Padmavathi Temple, dedicated to the consort of Lord Venkateswara, and numerous other temples spread across the seven hills. The entire Tirumala hill complex is considered highly sacred, and strict rules regarding conduct and dress code are enforced to maintain the sanctity of this holy site.
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
                      Darshan Timings
                    </h4>
                    <p className="text-muted-foreground">Suprabhatam Seva: 2:30 AM - 3:30 AM</p>
                    <p className="text-muted-foreground">General Darshan: 4:00 AM - 1:00 AM (Next Day)</p>
                    <p className="text-muted-foreground">Special Entry: Book online at ttdsevaonline.com</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      How to Reach
                    </h4>
                    <p className="text-muted-foreground"><strong>By Air:</strong> Tirupati Airport (15 km from Tirupati town)</p>
                    <p className="text-muted-foreground"><strong>By Train:</strong> Tirupati Railway Station</p>
                    <p className="text-muted-foreground"><strong>By Road:</strong> State buses and taxis from Tirupati town</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary" />
                      Contact Information
                    </h4>
                    <p className="text-muted-foreground">TTD Information: +91-877-2277777</p>
                    <p className="text-muted-foreground">Online Booking: ttdsevaonline.com</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button variant="default" size="lg" className="flex-1">
                      Book Darshan Online
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

export default TirupatiBalaji;
