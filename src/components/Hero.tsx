
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-school-dark-maroon/80 to-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
            Welcome to <span className="text-school-gold">GGN Public School</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Nurturing young minds, fostering excellence, and building character
            for a brighter future. Join our community where education goes beyond textbooks.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-school-maroon hover:bg-school-light-maroon text-white border border-school-maroon">
              Admissions Open
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-school-maroon">
              Explore Campus
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L60,53.3C120,75,240,117,360,117.3C480,117,600,75,720,64C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Decorative Gold Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-school-gold"></div>
    </section>
  );
};

export default Hero;
