import aboutImage from "@/assets/about-musician.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "40+", label: "Years Performing" },
  { value: "32", label: "Countries" },
  { value: "2,400+", label: "Concerts" },
];

const AboutSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="journey" ref={ref} className="section-reveal section-cream py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--saffron)), transparent)" }} />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--gold)), transparent)" }} />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group stagger-1">
            <div className="overflow-hidden rounded-lg relative">
              <img
                src={aboutImage}
                alt="Pandit Raghav Sharma in a contemplative moment"
                className="w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                style={{ aspectRatio: "3/4", maxHeight: "560px" }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Decorative corner borders */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/30 rounded-lg transition-all duration-500 group-hover:border-gold/60 group-hover:-bottom-5 group-hover:-right-5" />
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-saffron/30 rounded-tl-lg" />
          </div>

          {/* Text */}
          <div className="space-y-6 stagger-2">
            <div className="flex items-center gap-3">
              <div className="gold-divider" />
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold">The Journey</span>
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

            <div className="flex gap-10 pt-6">
              {stats.map((s, i) => (
                <div key={s.label} className={`stagger-${i + 3} text-center`}>
                  <span className="block font-heading text-3xl lg:text-4xl font-bold text-gradient-gold">{s.value}</span>
                  <span className="text-sm text-muted-foreground mt-1 block">{s.label}</span>
                  <div className="w-8 h-0.5 mx-auto mt-2" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.5), transparent)" }} />
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
