import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Globe, Video, Users, BookOpen } from "lucide-react";

const features = [
  { icon: Video, title: "Live Online Classes", desc: "Weekly sessions via Zoom for students worldwide" },
  { icon: Globe, title: "Global Reach", desc: "Students from 18 countries and counting" },
  { icon: Users, title: "Masterclasses", desc: "Intensive workshops for intermediate & advanced players" },
  { icon: BookOpen, title: "Curriculum", desc: "Structured learning from basics to concert performance" },
];

const TeachingSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-reveal section-dark py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="gold-divider" />
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold">Learn</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1]">
              Pass the Torch<br />of Tradition
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
                className={`stagger-${i + 1} p-6 rounded-lg space-y-3`}
                style={{ background: "hsl(30 20% 12%)", border: "1px solid hsl(var(--gold) / 0.12)" }}
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-heading text-sm font-semibold">{f.title}</h3>
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
