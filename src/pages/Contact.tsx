import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you soon.");
  };

  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4 bg-gradient-heritage bg-clip-text text-transparent">
                Contact & Booking
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Plan your dream Indian journey with us. We're here to help!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <Card className="shadow-medium border-0">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold font-playfair mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <Input placeholder="Your name" required className="h-12" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input type="email" placeholder="your.email@example.com" required className="h-12" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <Input type="tel" placeholder="+91 XXXXX XXXXX" required className="h-12" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Destination Preference</label>
                        <Input placeholder="e.g., Taj Mahal, Goa, Kerala" className="h-12" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <Textarea 
                          placeholder="Tell us about your travel plans..." 
                          rows={5}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full h-12 bg-gradient-saffron text-white hover:shadow-glow">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Card className="shadow-soft hover:shadow-medium transition-all border-0">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 1800 123 4567</p>
                      <p className="text-muted-foreground">+91 1800 765 4321</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft hover:shadow-medium transition-all border-0">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@incredibleindia.com</p>
                      <p className="text-muted-foreground">booking@incredibleindia.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft hover:shadow-medium transition-all border-0">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Office Address</h3>
                      <p className="text-muted-foreground">
                        123 Tourism Plaza, Connaught Place<br />
                        New Delhi - 110001, India
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft hover:shadow-medium transition-all border-0">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Google Map */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold font-playfair mb-6 text-center">Find Us on Map</h2>
              <div className="rounded-2xl overflow-hidden shadow-medium h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0314182405896!2d77.21746931508106!3d28.628050782421833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd371d97c66d%3A0x9d92548ce41d2d6e!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
