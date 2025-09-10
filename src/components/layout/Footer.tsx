import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const socialLinks = [
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@hershieldnetwork",
      icon: "🎵",
    },
    {
      name: "Instagram", 
      url: "https://www.instagram.com/hershieldnetwork/",
      icon: "📷",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCYIzdkK93fFXehLkLniFN1A",
      icon: "📹", 
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/108386213/admin/dashboard/",
      icon: "💼",
    },
  ];

  return (
    <footer style={{ backgroundColor: 'hsl(var(--light-orange))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/888c2ae8-3f0b-4d70-8b82-84eb003f8973.png" 
                alt="HerShield Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-xl" style={{ color: 'hsl(var(--crimson))' }}>HerShield</span>
            </div>
            <p className="mb-4 max-w-md" style={{ color: 'hsl(var(--gray-brown))' }}>
              Elevating women through unity and support. A South Asian women-led initiative empowering women and giving back through quarterly charity partnerships.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-gray-brown/20 hover:bg-gray-brown hover:text-light-orange"
                    style={{ 
                      color: 'hsl(var(--gray-brown))', 
                      borderColor: 'hsl(var(--gray-brown) / 0.3)'
                    }}
                  >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span>{social.icon}</span>
                    {social.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ color: 'hsl(var(--crimson))' }}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="transition-smooth hover:opacity-80"
                  style={{ color: 'hsl(var(--gray-brown))' }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/founder" 
                  className="transition-smooth hover:opacity-80"
                  style={{ color: 'hsl(var(--gray-brown))' }}
                >
                  Founder's Story
                </Link>
              </li>
              <li>
                <Link 
                  to="/charity" 
                  className="transition-smooth hover:opacity-80"
                  style={{ color: 'hsl(var(--gray-brown))' }}
                >
                  Charity Spotlight
                </Link>
              </li>
              <li>
                <Link 
                  to="/get-involved" 
                  className="transition-smooth hover:opacity-80"
                  style={{ color: 'hsl(var(--gray-brown))' }}
                >
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ color: 'hsl(var(--crimson))' }}>Contact Us</h3>
            <div className="space-y-2">
              <p style={{ color: 'hsl(var(--gray-brown))' }}>
                <a
                  href="mailto:hersheildnetwork@gmail.com"
                  className="hover:opacity-80 transition-smooth"
                  style={{ color: 'hsl(var(--gray-brown))' }}
                >
                  hersheildnetwork@gmail.com
                </a>
              </p>
              <p style={{ color: 'hsl(var(--gray-brown))' }}>
                Building stronger futures together
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid hsl(var(--gray-brown) / 0.3)' }}>
          <p style={{ color: 'hsl(var(--gray-brown) / 0.7)' }}>
            © {new Date().getFullYear()} HerShield. All rights reserved. Built with ❤️ for women's empowerment.
          </p>
        </div>
      </div>
    </footer>
  );
};