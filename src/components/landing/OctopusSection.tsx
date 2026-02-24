import { useState } from "react";

interface Industry {
  name: string;
  active: boolean;
  angle: number;
  icon: string;
}

const industries: Industry[] = [
  { name: "Education", active: true, angle: -90, icon: "📚" },
  { name: "E-commerce", active: false, angle: -18, icon: "🛒" },
  { name: "Gym", active: false, angle: 54, icon: "💪" },
  { name: "Clinic", active: false, angle: 126, icon: "🏥" },
  { name: "Restaurant", active: false, angle: 198, icon: "🍽️" },
];

/** SVG octopus mascot matching brand: cat ears, glasses, pointer stick, curly tentacles */
const OctopusSVG = ({ hovered, activeIndustries }: { hovered: string | null; activeIndustries: string[] }) => {
  const armTargets = industries.map((ind) => {
    const rad = (ind.angle * Math.PI) / 180;
    const r = 140;
    return {
      name: ind.name,
      x: 200 + r * Math.cos(rad),
      y: 210 + r * Math.sin(rad),
      angle: ind.angle,
      active: ind.active,
    };
  });

  // Curly tentacle path with loops
  const getCurlyArm = (tx: number, ty: number) => {
    const cx = 200, cy = 230;
    const dx = tx - cx, dy = ty - cy;
    const len = Math.sqrt(dx * dx + dy * dy);
    const nx = dx / len, ny = dy / len;
    // perpendicular
    const px = -ny, py = nx;
    const curlSize = 12;
    // Build path with 3 curls
    let path = `M ${cx} ${cy}`;
    for (let i = 1; i <= 4; i++) {
      const t = i / 4;
      const bx = cx + dx * t;
      const by = cy + dy * t;
      const side = i % 2 === 0 ? 1 : -1;
      const c1x = cx + dx * (t - 0.18) + px * curlSize * side;
      const c1y = cy + dy * (t - 0.18) + py * curlSize * side;
      const c2x = cx + dx * (t - 0.05) + px * curlSize * side * 0.5;
      const c2y = cy + dy * (t - 0.05) + py * curlSize * side * 0.5;
      path += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${bx} ${by}`;
    }
    // Curl at the tip
    const tipCurl = 8;
    path += ` q ${px * tipCurl} ${py * tipCurl}, ${px * tipCurl + nx * 2} ${py * tipCurl + ny * 2}`;
    return path;
  };

  const fill = "hsl(120 55% 48%)"; // Matching the green from the image
  const fillDark = "hsl(120 55% 38%)";

  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bodyGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(155 100% 81%)" stopOpacity="0.1" />
          <stop offset="100%" stopColor="hsl(155 100% 81%)" stopOpacity="0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="200" cy="200" r="120" fill="url(#bodyGlow)" />

      {/* Tentacle arms to industry nodes */}
      {armTargets.map((arm) => {
        const isGlowing = arm.active || hovered === arm.name;
        return (
          <g key={arm.name}>
            <path
              d={getCurlyArm(arm.x, arm.y)}
              stroke={isGlowing ? "hsl(155 100% 81%)" : fill}
              strokeWidth={isGlowing ? 3.5 : 2.5}
              strokeLinecap="round"
              fill="none"
              opacity={isGlowing ? 0.9 : 0.4}
              className="transition-all duration-500"
              filter={isGlowing ? "url(#glow)" : undefined}
            />
            <circle
              cx={arm.x}
              cy={arm.y}
              r={isGlowing ? 5 : 3}
              fill={isGlowing ? "hsl(155 100% 81%)" : fill}
              opacity={isGlowing ? 0.8 : 0.3}
              className="transition-all duration-500"
              filter={isGlowing ? "url(#glow)" : undefined}
            />
          </g>
        );
      })}

      {/* === OCTOPUS BODY === */}
      {/* Main body - round blob */}
      <ellipse cx="200" cy="195" rx="52" ry="48" fill={fill} />

      {/* Head / top dome */}
      <ellipse cx="200" cy="170" rx="44" ry="42" fill={fill} />

      {/* Cat ears */}
      <polygon points="166,148 156,108 180,138" fill={fill} />
      <polygon points="234,148 244,108 220,138" fill={fill} />
      {/* Inner ear */}
      <polygon points="168,144 161,118 178,138" fill={fillDark} opacity="0.3" />
      <polygon points="232,144 239,118 222,138" fill={fillDark} opacity="0.3" />

      {/* Glasses */}
      {/* Left lens */}
      <rect x="168" y="164" width="26" height="20" rx="6" ry="6" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.15" />
      {/* Right lens */}
      <rect x="206" y="164" width="26" height="20" rx="6" ry="6" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.15" />
      {/* Bridge */}
      <line x1="194" y1="174" x2="206" y2="174" stroke="white" strokeWidth="3" />
      {/* Left temple */}
      <line x1="168" y1="170" x2="158" y2="166" stroke="white" strokeWidth="2.5" />
      {/* Right temple */}
      <line x1="232" y1="170" x2="242" y2="166" stroke="white" strokeWidth="2.5" />

      {/* Eyes (inside glasses) */}
      <circle cx="181" cy="174" r="5" fill="white" />
      <circle cx="219" cy="174" r="5" fill="white" />
      <circle cx="182" cy="173" r="2.5" fill={fillDark} />
      <circle cx="220" cy="173" r="2.5" fill={fillDark} />

      {/* Pointer stick - extending from right side */}
      <line x1="240" y1="190" x2="310" y2="130" stroke={fill} strokeWidth="3" strokeLinecap="round" />
      {/* Pointer tip */}
      <circle cx="312" cy="128" r="2" fill={fill} />

      {/* Mouth - small smile */}
      <path d="M 190 198 Q 200 205, 210 198" stroke={fillDark} strokeWidth="1.5" fill="none" opacity="0.5" />

      {/* Body pulse ring */}
      <circle cx="200" cy="195" r="65" stroke="hsl(155 100% 81%)" strokeWidth="0.5" opacity="0.15" className="animate-pulse-glow" />
    </svg>
  );
};

const OctopusSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="industries" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(152,63%,15%,0.08)] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Orchestrate</span>{" "}
          <span className="text-foreground">Your Industry.</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-20">
          One Infrastructure. Multiple Verticals.
        </p>

        {/* Octopus hub */}
        <div className="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center">
          {/* SVG Octopus with arms */}
          <div className="absolute inset-0 z-0">
            <OctopusSVG hovered={hovered} activeIndustries={industries.filter(i => i.active).map(i => i.name)} />
          </div>

          {/* Industry nodes */}
          {industries.map((ind) => {
            const rad = (ind.angle * Math.PI) / 180;
            const radius = 42;
            const x = 50 + radius * Math.cos(rad);
            const y = 50 + radius * Math.sin(rad);
            const isHovered = hovered === ind.name;
            const isActive = ind.active;
            const glowing = isActive || isHovered;

            return (
              <div
                key={ind.name}
                className="absolute z-20"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => setHovered(ind.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className={`glass-panel p-4 md:p-6 rounded-2xl text-center transition-all duration-500 cursor-pointer min-w-[100px] md:min-w-[130px] ${
                    glowing
                      ? "border-accent/40 shadow-[0_0_30px_-5px_hsl(155,100%,81%,0.2)]"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <div className="text-2xl mb-2">{ind.icon}</div>
                  <div
                    className={`text-sm font-semibold ${
                      glowing ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {ind.name}
                  </div>
                  {!isActive && (
                    <div className="text-[10px] text-muted-foreground mt-1 tracking-wide uppercase">
                      Coming Soon
                    </div>
                  )}
                  {isActive && (
                    <div className="text-[10px] text-accent mt-1 tracking-wide uppercase font-medium">
                      Live
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Education preview */}
        <div className="mt-16 glass-panel p-8 rounded-2xl mint-glow-box max-w-2xl mx-auto">
          <div className="text-xs text-accent font-medium tracking-widest uppercase mb-3">
            First Active Vertical
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Education Infrastructure</h3>
          <p className="text-muted-foreground text-sm">
            Courses, memberships, cohorts, and certifications — all powered by Guided Intelligence™ architecture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OctopusSection;
