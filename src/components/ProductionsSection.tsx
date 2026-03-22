import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  { title: "Ragas at Dawn", type: "Album", year: "2019", desc: "Grammy-nominated album blending classical ragas with ambient soundscapes." },
  { title: "Strings of the Ganges", type: "Documentary", year: "2021", desc: "A visual journey through music and spirituality along the sacred river." },
  { title: "East Meets West", type: "Collaboration", year: "2023", desc: "Cross-cultural project with the London Philharmonic Orchestra." },
  { title: "Guru Vandana", type: "Album", year: "2017", desc: "Tribute compositions honoring the lineage of masters." },
];

const ProductionsSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-reveal section-cream py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold">Works</span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-foreground">
            Productions & Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`stagger-${i + 1} card-lift rounded-lg overflow-hidden border border-border group`}
            >
              <div className="p-8 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest uppercase text-gold font-heading">{p.type}</span>
                  <span className="text-xs text-muted-foreground font-mono tabular-nums">{p.year}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-gold transition-colors duration-300">{p.title}</h3>
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
