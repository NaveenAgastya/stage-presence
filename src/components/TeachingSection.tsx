import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Globe, Video, Users, BookOpen, Sparkles, ArrowRight } from "lucide-react";

const features = [
  { icon: Video, title: "Live Online Classes", desc: "Weekly sessions via Zoom for students worldwide", color: "var(--gold)", num: "120+" },
  { icon: Globe, title: "Global Reach", desc: "Students from 18 countries and counting", color: "var(--emerald)", num: "18" },
  { icon: Users, title: "Masterclasses", desc: "Intensive workshops for intermediate & advanced players", color: "var(--saffron)", num: "50+" },
  { icon: BookOpen, title: "Curriculum", desc: "Structured learning from basics to concert performance", color: "var(--ruby)", num: "8" },
];

const TeachingSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-reveal section-dark-rich py-24 lg:py-32 relative overflow-hidden">
      {/* Colored orbs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, hsl(var(--saffron)), transparent)", animation: "float-note 10s ease-in-out infinite" }} />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(var(--emerald)), transparent)", animation: "float-note 12s ease-in-out infinite 3s" }} />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="gold-divider" />
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold flex items-center gap-2">
                <Sparkles className="w-3 h-3 animate-glow-pulse" /> Learn
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1]">
              Pass the Torch<br />
              <span className="text-gradient-rainbow">of Tradition</span>
            </h2>

            <p className="text-lg leading-relaxed opacity-80 max-w-lg">
              Whether you are a beginner drawn to the resonance of the sitar, or an advanced student seeking refinement — Pandit Sharma's teaching adapts to your journey while staying true to the discipline of the Guru-Shishya tradition.
            </p>

            <a href="#contact" className="btn-hero inline-flex mt-4 group">
              Enroll Now
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`stagger-${i + 1} p-6 rounded-2xl space-y-3 group card-lift relative overflow-hidden`}
                style={{
                  background: `linear-gradient(145deg, hsl(${f.color} / 0.08), hsl(30 20% 10%))`,
                  border: `1px solid hsl(${f.color} / 0.15)`,
                }}
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-50 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, hsl(${f.color}), transparent)` }} />

                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: `hsl(${f.color} / 0.15)` }}
                  >
                    <f.icon className="w-5 h-5" style={{ color: `hsl(${f.color})` }} />
                  </div>
                  <span className="font-heading text-2xl font-bold opacity-20 group-hover:opacity-60 transition-opacity" style={{ color: `hsl(${f.color})` }}>{f.num}</span>
                </div>
                <h3 className="font-heading text-sm font-semibold transition-colors duration-300" style={{ color: "hsl(var(--cream))" }}>{f.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
