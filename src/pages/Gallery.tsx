import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", title: "Taj Mahal", category: "Heritage" },
  { id: 2, src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80", title: "Goa Beach", category: "Beaches" },
  { id: 3, src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80", title: "Himalayan Valley", category: "Hill Stations" },
  { id: 4, src: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80", title: "Varanasi Ghats", category: "Spiritual" },
  { id: 5, src: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80", title: "Bengal Tiger", category: "Wildlife" },
  { id: 6, src: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&q=80", title: "Red Fort", category: "Heritage" },
  { id: 7, src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", title: "Andaman Waters", category: "Beaches" },
  { id: 8, src: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80", title: "Manali Landscape", category: "Hill Stations" },
  { id: 9, src: "https://images.unsplash.com/photo-1580066248338-2eb6c3c93044?w=800&q=80", title: "Golden Temple", category: "Spiritual" },
  { id: 10, src: "https://images.unsplash.com/photo-1612544386345-6894e8d4f0d7?w=800&q=80", title: "Wild Elephant", category: "Wildlife" },
  { id: 11, src: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80", title: "Hampi Ruins", category: "Heritage" },
  { id: 12, src: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80", title: "Kovalam Beach", category: "Beaches" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Heritage", "Beaches", "Hill Stations", "Spiritual", "Wildlife"];
  
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4 bg-gradient-heritage bg-clip-text text-transparent">
                Photo Gallery
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore the breathtaking beauty of Incredible India through stunning visuals
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    filter === category
                      ? "bg-secondary text-secondary-foreground shadow-soft"
                      : "bg-card text-foreground hover:bg-muted"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-square">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold font-playfair mb-1">{image.title}</h3>
                      <p className="text-sm text-white/80">{image.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-6xl max-h-[90vh] animate-scale-in" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="text-2xl font-bold font-playfair mb-1">{selectedImage.title}</h3>
                <p className="text-white/80">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
