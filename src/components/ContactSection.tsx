import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Send, MapPin, Mail, Phone, Sparkles } from "lucide-react";

const ContactSection = () => {
  const ref = useScrollReveal<HTMLElement>();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormState({ name: "", email: "", message: "" });
  };

  const inputClasses = (field: string) =>
    `w-full px-5 py-4 rounded-xl border bg-background text-foreground transition-all duration-500 outline-none ${
      focused === field
        ? "border-gold shadow-[0_0_20px_-4px_hsl(var(--gold)/0.3)] ring-2 ring-gold/20"
        : "border-border hover:border-gold/30"
    }`;

  return (
    <section id="contact" ref={ref} className="section-reveal section-cream py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.3), hsl(var(--saffron) / 0.3), transparent)" }} />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold flex items-center gap-2">
              <Sparkles className="w-3 h-3" /> Connect
            </span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-foreground">
            Get in <span className="text-gradient-gold">Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 stagger-1">
            <div>
              <label className="block text-sm font-heading tracking-wider uppercase mb-2 text-muted-foreground">Name</label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                className={inputClasses("name")}
              />
            </div>
            <div>
              <label className="block text-sm font-heading tracking-wider uppercase mb-2 text-muted-foreground">Email</label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className={inputClasses("email")}
              />
            </div>
            <div>
              <label className="block text-sm font-heading tracking-wider uppercase mb-2 text-muted-foreground">Message</label>
              <textarea
                rows={5}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={`${inputClasses("message")} resize-none`}
              />
            </div>
            <button type="submit" className="btn-hero w-full sm:w-auto">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </button>
          </form>

          {/* Info */}
          <div className="space-y-8 stagger-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              For concert bookings, teaching inquiries, or collaboration proposals — reach out and we'll respond within 48 hours.
            </p>

            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Studio", value: "Varanasi, Uttar Pradesh, India", color: "var(--gold)" },
                { icon: Mail, label: "Email", value: "contact@raghavsharma.com", color: "var(--saffron)" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210", color: "var(--emerald)" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110" style={{ background: `hsl(${item.color} / 0.1)` }}>
                    <item.icon className="w-5 h-5" style={{ color: `hsl(${item.color})` }} />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold group-hover:text-gold transition-colors duration-300">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
