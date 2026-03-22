const Footer = () => {
  return (
    <footer className="section-dark py-12 border-t" style={{ borderColor: "hsl(var(--gold) / 0.1)" }}>
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-heading text-sm tracking-wider text-gold">Pandit Raghav Sharma</p>
          <p className="text-xs opacity-50">© {new Date().getFullYear()} All rights reserved</p>
          <div className="flex gap-6">
            <a href="#journey" className="text-xs opacity-60 hover:text-gold transition-colors">Journey</a>
            <a href="#contact" className="text-xs opacity-60 hover:text-gold transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
