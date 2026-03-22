import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useScrollReveal<HTMLElement>();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="section-reveal section-cream py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold">Connect</span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-foreground">
            Get in Touch
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
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-sm font-heading tracking-wider uppercase mb-2 text-muted-foreground">Email</label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-sm font-heading tracking-wider uppercase mb-2 text-muted-foreground">Message</label>
              <textarea
                rows={5}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all duration-300 resize-none"
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
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold">Studio</p>
                  <p className="text-sm text-muted-foreground">Varanasi, Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">contact@raghavsharma.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold">Phone</p>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
