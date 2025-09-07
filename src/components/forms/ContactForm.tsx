import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  title: string;
  type: "volunteer" | "partner" | "community" | "event" | "contact";
}

const ContactForm = ({ title, type }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "",
    organization: "",
    eventType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Form Submitted!",
      description: `Thank you for your interest in ${type === 'volunteer' ? 'volunteering' : type === 'partner' ? 'partnering' : type === 'event' ? 'our events' : 'contacting us'}. We'll get back to you soon!`,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      interest: "",
      organization: "",
      eventType: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="shadow-medium hover:shadow-strong transition-smooth">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="mt-1"
            />
          </div>

          {type === "volunteer" && (
            <div>
              <Label htmlFor="interest">Areas of Interest</Label>
              <Select value={formData.interest} onValueChange={(value) => handleChange("interest", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select your areas of interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="events">Event Organization</SelectItem>
                  <SelectItem value="fundraising">Fundraising</SelectItem>
                  <SelectItem value="marketing">Marketing & Social Media</SelectItem>
                  <SelectItem value="mentoring">Mentoring</SelectItem>
                  <SelectItem value="admin">Administrative Support</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {type === "partner" && (
            <div>
              <Label htmlFor="organization">Organization Name</Label>
              <Input
                id="organization"
                type="text"
                value={formData.organization}
                onChange={(e) => handleChange("organization", e.target.value)}
                className="mt-1"
              />
            </div>
          )}

          {type === "event" && (
            <div>
              <Label htmlFor="eventType">Event Interest</Label>
              <Select value={formData.eventType} onValueChange={(value) => handleChange("eventType", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="What type of event are you interested in?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="networking">Networking Events</SelectItem>
                  <SelectItem value="workshop">Workshops</SelectItem>
                  <SelectItem value="fundraiser">Fundraising Events</SelectItem>
                  <SelectItem value="hosting">Hosting an Event</SelectItem>
                  <SelectItem value="all">All Events</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="mt-1"
              placeholder={`Tell us more about your interest in ${type === 'volunteer' ? 'volunteering' : type === 'partner' ? 'partnering with us' : type === 'event' ? 'our events' : 'getting in touch'}...`}
            />
          </div>

          <Button type="submit" variant="cta" className="w-full">
            Submit Form
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;