
const HallOfFame = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-school-blue py-16 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hall of Fame</h1>
          <p className="text-lg max-w-3xl">
            Celebrating the outstanding achievements of our students, alumni, and staff.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Our Achievers</h2>
          <p className="text-gray-700 mb-8">
            Coming soon: Profiles of outstanding students, academic toppers, 
            sports champions, and other achievers from our school community.
          </p>
        </div>
      </section>
    </main>
  );
};

export default HallOfFame;
