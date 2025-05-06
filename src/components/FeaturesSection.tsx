
import { BookOpen, Award, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-school-blue" />,
      title: "Academic Excellence",
      description: "Our curriculum is designed to develop critical thinking and problem-solving skills through a blend of traditional learning and modern teaching methods."
    },
    {
      icon: <Users className="h-10 w-10 text-school-blue" />,
      title: "Skilled Faculty",
      description: "Our team of dedicated and experienced educators are committed to providing personalized attention to every student."
    },
    {
      icon: <Award className="h-10 w-10 text-school-blue" />,
      title: "Holistic Development",
      description: "We focus on all-round development through sports, arts, cultural activities, and community service alongside academic pursuits."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/4 after:right-1/4">Why Choose GGN Public School</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide a nurturing environment where every student can discover their potential and excel in their chosen path.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow text-center">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-school-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
