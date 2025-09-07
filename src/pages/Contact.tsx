import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hersheildnetwork@gmail.com",
      description: "For general inquiries and partnership opportunities"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "We typically respond to all messages within one business day"
    },
    {
      icon: MapPin,
      title: "Service Area",
      value: "Greater Toronto Area",
      description: "Serving the GTA with virtual and in-person events"
    }
  ];

  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/hershieldnetwork/", followers: "2.5K" },
    { name: "TikTok", url: "https://www.tiktok.com/@hershieldnetwork", followers: "1.8K" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/108386213/admin/dashboard/", followers: "800" },
    { name: "YouTube", url: "https://www.youtube.com/channel/UCYIzdkK93fFXehLkLniFN1A", followers: "500" }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Contact HerShield
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto">
            We'd love to hear from you. Reach out with questions, ideas, or to learn more about how you can get involved.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-medium text-center">
                <CardContent className="p-8">
                  <div className="gradient-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-lg font-semibold text-primary mb-2">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-strong">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="What is your message about?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="volunteer">Volunteering Opportunities</SelectItem>
                        <SelectItem value="partnership">Partnership/Sponsorship</SelectItem>
                        <SelectItem value="events">Events & Workshops</SelectItem>
                        <SelectItem value="charity">Charity Partnership</SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you or share your thoughts about HerShield..."
                      rows={5}
                    />
                  </div>

                  <Button variant="cta" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* FAQ Quick Links */}
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">How can I get involved with HerShield?</h4>
                      <p className="text-sm text-muted-foreground">
                        There are many ways! Check out our <a href="/get-involved" className="text-primary font-semibold hover:underline">Get Involved page</a> for volunteer opportunities, events, and partnerships.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">How do you select charity partners?</h4>
                      <p className="text-sm text-muted-foreground">
                        We carefully research women-focused charities with proven track records. Learn more on our <a href="/charity" className="text-primary font-semibold hover:underline">Charity Spotlight page</a>.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Can men participate in HerShield events?</h4>
                      <p className="text-sm text-muted-foreground">
                        While our focus is women's empowerment, we welcome allies who support our mission. Contact us to learn about inclusive events.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Do you offer corporate partnerships?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes! We work with organizations on sponsorships, employee engagement, and strategic partnerships. Contact us to discuss options.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Connect With Us</h3>
                  <p className="text-muted-foreground mb-6">
                    Follow us on social media for the latest updates, event announcements, and inspiring stories from our community.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        asChild
                        className="h-auto p-4 flex-col items-center gap-2"
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="font-semibold">{social.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {social.followers} followers
                          </span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Response Times</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-foreground">Email Inquiries:</span>
                      <span className="text-muted-foreground">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Partnership Requests:</span>
                      <span className="text-muted-foreground">Within 48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Event Registration:</span>
                      <span className="text-muted-foreground">Within 12 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Urgent Matters:</span>
                      <span className="text-muted-foreground">Same day</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Don't wait to be part of something meaningful. Connect with us today and discover how you can contribute to women's empowerment in our community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Get Involved Now
            </Button>
            <Button variant="outline" size="lg">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;