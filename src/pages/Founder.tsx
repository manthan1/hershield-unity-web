import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Heart, Star, ArrowRight } from "lucide-react";
import founderImage from "@/assets/shafoli-kapur.jpg";

const Founder = () => {
  const milestones = [
    {
      year: "2009",
      title: "Arrived in Canada",
      description:
        "Began a new chapter, navigating the initial challenges of building a life and community from scratch as an immigrant.",
    },
    {
      year: "2018",
      title: "Finding Her Footing",
      description:
        "After years of perseverance, began to establish a strong sense of place and community in her new country.",
    },
    {
      year: "2022",
      title: "Found Her Voice",
      description:
        "Started advocating for the rights of immigrant women, discovering the incredible power of community and mutual support.",
    },
    {
      year: "2024",
      title: "Founded HerShield",
      description:
        "Launched HerShield to create the safe, supportive, and empowering space she wished she'd had during her own journey.",
    },
    {
      year: "2025",
      title: "Growing Impact",
      description: "Expanded to serve over 500 women and raised $45,000 for women-centered causes.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Meet Shafoli Kapur</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto">
            Founder, visionary, and champion for women's empowerment
          </p>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">A Journey of Resilience</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Shafoli's story is one of courage, determination, and the transformative power of community. As a South
                Asian immigrant who built her life in Canada from the ground up, she intimately understands the
                challenges of starting over in a new country.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Navigating complex systems, building professional networks, and finding her place in a new culture –
                Shafoli faced each challenge with grace and determination. But she also recognized something important:
                no woman should have to face these challenges alone.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, as a respected community leader, successful professional, and passionate advocate, Shafoli has
                dedicated her life to ensuring other women have the support, resources, and community she had to build
                for herself.
              </p>
              {/* <Button variant="cta" size="lg">
                Learn About Our Impact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
            </div>

            <div className="relative">
              <Card className="shadow-strong overflow-hidden">
                <img
                  src={founderImage}
                  alt="Shafoli Kapur, Founder of HerShield"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 gradient-primary opacity-20"></div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-strong">
            <CardContent className="p-12 text-center">
              <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic mb-8">
                "I built HerShield because I wanted to create the space I once needed — a place where women feel
                empowered, supported, and celebrated. Every woman deserves to know that she is not alone in her
                journey."
              </blockquote>
              <cite className="text-lg text-muted-foreground font-semibold">— Shafoli Kapur, Founder of HerShield</cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Shafoli's Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From immigrant to community leader, Shafoli's path shows the power of resilience and the importance of
              lifting others as we climb.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="gradient-secondary w-16 h-16 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-secondary-foreground">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-lg text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Impact */}
      <section className="py-20 bg-primary-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="shadow-strong">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Her Vision</h3>
                <p className="text-muted-foreground">
                  To create a world where every woman has access to the community, resources, and opportunities she
                  needs to thrive, regardless of her background or circumstances.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-strong">
              <CardContent className="p-8 text-center">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Her Leadership</h3>
                <p className="text-muted-foreground">
                  Through authentic leadership and personal vulnerability, Shafoli creates safe spaces where women can
                  share their stories and find their power.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-strong">
              <CardContent className="p-8 text-center">
                <ArrowRight className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Her Impact</h3>
                <p className="text-muted-foreground">
                  Building a movement that extends far beyond individual success to create lasting change for women in
                  communities everywhere.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Be Part of Shafoli's Vision</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the movement that Shafoli started. Every woman who joins HerShield adds to the network of support,
            strength, and sisterhood that transforms lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Get Involved Today
            </Button>
            <Button variant="outline" size="lg">
              Connect with Shafoli
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder;
