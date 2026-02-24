const HeroVisual = () => (
  <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-64 h-64 rounded-full bg-accent/5 animate-pulse-glow" />
    </div>
    <svg viewBox="0 0 400 400" className="w-full h-full max-w-[400px] relative z-10" fill="none">
      {/* Central node */}
      <circle cx="200" cy="200" r="8" fill="hsl(155 100% 81%)" opacity="0.9" />
      <circle cx="200" cy="200" r="20" stroke="hsl(155 100% 81%)" strokeWidth="1" opacity="0.3" />
      <circle cx="200" cy="200" r="40" stroke="hsl(155 100% 81%)" strokeWidth="0.5" opacity="0.15" />

      {/* Orbital nodes */}
      {[
        { cx: 120, cy: 100, r: 5 },
        { cx: 300, cy: 120, r: 4 },
        { cx: 320, cy: 280, r: 6 },
        { cx: 100, cy: 300, r: 4 },
        { cx: 200, cy: 80, r: 3 },
        { cx: 280, cy: 200, r: 5 },
        { cx: 140, cy: 260, r: 3 },
        { cx: 260, cy: 320, r: 4 },
      ].map((node, i) => (
        <g key={i}>
          <line
            x1="200" y1="200" x2={node.cx} y2={node.cy}
            stroke="hsl(155 100% 81%)"
            strokeWidth="0.5"
            opacity="0.2"
            className="animate-node-connect"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
          <circle
            cx={node.cx} cy={node.cy} r={node.r}
            fill="hsl(152 58% 27%)"
            stroke="hsl(155 100% 81%)"
            strokeWidth="0.5"
            opacity="0.6"
          />
        </g>
      ))}

      {/* Floating particles */}
      {[
        { cx: 160, cy: 140 },
        { cx: 250, cy: 160 },
        { cx: 240, cy: 250 },
        { cx: 150, cy: 220 },
      ].map((p, i) => (
        <circle key={`p-${i}`} cx={p.cx} cy={p.cy} r="1.5" fill="hsl(155 100% 81%)" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur={`${2 + i}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(152,63%,15%,0.3)]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[hsl(155,100%,81%,0.03)] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Guided Intelligence™
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-foreground">Build Systems.</span>
              <br />
              <span className="gradient-text">Orchestrate Intelligence.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Human-led direction. AI-powered orchestration.
              <br />
              Infrastructure built to scale.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#industries"
                className="px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:shadow-[0_0_30px_-5px_hsl(155,100%,81%,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore the System
              </a>
              <a
                href="#access"
                className="px-8 py-3.5 rounded-lg border border-border text-foreground font-medium text-sm hover:border-accent/40 hover:text-accent transition-all duration-300"
              >
                Join Early Access
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
