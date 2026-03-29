import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Disc, Film, Music, Headphones } from "lucide-react";

const projects = [
  { title: "Ragas at Dawn", type: "Album", year: "2019", desc: "Grammy-nominated album blending classical ragas with ambient soundscapes.", icon: Disc, color: "var(--gold)" },
  { title: "Strings of the Ganges", type: "Documentary", year: "2021", desc: "A visual journey through music and spirituality along the sacred river.", icon: Film, color: "var(--emerald)" },
  { title: "East Meets West", type: "Collaboration", year: "2023", desc: "Cross-cultural project with the London Philharmonic Orchestra.", icon: Headphones, color: "var(--saffron)" },
  { title: "Guru Vandana", type: "Album", year: "2017", desc: "Tribute compositions honoring the lineage of masters.", icon: Music, color: "var(--ruby)" },
];

const ProductionsSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-reveal section-cream py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold">Works</span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-foreground">
            Productions & <span className="text-gradient-gold">Projects</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`stagger-${i + 1} card-lift rounded-xl overflow-hidden border border-border group relative`}
              style={{ background: "hsl(var(--card))" }}
            >
              {/* Top accent bar */}
              <div className="h-1 transition-all duration-500 group-hover:h-1.5" style={{ background: `linear-gradient(90deg, hsl(${p.color}), hsl(${p.color} / 0.3))` }} />
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `hsl(${p.color} / 0.1)` }}>
                      <p.icon className="w-4 h-4" style={{ color: `hsl(${p.color})` }} />
                    </div>
                    <span className="text-xs tracking-widest uppercase font-heading" style={{ color: `hsl(${p.color})` }}>{p.type}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono tabular-nums">{p.year}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-gold transition-colors duration-300 flex items-center gap-2">
                  {p.title}
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionsSection;
