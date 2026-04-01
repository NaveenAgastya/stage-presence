import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Star, Globe, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Padma Shri",
    year: "2012",
    description: "Awarded by the Government of India for distinguished contribution to Indian classical music.",
    accent: "var(--gold)",
    gradient: "linear-gradient(135deg, hsl(var(--gold) / 0.15), hsl(var(--gold) / 0.05))",
  },
  {
    icon: Award,
    title: "Sangeet Natak Akademi",
    year: "2008",
    description: "National honour for lifetime achievement in the performing arts.",
    accent: "var(--saffron)",
    gradient: "linear-gradient(135deg, hsl(var(--saffron) / 0.15), hsl(var(--saffron) / 0.05))",
  },
  {
    icon: Globe,
    title: "UNESCO Heritage Artist",
    year: "2015",
    description: "Recognized for preserving intangible cultural heritage through music.",
    accent: "var(--emerald)",
    gradient: "linear-gradient(135deg, hsl(var(--emerald) / 0.15), hsl(var(--emerald) / 0.05))",
  },
  {
    icon: Star,
    title: "Grammy Nomination",
    year: "2019",
    description: "Nominated for Best World Music Album for 'Ragas at Dawn'.",
    accent: "var(--ruby)",
    gradient: "linear-gradient(135deg, hsl(var(--ruby) / 0.15), hsl(var(--ruby) / 0.05))",
  },
];

const AchievementsSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-reveal section-dark-rich py-24 lg:py-32 relative overflow-hidden">
      {/* Colorful particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: "8%", left: "5%", color: "var(--gold)", size: 6 },
          { top: "15%", left: "90%", color: "var(--saffron)", size: 4 },
          { top: "70%", left: "10%", color: "var(--ruby)", size: 5 },
          { top: "80%", left: "85%", color: "var(--emerald)", size: 4 },
          { top: "45%", left: "50%", color: "var(--violet)", size: 3 },
          { top: "30%", left: "70%", color: "var(--gold)", size: 5 },
        ].map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              background: `hsl(${p.color})`,
              animationDelay: `${i * 1.3}s`,
              boxShadow: `0 0 ${p.size * 4}px hsl(${p.color} / 0.4)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold">Recognition</span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1]">
            Honours & <span className="text-gradient-rainbow">Accolades</span>
          </h2>
          <p className="text-sm opacity-50 max-w-md mx-auto">A lifetime of dedication recognized on the world stage</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <div
              key={item.title}
              className={`stagger-${i + 1} card-lift rounded-2xl p-8 text-center space-y-4 shimmer group relative overflow-hidden`}
              style={{
                background: item.gradient,
                border: `1px solid hsl(${item.accent} / 0.2)`,
              }}
            >
              {/* Top glow bar */}
              <div className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, transparent, hsl(${item.accent}), transparent)` }} />

              {/* Icon with ripple effect */}
              <div className="relative inline-flex items-center justify-center w-18 h-18 rounded-full transition-all duration-500 group-hover:scale-110" style={{ background: `hsl(${item.accent} / 0.15)` }}>
                <item.icon className="w-8 h-8 transition-all duration-500 group-hover:drop-shadow-lg" style={{ color: `hsl(${item.accent})` }} />
                {/* Ripple */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 animate-ripple" style={{ border: `2px solid hsl(${item.accent} / 0.3)` }} />
              </div>

              <span className="block text-xs tracking-widest uppercase font-heading font-bold" style={{ color: `hsl(${item.accent})` }}>{item.year}</span>
              <h3 className="font-heading text-lg font-semibold transition-colors duration-300" style={{ color: "hsl(var(--cream))" }}>{item.title}</h3>
              <p className="text-sm leading-relaxed opacity-60">{item.description}</p>

              {/* Bottom accent */}
              <div className="w-0 h-0.5 mx-auto rounded-full group-hover:w-16 transition-all duration-700" style={{ background: `hsl(${item.accent})` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
