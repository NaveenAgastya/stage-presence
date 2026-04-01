import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Play, Music2, Disc3, Headphones } from "lucide-react";

const tracks = [
  { title: "Raga Yaman — Evening Meditation", duration: "12:34", color: "var(--gold)", icon: "🎵" },
  { title: "Raga Bhairavi — Dawn Awakening", duration: "18:47", color: "var(--saffron)", icon: "🌅" },
  { title: "Raga Darbari — Royal Court", duration: "22:10", color: "var(--ruby)", icon: "👑" },
  { title: "Raga Malkauns — Midnight Serenity", duration: "15:22", color: "var(--indigo)", icon: "🌙" },
];

const MusicSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-reveal section-cream py-24 lg:py-32 relative overflow-hidden section-accent-top">
      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 opacity-[0.03] pointer-events-none">
        <Disc3 className="w-full h-full text-gold animate-spin-slow" />
      </div>
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--ruby)), transparent)" }} />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold flex items-center gap-2">
              <Headphones className="w-3 h-3" /> Listen
            </span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-foreground">
            Experience the <span className="text-gradient-rainbow">Music</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">Immerse yourself in the timeless beauty of Indian classical ragas</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* YouTube embed with gradient frame */}
          <div className="relative stagger-1">
            <div className="absolute -inset-2 rounded-2xl gradient-border" />
            <div className="absolute -inset-6 rounded-2xl opacity-20 blur-2xl" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.3), hsl(var(--ruby) / 0.2), hsl(var(--saffron) / 0.3))" }} />
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Featured Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Track list */}
          <div className="space-y-3">
            {tracks.map((track, i) => (
              <div
                key={track.title}
                className={`stagger-${i + 2} flex items-center gap-4 p-5 rounded-xl transition-all duration-500 cursor-pointer group hover:scale-[1.02]`}
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `hsl(${track.color} / 0.5)`;
                  e.currentTarget.style.boxShadow = `0 8px 30px -8px hsl(${track.color} / 0.2)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "hsl(var(--border))";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 relative"
                  style={{ background: `hsl(${track.color} / 0.12)` }}
                >
                  <Play className="w-5 h-5 ml-0.5 transition-colors" style={{ color: `hsl(${track.color})` }} />
                  {/* Ripple on hover */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 animate-ripple" style={{ border: `2px solid hsl(${track.color} / 0.3)` }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading text-sm font-semibold truncate transition-colors duration-300" style={{ color: "hsl(var(--foreground))" }}>
                    <span className="mr-2">{track.icon}</span>
                    {track.title}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground font-mono tabular-nums">{track.duration}</span>
                {/* Equalizer bars */}
                <div className="hidden sm:flex items-end gap-[2px] h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[4, 6, 3, 5, 4, 3].map((h, j) => (
                    <div
                      key={j}
                      className="w-[3px] rounded-full animate-bounce-gentle"
                      style={{
                        height: `${h * 3}px`,
                        background: `hsl(${track.color})`,
                        animationDelay: `${j * 0.12}s`,
                      }}
                    />
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
