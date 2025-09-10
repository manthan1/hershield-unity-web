import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Heart, Target, Globe, Handshake } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety",
      description: "Creating secure spaces where women can share, grow, and heal without judgment."
    },
    {
      icon: Users,
      title: "Community", 
      description: "Building connections that last beyond events, fostering lifelong sisterhood."
    },
    {
      icon: Handshake,
      title: "Connection",
      description: "Bridging gaps between women of all backgrounds and experiences."
    },
    {
      icon: Target,
      title: "Growth",
      description: "Providing opportunities for personal and professional development."
    },
    {
      icon: Heart,
      title: "Empowerment",
      description: "Inspiring confidence and strength in every woman we reach."
    }
  ];

  const focus = [
    {
      title: "Quarterly Charity Partnerships",
      description: "Every 4 months, we select and fully support a women-centered charity with fundraising and awareness campaigns."
    },
    {
      title: "Community Events",
      description: "Regular networking events, workshops, and gatherings that bring women together for meaningful connections."
    },
    {
      title: "Fundraising & Awareness",
      description: "Raising both funds and awareness for causes that directly impact women and their families."
    },
    {
      title: "Amplifying Voices",
      description: "Spotlighting the stories and achievements of immigrant and South Asian women in our community."
    }
  ];

  return (
    <div className="space-y-0" style={{ backgroundColor: '#B5845E' }}>
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            About HerShield
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto">
            A South Asian women-led non-profit dedicated to creating meaningful opportunities for women to grow, connect, and thrive together.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'hsl(var(--crimson))' }}>
            Who We Are
          </h2>
              <p className="text-lg text-muted-foreground mb-6">
                HerShield is more than an organization – we're a movement of women committed to lifting each other up. Founded by South Asian women who understand the unique challenges of building new lives, we create spaces where every woman can find her voice and her power.
              </p>
              <p className="text-lg text-muted-foreground">
                Our community spans across cultures, ages, and experiences, united by a shared commitment to empowerment and mutual support. We believe that when women support women, incredible things happen.
              </p>
            </div>
            <div className="gradient-primary p-8 rounded-2xl shadow-strong">
              <div className="text-center text-primary-foreground">
                <Globe className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--light-orange))' }}>Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm opacity-90">Women Empowered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">12</div>
                    <div className="text-sm opacity-90">Events Hosted</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">3</div>
                    <div className="text-sm opacity-90">Charity Partners</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">$45K</div>
                    <div className="text-sm opacity-90">Funds Raised</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-strong">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--crimson))' }}>Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To empower women to create independent, fulfilling lives by supporting each other and uplifting causes that directly impact their communities. We provide resources, opportunities, and a sisterhood that helps every woman thrive.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-strong">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--crimson))' }}>Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  A world where every woman, regardless of her background, has the resources, opportunities, and community to succeed. Where sisterhood transcends boundaries and every woman knows she is not alone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--crimson))' }}>
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from individual interactions to community-wide initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="gradient-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'hsl(var(--crimson))' }}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Focus */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url('/lovable-uploads/cd7230b8-9bc4-4103-8d87-2d4fe2b3c4f8.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Crimson overlay */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: '#792836', opacity: 0.7 }}
        ></div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--light-orange))' }}>
              Our Focus Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We concentrate our efforts on initiatives that create lasting impact for women in our communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {focus.map((item, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'hsl(var(--light-orange))' }}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--crimson))' }}>
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate women behind HerShield's mission to empower and uplift our community.
            </p>
          </div>

          <div className="text-center">
            <Card className="shadow-strong max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="gradient-primary w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">S</span>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'hsl(var(--crimson))' }}>Shafoli Kapur</h3>
                <p className="text-lg text-primary font-semibold mb-4">Founder & Executive Director</p>
                <p className="text-muted-foreground text-lg">
                  South Asian immigrant, community leader, and passionate advocate for women's empowerment. Shafoli founded HerShield to create the supportive community she wished she had during her own journey.
                </p>
              </CardContent>
            </Card>
            
            <div className="mt-12">
              <p className="text-lg text-muted-foreground mb-4">
                We're always looking for dedicated volunteers and team members to join our mission.
              </p>
              <Card className="shadow-medium max-w-md mx-auto">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h4 className="text-lg font-semibold mb-2" style={{ color: 'hsl(var(--crimson))' }}>Join Our Team</h4>
                  <p className="text-muted-foreground mb-4">
                    Interested in volunteering or becoming an advisor?
                  </p>
                  <a href="/contact" className="text-primary font-semibold hover:underline">
                    Get in touch →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;