
const StudentLife = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-school-blue py-16 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Life</h1>
          <p className="text-lg max-w-3xl">
            Explore the vibrant and enriching experiences we offer beyond academics.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Life at GGN</h2>
          <p className="text-gray-700 mb-8">
            Coming soon: Detailed information about extracurricular activities, clubs, sports, 
            cultural events, and student development programs.
          </p>
        </div>
      </section>
    </main>
  );
};

export default StudentLife;
