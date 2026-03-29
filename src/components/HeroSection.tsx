import heroImage from "@/assets/hero-musician.jpg";
import { Music, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[5%] w-72 h-72 rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, hsl(var(--gold)), transparent)", animation: "float-note 8s ease-in-out infinite" }} />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--ruby)), transparent)", animation: "float-note 10s ease-in-out infinite 2s" }} />
        <div className="absolute top-[50%] right-[30%] w-48 h-48 rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(var(--saffron)), transparent)", animation: "float-note 7s ease-in-out infinite 4s" }} />
      </div>

      {/* Floating music notes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="float-note absolute top-[15%] left-[10%] text-6xl text-gold opacity-[0.12]">♪</span>
        <span className="float-note absolute top-[30%] right-[15%] text-4xl text-gold opacity-[0.12]" style={{ animationDelay: "1s" }}>♫</span>
        <span className="float-note absolute bottom-[25%] left-[20%] text-5xl text-gold opacity-[0.12]" style={{ animationDelay: "2s" }}>♩</span>
        <span className="float-note absolute top-[60%] right-[25%] text-3xl text-gold opacity-[0.12]" style={{ animationDelay: "3s" }}>♬</span>
        <span className="float-note absolute top-[45%] left-[45%] text-2xl text-gold opacity-[0.08]" style={{ animationDelay: "4s" }}>♭</span>
        <span className="float-note absolute top-[75%] left-[65%] text-4xl text-gold opacity-[0.08]" style={{ animationDelay: "1.5s" }}>♯</span>
      </div>

      {/* Decorative mandala pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-gold" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-gold" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-gold" />
          {[...Array(12)].map((_, i) => (
            <line key={i} x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.2" className="text-gold" transform={`rotate(${i * 30} 100 100)`} />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div className="text-cream space-y-6 lg:space-y-8">
          <div className="hero-text-1 flex items-center gap-3">
            <div className="gold-divider" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              Classical Virtuoso
            </span>
          </div>

          <h1 className="hero-text-2 font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Pandit<br />
            <span className="text-gradient-gold">Raghav Sharma</span>
          </h1>

          <p className="hero-text-3 text-lg sm:text-xl font-light leading-relaxed max-w-lg opacity-80">
            Four decades of mastering the sitar, carrying forward a tradition that bridges ancient ragas with the modern world stage.
          </p>

          <div className="hero-text-4 flex flex-wrap gap-4 pt-2">
            <a href="#contact" className="btn-hero">
              <Music className="w-4 h-4 mr-2" />
              Book a Session
            </a>
            <a href="#journey" className="btn-outline-hero">
              Explore the Journey
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="hero-image relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-6 rounded-lg opacity-60" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.2), transparent 40%, transparent 60%, hsl(var(--saffron) / 0.15))" }} />
            <div className="absolute -inset-3 rounded-lg" style={{ border: "1px solid hsl(var(--gold) / 0.15)" }} />
            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: "hsl(var(--gold) / 0.6)" }} />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: "hsl(var(--gold) / 0.6)" }} />
            <img
              src={heroImage}
              alt="Pandit Raghav Sharma performing on stage"
              className="relative rounded-lg w-full max-w-md lg:max-w-lg object-cover shadow-2xl"
              style={{ aspectRatio: "4/3" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
