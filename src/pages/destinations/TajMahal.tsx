import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, Calendar, Phone, Mail, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TajMahal = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1920&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4">Taj Mahal</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              The Eternal Monument of Love
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in">
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Location</h3>
                  <p className="text-sm text-muted-foreground">Agra, Uttar Pradesh, India</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Visiting Hours</h3>
                  <p className="text-sm text-muted-foreground">Sunrise to Sunset<br />Closed on Fridays</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <IndianRupee className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Entry Fee</h3>
                  <p className="text-sm text-muted-foreground">Indians: ₹50<br />Foreigners: ₹1,100</p>
                </CardContent>
              </Card>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80" 
                alt="Taj Mahal Front View"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
              <img 
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80" 
                alt="Taj Mahal Sunset"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
              <img 
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80" 
                alt="Taj Mahal Gardens"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
              <img 
                src="https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&q=80" 
                alt="Taj Mahal Architecture"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
            </div>

            {/* Detailed Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-4xl font-bold font-playfair mb-6 bg-gradient-heritage bg-clip-text text-transparent">About Taj Mahal</h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Taj Mahal, an ivory-white marble mausoleum on the southern bank of the river Yamuna in Agra, stands as one of the most iconic monuments in the world. Commissioned in 1631 by the Mughal emperor Shah Jahan to house the tomb of his beloved wife Mumtaz Mahal, this architectural masterpiece has become a universal symbol of love and devotion. The monument's construction took approximately 22 years and employed over 20,000 artisans and craftsmen from across India, Persia, and Central Asia.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The Taj Mahal represents the finest architectural and artistic achievement of Mughal architecture, combining elements from Islamic, Persian, Ottoman Turkish, and Indian architectural styles. The main dome rises to a height of 73 meters and is surrounded by four smaller domes, creating a perfectly symmetrical structure that changes its appearance throughout the day as the sunlight plays upon its pristine white marble surface. The marble used in construction was brought from Makrana in Rajasthan, and the precious stones used for inlay work were sourced from various parts of Asia.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The complex spans 42 acres and includes a mosque, a guest house, and magnificent formal gardens divided into four parts by waterways. The main gateway, built of red sandstone and decorated with calligraphy and geometric patterns, serves as an impressive entrance to the complex. The calligraphy adorning the monument features verses from the Quran and was executed by Persian calligrapher Amanat Khan, who was the only artisan to sign his work at the Taj Mahal.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Inside the mausoleum, the cenotaphs of Mumtaz Mahal and Shah Jahan are enclosed within an octagonal marble screen inlaid with precious stones. The actual graves lie in a quiet chamber beneath the main floor, accessible only to maintenance workers. The interior is adorned with intricate pietra dura work, featuring floral designs created from thousands of semi-precious stones including jade, crystal, turquoise, sapphire, carnelian, and lapis lazuli.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The architectural brilliance of the Taj Mahal extends beyond its beauty to encompass remarkable engineering achievements. The minarets are designed to tilt slightly outward, ensuring that in the event of an earthquake, they would fall away from the main tomb structure. The foundation consists of timber wells filled with rubble, creating a shock-absorbing base that has helped the monument withstand several earthquakes over the centuries. The innovative use of optical illusion makes the calligraphic inscriptions appear uniform in size despite their varying distances from the viewer.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Recognized as a UNESCO World Heritage Site in 1983, the Taj Mahal attracts between seven and eight million visitors annually, making it India's most popular tourist destination. The monument is particularly stunning during sunrise and sunset when the changing light creates spectacular color shifts on the marble surface, ranging from soft pink hues in the morning to warm golden tones in the evening. The reflection of the Taj Mahal in the long water channels of the gardens creates an ethereal, mirror-like image that enhances its otherworldly beauty.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Conservation efforts for the Taj Mahal have become increasingly important due to environmental pollution and the effects of time. The Archaeological Survey of India, along with international organizations, works continuously to preserve this cultural treasure. Measures include restricting vehicle traffic in the vicinity, cleaning the marble using special mud packs, and monitoring structural integrity. Visitors are required to wear shoe covers or remove footwear before entering the main platform to minimize wear on the marble.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The gardens surrounding the Taj Mahal, laid out in the traditional Mughal charbagh style, symbolize the Islamic concept of paradise. Four raised marble pathways divide the gardens into four equal parts, with water channels and fountains creating a serene atmosphere. The pathways are lined with cypress trees, symbols of death in Mughal culture, while fruit trees represent life. The gardens were designed to be viewed from the main gateway, with the Taj Mahal appearing to float in the distance.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The Taj Mahal complex also includes two important structures flanking the main mausoleum: a mosque to the west and an identical building to the east known as the jawab (answer). The mosque serves its religious function for prayer, while the jawab was built purely for architectural symmetry. Both buildings are constructed from red sandstone, providing a striking contrast to the white marble of the main monument and maintaining the complex's perfect balance.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Beyond its architectural and historical significance, the Taj Mahal has become a powerful symbol in literature, art, and popular culture worldwide. Poets, writers, and artists have been inspired by its beauty for centuries. The monument has been featured in countless photographs, paintings, films, and literary works, cementing its status as an international icon. It represents not just Mughal architectural achievement but also serves as a timeless testament to the power of love and human creativity.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                A visit to the Taj Mahal offers an unforgettable experience that transcends mere sightseeing. Whether you're an architecture enthusiast, a history buff, a romantic soul, or simply a curious traveler, standing before this magnificent monument evokes a sense of wonder and appreciation for human artistic achievement. The Taj Mahal continues to inspire millions, reminding us of the enduring power of love and the timeless beauty that can be created when art, architecture, and emotion unite in perfect harmony.
              </p>
            </div>

            {/* Booking Section */}
            <Card className="border-0 shadow-medium bg-gradient-to-br from-primary/10 to-secondary/10 mb-12">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold font-playfair mb-6 text-center">Plan Your Visit</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-4">Best Time to Visit</h4>
                    <p className="text-muted-foreground mb-4">
                      The best time to visit the Taj Mahal is during the cooler months from October to March. Early morning visits (sunrise) offer the most beautiful views with fewer crowds and stunning light.
                    </p>
                    <h4 className="font-bold text-lg mb-4 mt-6">How to Reach</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• By Air: Agra Airport (7 km away)</li>
                      <li>• By Train: Agra Cantt Railway Station (5 km)</li>
                      <li>• By Road: Well connected via NH2</li>
                      <li>• From Delhi: 3-4 hours drive (230 km)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-4">Important Guidelines</h4>
                    <ul className="text-muted-foreground space-y-2 mb-4">
                      <li>• Photography inside the mausoleum is prohibited</li>
                      <li>• No food items allowed inside the complex</li>
                      <li>• Security check at entry is mandatory</li>
                      <li>• Wear shoe covers or remove footwear on marble platform</li>
                      <li>• Battery-operated vehicles available for elderly</li>
                    </ul>
                    <h4 className="font-bold text-lg mb-4 mt-6">Contact Information</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>+91-562-2226431</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>info@tajmahal.gov.in</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-gradient-heritage text-white hover:opacity-90">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Your Tickets Online
                  </Button>
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

export default TajMahal;
