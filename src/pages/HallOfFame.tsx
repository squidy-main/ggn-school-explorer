
const HallOfFame = () => {
  // Sample achievers data
  const achievers = [
    {
      name: "Aarav Sharma",
      year: "2024",
      category: "Academic",
      achievement: "CBSE Board Topper - 99.8%",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Ananya Singh",
      year: "2023",
      category: "Sports",
      achievement: "National Level Swimming Champion",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Rohan Verma",
      year: "2024",
      category: "Cultural",
      achievement: "1st Prize in Inter-School Dance Competition",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Priya Patel",
      year: "2022",
      category: "Academic",
      achievement: "Physics Olympiad Gold Medalist",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Arjun Kumar",
      year: "2023",
      category: "Sports",
      achievement: "State Cricket Team Captain",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Neha Reddy",
      year: "2024",
      category: "Cultural",
      achievement: "Classical Music Vocalist Award",
      image: "https://images.unsplash.com/photo-1521252659862-eec69941b071?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="bg-school-maroon py-16 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-school-dark-maroon/60 to-black/30"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Hall of Fame</h1>
          <p className="text-lg max-w-3xl">
            Celebrating the outstanding achievements of our students, alumni, and staff.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title font-serif">Our Achievers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {achievers.map((achiever, index) => (
              <div key={index} className="luxury-card hover:translate-y-[-5px] transition-all duration-300">
                <div className="relative">
                  <img 
                    src={achiever.image} 
                    alt={achiever.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="absolute top-4 right-4 bg-school-maroon text-white text-xs px-3 py-1 rounded-full">
                    {achiever.category}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-bold text-lg">{achiever.name}</h3>
                    <p className="text-school-gold">{achiever.year}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-medium mb-3">{achiever.achievement}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{achiever.category} Excellence</span>
                    <span className="w-8 h-1 bg-school-gold"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-school-dark mb-4 font-serif">Join Our Hall of Fame</h3>
            <p className="max-w-2xl mx-auto text-gray-600 mb-6">
              At GGN Public School, we celebrate excellence in academics, sports, arts, and service.
              Our Hall of Fame recognizes the exceptional achievements of our students and alumni.
            </p>
            <button className="luxury-btn">
              View More Achievers
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HallOfFame;
