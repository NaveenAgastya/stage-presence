import { Music2, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark py-16 relative overflow-hidden">
      {/* Rainbow top border */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, hsl(var(--gold)), hsl(var(--saffron)), hsl(var(--ruby)), hsl(var(--violet)), hsl(var(--indigo)), hsl(var(--emerald)), hsl(var(--gold)))", backgroundSize: "200% 100%", animation: "gradient-shift 8s linear infinite" }} />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a href="#" className="font-heading text-lg tracking-[0.2em] uppercase text-gradient-gold flex items-center gap-3 hover:scale-105 transition-transform">
            <Music2 className="w-5 h-5 text-gold" />
            Pandit Raghav Sharma
          </a>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-8">
            {["Journey", "Music", "Teaching", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs tracking-widest uppercase opacity-50 hover:opacity-100 hover:text-gold transition-all duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300" style={{ background: "hsl(var(--gold))" }} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-40 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.3), transparent)" }} />

          {/* Copyright */}
          <p className="text-xs opacity-40 flex items-center gap-1.5">
            © {new Date().getFullYear()} Made with <Heart className="w-3 h-3 text-ruby fill-ruby" /> All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
