import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Handshake, Heart, Calendar, ArrowRight, Mail, Phone } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

const GetInvolved = () => {
  const ways = [
    {
      icon: Users,
      title: "Volunteer with Us",
      description: "Join our team of passionate volunteers helping with events, outreach, and community programs.",
      action: "Apply to Volunteer",
      benefits: ["Flexible scheduling", "Skill-building opportunities", "Networking with like-minded women", "Making direct impact"]
    },
    {
      icon: Handshake,
      title: "Partner with Us", 
      description: "Organizations and businesses can partner with HerShield to amplify our collective impact.",
      action: "Explore Partnership",
      benefits: ["Brand alignment with social impact", "Employee engagement opportunities", "Community visibility", "Tax benefits"]
    },
    {
      icon: Calendar,
      title: "Host an Event",
      description: "Lead a workshop, networking event, or fundraiser within the HerShield community.",
      action: "Propose an Event",
      benefits: ["Platform for your expertise", "Community building", "Personal brand development", "Leadership experience"]
    },
    {
      icon: Heart,
      title: "Join Our Community",
      description: "Become part of our supportive network of women committed to empowerment and growth.",
      action: "Join Community",
      benefits: ["Monthly networking events", "Mentorship opportunities", "Professional development", "Lifelong friendships"]
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Be Part of the Movement
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto">
            There are many ways to contribute to HerShield's mission of empowering women and creating lasting change in our communities.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ways to Make a Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the involvement level that works for you. Every contribution matters and helps us build stronger communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ways.map((way, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="gradient-secondary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <way.icon className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{way.title}</h3>
                      <p className="text-muted-foreground">{way.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">What you'll gain:</h4>
                    <ul className="space-y-1">
                      {way.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="cta" className="w-full">
                    {way.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Forms Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose how you'd like to get involved and we'll connect with you soon.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ContactForm 
              title="Volunteer with Us" 
              type="volunteer"
            />
            <ContactForm 
              title="Partner with HerShield" 
              type="partner"
            />
            <ContactForm 
              title="Join Our Community" 
              type="community"
            />
            <ContactForm 
              title="Event Interest Form" 
              type="event"
            />
          </div>
        </div>
      </section>

      {/* Partnership Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Corporate & Organizational Partnerships
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partner with HerShield to amplify your organization's impact on women's empowerment and community development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Event Sponsorship</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Brand visibility at our events</li>
                  <li>• Speaking opportunities</li>
                  <li>• Networking with community leaders</li>
                  <li>• Social media recognition</li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Employee Engagement</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Team volunteer opportunities</li>
                  <li>• Skill-based volunteering</li>
                  <li>• Corporate social responsibility</li>
                  <li>• Employee mentorship programs</li>
                </ul>
                <Button variant="outline" className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Strategic Partnership</h3>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Long-term collaboration</li>
                  <li>• Joint program development</li>
                  <li>• Resource sharing</li>
                  <li>• Community impact measurement</li>
                </ul>
                <Button variant="outline" className="w-full">Discuss Options</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions about volunteering, partnerships, <br/>or how you can contribute? We'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
            {/* <Button variant="outline" size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button> */}
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Response time: We typically respond within 24 hours
          </p>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;