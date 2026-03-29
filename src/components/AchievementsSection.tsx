import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Star, Globe, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Padma Shri",
    year: "2012",
    description: "Awarded by the Government of India for distinguished contribution to Indian classical music.",
    accent: "var(--gold)",
  },
  {
    icon: Award,
    title: "Sangeet Natak Akademi",
    year: "2008",
    description: "National honour for lifetime achievement in the performing arts.",
    accent: "var(--saffron)",
  },
  {
    icon: Globe,
    title: "UNESCO Heritage Artist",
    year: "2015",
    description: "Recognized for preserving intangible cultural heritage through music.",
    accent: "var(--emerald)",
  },
  {
    icon: Star,
    title: "Grammy Nomination",
    year: "2019",
    description: "Nominated for Best World Music Album for 'Ragas at Dawn'.",
    accent: "var(--ruby)",
  },
];

const AchievementsSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-reveal section-dark-rich py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-2 h-2 rounded-full bg-gold/20 animate-bounce-gentle" />
        <div className="absolute top-[30%] right-[8%] w-1.5 h-1.5 rounded-full bg-saffron/20 animate-bounce-gentle" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-[20%] left-[15%] w-1 h-1 rounded-full bg-gold/15 animate-bounce-gentle" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold">Recognition</span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1]">
            Honours & <span className="text-gradient-gold">Accolades</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <div
              key={item.title}
              className={`stagger-${i + 1} card-lift gold-glow rounded-lg p-8 text-center space-y-4 shimmer group`}
              style={{
                background: "linear-gradient(145deg, hsl(30 20% 13%), hsl(30 20% 10%))",
                border: "1px solid hsl(var(--gold) / 0.12)",
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full relative group-hover:animate-glow-pulse transition-all duration-500" style={{ background: `hsl(${item.accent} / 0.12)` }}>
                <item.icon className="w-7 h-7 transition-transform duration-500 group-hover:scale-110" style={{ color: `hsl(${item.accent})` }} />
              </div>
              <span className="block text-xs tracking-widest uppercase font-heading" style={{ color: `hsl(${item.accent})` }}>{item.year}</span>
              <h3 className="font-heading text-lg font-semibold group-hover:text-gold transition-colors duration-300">{item.title}</h3>
              <p className="text-sm leading-relaxed opacity-60">{item.description}</p>
              {/* Bottom accent line */}
              <div className="w-12 h-0.5 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `hsl(${item.accent})` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
