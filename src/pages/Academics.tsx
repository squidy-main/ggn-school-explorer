
const Academics = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-school-blue py-16 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-lg max-w-3xl">
            Discover our comprehensive academic programs and curriculum designed for holistic development.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Our Academic Programs</h2>
          <p className="text-gray-700 mb-8">
            Coming soon: Detailed information about our curriculum, teaching methodology, 
            assessment system, and academic achievements.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Academics;
