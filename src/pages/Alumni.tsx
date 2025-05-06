
const Alumni = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-school-maroon py-16 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Alumni</h1>
          <p className="text-lg max-w-3xl">
            Connect with former students and discover how they're making an impact around the world.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Our Alumni Network</h2>
          <p className="text-gray-700 mb-8">
            Coming soon: Information about our alumni network, notable alumni achievements, 
            and opportunities for alumni to connect with the school.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Alumni;
