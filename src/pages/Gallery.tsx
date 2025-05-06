
const Gallery = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-school-blue py-16 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-lg max-w-3xl">
            A visual journey through the memorable moments and events at GGN Public School.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Our Gallery</h2>
          <p className="text-gray-700 mb-8">
            Coming soon: An extensive photo gallery showcasing school events, 
            campus life, achievements, and activities.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
