const Footer = () => {
  return (
    <footer className="section-dark py-12 relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.3), hsl(var(--saffron) / 0.2), transparent)" }} />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-heading text-sm tracking-wider text-gradient-gold">Pandit Raghav Sharma</p>
          <p className="text-xs opacity-50">© {new Date().getFullYear()} All rights reserved</p>
          <div className="flex gap-6">
            <a href="#journey" className="text-xs opacity-60 hover:text-gold transition-colors duration-300">Journey</a>
            <a href="#contact" className="text-xs opacity-60 hover:text-gold transition-colors duration-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
