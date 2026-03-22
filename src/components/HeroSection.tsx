import heroImage from "@/assets/hero-musician.jpg";
import { Music } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Floating music notes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="float-note absolute top-[15%] left-[10%] text-6xl text-gold opacity-10">♪</span>
        <span className="float-note absolute top-[30%] right-[15%] text-4xl text-gold opacity-10" style={{ animationDelay: "1s" }}>♫</span>
        <span className="float-note absolute bottom-[25%] left-[20%] text-5xl text-gold opacity-10" style={{ animationDelay: "2s" }}>♩</span>
        <span className="float-note absolute top-[60%] right-[25%] text-3xl text-gold opacity-10" style={{ animationDelay: "3s" }}>♬</span>
      </div>

      <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div className="text-cream space-y-6 lg:space-y-8">
          <div className="hero-text-1 flex items-center gap-3">
            <div className="gold-divider" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold">Classical Virtuoso</span>
          </div>

          <h1 className="hero-text-2 font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Pandit<br />
            <span className="text-gold">Raghav Sharma</span>
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
            <div className="absolute -inset-4 rounded-lg bg-gradient-to-br from-gold/20 to-transparent" />
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
