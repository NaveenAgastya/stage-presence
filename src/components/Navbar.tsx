import { useState, useEffect } from "react";
import { Menu, X, Music2 } from "lucide-react";

const links = [
  { label: "Journey", href: "#journey" },
  { label: "Music", href: "#music" },
  { label: "Teaching", href: "#teaching" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "hsl(30 20% 8% / 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid hsl(var(--gold) / 0.15)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px -10px hsl(var(--dark) / 0.5)" : "none",
      }}
    >
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="font-heading text-sm tracking-[0.2em] uppercase text-gradient-gold flex items-center gap-2">
          <Music2 className="w-4 h-4 text-gold" />
          Raghav Sharma
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-xs tracking-widest uppercase text-cream/70 hover:text-gold transition-all duration-300 relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300" style={{ background: "linear-gradient(90deg, hsl(var(--gold)), hsl(var(--saffron)))" }} />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-cream/70 hover:text-gold transition-all duration-300 active:scale-90">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: open ? "300px" : "0",
          opacity: open ? 1 : 0,
          background: "hsl(30 20% 8% / 0.98)",
        }}
      >
        <div className="py-4 px-6 space-y-4">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm tracking-widest uppercase text-cream/70 hover:text-gold transition-all duration-300"
              style={{ transitionDelay: open ? `${i * 80}ms` : "0ms" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
