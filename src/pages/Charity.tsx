import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Target, DollarSign, Heart, Users, CheckCircle, ArrowRight } from "lucide-react";

const Charity = () => {
  const pastPartners = [
    {
      name: "Women's Crisis Centre",
      period: "Q1 2024",
      raised: "$15,000",
      impact: "Provided emergency shelter for 45 women and children",
      status: "Completed"
    },
    {
      name: "Immigrant Women's Services",
      period: "Q4 2023",
      raised: "$12,500",
      impact: "Funded job training programs for 60 women",
      status: "Completed"
    },
    {
      name: "Girls Education Fund",
      period: "Q3 2023",
      raised: "$18,000",
      impact: "Sponsored education for 30 girls in underserved communities",
      status: "Completed"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Charity Selection",
      description: "Our team carefully researches and selects women-focused charities with proven track records and transparent operations."
    },
    {
      step: 2,
      title: "Community Engagement", 
      description: "We host events, workshops, and awareness campaigns to educate our community about the charity's mission and impact."
    },
    {
      step: 3,
      title: "Fundraising Events",
      description: "Throughout the quarter, we organize various fundraising activities, from galas to community challenges."
    },
    {
      step: 4,
      title: "Full Transparency",
      description: "100% of donations raised go directly to the charity. We provide detailed reports on how funds are used and impact achieved."
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Quarterly Charity Partnership
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto">
            Every four months, HerShield partners with a women-focused charity to raise funds and awareness for causes that directly impact women's lives.
          </p>
        </div>
      </section>

      {/* Current Partnership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 gradient-secondary text-secondary-foreground px-4 py-2">
              Current Quarter - Q2 2024
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--crimson))' }}>
              Women's Emergency Shelter Network
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-strong lg:col-span-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--crimson))' }}>About Our Current Partner</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  The Women's Emergency Shelter Network operates 12 shelters across the region, providing safe housing, counseling services, and job training programs for women and children escaping domestic violence. They've helped over 2,000 families find safety and rebuild their lives.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Emergency Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">95%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>

                <h4 className="font-semibold text-lg mb-3">Services Provided:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Emergency shelter and safety planning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Trauma-informed counseling and therapy
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Job training and employment assistance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Legal advocacy and support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Children's programs and childcare
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-strong">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Fundraising Progress</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">$15,250</div>
                      <div className="text-sm text-muted-foreground">Raised So Far</div>
                    </div>
                    
                    <div className="w-full bg-secondary-lighter rounded-full h-3">
                      <div className="gradient-primary h-3 rounded-full" style={{width: "61%"}}></div>
                    </div>
                    
                    <div>
                      <div className="text-xl font-semibold text-foreground mb-1">$25,000</div>
                      <div className="text-sm text-muted-foreground">Quarter Goal</div>
                    </div>
                  </div>

                  <Button variant="cta" size="lg" className="w-full mt-6">
                    Donate Now
                    <Heart className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <p className="text-xs text-muted-foreground mt-3">
                    100% goes directly to the charity
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-medium bg-secondary-lighter">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">Upcoming Fundraising Events</h3>
                  <p className="text-muted-foreground">Join us in supporting this quarter's cause</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-4 rounded-lg shadow-soft">
                  <h4 className="font-semibold text-foreground mb-2">Community Gala Night</h4>
                  <p className="text-sm text-muted-foreground mb-2">March 25, 2024 • 7:00 PM</p>
                  <p className="text-sm text-muted-foreground">An elegant evening of dinner, speakers, and silent auction</p>
                </div>
                <div className="bg-background p-4 rounded-lg shadow-soft">
                  <h4 className="font-semibold text-foreground mb-2">5K Walk for Safety</h4>
                  <p className="text-sm text-muted-foreground mb-2">April 15, 2024 • 9:00 AM</p>
                  <p className="text-sm text-muted-foreground">Family-friendly walk raising awareness and funds</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Our Partnership Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach ensures maximum impact and complete transparency in every partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="gradient-secondary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-secondary-foreground">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Partnerships */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Past Partnership Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the tangible difference we've made together with our previous charity partners.
            </p>
          </div>

          <div className="space-y-6">
            {pastPartners.map((partner, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-foreground">{partner.name}</h3>
                        <Badge variant="secondary" className="bg-primary-lighter text-primary">
                          {partner.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">{partner.period}</p>
                      <p className="text-foreground font-medium">{partner.impact}</p>
                    </div>
                    
                    <div className="text-center lg:text-right">
                      <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-1">
                        {partner.raised}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Raised</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="shadow-strong max-w-lg mx-auto">
              <CardContent className="p-8">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Total Impact</h3>
                <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  $45,500
                </div>
                <p className="text-muted-foreground">
                  Raised for women-focused charities since our founding
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-primary-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Support Our Current Cause
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every donation, no matter the size, makes a real difference in the lives of women seeking safety and support. Join us in creating lasting change.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Make a Donation
              <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More About Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            Questions about our charity partnerships? <a href="/contact" className="text-primary font-semibold hover:underline">Contact us</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Charity;