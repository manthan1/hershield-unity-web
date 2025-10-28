import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hersheildnetwork@gmail.com",
      description: "For general inquiries and partnership opportunities",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "We typically respond to all messages within one business day",
    },
    {
      icon: MapPin,
      title: "Service Area",
      value: "Greater Toronto Area",
      description: "Serving the GTA with virtual and in-person events",
    },
  ];

  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/hershieldnetwork/", followers: "2.5K" },
    { name: "TikTok", url: "https://www.tiktok.com/@hershieldnetwork", followers: "1.8K" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/108386213/admin/dashboard/", followers: "800" },
    { name: "YouTube", url: "https://www.youtube.com/channel/UCYIzdkK93fFXehLkLniFN1A", followers: "500" },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: "#792836" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Contact HerShield</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto">
            We'd love to hear from you. Reach out with questions, ideas, or to learn more about how you can get
            involved.
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
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "linear-gradient(135deg, #7d2d4a, #9d3b5b)" }}
                  >
                    <info.icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(var(--crimson))" }}>
                    {info.title}
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-2">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20" style={{ backgroundColor: "#c2aa9b" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm title="Send us a Message" type="contact" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ backgroundColor: "#792836" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "hsl(var(--light-orange))" }}>
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Don't wait to be part of something meaningful. Connect with us today and discover how you can contribute to
            women's empowerment in our community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open("/get-involved", "_self")}
              className="bg-white text-primary hover:bg-white/90"
            >
              Get Involved Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("mailto:collaborate@hershieldnetwork.ca ", "_blank")}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
