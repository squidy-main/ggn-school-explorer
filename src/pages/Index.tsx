
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnnouncementCard from "@/components/AnnouncementCard";
import { Link } from "react-router-dom";

const Index = () => {
  // Sample announcements data
  const announcements = [
    {
      title: "Annual Day Celebration",
      date: "May 15, 2025",
      category: "Event",
      description: "Join us for our Annual Day celebration featuring performances by students across all grades."
    },
    {
      title: "Admissions Open for 2025-26",
      date: "April 10, 2025",
      category: "Admission",
      description: "Applications are now being accepted for the academic year 2025-26. Limited seats available."
    },
    {
      title: "Science Exhibition Results",
      date: "March 28, 2025",
      category: "Achievement",
      description: "Congratulations to all winners of the Inter-School Science Exhibition held last week."
    }
  ];

  return (
    <main>
      <Hero />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* About School Quick Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="section-title">About GGN Public School</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <p className="text-gray-700 mb-4 text-justify">
                      GGN Public School is one of the premier educational institutions in Gurgaon, dedicated to providing quality education with an emphasis on academic excellence and character development.
                    </p>
                    <p className="text-gray-700 mb-6 text-justify">
                      Founded with the vision to nurture young minds and develop them into responsible citizens, our school offers a comprehensive curriculum that balances academics with extra-curricular activities.
                    </p>
                    <Link to="/about">
                      <Button className="bg-school-maroon hover:bg-school-light-maroon">Learn More About Us</Button>
                    </Link>
                  </div>
                  <div className="md:w-1/2">
                    <img 
                      src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800" 
                      alt="GGN Public School Building" 
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Announcements & News */}
            <div>
              <h2 className="section-title">Latest Updates</h2>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <AnnouncementCard 
                    key={index}
                    title={announcement.title}
                    date={announcement.date}
                    category={announcement.category}
                    description={announcement.description}
                  />
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline" className="border-school-maroon text-school-maroon hover:bg-school-maroon hover:text-white">
                  View All Updates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />

      {/* Admissions Section */}
      <section className="py-16 bg-school-cream">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="section-title mx-auto after:left-1/4 after:right-1/4">Admissions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Join our vibrant learning community. Applications for the upcoming academic year are now open.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="process" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="process">Admission Process</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="fees">Fee Structure</TabsTrigger>
              </TabsList>
              <TabsContent value="process" className="p-6 bg-white rounded-b-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">Our Admission Process</h3>
                <ol className="space-y-3 list-decimal pl-5">
                  <li>Fill the application form available online or at the school office.</li>
                  <li>Submit the completed form with necessary documents and registration fee.</li>
                  <li>Entrance test and interview will be scheduled for eligible candidates.</li>
                  <li>Results will be communicated via email or phone call.</li>
                  <li>Selected candidates must complete the admission process by paying the required fees within the specified timeframe.</li>
                </ol>
                <div className="mt-6">
                  <Button className="bg-school-maroon hover:bg-school-light-maroon">Download Application Form</Button>
                </div>
              </TabsContent>
              <TabsContent value="requirements" className="p-6 bg-white rounded-b-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">Documents Required</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Birth Certificate (original and photocopy)</li>
                  <li>Passport-size photographs (4 copies)</li>
                  <li>Previous school report card (if applicable)</li>
                  <li>Transfer Certificate from previous school (original)</li>
                  <li>Address proof of parents/guardians</li>
                  <li>Aadhar Card copy of the student</li>
                </ul>
              </TabsContent>
              <TabsContent value="fees" className="p-6 bg-white rounded-b-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3">Fee Structure</h3>
                <p className="mb-4">Our fee structure varies based on the class and facilities opted for. Please contact the school office for detailed information.</p>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="font-semibold">Registration Fee</div>
                      <div className="text-sm text-gray-600">One-time payment at the time of registration</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="font-semibold">Tuition Fee</div>
                      <div className="text-sm text-gray-600">Quarterly payment structure</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="font-semibold">Development Fee</div>
                      <div className="text-sm text-gray-600">Annual payment</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="font-semibold">Transport Fee</div>
                      <div className="text-sm text-gray-600">Optional, depends on distance</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6">
                  <Button className="bg-school-maroon hover:bg-school-light-maroon">Contact For Details</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Campus Life Gallery */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="section-title mx-auto after:left-1/4 after:right-1/4">Campus Life</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A glimpse of the vibrant activities and facilities at GGN Public School.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=500" 
                  alt="Students in Computer Lab" 
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80&w=500" 
                  alt="School Playground" 
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=500" 
                  alt="School Garden" 
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=500" 
                  alt="School Building" 
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=500" 
                  alt="School Trip" 
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=500" 
                  alt="Smart Classroom" 
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=500" 
                  alt="School Facade" 
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&q=80&w=500" 
                  alt="School Library" 
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/gallery">
              <Button className="bg-school-maroon hover:bg-school-light-maroon">View Full Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-school-maroon text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our School Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards providing your child with quality education and a nurturing environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-school-maroon hover:bg-opacity-90">
              Apply for Admission
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-school-maroon">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
