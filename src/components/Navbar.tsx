import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid hsl(var(--gold) / 0.1)" : "1px solid transparent",
      }}
    >
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="font-heading text-sm tracking-[0.2em] uppercase text-gold">
          Raghav Sharma
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-xs tracking-widest uppercase text-cream/70 hover:text-gold transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-cream/70 hover:text-gold transition-colors active:scale-95">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden py-4 px-6 space-y-4" style={{ background: "hsl(30 20% 8% / 0.98)" }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block text-sm tracking-widest uppercase text-cream/70 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
