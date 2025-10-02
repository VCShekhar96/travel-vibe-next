import { Menu, X, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <MapPin className="w-8 h-8 text-secondary" />
            <div>
              <span className="block text-xl font-bold font-playfair bg-gradient-heritage bg-clip-text text-transparent">
                Incredible India
              </span>
              <span className="text-[10px] text-muted-foreground">Explore the Land of Diversity</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-secondary' : 'text-foreground hover:text-secondary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-secondary' : 'text-foreground hover:text-secondary'
              }`}
            >
              About India
            </Link>
            <Link 
              to="/heritage" 
              className={`text-sm font-medium transition-colors ${
                isActive('/heritage') ? 'text-secondary' : 'text-foreground hover:text-secondary'
              }`}
            >
              Heritage
            </Link>
            <Link 
              to="/beaches" 
              className={`text-sm font-medium transition-colors ${
                isActive('/beaches') ? 'text-secondary' : 'text-foreground hover:text-secondary'
              }`}
            >
              Beaches
            </Link>
            <Link 
              to="/hill-stations" 
              className={`text-sm font-medium transition-colors ${
                isActive('/hill-stations') ? 'text-secondary' : 'text-foreground hover:text-secondary'
              }`}
            >
              Hill Stations
            </Link>
            <Link 
              to="/spiritual" 
              className={`text-sm font-medium transition-colors ${
                isActive('/spiritual') ? 'text-secondary' : 'text-foreground hover:text-secondary'
              }`}
            >
              Spiritual
            </Link>
            <Link 
              to="/wildlife" 
              className={`text-sm font-medium transition-colors ${
                isActive('/wildlife') ? 'text-secondary' : 'text-foreground hover:text-secondary'
              }`}
            >
              Wildlife
            </Link>
            <Link 
              to="/gallery" 
              className={`text-sm font-medium transition-colors ${
                isActive('/gallery') ? 'text-secondary' : 'text-foreground hover:text-secondary'
              }`}
            >
              Gallery
            </Link>
            <Link to="/contact">
              <Button className="bg-gradient-saffron hover:shadow-glow">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-3 animate-slide-up">
            <Link
              to="/"
              className={`block py-2 text-sm font-medium transition-colors ${
                isActive('/') ? 'text-secondary' : 'text-foreground hover:text-secondary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block py-2 text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-secondary' : 'text-foreground hover:text-secondary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About India
            </Link>
            <Link
              to="/heritage"
              className={`block py-2 text-sm font-medium transition-colors ${
                isActive('/heritage') ? 'text-secondary' : 'text-foreground hover:text-secondary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Heritage
            </Link>
            <Link
              to="/beaches"
              className={`block py-2 text-sm font-medium transition-colors ${
                isActive('/beaches') ? 'text-secondary' : 'text-foreground hover:text-secondary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Beaches
            </Link>
            <Link
              to="/hill-stations"
              className={`block py-2 text-sm font-medium transition-colors ${
                isActive('/hill-stations') ? 'text-secondary' : 'text-foreground hover:text-secondary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Hill Stations
            </Link>
            <Link
              to="/spiritual"
              className={`block py-2 text-sm font-medium transition-colors ${
                isActive('/spiritual') ? 'text-secondary' : 'text-foreground hover:text-secondary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Spiritual
            </Link>
            <Link
              to="/wildlife"
              className={`block py-2 text-sm font-medium transition-colors ${
                isActive('/wildlife') ? 'text-secondary' : 'text-foreground hover:text-secondary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Wildlife
            </Link>
            <Link
              to="/gallery"
              className={`block py-2 text-sm font-medium transition-colors ${
                isActive('/gallery') ? 'text-secondary' : 'text-foreground hover:text-secondary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-gradient-saffron hover:shadow-glow">
                Book Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
