import moment1 from "@/assets/moment-1.jpg";
import moment2 from "@/assets/moment-2.jpg";
import moment3 from "@/assets/moment-3.jpg";
import moment4 from "@/assets/moment-4.jpg";
import moment5 from "@/assets/moment-5.jpg";
import moment6 from "@/assets/moment-6.jpg";
import moment7 from "@/assets/moment-7.jpg";
import moment8 from "@/assets/moment-8.jpg";

const moments = [
  { id: 1, src: moment1, alt: "Women celebrating community achievements together" },
  { id: 2, src: moment2, alt: "Speaking and sharing empowerment stories" },
  { id: 3, src: moment3, alt: "Community networking and connections" },
  { id: 4, src: moment4, alt: "Celebrating women leadership and growth" },
  { id: 5, src: moment5, alt: "Building meaningful relationships at events" },
  { id: 6, src: moment6, alt: "Empowerment through community gatherings" },
  { id: 7, src: moment7, alt: "Inspiring conversations and mentorship" },
  { id: 8, src: moment8, alt: "Women supporting women in community" },
];

const Moments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground animate-fade-in">
              Cherished Moments
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              A glimpse into the love, laughter, and memories we hold close
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {moments.map((moment, index) => (
                <div
                  key={moment.id}
                  className="break-inside-avoid group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={moment.src}
                        alt={moment.alt}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-medium border border-border/50">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Be Part of Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join us in creating more beautiful moments and lasting memories
              </p>
              <a
                href="/get-involved"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-soft hover:shadow-strong"
              >
                Get Involved Today
              </a>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Moments;
