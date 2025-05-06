
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Sample gallery images
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      alt: "School Building",
      category: "campus"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
      alt: "Classroom",
      category: "campus"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e",
      alt: "Library",
      category: "campus"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1588072432836-e10032774350",
      alt: "Science Lab",
      category: "academics"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28",
      alt: "Basketball Court",
      category: "sports"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      alt: "Computer Lab",
      category: "academics"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
      alt: "Cultural Event",
      category: "events"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
      alt: "Sports Event",
      category: "sports"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1503676382389-4809596d5290",
      alt: "Annual Function",
      category: "events"
    },
  ];
  
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main>
      {/* Page Header */}
      <section className="bg-school-maroon py-16 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-school-dark-maroon/60 to-black/30"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Photo Gallery</h1>
          <p className="text-lg max-w-3xl">
            A visual journey through the memorable moments and events at GGN Public School.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title font-serif">Our Gallery</h2>
          
          <div className="mb-10">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100">
                  <TabsTrigger 
                    value="all" 
                    onClick={() => setActiveCategory('all')}
                    className="data-[state=active]:bg-school-maroon data-[state=active]:text-white"
                  >
                    All Photos
                  </TabsTrigger>
                  <TabsTrigger 
                    value="campus" 
                    onClick={() => setActiveCategory('campus')}
                    className="data-[state=active]:bg-school-maroon data-[state=active]:text-white"
                  >
                    Campus
                  </TabsTrigger>
                  <TabsTrigger 
                    value="academics" 
                    onClick={() => setActiveCategory('academics')}
                    className="data-[state=active]:bg-school-maroon data-[state=active]:text-white"
                  >
                    Academics
                  </TabsTrigger>
                  <TabsTrigger 
                    value="events" 
                    onClick={() => setActiveCategory('events')}
                    className="data-[state=active]:bg-school-maroon data-[state=active]:text-white"
                  >
                    Events
                  </TabsTrigger>
                  <TabsTrigger 
                    value="sports" 
                    onClick={() => setActiveCategory('sports')}
                    className="data-[state=active]:bg-school-maroon data-[state=active]:text-white"
                  >
                    Sports
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredImages.map((image) => (
                    <div key={image.id} className="luxury-card overflow-hidden group">
                      <div className="overflow-hidden">
                        <img 
                          src={`${image.src}?auto=format&fit=crop&q=80&w=600&h=400`}
                          alt={image.alt}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="font-medium text-school-dark">{image.alt}</h3>
                        <p className="text-sm text-gray-500 capitalize">{image.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="campus" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredImages.map((image) => (
                    <div key={image.id} className="luxury-card overflow-hidden group">
                      <div className="overflow-hidden">
                        <img 
                          src={`${image.src}?auto=format&fit=crop&q=80&w=600&h=400`}
                          alt={image.alt}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="font-medium text-school-dark">{image.alt}</h3>
                        <p className="text-sm text-gray-500 capitalize">{image.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="academics" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredImages.map((image) => (
                    <div key={image.id} className="luxury-card overflow-hidden group">
                      <div className="overflow-hidden">
                        <img 
                          src={`${image.src}?auto=format&fit=crop&q=80&w=600&h=400`}
                          alt={image.alt}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="font-medium text-school-dark">{image.alt}</h3>
                        <p className="text-sm text-gray-500 capitalize">{image.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="events" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredImages.map((image) => (
                    <div key={image.id} className="luxury-card overflow-hidden group">
                      <div className="overflow-hidden">
                        <img 
                          src={`${image.src}?auto=format&fit=crop&q=80&w=600&h=400`}
                          alt={image.alt}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="font-medium text-school-dark">{image.alt}</h3>
                        <p className="text-sm text-gray-500 capitalize">{image.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="sports" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredImages.map((image) => (
                    <div key={image.id} className="luxury-card overflow-hidden group">
                      <div className="overflow-hidden">
                        <img 
                          src={`${image.src}?auto=format&fit=crop&q=80&w=600&h=400`}
                          alt={image.alt}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="font-medium text-school-dark">{image.alt}</h3>
                        <p className="text-sm text-gray-500 capitalize">{image.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
