import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, Users, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-hands.jpg";
import communityGallery from "@/assets/community-gallery.jpg";

const Home = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] md:min-h-[90vh] flex items-center py-20 md:py-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/lovable-uploads/56bf302c-99c6-4c8a-8716-c65491bec547.png')` }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 md:mb-6 tracking-wide leading-tight">
            HerShield Network Foundation
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-primary-foreground/90 mb-4 md:mb-6 font-light">
            Elevating Women Through Unity and Purpose
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-4 md:mb-6 max-w-4xl mx-auto leading-relaxed px-4">
            HerShield is an immigrant women-led movement rooted in compassion, courage, and collective power. We exist to create a ripple effect of empowerment — connecting women who rise, heal, and give back together.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-4 md:mb-6 max-w-4xl mx-auto leading-relaxed px-4">
            Every four months, we unite behind a new cause through our Quarterly Impact Partnerships — amplifying voices, raising awareness, and mobilizing resources to build stronger, more equitable futures for women and communities in need.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            At HerShield, we believe that when women come together, change becomes inevitable. We are not just building support — we're building legacy, leadership, and sisterhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('/get-involved', '_self')}
            >
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => window.open('/about', '_self')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Founder's Quote */}
      <section className="py-12 md:py-20" style={{ backgroundColor: 'hsl(var(--light-orange))' }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium italic mb-4 md:mb-6 leading-relaxed" style={{ color: 'hsl(var(--crimson))' }}>
            "HerShield is my promise to every woman: you are not alone. Together, we are stronger, braver, and unstoppable."
          </blockquote>
          <cite className="text-base md:text-lg font-semibold" style={{ color: 'hsl(var(--gray-brown))' }}>
            — Shafoli Kapur, Founder
          </cite>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4" style={{ color: 'hsl(var(--crimson))' }}>
              Upcoming Events
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Join us for meaningful events that bring women together to connect, learn, and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="gradient-secondary w-12 h-12 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: 'hsl(var(--crimson))' }}>Polished by HerShield</h3>
                    <p className="text-sm text-muted-foreground">November 23, 2025</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Join us for an exclusive evening of empowerment, connection, and celebration as we unite women leaders and changemakers.
                </p>
                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={() => window.open('https://polishedbyhershield.eventbrite.com', '_blank')}
                >
                  Book a Seat
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="gradient-secondary w-12 h-12 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: 'hsl(var(--crimson))' }}>Polished Networking</h3>
                    <p className="text-sm text-muted-foreground">November 2025</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Connect with inspiring women, build meaningful relationships, and expand your network at our signature event.
                </p>
                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={() => window.open('/get-involved', '_self')}
                >
                  Reserve Spot
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="gradient-secondary w-12 h-12 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: 'hsl(var(--crimson))' }}>Polished Impact Gala</h3>
                    <p className="text-sm text-muted-foreground">November 2025</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Experience an unforgettable night supporting our quarterly cause, featuring inspiring stories and community impact.
                </p>
                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={() => window.open('/charity', '_self')}
                >
                  Get Tickets
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Cause */}
      <section className="py-12 md:py-20" style={{ backgroundColor: 'hsl(var(--light-orange))' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'hsl(var(--crimson))' }}>
                Featured Cause of the Quarter
              </h2>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'hsl(var(--crimson))' }}>
                Women's Emergency Shelter Network
              </h3>
              <p className="text-lg mb-6" style={{ color: 'hsl(var(--gray-brown))' }}>
                This quarter, we're partnering with the Women's Emergency Shelter Network to provide safe housing and support services for women and children escaping domestic violence. Every donation goes directly to providing shelter, counseling, and job training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={() => window.open('https://donate.stripe.com/hershield-donation', '_blank')}
                >
                  Donate Now
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('/charity', '_self')}
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <Card className="shadow-strong">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2" style={{ color: 'hsl(var(--crimson))' }}>100% Transparency</h4>
                  <p className="text-muted-foreground mb-4">
                    Every dollar donated goes directly to our partner charity. We cover all administrative costs separately.
                  </p>
                  <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                    $15,000
                  </div>
                  <p className="text-sm text-muted-foreground">raised this quarter</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4" style={{ color: 'hsl(var(--crimson))' }}>
              Our Community in Action
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              See the power of women supporting women through our events, workshops, and community initiatives.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-strong">
            <img
              src={communityGallery}
              alt="HerShield community members at various events and workshops"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 gradient-primary opacity-20"></div>
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                Join Our Growing Community
              </h3>
              <p className="text-primary-foreground/90 mb-4">
                Over 500 women connected and empowered
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('/get-involved', '_self')}
              >
                Be Part of the Movement
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;