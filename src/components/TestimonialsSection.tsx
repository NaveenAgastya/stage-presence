import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Meera Iyer",
    role: "Musicologist, University of Mumbai",
    quote: "Pandit Sharma's sitar speaks a language that transcends time. Every note carries centuries of wisdom yet feels entirely present.",
    stars: 5,
    color: "var(--gold)",
  },
  {
    name: "Hiroshi Tanaka",
    role: "Student, Tokyo",
    quote: "Learning from Guruji online has been transformative. His patience and depth of knowledge make every lesson feel like a sacred conversation.",
    stars: 5,
    color: "var(--emerald)",
  },
  {
    name: "Priya Venkatesh",
    role: "Event Director, Bengaluru Music Festival",
    quote: "His performance at our festival silenced a crowd of five thousand. That kind of command over an audience is extraordinarily rare.",
    stars: 5,
    color: "var(--saffron)",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal<HTMLElement>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section ref={ref} className="section-reveal section-dark-rich py-24 lg:py-32 relative overflow-hidden">
      {/* Colored background orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04]" style={{ background: `radial-gradient(circle, hsl(${t.color}), transparent)`, transition: "background 1s ease" }} />
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--ruby)), transparent)" }} />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold">Voices</span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1]">
            What They <span className="text-gradient-rainbow">Say</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto text-center relative">
          {/* Quote icon with color */}
          <div className="relative inline-block mb-8">
            <Quote className="w-14 h-14 transition-colors duration-700" style={{ color: `hsl(${t.color} / 0.3)` }} />
            <div className="absolute inset-0 rounded-full blur-xl opacity-30" style={{ background: `hsl(${t.color} / 0.2)` }} />
          </div>

          <div className="relative min-h-[240px]">
            {testimonials.map((item, i) => (
              <div
                key={item.name}
                className="absolute inset-0 transition-all duration-700"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                  pointerEvents: i === current ? "auto" : "none",
                }}
              >
                {/* Stars with color */}
                <div className="flex justify-center gap-1.5 mb-5">
                  {[...Array(item.stars)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 transition-colors duration-700" style={{ fill: `hsl(${item.color})`, color: `hsl(${item.color})` }} />
                  ))}
                </div>
                <p className="text-lg sm:text-xl leading-relaxed italic opacity-90 mb-8">"{item.quote}"</p>
                <p className="font-heading text-sm font-semibold" style={{ color: `hsl(${item.color})` }}>{item.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.role}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button onClick={prev} className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 active:scale-90 hover:scale-110" style={{ border: `1px solid hsl(${t.color} / 0.3)`, background: `hsl(${t.color} / 0.05)` }}>
              <ChevronLeft className="w-5 h-5 text-gold" />
            </button>
            <div className="flex gap-3">
              {testimonials.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-500 rounded-full"
                  style={{
                    width: i === current ? "28px" : "10px",
                    height: "10px",
                    background: i === current
                      ? `linear-gradient(90deg, hsl(${item.color}), hsl(${item.color} / 0.5))`
                      : "hsl(var(--gold) / 0.15)",
                    boxShadow: i === current ? `0 0 12px hsl(${item.color} / 0.4)` : "none",
                  }}
                />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 active:scale-90 hover:scale-110" style={{ border: `1px solid hsl(${t.color} / 0.3)`, background: `hsl(${t.color} / 0.05)` }}>
              <ChevronRight className="w-5 h-5 text-gold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
