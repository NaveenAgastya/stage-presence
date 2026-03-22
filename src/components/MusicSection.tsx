import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Play } from "lucide-react";

const tracks = [
  { title: "Raga Yaman — Evening Meditation", duration: "12:34" },
  { title: "Raga Bhairavi — Dawn Awakening", duration: "18:47" },
  { title: "Raga Darbari — Royal Court", duration: "22:10" },
];

const MusicSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="section-reveal section-cream py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold">Listen</span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-foreground">
            Experience the Music
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* YouTube embed placeholder */}
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl group">
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
                className={`stagger-${i + 1} flex items-center gap-4 p-4 rounded-lg border border-border hover:border-gold/40 transition-colors duration-300 cursor-pointer group`}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Play className="w-4 h-4 text-gold ml-0.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading text-sm font-medium truncate">{track.title}</p>
                </div>
                <span className="text-xs text-muted-foreground font-mono tabular-nums">{track.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
