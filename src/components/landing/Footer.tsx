const Footer = () => (
  <footer className="border-t border-border/30 py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-accent/20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-accent" />
        </div>
        <span className="text-sm font-semibold text-foreground">PLATME</span>
      </div>
      <p className="text-xs text-muted-foreground">
        © 2026 PLATME. Guided Intelligence™ is a trademark of PLATME.
      </p>
    </div>
  </footer>
);

export default Footer;
