import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Globe, Video, Users, BookOpen, Sparkles } from "lucide-react";

const features = [
  { icon: Video, title: "Live Online Classes", desc: "Weekly sessions via Zoom for students worldwide", color: "var(--gold)" },
  { icon: Globe, title: "Global Reach", desc: "Students from 18 countries and counting", color: "var(--emerald)" },
  { icon: Users, title: "Masterclasses", desc: "Intensive workshops for intermediate & advanced players", color: "var(--saffron)" },
  { icon: BookOpen, title: "Curriculum", desc: "Structured learning from basics to concert performance", color: "var(--ruby)" },
];

const TeachingSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-reveal section-dark-rich py-24 lg:py-32 relative overflow-hidden">
      {/* Animated gradient orb */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, hsl(var(--saffron)), transparent)", animation: "float-note 10s ease-in-out infinite" }} />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="gold-divider" />
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold flex items-center gap-2">
                <Sparkles className="w-3 h-3" /> Learn
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1]">
              Pass the Torch<br />
              <span className="text-gradient-gold">of Tradition</span>
            </h2>

            <p className="text-lg leading-relaxed opacity-80 max-w-lg">
              Whether you are a beginner drawn to the resonance of the sitar, or an advanced student seeking refinement — Pandit Sharma's teaching adapts to your journey while staying true to the discipline of the Guru-Shishya tradition.
            </p>

            <a href="#contact" className="btn-hero inline-flex mt-4">
              Enroll Now
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`stagger-${i + 1} p-6 rounded-xl space-y-3 group card-lift shimmer`}
                style={{
                  background: "linear-gradient(145deg, hsl(30 20% 13%), hsl(30 20% 10%))",
                  border: "1px solid hsl(var(--gold) / 0.1)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                  style={{ background: `hsl(${f.color} / 0.12)` }}
                >
                  <f.icon className="w-5 h-5 transition-colors duration-300" style={{ color: `hsl(${f.color})` }} />
                </div>
                <h3 className="font-heading text-sm font-semibold group-hover:text-gold transition-colors duration-300">{f.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
