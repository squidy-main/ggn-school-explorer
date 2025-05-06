
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Effect to scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { 
      name: "Home", 
      path: "/",
      dropdown: [] 
    },
    { 
      name: "About", 
      path: "/about",
      dropdown: [
        { name: "School History", path: "/about#history" },
        { name: "Our Vision & Mission", path: "/about#vision" },
        { name: "Principal's Message", path: "/about#message" },
        { name: "Management", path: "/about#management" },
      ] 
    },
    { 
      name: "Infrastructure", 
      path: "/infrastructure",
      dropdown: [
        { name: "Campus Tour", path: "/infrastructure#campus" },
        { name: "Classrooms", path: "/infrastructure#classrooms" },
        { name: "Laboratories", path: "/infrastructure#laboratories" },
        { name: "Library", path: "/infrastructure#library" },
        { name: "Sports Facilities", path: "/infrastructure#sports" },
      ]
    },
    { 
      name: "Academics", 
      path: "/academics",
      dropdown: [
        { name: "Curriculum", path: "/academics#curriculum" },
        { name: "Faculty", path: "/academics#faculty" },
        { name: "Examination System", path: "/academics#examination" },
        { name: "Academic Calendar", path: "/academics#calendar" },
      ]
    },
    { 
      name: "Student Life", 
      path: "/student-life",
      dropdown: [
        { name: "Co-Curricular Activities", path: "/student-life#activities" },
        { name: "Clubs & Societies", path: "/student-life#clubs" },
        { name: "Student Council", path: "/student-life#council" },
        { name: "School Events", path: "/student-life#events" },
      ]
    },
    { 
      name: "Photo Gallery", 
      path: "/gallery",
      dropdown: [
        { name: "Events Gallery", path: "/gallery#events" },
        { name: "Sports Gallery", path: "/gallery#sports" },
        { name: "Campus Gallery", path: "/gallery#campus" },
      ]
    },
    { 
      name: "Notable Visits", 
      path: "/notable-visits",
      dropdown: []
    },
    { 
      name: "Hall of Fame", 
      path: "/hall-of-fame",
      dropdown: [
        { name: "Academic Achievers", path: "/hall-of-fame#academic" },
        { name: "Sports Achievers", path: "/hall-of-fame#sports" },
        { name: "Cultural Achievers", path: "/hall-of-fame#cultural" },
      ]
    },
    { 
      name: "Alumni", 
      path: "/alumni",
      dropdown: [
        { name: "Alumni Network", path: "/alumni#network" },
        { name: "Distinguished Alumni", path: "/alumni#distinguished" },
        { name: "Alumni Events", path: "/alumni#events" },
      ]
    },
    { 
      name: "Contact Us", 
      path: "/contact",
      dropdown: []
    },
  ];

  return (
    <header className="relative w-full">
      {/* Top Bar with contact info */}
      <div className="bg-school-maroon text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span className="text-sm">+91 1234567890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span className="text-sm">info@ggnpublicschool.in</span>
            </div>
          </div>
          <div>
            <Button variant="link" className="text-white p-0 h-auto text-sm hover:text-school-cream">
              Student Login
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`w-full py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-luxury sticky top-0 z-50"
            : "bg-white md:bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <img 
                src="https://www.ggnpublicschool.in/assets/img/logo.png" 
                alt="GGN Public School Logo" 
                className="h-16 mr-3"
              />
              <div className="hidden md:block">
                <h1 className="text-lg md:text-xl font-bold text-school-maroon font-serif">
                  GGN Public School
                </h1>
                <p className="text-xs md:text-sm text-gray-600">
                  Excellence in Education
                </p>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <div key={link.path} className="relative group">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "nav-link nav-link-active" : "nav-link"
                    }
                  >
                    {link.name}
                  </NavLink>
                  
                  {link.dropdown.length > 0 && (
                    <div className="dropdown-menu">
                      {link.dropdown.map((subLink, index) => (
                        <a 
                          key={index} 
                          href={subLink.path} 
                          className="dropdown-link"
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-school-maroon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-white transform ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } transition-all duration-300 ease-in-out pt-16`}
      >
        <div className="container px-4 py-6 flex flex-col h-full">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-school-maroon"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          
          {/* Mobile Contact Info */}
          <div className="flex flex-col gap-4 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-school-maroon" />
              <span>+91 1234567890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-school-maroon" />
              <span>info@ggnpublicschool.in</span>
            </div>
            <Button variant="outline" className="w-full mt-2 text-sm border-school-maroon text-school-maroon hover:bg-school-maroon hover:text-white">
              Student Login
            </Button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col space-y-1 overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.path} className="border-b border-gray-100 last:border-b-0">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-school-maroon font-medium border-l-4 border-school-maroon pl-4 py-3 block"
                      : "text-gray-700 border-l-4 border-transparent pl-4 py-3 block"
                  }
                  onClick={() => link.dropdown.length === 0 && setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
                
                {link.dropdown.length > 0 && (
                  <div className="pl-8 py-2 space-y-1 bg-gray-50">
                    {link.dropdown.map((subLink, index) => (
                      <a 
                        key={index} 
                        href={subLink.path} 
                        className="block py-2 px-4 text-sm text-gray-700 hover:text-school-maroon"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        - {subLink.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
