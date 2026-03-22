import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Star, Globe, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Padma Shri",
    year: "2012",
    description: "Awarded by the Government of India for distinguished contribution to Indian classical music.",
  },
  {
    icon: Award,
    title: "Sangeet Natak Akademi",
    year: "2008",
    description: "National honour for lifetime achievement in the performing arts.",
  },
  {
    icon: Globe,
    title: "UNESCO Heritage Artist",
    year: "2015",
    description: "Recognized for preserving intangible cultural heritage through music.",
  },
  {
    icon: Star,
    title: "Grammy Nomination",
    year: "2019",
    description: "Nominated for Best World Music Album for 'Ragas at Dawn'.",
  },
];

const AchievementsSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-reveal section-dark py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold">Recognition</span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1]">
            Honours & Accolades
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <div
              key={item.title}
              className={`stagger-${i + 1} card-lift gold-glow rounded-lg p-8 text-center space-y-4`}
              style={{ background: "hsl(30 20% 12%)", border: "1px solid hsl(var(--gold) / 0.15)" }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <span className="block text-xs tracking-widest uppercase text-gold font-heading">{item.year}</span>
              <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed opacity-70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
