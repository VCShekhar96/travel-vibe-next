import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Rishikesh = () => {
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
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4">Rishikesh</h1>
            <p className="text-xl md:text-2xl">Yoga Capital of the World</p>
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
                  <p className="text-sm text-muted-foreground">Uttarakhand, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold">Best Time</p>
                  <p className="text-sm text-muted-foreground">February to May, September to November</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold">International Yoga Festival</p>
                  <p className="text-sm text-muted-foreground">March (Annual)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-bold font-playfair mb-6 text-foreground">The Gateway to the Himalayas</h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Rishikesh, nestled in the foothills of the Himalayas along the holy Ganges River, has evolved into the world's premier destination for yoga, meditation, and spiritual seekers. This ancient city, mentioned in Hindu scriptures and epic tales, draws visitors from around the globe seeking spiritual enlightenment, adventure, and inner peace. The city's name literally means "Lord of the Senses," and it has been a center for spiritual learning and yoga practice for thousands of years.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <img 
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80" 
                  alt="Lakshman Jhula bridge"
                  className="rounded-lg shadow-medium w-full h-64 object-cover hover-lift"
                />
                <img 
                  src="https://images.unsplash.com/photo-1571498664957-fde285d79857?w=800&q=80" 
                  alt="Yoga by the Ganges"
                  className="rounded-lg shadow-medium w-full h-64 object-cover hover-lift"
                />
              </div>

              <h3 className="text-3xl font-bold font-playfair mb-4 mt-12 text-foreground">Spiritual Heritage and Ashram Life</h3>
              <p className="text-muted-foreground mb-6">
                Rishikesh is home to hundreds of ashrams, ranging from traditional institutions following ancient practices to modern centers offering comprehensive yoga teacher training programs. The city gained international fame in 1968 when The Beatles visited Maharishi Mahesh Yogi's ashram, bringing global attention to transcendental meditation and Indian spirituality. This historic ashram, now known as the Beatles Ashram, is a popular tourist attraction adorned with colorful graffiti and street art.
              </p>

              <p className="text-muted-foreground mb-6">
                The Parmarth Niketan Ashram, one of the largest in Rishikesh, hosts the renowned International Yoga Festival every March, attracting thousands of yoga enthusiasts and spiritual seekers from around the world. The ashram's beautiful location on the banks of the Ganges and its commitment to preserving ancient yoga traditions while making them accessible to modern practitioners has made it a beacon for spiritual tourism.
              </p>

              <p className="text-muted-foreground mb-6">
                Daily life in Rishikesh revolves around spiritual practices. Early morning begins with yoga sessions and meditation, followed by the melodious chanting of mantras echoing across the river. The evening Ganga Aarti at Triveni Ghat and Parmarth Niketan is a spectacular ceremony where hundreds of devotees gather to worship the sacred river with lamps, flowers, and prayers, creating an atmosphere of profound devotion and peace.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <img 
                  src="https://images.unsplash.com/photo-1588478218804-d035c3d2be5f?w=800&q=80" 
                  alt="Evening Ganga Aarti ceremony"
                  className="rounded-lg shadow-medium w-full h-64 object-cover hover-lift"
                />
                <img 
                  src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80" 
                  alt="Meditation by the river"
                  className="rounded-lg shadow-medium w-full h-64 object-cover hover-lift"
                />
              </div>

              <h3 className="text-3xl font-bold font-playfair mb-4 mt-12 text-foreground">Iconic Bridges and Natural Beauty</h3>
              <p className="text-muted-foreground mb-6">
                The city's two iconic suspension bridges, Lakshman Jhula and Ram Jhula, are engineering marvels and spiritual landmarks. Lakshman Jhula, built in 1929, spans 450 feet across the Ganges at a height of 70 feet. According to legend, this is where Lord Rama's brother Lakshman crossed the river on jute ropes. Walking across these swaying bridges offers breathtaking views of the turquoise Ganges flowing through the mountains and the temples dotting the riverbanks.
              </p>

              <p className="text-muted-foreground mb-6">
                The Ganges in Rishikesh is crystal clear and stunningly beautiful, emerging from its mountainous origins with a vibrant turquoise color before it enters the plains. The riverside ghats are perfect for meditation, yoga practice, or simply sitting in contemplation while watching the river flow. The sound of the rushing waters combined with the chiming of temple bells and the chanting of prayers creates a uniquely peaceful atmosphere.
              </p>

              <h3 className="text-3xl font-bold font-playfair mb-4 mt-12 text-foreground">Adventure Capital</h3>
              <p className="text-muted-foreground mb-6">
                Beyond its spiritual significance, Rishikesh has earned recognition as India's adventure capital. The Ganges here offers some of the best white-water rafting in India, with rapids ranging from grade I to grade IV+. The rafting season from March to June and September to November attracts adventure enthusiasts from around the world. Popular rafting routes include the 16-kilometer stretch from Shivpuri to Rishikesh, offering thrilling rapids and stunning scenery.
              </p>

              <p className="text-muted-foreground mb-6">
                The surrounding mountains provide excellent opportunities for trekking, camping, bungee jumping, and zip-lining. The Rajaji National Park, located nearby, offers wildlife safaris where visitors can spot elephants, leopards, and various bird species. Rock climbing, kayaking, and mountain biking have also become popular activities, making Rishikesh a perfect destination for those seeking both spiritual enlightenment and adrenaline-pumping adventures.
              </p>

              <h3 className="text-3xl font-bold font-playfair mb-4 mt-12 text-foreground">Temple Circuit and Sacred Sites</h3>
              <p className="text-muted-foreground mb-6">
                Rishikesh is home to numerous ancient temples that form an important pilgrimage circuit. The Trayambakeshwar Temple, located near Lakshman Jhula, is a 13-story temple dedicated to Lord Shiva and offers panoramic views of the city and surrounding mountains. The Neelkanth Mahadev Temple, situated 32 kilometers from Rishikesh, is believed to be the place where Lord Shiva consumed poison during the churning of the ocean.
              </p>

              <p className="text-muted-foreground mb-6">
                The Kunjapuri Temple, perched at an altitude of 1,676 meters, is one of the 52 Shakti Peethas and offers spectacular sunrise views of the Himalayan peaks including Gangotri, Banderpooch, and Chaukhamba. The trek to this temple is a favorite among spiritual seekers and adventure lovers alike. The Raghunath Temple in the heart of the city is another important shrine dedicated to Lord Rama.
              </p>

              <p className="text-muted-foreground mb-6">
                Rishikesh's position as a gateway to the Char Dham pilgrimage (Yamunotri, Gangotri, Kedarnath, and Badrinath) makes it an important stop for millions of pilgrims each year. The city has developed excellent infrastructure to support pilgrims while maintaining its spiritual character. The combination of natural beauty, spiritual energy, adventure opportunities, and warm hospitality makes Rishikesh a truly unique destination that offers something for every type of traveler.
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
                      Recommended Duration
                    </h4>
                    <p className="text-muted-foreground">Minimum 3-5 days for spiritual retreat</p>
                    <p className="text-muted-foreground">7-14 days for yoga teacher training</p>
                    <p className="text-muted-foreground">Weekend trips available for adventure activities</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      How to Reach
                    </h4>
                    <p className="text-muted-foreground"><strong>By Air:</strong> Jolly Grant Airport, Dehradun (35 km)</p>
                    <p className="text-muted-foreground"><strong>By Train:</strong> Rishikesh Railway Station or Haridwar (25 km)</p>
                    <p className="text-muted-foreground"><strong>By Road:</strong> Well-connected by buses from Delhi (240 km)</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary" />
                      Contact Information
                    </h4>
                    <p className="text-muted-foreground">Uttarakhand Tourism: +91-135-2430209</p>
                    <p className="text-muted-foreground">Tourist Information Center: +91-135-2430799</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button variant="default" size="lg" className="flex-1">
                      Book Yoga Retreat
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

export default Rishikesh;
