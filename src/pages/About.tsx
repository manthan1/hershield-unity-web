import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, Shield, Sparkles, HandHeart } from "lucide-react";

const About = () => {
  const coreValues = [
    {
      icon: Users,
      title: "Empowerment through Connection",
      description: "We believe true empowerment begins with community. When women connect, share, and lift each other, possibilities multiply. We create spaces where every woman feels seen, heard, and valued — because belonging fuels confidence, and confidence fuels change."
    },
    {
      icon: Heart,
      title: "Purpose with Compassion",
      description: "Our mission is rooted in empathy. We approach every initiative, partnership, and interaction with heart — because giving back isn't about charity, it's about shared humanity. Compassion guides our leadership and defines our impact."
    },
    {
      icon: Globe,
      title: "Unity in Diversity",
      description: "HerShield was built by immigrant women from all walks of life. We celebrate our differences as our greatest strength — weaving diverse voices, cultures, and stories into one powerful network of solidarity and sisterhood."
    },
    {
      icon: Shield,
      title: "Integrity in Action",
      description: "We lead with transparency, accountability, and authenticity. Every action we take reflects our promise to serve with honesty and uphold the trust of our community and partners."
    },
    {
      icon: Sparkles,
      title: "Growth through Giving",
      description: "We believe that every act of giving — whether time, skill, or kindness — creates a ripple effect. Through our quarterly charity partnerships, we don't just support causes; we nurture growth, hope, and opportunity for others and ourselves."
    },
    {
      icon: HandHeart,
      title: "Leadership through Empathy",
      description: "We redefine what it means to lead. For us, leadership is not about hierarchy — it's about heart. It's about listening deeply, showing up authentically, and creating room for others to rise beside us."
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            About HerShield
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto">
            An immigrant women-led movement rooted in compassion, courage, and collective power.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--crimson))' }}>
              Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from individual interactions to community-wide initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="p-6">
                  <div className="gradient-secondary w-16 h-16 rounded-full flex items-center justify-center mb-4">
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

      {/* Mission & Vision */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-strong">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--crimson))' }}>Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  To create a global community where women — especially immigrant women — feel empowered, supported, and celebrated.
                </p>
                <p className="text-lg text-muted-foreground">
                  Through connection, mentorship, and meaningful giving, we provide women with the resources, network, and opportunities they need to grow, heal, and lead — while giving back to the communities that shaped them.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-strong">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--crimson))' }}>Our Vision</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  A world where every woman, regardless of her background or beginning, feels seen, valued, and equipped to rise.
                </p>
                <p className="text-lg text-muted-foreground">
                  We envision a future built on unity and compassion — where women uplift one another, transform challenges into change, and collectively build stronger, more inclusive communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;