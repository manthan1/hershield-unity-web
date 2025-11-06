import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Founder's Story", path: "/founder" },
  { name: "Founding Members", path: "/founding-members" },
  { name: "Charity Spotlight", path: "/charity" },
  { name: "Get Involved", path: "/get-involved" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-soft" style={{ backgroundColor: 'hsl(var(--light-orange))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center absolute left-4">
            <img 
              src="/lovable-uploads/888c2ae8-3f0b-4d70-8b82-84eb003f8973.png" 
              alt="HerShield Logo" 
              className="w-16 h-16 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-smooth ${
                  location.pathname === link.path
                    ? "border-b-2"
                    : ""
                }`}
                style={{
                  color: location.pathname === link.path ? 'hsl(var(--crimson))' : 'hsl(var(--gray-brown))',
                  borderColor: location.pathname === link.path ? 'hsl(var(--crimson))' : 'transparent'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t" style={{ backgroundColor: 'hsl(var(--light-orange))', borderColor: 'hsl(var(--gray-brown) / 0.3)' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 text-base font-medium rounded-md transition-smooth"
                  style={{
                    color: location.pathname === link.path ? 'hsl(var(--crimson))' : 'hsl(var(--gray-brown))',
                    backgroundColor: location.pathname === link.path ? 'hsl(var(--crimson) / 0.1)' : 'transparent'
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};