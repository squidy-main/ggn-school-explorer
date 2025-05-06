
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Infrastructure", path: "/infrastructure" },
    { name: "Academics", path: "/academics" },
    { name: "Student Life", path: "/student-life" },
    { name: "Photo Gallery", path: "/gallery" },
    { name: "Notable Visits", path: "/notable-visits" },
    { name: "Hall of Fame", path: "/hall-of-fame" },
    { name: "Alumni", path: "/alumni" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="relative w-full">
      {/* Top Bar with contact info */}
      <div className="bg-school-blue text-white py-2 hidden md:block">
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
            <Button variant="link" className="text-white p-0 h-auto text-sm">
              Student Login
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`w-full py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md sticky top-0 z-50"
            : "bg-white md:bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <div className="w-12 h-12 mr-3 rounded-full bg-school-blue flex items-center justify-center text-white font-bold text-xl">
                GGN
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-school-blue">
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
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "nav-link nav-link-active" : "nav-link"
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-school-blue"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
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
          {/* Mobile Contact Info */}
          <div className="flex flex-col gap-4 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-school-blue" />
              <span>+91 1234567890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-school-blue" />
              <span>info@ggnpublicschool.in</span>
            </div>
            <Button variant="outline" className="w-full mt-2 text-sm">
              Student Login
            </Button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-school-blue font-medium border-l-4 border-school-blue pl-4 py-2"
                    : "text-gray-700 border-l-4 border-transparent pl-4 py-2"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
