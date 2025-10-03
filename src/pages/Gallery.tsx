import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  // Heritage - 6 images
  { id: 1, src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", title: "Taj Mahal", category: "Heritage", caption: "Iconic white marble monument stands as symbol of eternal love and beauty" },
  { id: 2, src: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&q=80", title: "Red Fort Delhi", category: "Heritage", caption: "Magnificent Mughal fortress showcasing grand architecture and rich historical heritage culture" },
  { id: 3, src: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80", title: "Hampi Ruins", category: "Heritage", caption: "Ancient temple complex reveals stories of Vijayanagara Empire's glorious past forever" },
  { id: 4, src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80", title: "Qutub Minar", category: "Heritage", caption: "Towering minaret displays intricate Islamic architecture and marks Delhi's historical significance" },
  { id: 5, src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80", title: "Hawa Mahal", category: "Heritage", caption: "Palace of Winds features unique latticed windows in stunning pink sandstone" },
  { id: 6, src: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80", title: "Mysore Palace", category: "Heritage", caption: "Royal residence illuminates evenings with thousands of lights creating magical ambiance" },
  
  // Beaches - 6 images
  { id: 7, src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80", title: "Goa Beach Sunset", category: "Beaches", caption: "Golden sands meet azure waters creating perfect tropical paradise for relaxation" },
  { id: 8, src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", title: "Andaman Islands", category: "Beaches", caption: "Crystal clear turquoise waters surround pristine islands with coral reefs nearby" },
  { id: 9, src: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80", title: "Kovalam Beach", category: "Beaches", caption: "Crescent shaped shoreline offers serene waves and iconic lighthouse view majestically" },
  { id: 10, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", title: "Varkala Beach", category: "Beaches", caption: "Dramatic red cliffs overlook pristine coastline with natural mineral water springs" },
  { id: 11, src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", title: "Radhanagar Beach", category: "Beaches", caption: "Asia's finest beach boasts powdery white sand and spectacular sunset views" },
  { id: 12, src: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80", title: "Palolem Beach Goa", category: "Beaches", caption: "Peaceful crescent bay surrounded by palm trees offers ultimate beach paradise" },
  
  // Hill Stations - 6 images
  { id: 13, src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80", title: "Shimla Hills", category: "Hill Stations", caption: "Queen of Hills displays colonial charm with panoramic Himalayan mountain vistas" },
  { id: 14, src: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80", title: "Manali Valley", category: "Hill Stations", caption: "Snow capped peaks and lush valleys create adventure lover's ultimate destination" },
  { id: 15, src: "https://images.unsplash.com/photo-1563552249-d0b7d4d3e3d0?w=800&q=80", title: "Darjeeling Tea Gardens", category: "Hill Stations", caption: "Rolling tea plantations stretch endlessly with Kanchenjunga peak standing tall behind" },
  { id: 16, src: "https://images.unsplash.com/photo-1598524485550-f5c2d0402bf1?w=800&q=80", title: "Ooty Nilgiris", category: "Hill Stations", caption: "Misty mountains surround beautiful botanical gardens and serene blue lake views" },
  { id: 17, src: "https://images.unsplash.com/photo-1586276019676-454c7f0d29fa?w=800&q=80", title: "Munnar Tea Estates", category: "Hill Stations", caption: "Emerald green tea plantations carpet rolling hills creating breathtaking natural scenery" },
  { id: 18, src: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&q=80", title: "Nainital Lake", category: "Hill Stations", caption: "Pristine mountain lake reflects surrounding peaks offering peaceful boating experience always" },
  
  // Spiritual - 6 images
  { id: 19, src: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80", title: "Varanasi Ghats", category: "Spiritual", caption: "Sacred Ganges river flows through ancient city hosting evening aarti ceremonies" },
  { id: 20, src: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80", title: "Golden Temple", category: "Spiritual", caption: "Holy Sikh shrine shimmers with golden architecture welcoming all faiths warmly" },
  { id: 21, src: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80", title: "Tirupati Balaji", category: "Spiritual", caption: "Sacred hilltop temple attracts millions of devoted pilgrims seeking divine blessings" },
  { id: 22, src: "https://images.unsplash.com/photo-1571498664957-fde285d79857?w=800&q=80", title: "Rishikesh Ganga", category: "Spiritual", caption: "Yoga capital nestled in Himalayas offers spiritual awakening by holy river" },
  { id: 23, src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", title: "Bodh Gaya Temple", category: "Spiritual", caption: "Enlightenment site where Buddha attained supreme knowledge under sacred Bodhi tree" },
  { id: 24, src: "https://images.unsplash.com/photo-1582632909276-e8f71a0ac558?w=800&q=80", title: "Meenakshi Temple", category: "Spiritual", caption: "Towering gopurams showcase intricate Dravidian architecture dedicated to Goddess Meenakshi beautifully" },
  
  // Wildlife - 6 images
  { id: 25, src: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80", title: "Bengal Tiger", category: "Wildlife", caption: "Majestic striped predator roams dense forests representing India's wildlife conservation success" },
  { id: 26, src: "https://images.unsplash.com/photo-1612544386345-6894e8d4f0d7?w=800&q=80", title: "Wild Elephants", category: "Wildlife", caption: "Gentle giants traverse through lush jungle creating unforgettable wildlife safari moments" },
  { id: 27, src: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&q=80", title: "Leopard Spotting", category: "Wildlife", caption: "Elusive spotted cat prowls through national parks showcasing incredible natural camouflage" },
  { id: 28, src: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&q=80", title: "Indian Rhino", category: "Wildlife", caption: "One horned rhinoceros grazes peacefully in protected wetland sanctuary habitats always" },
  { id: 29, src: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=800&q=80", title: "Asiatic Lion", category: "Wildlife", caption: "Rare big cat species found exclusively in Gir forest reserves roaming" },
  { id: 30, src: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80", title: "Peacock Dance", category: "Wildlife", caption: "National bird displays magnificent colorful plumage during monsoon courtship dance rituals" },
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold font-playfair mb-2">{image.title}</h3>
                      <p className="text-xs text-white/90 leading-relaxed">{image.caption}</p>
                      <span className="inline-block mt-2 text-xs bg-white/20 px-2 py-1 rounded">{image.category}</span>
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
              <div className="text-center mt-4 text-white max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold font-playfair mb-2">{selectedImage.title}</h3>
                <p className="text-white/90 mb-2">{selectedImage.caption}</p>
                <span className="inline-block text-sm bg-white/20 px-3 py-1 rounded-full">{selectedImage.category}</span>
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
