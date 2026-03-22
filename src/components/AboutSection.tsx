import aboutImage from "@/assets/about-musician.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="journey" ref={ref} className="section-reveal section-cream py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group stagger-1">
            <div className="overflow-hidden rounded-lg">
              <img
                src={aboutImage}
                alt="Pandit Raghav Sharma in a contemplative moment"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ aspectRatio: "3/4", maxHeight: "560px" }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold rounded-lg" />
          </div>

          {/* Text */}
          <div className="space-y-6 stagger-2">
            <div className="flex items-center gap-3">
              <div className="gold-divider" />
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold">The Journey</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-foreground">
              A Life Devoted to<br />the Art of Sound
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
              Born into a lineage of musicians in Varanasi, Pandit Raghav Sharma began his training at the age of seven under the tutelage of his grandfather. Over four decades, he has performed in 32 countries, composed for film and theatre, and dedicated himself to preserving the purity of Hindustani classical music.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
              His style — rooted in the Maihar Gharana — blends meditative depth with expressive virtuosity, creating performances that transcend language and culture.
            </p>

            <div className="flex gap-12 pt-4">
              <div>
                <span className="block font-heading text-3xl font-bold text-gold">40+</span>
                <span className="text-sm text-muted-foreground">Years Performing</span>
              </div>
              <div>
                <span className="block font-heading text-3xl font-bold text-gold">32</span>
                <span className="text-sm text-muted-foreground">Countries</span>
              </div>
              <div>
                <span className="block font-heading text-3xl font-bold text-gold">2,400+</span>
                <span className="text-sm text-muted-foreground">Concerts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
