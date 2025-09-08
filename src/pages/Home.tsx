import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, Users, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-hands.jpg";
import communityGallery from "@/assets/community-gallery.jpg";

const Home = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/lovable-uploads/5bb117a7-9552-418c-a2af-8f07a55ddd00.png')` }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 tracking-wide">
            HERSHIELD
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary-foreground/90 mb-4 font-light">
            Elevating women through unity and support
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            HerShield is a South Asian women-led initiative by Shafoli, built to empower women and give back through quarterly charity partnerships. Every four months, we stand behind a new cause, raising awareness and resources to help women build stronger futures.
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
      <section className="py-20" style={{ backgroundColor: 'hsl(var(--light-orange))' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium italic mb-6" style={{ color: 'hsl(var(--crimson))' }}>
            "HerShield is my promise to every woman: you are not alone. Together, we are stronger, braver, and unstoppable."
          </blockquote>
          <cite className="text-lg font-semibold" style={{ color: 'hsl(var(--gray-brown))' }}>
            — Shafoli Kapur, Founder
          </cite>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--crimson))' }}>
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                    <h3 className="font-semibold text-lg" style={{ color: 'hsl(var(--crimson))' }}>CoHere Networking</h3>
                    <p className="text-sm text-muted-foreground">March 15, 2024</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Connect with like-minded women in an empowering networking environment designed for growth and collaboration.
                </p>
                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={() => window.open('https://www.eventbrite.com/e/cohere-networking-tickets', '_blank')}
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
                    <h3 className="font-semibold text-lg" style={{ color: 'hsl(var(--crimson))' }}>Leadership Workshop</h3>
                    <p className="text-sm text-muted-foreground">April 8, 2024</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Develop leadership skills and confidence through interactive workshops led by successful women leaders.
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
                    <h3 className="font-semibold text-lg" style={{ color: 'hsl(var(--crimson))' }}>Community Fundraiser</h3>
                    <p className="text-sm text-muted-foreground">May 20, 2024</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Join our quarterly fundraising event supporting women's shelters and empowerment programs.
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
      <section className="py-20" style={{ backgroundColor: 'hsl(var(--light-orange))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--crimson))' }}>
              Our Community in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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