import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Send, MapPin, Mail, Phone, Sparkles, ArrowRight } from "lucide-react";

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
    `w-full px-5 py-4 rounded-xl border bg-background text-foreground transition-all duration-500 outline-none font-body ${
      focused === field
        ? "border-gold shadow-[0_0_25px_-4px_hsl(var(--gold)/0.4)] ring-2 ring-gold/20 scale-[1.01]"
        : "border-border hover:border-gold/30"
    }`;

  const contactInfo = [
    { icon: MapPin, label: "Studio", value: "Varanasi, Uttar Pradesh, India", color: "var(--gold)" },
    { icon: Mail, label: "Email", value: "contact@raghavsharma.com", color: "var(--saffron)" },
    { icon: Phone, label: "Phone", value: "+91 98765 43210", color: "var(--emerald)" },
  ];

  return (
    <section id="contact" ref={ref} className="section-reveal section-cream py-24 lg:py-32 relative overflow-hidden section-accent-top">
      {/* Background orbs */}
      <div className="absolute top-20 right-20 w-60 h-60 rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--gold)), transparent)" }} />
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--saffron)), transparent)" }} />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold flex items-center gap-2">
              <Sparkles className="w-3 h-3 animate-glow-pulse" /> Connect
            </span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-foreground">
            Get in <span className="text-gradient-rainbow">Touch</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">For concert bookings, teaching inquiries, or collaboration proposals</p>
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
                placeholder="Your full name"
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
                placeholder="your@email.com"
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
                placeholder="Tell us about your inquiry..."
              />
            </div>
            <button type="submit" className="btn-hero w-full sm:w-auto group">
              <Send className="w-4 h-4 mr-2" />
              Send Message
              <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
            </button>
          </form>

          {/* Info Cards */}
          <div className="space-y-6 stagger-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We respond within 48 hours. For urgent inquiries, please call directly.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 group cursor-pointer p-4 rounded-xl transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `hsl(${item.color} / 0.05)`;
                    e.currentTarget.style.boxShadow = `0 4px 20px -8px hsl(${item.color} / 0.15)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: `hsl(${item.color} / 0.1)` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: `hsl(${item.color})` }} />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold transition-colors duration-300" style={{ color: `hsl(${item.color})` }}>{item.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.value}</p>
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
