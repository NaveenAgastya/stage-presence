import aboutImage from "@/assets/about-musician.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sparkles } from "lucide-react";

const stats = [
  { value: "40+", label: "Years Performing", color: "var(--gold)" },
  { value: "32", label: "Countries", color: "var(--emerald)" },
  { value: "2,400+", label: "Concerts", color: "var(--saffron)" },
];

const AboutSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="journey" ref={ref} className="section-reveal section-cream py-24 lg:py-32 relative overflow-hidden section-accent-top">
      {/* Decorative background */}
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(var(--saffron)), transparent)" }} />
      <div className="absolute bottom-20 left-0 w-60 h-60 rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(var(--gold)), transparent)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.02]" style={{ background: "radial-gradient(circle, hsl(var(--ruby)), transparent)" }} />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group stagger-1">
            <div className="overflow-hidden rounded-2xl relative">
              <img
                src={aboutImage}
                alt="Pandit Raghav Sharma in a contemplative moment"
                className="w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                style={{ aspectRatio: "3/4", maxHeight: "600px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-dark/10 to-transparent" />
              {/* Overlay text */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-heading text-xs tracking-[0.3em] uppercase text-gold/80">Since 1984</p>
              </div>
            </div>
            {/* Colorful frame accents */}
            <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-2xl transition-all duration-500 group-hover:-bottom-6 group-hover:-right-6 animate-border-dance" style={{ border: "2px solid hsl(var(--gold) / 0.3)" }} />
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-tl-2xl" style={{ borderTop: "2px solid hsl(var(--saffron) / 0.4)", borderLeft: "2px solid hsl(var(--saffron) / 0.4)" }} />
            {/* Glow */}
            <div className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.1), hsl(var(--saffron) / 0.1))" }} />
          </div>

          {/* Text */}
          <div className="space-y-6 stagger-2">
            <div className="flex items-center gap-3">
              <div className="gold-divider" />
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold flex items-center gap-2">
                <Sparkles className="w-3 h-3" /> The Journey
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-foreground">
              A Life Devoted to<br />
              <span className="text-gradient-gold">the Art of Sound</span>
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
              Born into a lineage of musicians in Varanasi, Pandit Raghav Sharma began his training at the age of seven under the tutelage of his grandfather. Over four decades, he has performed in 32 countries, composed for film and theatre, and dedicated himself to preserving the purity of Hindustani classical music.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
              His style — rooted in the Maihar Gharana — blends meditative depth with expressive virtuosity, creating performances that transcend language and culture.
            </p>

            {/* Colorful stat cards */}
            <div className="flex flex-wrap gap-4 pt-6">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`stagger-${i + 3} group/stat flex-1 min-w-[120px] p-5 rounded-xl text-center transition-all duration-500 cursor-default hover:scale-105`}
                  style={{
                    background: `linear-gradient(135deg, hsl(${s.color} / 0.08), hsl(${s.color} / 0.03))`,
                    border: `1px solid hsl(${s.color} / 0.15)`,
                  }}
                >
                  <span className="block font-heading text-3xl lg:text-4xl font-bold" style={{ color: `hsl(${s.color})` }}>{s.value}</span>
                  <span className="text-xs text-muted-foreground mt-1 block uppercase tracking-wider">{s.label}</span>
                  <div className="w-8 h-1 mx-auto mt-2 rounded-full transition-all duration-500 group-hover/stat:w-16" style={{ background: `hsl(${s.color} / 0.4)` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
