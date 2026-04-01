import heroImage from "@/assets/hero-musician.jpg";
import { Music, Sparkles, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Animated color orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[5%] w-80 h-80 rounded-full opacity-[0.08]" style={{ background: "radial-gradient(circle, hsl(var(--gold)), transparent)", animation: "float-note 8s ease-in-out infinite" }} />
        <div className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, hsl(var(--ruby)), transparent)", animation: "float-note 12s ease-in-out infinite 2s" }} />
        <div className="absolute top-[40%] right-[20%] w-60 h-60 rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, hsl(var(--saffron)), transparent)", animation: "float-note 7s ease-in-out infinite 4s" }} />
        <div className="absolute top-[10%] right-[40%] w-40 h-40 rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(var(--violet)), transparent)", animation: "float-note 9s ease-in-out infinite 1s" }} />
        <div className="absolute bottom-[30%] left-[40%] w-32 h-32 rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(var(--emerald)), transparent)", animation: "float-note 11s ease-in-out infinite 3s" }} />
      </div>

      {/* Floating music notes with colors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="float-note absolute top-[12%] left-[8%] text-6xl opacity-[0.15]" style={{ color: "hsl(var(--gold))" }}>♪</span>
        <span className="float-note absolute top-[25%] right-[12%] text-4xl opacity-[0.12]" style={{ color: "hsl(var(--saffron))", animationDelay: "1s" }}>♫</span>
        <span className="float-note absolute bottom-[22%] left-[18%] text-5xl opacity-[0.14]" style={{ color: "hsl(var(--ruby))", animationDelay: "2s" }}>♩</span>
        <span className="float-note absolute top-[55%] right-[22%] text-3xl opacity-[0.1]" style={{ color: "hsl(var(--emerald))", animationDelay: "3s" }}>♬</span>
        <span className="float-note absolute top-[70%] left-[60%] text-4xl opacity-[0.08]" style={{ color: "hsl(var(--violet))", animationDelay: "1.5s" }}>♯</span>
        <span className="float-note absolute top-[8%] left-[50%] text-2xl opacity-[0.1]" style={{ color: "hsl(var(--indigo))", animationDelay: "4s" }}>♭</span>
      </div>

      {/* Sparkle particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: "20%", left: "15%", size: 4, delay: "0s", color: "var(--gold)" },
          { top: "35%", left: "75%", size: 3, delay: "1.5s", color: "var(--saffron)" },
          { top: "65%", left: "25%", size: 5, delay: "3s", color: "var(--ruby)" },
          { top: "80%", left: "85%", size: 3, delay: "0.8s", color: "var(--gold)" },
          { top: "50%", left: "50%", size: 4, delay: "2.2s", color: "var(--emerald)" },
          { top: "15%", left: "90%", size: 3, delay: "4s", color: "var(--violet)" },
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
              animationDelay: p.delay,
              boxShadow: `0 0 ${p.size * 3}px hsl(${p.color} / 0.5)`,
            }}
          />
        ))}
      </div>

      {/* Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.04] pointer-events-none animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-gold" />
          <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-saffron" />
          <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-ruby" />
          <circle cx="100" cy="100" r="35" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-emerald" />
          {[...Array(18)].map((_, i) => (
            <line key={i} x1="100" y1="5" x2="100" y2="195" stroke="currentColor" strokeWidth="0.15" className="text-gold" transform={`rotate(${i * 20} 100 100)`} />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div className="text-cream space-y-6 lg:space-y-8">
          <div className="hero-text-1 flex items-center gap-3">
            <div className="gold-divider" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold flex items-center gap-2">
              <Sparkles className="w-3 h-3 animate-glow-pulse" />
              Classical Virtuoso
            </span>
          </div>

          <h1 className="hero-text-2 font-heading text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.02] tracking-tight">
            Pandit<br />
            <span className="text-gradient-gold animate-text-glow">Raghav</span><br />
            <span className="text-gradient-rainbow">Sharma</span>
          </h1>

          <p className="hero-text-3 text-lg sm:text-xl font-light leading-relaxed max-w-lg opacity-85">
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

          {/* Stats bar */}
          <div className="hero-text-4 flex gap-8 pt-4">
            {[
              { val: "40+", label: "Years" },
              { val: "32", label: "Countries" },
              { val: "2400+", label: "Shows" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <span className="block font-heading text-2xl font-bold text-gradient-gold">{s.val}</span>
                <span className="text-[10px] uppercase tracking-widest opacity-50">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="hero-image relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Gradient border frame */}
            <div className="absolute -inset-4 rounded-2xl gradient-border" />
            {/* Glow behind image */}
            <div className="absolute -inset-8 rounded-2xl opacity-30 blur-2xl" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.4), hsl(var(--ruby) / 0.2), hsl(var(--saffron) / 0.3))" }} />
            <img
              src={heroImage}
              alt="Pandit Raghav Sharma performing on stage"
              className="relative rounded-2xl w-full max-w-md lg:max-w-lg object-cover shadow-2xl"
              style={{ aspectRatio: "3/4" }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce-gentle">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold/50">Scroll</span>
        <ChevronDown className="w-5 h-5 text-gold/50" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
