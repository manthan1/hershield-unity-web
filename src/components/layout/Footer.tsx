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
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-foreground/20 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">H</span>
              </div>
              <span className="font-bold text-xl">HerShield</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Elevating women through unity and support. A South Asian women-led initiative empowering women and giving back through quarterly charity partnerships.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
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
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/founder" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Founder's Story
                </Link>
              </li>
              <li>
                <Link to="/charity" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Charity Spotlight
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-primary-foreground/80">
                <a
                  href="mailto:hersheildnetwork@gmail.com"
                  className="hover:text-primary-foreground transition-smooth"
                >
                  hersheildnetwork@gmail.com
                </a>
              </p>
              <p className="text-primary-foreground/80">
                Building stronger futures together
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} HerShield. All rights reserved. Built with ❤️ for women's empowerment.
          </p>
        </div>
      </div>
    </footer>
  );
};