
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Home, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-school-blue py-16 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-3xl">
            We'd love to hear from you. Reach out to us for any inquiries or to schedule a visit.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="section-title mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Home className="h-6 w-6 text-school-blue mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Address</h3>
                      <p className="text-gray-700">
                        GGN Public School, <br/>
                        Sector-57, Near Hong Kong Bazzar, <br/>
                        Gurgaon, Haryana 122001
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-school-blue mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Phone</h3>
                      <p className="text-gray-700">
                        Main Office: +91 1234567890 <br/>
                        Admissions: +91 0987654321
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-school-blue mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email</h3>
                      <p className="text-gray-700">
                        General Inquiries: info@ggnpublicschool.in <br/>
                        Admissions: admissions@ggnpublicschool.in
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="p-6 bg-gray-100 rounded-lg">
                  <h3 className="font-bold text-lg mb-4">Office Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="section-title mb-8">Send us a Message</h2>
              
              <Card>
                <CardContent className="p-6">
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <Input id="name" placeholder="Your Name" required />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <Input id="email" type="email" placeholder="Your Email" required />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <Input id="phone" placeholder="Your Phone Number" />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <Input id="subject" placeholder="Message Subject" />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <Textarea id="message" placeholder="Your Message" rows={5} required />
                    </div>
                    
                    <Button type="submit" className="w-full bg-school-blue hover:bg-school-light-blue">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-8 pb-16">
        <div className="container-custom">
          <h2 className="section-title mb-8">Find Us</h2>
          <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            {/* This would be replaced with an actual map integration */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <p className="text-gray-600">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
