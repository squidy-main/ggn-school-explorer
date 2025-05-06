
import { Link } from "react-router-dom";
import { Mail, Phone, Home } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-school-dark text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About School */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <div className="w-8 h-8 mr-2 rounded-full bg-school-blue flex items-center justify-center text-white font-bold text-sm">
                GGN
              </div>
              GGN Public School
            </h3>
            <p className="text-gray-300 mb-4">
              At GGN Public School, we strive to provide quality education with emphasis on academic excellence, 
              character building and overall development of students to make them responsible citizens.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-school-blue text-white p-2 rounded-full hover:bg-school-light-blue transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-school-blue text-white p-2 rounded-full hover:bg-school-light-blue transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-school-blue text-white p-2 rounded-full hover:bg-school-light-blue transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-300 hover:text-white transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/infrastructure" className="text-gray-300 hover:text-white transition-colors">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/student-life" className="text-gray-300 hover:text-white transition-colors">
                  Student Life
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Home className="mr-3 h-5 w-5 text-school-blue shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  GGN Public School, <br/>
                  Sector-57, Near Hong Kong Bazzar, <br/>
                  Gurgaon, Haryana 122001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-school-blue" />
                <span className="text-gray-300">+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-school-blue" />
                <span className="text-gray-300">info@ggnpublicschool.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} GGN Public School. All Rights Reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <ul className="flex space-x-4 text-xs text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
