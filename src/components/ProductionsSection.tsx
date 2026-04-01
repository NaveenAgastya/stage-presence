import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Disc, Film, Music, Headphones } from "lucide-react";

const projects = [
  { title: "Ragas at Dawn", type: "Album", year: "2019", desc: "Grammy-nominated album blending classical ragas with ambient soundscapes.", icon: Disc, color: "var(--gold)", emoji: "🏆" },
  { title: "Strings of the Ganges", type: "Documentary", year: "2021", desc: "A visual journey through music and spirituality along the sacred river.", icon: Film, color: "var(--emerald)", emoji: "🎬" },
  { title: "East Meets West", type: "Collaboration", year: "2023", desc: "Cross-cultural project with the London Philharmonic Orchestra.", icon: Headphones, color: "var(--saffron)", emoji: "🌍" },
  { title: "Guru Vandana", type: "Album", year: "2017", desc: "Tribute compositions honoring the lineage of masters.", icon: Music, color: "var(--ruby)", emoji: "🙏" },
];

const ProductionsSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-reveal section-cream py-24 lg:py-32 relative overflow-hidden section-accent-top">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-60 h-60 rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--emerald)), transparent)" }} />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold">Works</span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-foreground">
            Productions & <span className="text-gradient-rainbow">Projects</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`stagger-${i + 1} card-lift rounded-2xl overflow-hidden group relative cursor-pointer`}
              style={{
                background: `linear-gradient(145deg, hsl(${p.color} / 0.06), hsl(var(--card)))`,
                border: `1px solid hsl(${p.color} / 0.15)`,
              }}
            >
              {/* Top accent bar with gradient */}
              <div className="h-1.5 transition-all duration-500 group-hover:h-2" style={{ background: `linear-gradient(90deg, hsl(${p.color}), hsl(${p.color} / 0.3))` }} />
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{ background: `hsl(${p.color} / 0.12)` }}
                    >
                      <p.icon className="w-5 h-5" style={{ color: `hsl(${p.color})` }} />
                    </div>
                    <span className="text-xs tracking-widest uppercase font-heading font-bold" style={{ color: `hsl(${p.color})` }}>{p.type}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono tabular-nums px-2 py-1 rounded-full" style={{ background: `hsl(${p.color} / 0.08)` }}>{p.year}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-gold transition-colors duration-300 flex items-center gap-2">
                  <span>{p.emoji}</span>
                  {p.title}
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-all duration-300 group-hover:translate-x-1" />
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" style={{ boxShadow: `inset 0 0 40px -20px hsl(${p.color} / 0.15)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionsSection;
