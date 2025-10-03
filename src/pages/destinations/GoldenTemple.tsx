import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, Calendar, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const GoldenTemple = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1920&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4">Golden Temple</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Harmandir Sahib - The Abode of God
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
                  <p className="text-sm text-muted-foreground">Amritsar, Punjab, India</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Visiting Hours</h3>
                  <p className="text-sm text-muted-foreground">24 Hours Open<br />All Days of Week</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Entry Fee</h3>
                  <p className="text-sm text-muted-foreground">Free for All<br />Open to All Faiths</p>
                </CardContent>
              </Card>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80" 
                alt="Golden Temple Day View"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
              <img 
                src="https://images.unsplash.com/photo-1580066248338-2eb6c3c93044?w=800&q=80" 
                alt="Golden Temple Night"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
              <img 
                src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80" 
                alt="Temple Reflection"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
              <img 
                src="https://images.unsplash.com/photo-1582632909276-e8f71a0ac558?w=800&q=80" 
                alt="Golden Temple Architecture"
                className="w-full h-80 object-cover rounded-2xl shadow-medium"
              />
            </div>

            {/* Detailed Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-4xl font-bold font-playfair mb-6 bg-gradient-saffron bg-clip-text text-transparent">About Golden Temple</h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Golden Temple, officially known as Sri Harmandir Sahib, is the holiest Gurdwara and most sacred pilgrimage site of Sikhism. Located in the city of Amritsar, Punjab, this magnificent temple attracts more visitors daily than the Taj Mahal, welcoming over 100,000 people from all faiths, castes, and backgrounds. The temple's foundation was laid by Hazrat Mian Mir Ji, a Muslim Sufi saint, at the request of Guru Arjan Dev Ji in 1589, symbolizing the universal brotherhood that lies at the heart of Sikh philosophy.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The name "Golden Temple" derives from the gold-plated exterior of the upper floors of the main sanctum, which was covered with approximately 750 kilograms of pure gold during the reign of Maharaja Ranjit Singh in the early 19th century. The temple sits in the middle of a sacred pool called the Amrit Sarovar, meaning "Pool of Nectar," from which the city of Amritsar derives its name. The serene waters surrounding the temple create a stunning reflection, making it appear as though the golden structure is floating on the surface.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The architectural design of the Golden Temple is unique among Sikh temples, combining elements from both Hindu and Islamic architecture, representing the religious tolerance and universality that Sikhism embodies. Unlike most Hindu temples that face east, the Golden Temple has four entrance doors, one on each side, symbolizing that people from all four directions and all walks of life are welcome. The main structure features intricate marble work, precious stone inlays, and elaborate gold gilding that shimmers magnificently in the sunlight and illuminates beautifully under artificial lighting at night.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The spiritual heart of the Golden Temple is the Guru Granth Sahib, the holy scripture of Sikhism, which is ceremonially placed in the main hall each morning before dawn and returned to the Akal Takht at night. The continuous recitation of prayers and kirtan (devotional singing) creates an atmosphere of profound peace and spirituality. The melodious hymns echo across the complex, offering solace and inspiration to thousands of devotees who gather to pay their respects and meditate in the presence of the holy book.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                One of the most remarkable aspects of the Golden Temple is its community kitchen, known as the Guru ka Langar, which serves free meals to over 100,000 people daily, regardless of their religion, caste, creed, or social status. This tradition, established by the Sikh Gurus, exemplifies the principles of equality and selfless service that are central to Sikhism. Volunteers from all backgrounds work together to prepare, serve, and clean up after meals, demonstrating practical implementation of the concept that all humans are equal. The langar operates around the clock, ensuring no one goes hungry.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The temple complex encompasses several other significant structures, including the Akal Takht, which serves as the supreme temporal seat of Sikhs and houses the community's decision-making authority. The complex also includes the Clock Tower, various smaller shrines, the Sikh Museum depicting Sikh history and martyrdom, and accommodation facilities for pilgrims. The circumambulation path around the holy tank, known as the Parikrama, allows devotees to walk around the sacred pool while meditating and absorbing the spiritual atmosphere.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The Golden Temple has witnessed significant historical events throughout its existence. It has been destroyed and rebuilt several times, most notably after attacks by Afghan invaders in the 18th century. In more recent history, the temple suffered damage during Operation Blue Star in 1984, but was subsequently restored with great care by the Sikh community. Despite these challenges, the temple has remained a beacon of faith, resilience, and communal harmony, standing as a testament to the enduring spirit of Sikhism.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The illumination of the Golden Temple at night creates a magical spectacle, with the golden structure reflecting in the still waters of the Amrit Sarovar. The temple's beauty is enhanced by sophisticated lighting that highlights its architectural features while maintaining the sacred atmosphere. Many visitors choose to visit during the evening to witness the Palki Sahib ceremony, when the Guru Granth Sahib is carried from the main temple to the Akal Takht for the night, accompanied by singing, music, and devotional fervor.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The sacred pool surrounding the temple holds special significance for Sikhs, who believe that bathing in its holy waters can bring spiritual purification and physical healing. The pool is fed by an underground spring and is maintained meticulously clean. Devotees can be seen taking ritual baths at all hours, and the sight of faithful pilgrims immersing themselves in prayer and devotion adds to the deeply moving spiritual atmosphere that pervades the entire complex.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Visiting the Golden Temple offers more than just a religious experience; it provides insight into the Sikh way of life, emphasizing values of equality, compassion, and community service. The temple welcomes people of all religions, nationalities, and backgrounds without discrimination, embodying the Sikh principle of "Ik Onkar" - the belief that there is only one God who created all humans equal. This inclusive philosophy makes the Golden Temple not just a place of worship but a living example of harmony, tolerance, and universal brotherhood.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Whether you come as a pilgrim seeking spiritual enlightenment, a traveler interested in experiencing diverse cultures, or simply as someone looking for peace and tranquility, the Golden Temple offers a transformative experience. The combination of stunning architecture, profound spirituality, and the warmth of Sikh hospitality creates an atmosphere that touches hearts and leaves lasting impressions. A visit to this sacred shrine is not just about seeing a beautiful monument but about experiencing the power of faith, community, and selfless service in action.
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
                      The Golden Temple is open 24/7 throughout the year. The best time to visit is during October to March when the weather is pleasant. Early morning (4-6 AM) and evening (7-9 PM) offer the most peaceful and spiritual experiences.
                    </p>
                    <h4 className="font-bold text-lg mb-4 mt-6">How to Reach</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• By Air: Sri Guru Ram Dass Jee International Airport (11 km)</li>
                      <li>• By Train: Amritsar Junction Railway Station (2 km)</li>
                      <li>• By Road: Well connected by NH3 and NH15</li>
                      <li>• From Delhi: 450 km (7-8 hours drive)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-4">Important Guidelines</h4>
                    <ul className="text-muted-foreground space-y-2 mb-4">
                      <li>• Cover your head (scarves provided at entrance)</li>
                      <li>• Remove shoes before entering (deposit available)</li>
                      <li>• Wash feet at designated area</li>
                      <li>• No smoking or alcohol allowed</li>
                      <li>• Dress modestly (no shorts or sleeveless)</li>
                      <li>• Photography allowed but be respectful</li>
                      <li>• Free accommodation available for pilgrims</li>
                    </ul>
                    <h4 className="font-bold text-lg mb-4 mt-6">Contact Information</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>+91-183-2553954</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-gradient-saffron text-white hover:opacity-90">
                    <Calendar className="w-5 h-5 mr-2" />
                    Learn About Free Accommodation
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

export default GoldenTemple;
