import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "The trip to Maldives was absolutely magical! Every detail was perfectly planned, and the experience exceeded all our expectations. Highly recommend WanderWorld!",
    initials: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "Professional service, amazing destinations, and unforgettable memories. The European tour was a dream come true. Thank you for such a wonderful experience!",
    initials: "MC",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    text: "Best travel agency ever! From booking to the actual trip, everything was seamless. The guides were knowledgeable and friendly. Can't wait for my next adventure!",
    initials: "ER",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real adventurers who traveled with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-12 pb-6 px-6">
                <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3">
                  <Avatar className="bg-gradient-ocean">
                    <AvatarFallback className="bg-gradient-ocean text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
