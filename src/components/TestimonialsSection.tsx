import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Meera Iyer",
    role: "Musicologist, University of Mumbai",
    quote: "Pandit Sharma's sitar speaks a language that transcends time. Every note carries centuries of wisdom yet feels entirely present.",
    stars: 5,
  },
  {
    name: "Hiroshi Tanaka",
    role: "Student, Tokyo",
    quote: "Learning from Guruji online has been transformative. His patience and depth of knowledge make every lesson feel like a sacred conversation.",
    stars: 5,
  },
  {
    name: "Priya Venkatesh",
    role: "Event Director, Bengaluru Music Festival",
    quote: "His performance at our festival silenced a crowd of five thousand. That kind of command over an audience is extraordinarily rare.",
    stars: 5,
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

  return (
    <section ref={ref} className="section-reveal section-dark-rich py-24 lg:py-32 relative overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--gold)), transparent)" }} />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold">Voices</span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1]">
            What They <span className="text-gradient-gold">Say</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto text-center relative">
          <Quote className="w-12 h-12 text-gold/20 mx-auto mb-6" />

          <div className="relative min-h-[220px]">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="absolute inset-0 transition-all duration-700"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? "translateY(0) scale(1)" : "translateY(16px) scale(0.98)",
                  pointerEvents: i === current ? "auto" : "none",
                }}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-lg sm:text-xl leading-relaxed italic opacity-90 mb-8">"{t.quote}"</p>
                <p className="font-heading text-sm font-semibold text-gradient-gold">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10 hover:border-gold/60 transition-all duration-300 active:scale-90">
              <ChevronLeft className="w-4 h-4 text-gold" />
            </button>
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-500 rounded-full"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current ? "linear-gradient(90deg, hsl(var(--gold)), hsl(var(--saffron)))" : "hsl(var(--gold) / 0.2)",
                  }}
                />
              ))}
            </div>
            <button onClick={next} className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10 hover:border-gold/60 transition-all duration-300 active:scale-90">
              <ChevronRight className="w-4 h-4 text-gold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
