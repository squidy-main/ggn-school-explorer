
const Infrastructure = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-school-blue py-16 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Infrastructure</h1>
          <p className="text-lg max-w-3xl">
            Explore our state-of-the-art facilities designed to provide an optimal learning environment.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Our Facilities</h2>
          <p className="text-gray-700 mb-8">
            Coming soon: Detailed information about our campus infrastructure including classrooms, laboratories, 
            sports facilities, library, and more.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Infrastructure;
