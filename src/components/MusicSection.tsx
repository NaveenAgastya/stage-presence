import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Play, Music2, Disc3 } from "lucide-react";

const tracks = [
  { title: "Raga Yaman — Evening Meditation", duration: "12:34", color: "var(--gold)" },
  { title: "Raga Bhairavi — Dawn Awakening", duration: "18:47", color: "var(--saffron)" },
  { title: "Raga Darbari — Royal Court", duration: "22:10", color: "var(--ruby)" },
];

const MusicSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-reveal section-cream py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 opacity-[0.04] pointer-events-none">
        <Disc3 className="w-full h-full text-gold animate-spin-slow" />
      </div>

      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold flex items-center gap-2">
              <Music2 className="w-3 h-3" /> Listen
            </span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-foreground">
            Experience the <span className="text-gradient-gold">Music</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* YouTube embed */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group stagger-1" style={{ boxShadow: "0 25px 60px -12px hsl(var(--gold) / 0.15)" }}>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Featured Performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Track list */}
          <div className="space-y-3">
            {tracks.map((track, i) => (
              <div
                key={track.title}
                className={`stagger-${i + 2} flex items-center gap-4 p-5 rounded-xl border border-border hover:border-gold/40 transition-all duration-500 cursor-pointer group hover:shadow-lg`}
                style={{ background: "hsl(var(--card))" }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                  style={{ background: `hsl(${track.color} / 0.1)`, boxShadow: `0 0 0 0 hsl(${track.color} / 0)` }}
                >
                  <Play className="w-4 h-4 ml-0.5 transition-colors" style={{ color: `hsl(${track.color})` }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading text-sm font-medium truncate group-hover:text-gold transition-colors duration-300">{track.title}</p>
                </div>
                <span className="text-xs text-muted-foreground font-mono tabular-nums">{track.duration}</span>
                {/* Animated bar */}
                <div className="hidden sm:flex items-end gap-[2px] h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[3, 5, 2, 4, 3].map((h, j) => (
                    <div key={j} className="w-[3px] rounded-full animate-bounce-gentle" style={{ height: `${h * 3}px`, background: `hsl(${track.color})`, animationDelay: `${j * 0.15}s` }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
