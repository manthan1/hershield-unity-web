import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FoundingMembers = () => {
  const members = [
    {
      name: "Shafoli Kapur",
      title: "Founder, HerShield Network Foundation | CEO, TDOT Immigration | Certified Life Coach & Mentor | 2025 Ontario Provincial Election Candidate",
      bio: [
        "Shafoli Kapur is a purpose-driven entrepreneur, certified life coach, and advocate for women's empowerment, known for her belief that alignment - not hustle - is the true foundation of meaningful success.",
        "As the Founder and CEO of TDOT Immigration, she has spent over a decade helping individuals and families build new beginnings in Canada. Under her leadership, TDOT has become a respected name in the industry - recognized for its integrity, human-centered approach, and commitment to turning immigration from a process into a life journey.",
        "Her passion for social impact led her to establish the HerShield Network Foundation, an immigrant women–led initiative built to empower, connect, and uplift women through mentorship, resources, and quarterly charity partnerships. HerShield reflects her personal vision — to create the space she once needed: a place where women feel supported, celebrated, and seen.",
        "Beyond entrepreneurship, Shafoli serves as a mentor with Futurpreneur Canada, guiding emerging entrepreneurs as they navigate the challenges of leadership and business development. As a certified life coach, she empowers individuals to realign with purpose, strengthen self-awareness, and lead with authenticity.",
        "In 2025, Shafoli extended her commitment to community service by entering public life as a candidate in the Ontario Provincial Elections, representing a new generation of leaders who bridge business, empathy, and civic action.",
        "A mother, mentor, and changemaker, Shafoli Kapur continues to champion emotional intelligence in leadership and the belief that when women rise together, they don't just change their own lives - they transform their communities."
      ],
      linkedin: "#",
      email: "hershieldnetwork@gmail.com"
    },
    {
      name: "Rashim Katyal",
      title: "Founding Board Member | Style Confidence & Empowerment Coach | Workforce Development Advocate",
      bio: [
        "Rashim Katyal is a passionate advocate for workforce development and women's empowerment, driven by the belief that confidence is the key to unlocking both professional and personal success.",
        "With a strong background in designing and leading innovative programs, Rashim has played a pivotal role in shaping inclusive pathways that connect diverse talent pools with meaningful opportunities in the Canadian workforce. Her work focuses on building organizational capacity, bridging the gap between education and employment, and creating equitable access for underrepresented groups.",
        "Beyond her professional accomplishments, Rashim is an established Style Confidence & Empowerment Coach, helping women look and feel good from the inside out so they can show up as their most confident, authentic selves. Through transformative workshops, inspiring speaking engagements, and personalized coaching, she equips women with mindset shifts, practical tools, and style strategies to navigate life's transitions—whether it's motherhood, career pivots, or evolving personal identities. Her approach empowers women to dress for the version of themselves they aspire to be, while overcoming imposter syndrome and stepping into their full potential.",
        "Rashim's global perspective is shaped by her experiences living and working across the UK, Europe, and India, where she has supported women from diverse backgrounds and walks of life. Her commitment to uplifting others is reflected in her active volunteerism with organizations such as Lean In Canada, the Indo-Canadian Association, LinkedIn Local, and the American Association of Marketing.",
        "As a founding board member of HerShield, Rashim continues to champion inclusive leadership, self-expression, and the power of showing up authentically.",
        "Driven by a mission to spread smiles in style—and with style, Rashim believes that when women feel good inside and out, they not only unlock their own potential but become the rising tide that lifts all others."
      ],
      linkedin: "#",
      email: "hershieldnetwork@gmail.com"
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Founding Members
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto">
            Meet the visionary women who brought HerShield to life — leaders who turned their own journeys into a movement of empowerment, connection, and collective strength.
          </p>
        </div>
      </section>

      {/* Member Profiles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {members.map((member, index) => (
            <div key={index}>
              <Card className="shadow-strong">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center mb-8">
                    <div className="gradient-primary w-32 h-32 rounded-full flex items-center justify-center mb-6">
                      <span className="text-5xl font-bold text-primary-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'hsl(var(--crimson))' }}>
                      {member.name}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                      {member.title}
                    </p>
                  </div>

                  <div className="space-y-4 text-lg text-muted-foreground max-w-4xl mx-auto">
                    {member.bio.map((paragraph, pIndex) => (
                      <p key={pIndex} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => window.open(member.linkedin, '_blank')}
                    >
                      <Linkedin className="mr-2 h-5 w-5" />
                      Connect on LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => window.location.href = `mailto:${member.email}`}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Movement */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'hsl(var(--crimson))' }}>
            Join the HerShield Movement
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Inspired by their vision? Be part of a community that empowers, supports, and celebrates women at every stage of their journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="cta"
              size="lg"
              onClick={() => window.open('/get-involved', '_self')}
            >
              Get Involved
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('/contact', '_self')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundingMembers;
