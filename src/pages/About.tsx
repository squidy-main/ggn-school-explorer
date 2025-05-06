
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-school-blue py-16 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-3xl">
            Learn more about GGN Public School's history, mission, vision, and the dedicated team behind our educational excellence.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsTrigger value="vision">Vision & Mission</TabsTrigger>
                  <TabsTrigger value="management">Management</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <h2 className="text-2xl font-bold mb-4 text-school-dark">GGN Public School Overview</h2>
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1000" 
                      alt="GGN Public School Campus" 
                      className="rounded-lg w-full h-auto object-cover mb-4"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    GGN Public School is a prestigious educational institution located in Gurgaon, Haryana. Established with the vision of providing quality education, our school has been nurturing young minds and helping them realize their potential for over two decades.
                  </p>
                  <p className="text-gray-700 mb-4">
                    At GGN Public School, we believe in a holistic approach to education that focuses not only on academic excellence but also on character building, physical development, and instilling moral values. Our comprehensive curriculum is designed to prepare students for the challenges of the future while ensuring they remain rooted in their cultural values.
                  </p>
                  <p className="text-gray-700">
                    Our school is affiliated with the Central Board of Secondary Education (CBSE) and offers education from Nursery to Class XII. With state-of-the-art infrastructure, qualified faculty, and a conducive learning environment, we strive to provide the best educational experience for our students.
                  </p>
                </TabsContent>
                
                <TabsContent value="history" className="mt-6">
                  <h2 className="text-2xl font-bold mb-4 text-school-dark">Our History</h2>
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1000" 
                      alt="GGN Public School Old Building" 
                      className="rounded-lg w-full h-auto object-cover mb-4"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Founded in the year 2000, GGN Public School started with a modest building and a small batch of students. The school was established by visionary educators who wanted to create an institution that would not only impart knowledge but also shape character.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Over the years, the school has grown significantly in terms of infrastructure, student strength, and academic achievements. What began as a small initiative has now transformed into one of the leading educational institutions in Gurgaon.
                  </p>
                  <p className="text-gray-700">
                    Throughout its journey, GGN Public School has maintained its commitment to educational excellence and has continuously evolved to meet the changing needs of education in the 21st century. Today, our alumni are spread across the globe, making significant contributions in various fields.
                  </p>
                </TabsContent>
                
                <TabsContent value="vision" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h2 className="text-2xl font-bold mb-4 text-school-dark">Our Vision</h2>
                      <p className="text-gray-700 mb-4">
                        To be a center of excellence in education that nurtures individuals with strong character, innovative thinking, and a global perspective while remaining rooted in cultural values.
                      </p>
                      <p className="text-gray-700">
                        We envision creating a community of lifelong learners who are equipped to meet the challenges of an ever-changing world and make positive contributions to society.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h2 className="text-2xl font-bold mb-4 text-school-dark">Our Mission</h2>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>To provide quality education that promotes academic excellence and intellectual growth.</li>
                        <li>To foster a safe and supportive learning environment that encourages creativity and critical thinking.</li>
                        <li>To develop well-rounded individuals with strong moral values and leadership qualities.</li>
                        <li>To prepare students for global citizenship while preserving and respecting cultural heritage.</li>
                        <li>To continuously innovate and improve our teaching methodologies and infrastructure.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-school-dark">Core Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-bold text-school-blue mb-2">Excellence</h3>
                        <p className="text-sm text-gray-700">Striving for the highest standards in all our endeavors.</p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-bold text-school-blue mb-2">Integrity</h3>
                        <p className="text-sm text-gray-700">Upholding honesty, ethics, and moral principles in all actions.</p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-bold text-school-blue mb-2">Respect</h3>
                        <p className="text-sm text-gray-700">Valuing diversity and treating everyone with dignity.</p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-bold text-school-blue mb-2">Innovation</h3>
                        <p className="text-sm text-gray-700">Encouraging creative thinking and new approaches to learning.</p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-bold text-school-blue mb-2">Responsibility</h3>
                        <p className="text-sm text-gray-700">Instilling accountability towards self, community, and environment.</p>
                      </div>
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-bold text-school-blue mb-2">Collaboration</h3>
                        <p className="text-sm text-gray-700">Working together to achieve common goals and shared success.</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="management" className="mt-6">
                  <h2 className="text-2xl font-bold mb-6 text-school-dark">Our Management Team</h2>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=400" 
                            alt="Principal" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-bold text-school-blue mb-1">Dr. Anita Sharma</h3>
                        <p className="text-gray-500 mb-3">Principal</p>
                        <p className="text-gray-700 mb-3">
                          Dr. Anita Sharma brings over 25 years of experience in education to GGN Public School. With a Ph.D. in Education and numerous accolades for her contributions to the field, she leads the school with a vision for excellence and innovation.
                        </p>
                        <p className="text-gray-700">
                          Under her leadership, the school has achieved remarkable progress in academic performance, infrastructure development, and extra-curricular activities. Her approach to education emphasizes holistic development and preparing students for global challenges.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
                            alt="Chairman" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-bold text-school-blue mb-1">Mr. Rajiv Gupta</h3>
                        <p className="text-gray-500 mb-3">Chairman</p>
                        <p className="text-gray-700 mb-3">
                          Mr. Rajiv Gupta is a distinguished entrepreneur and education enthusiast who founded GGN Public School with the vision of providing quality education to the children of Gurgaon. His passion for education stems from his belief in its power to transform lives.
                        </p>
                        <p className="text-gray-700">
                          As Chairman, he provides strategic guidance to the school management and ensures that the institution stays true to its founding principles while adapting to modern educational needs.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                            alt="Vice Principal" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-bold text-school-blue mb-1">Ms. Priya Malhotra</h3>
                        <p className="text-gray-500 mb-3">Vice Principal</p>
                        <p className="text-gray-700 mb-3">
                          Ms. Priya Malhotra is a seasoned educator with expertise in curriculum development and teacher training. With a Master's in Education and extensive experience in academic administration, she plays a crucial role in the day-to-day operations of the school.
                        </p>
                        <p className="text-gray-700">
                          She works closely with faculty members to implement innovative teaching methodologies and ensure that the school maintains high academic standards. Her dedication to student welfare makes her a beloved figure among students and parents alike.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-school-dark">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <span className="text-gray-700">Established</span>
                    <span className="font-semibold">2000</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-700">Affiliation</span>
                    <span className="font-semibold">CBSE</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-700">Classes</span>
                    <span className="font-semibold">Nursery to XII</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-700">Campus Area</span>
                    <span className="font-semibold">5 Acres</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-700">Student Strength</span>
                    <span className="font-semibold">1500+</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-gray-700">Faculty</span>
                    <span className="font-semibold">100+</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-school-dark">Our Achievements</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>National Award for Excellence in Education, 2023</li>
                  <li>Best School Infrastructure Award, Haryana, 2022</li>
                  <li>100% Result in CBSE Board Examinations since 2015</li>
                  <li>State Champions in Inter-School Science Olympiad, 2021</li>
                  <li>National Level Sports Recognition for Basketball Team, 2020</li>
                </ul>
              </div>
              
              <div className="bg-school-blue text-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="mb-4">
                  Have questions about our school? We'd love to hear from you. Reach out to us for any inquiries.
                </p>
                <Button className="w-full bg-white text-school-blue hover:bg-gray-100">Get In Touch</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-school-dark">Experience GGN Public School</h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            We invite you to visit our campus and see firsthand the vibrant learning environment we've created for our students. Schedule a tour today or attend one of our open houses.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-school-blue hover:bg-school-light-blue text-white">
              Schedule a Visit
            </Button>
            <Button variant="outline" className="border-school-blue text-school-blue hover:bg-school-blue hover:text-white">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
