import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing! Check your email for exclusive travel deals.");
  };

  return (
    <section className="py-20 px-4 bg-gradient-ocean">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <Mail className="w-16 h-16 text-white mx-auto mb-6 animate-float" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get Exclusive Travel Deals
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and receive special offers, travel tips, and destination inspiration directly to your inbox
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 h-12 bg-white border-0 text-foreground placeholder:text-muted-foreground"
          />
          <Button 
            type="submit" 
            variant="luxury" 
            size="lg"
            className="sm:w-auto"
          >
            Subscribe Now
          </Button>
        </form>

        <p className="text-white/70 text-sm mt-4">
          No spam, unsubscribe anytime. Your email is safe with us.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
