
const NotableVisits = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-school-blue py-16 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notable Visits</h1>
          <p className="text-lg max-w-3xl">
            Discover the distinguished personalities who have visited our campus over the years.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Distinguished Guests</h2>
          <p className="text-gray-700 mb-8">
            Coming soon: Information about notable personalities who have visited 
            our school and their interactions with our students.
          </p>
        </div>
      </section>
    </main>
  );
};

export default NotableVisits;
