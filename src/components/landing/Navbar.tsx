import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-accent" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">PLATME</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#industries" className="hover:text-foreground transition-colors">Industries</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#education" className="hover:text-foreground transition-colors">Education</a>
          <a href="#access" className="px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all text-sm font-medium">
            Early Access
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4 text-sm">
          <a href="#industries" className="text-muted-foreground hover:text-foreground">Industries</a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground">How It Works</a>
          <a href="#education" className="text-muted-foreground hover:text-foreground">Education</a>
          <a href="#access" className="px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/20 text-center font-medium">
            Early Access
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
