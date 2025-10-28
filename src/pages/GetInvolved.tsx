import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Handshake, Heart, Calendar, ArrowRight, Mail, Phone } from "lucide-react";

const GetInvolved = () => {
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

      {/* Volunteer Signup Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Volunteer Signup Form
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in becoming a volunteer? Join our movement and make an impact.
          </p>
          <Button variant="cta" size="lg" asChild>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdqiSthAshZJm3bAQcs1ob5y9y09S9up0G5RObB1C7qMQ40PQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up as a Volunteer
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Collaborate Section */}
      <section className="py-20 bg-primary-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Handshake className="w-16 h-16 mx-auto mb-6 text-primary-darker" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-darker mb-4">
            Host Events & Collaborate
          </h2>
          <p className="text-lg text-primary-dark mb-8">
            Want to host an event or collaborate with HerShield? We'd love to partner with you.
          </p>
          <Button variant="cta" size="lg" asChild>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdE69H0zuJd688j8D34UQPcfb464zZOIoG7lvDjqYwHlzLW7A/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              Collaborate with HerShield
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary-darker mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-lg text-primary-dark mb-8">
            Have questions about volunteering, partnerships, or how you can contribute? <br/>
            We'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <a href="mailto:hershieldnetwork@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
            {/* <Button variant="outline" size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button> */}
          </div>
          
          <p className="text-sm text-primary-dark mt-6">
            Response time: We typically respond within 24 hours
          </p>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;