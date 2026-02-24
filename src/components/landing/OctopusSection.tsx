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

/** SVG octopus with 5 tentacle arms that curve toward each industry node */
const OctopusSVG = ({ hovered, activeIndustries }: { hovered: string | null; activeIndustries: string[] }) => {
  // Arm endpoints (matching industry angles, in SVG coords centered at 200,200, radius ~130)
  const armTargets = industries.map((ind) => {
    const rad = (ind.angle * Math.PI) / 180;
    const r = 130;
    return {
      name: ind.name,
      x: 200 + r * Math.cos(rad),
      y: 200 + r * Math.sin(rad),
      angle: ind.angle,
      active: ind.active,
    };
  });

  const getArmPath = (tx: number, ty: number) => {
    const cx = 200, cy = 200;
    // Bezier control points for a curvy tentacle
    const mx = (cx + tx) / 2;
    const my = (cy + ty) / 2;
    const perpX = -(ty - cy) * 0.25;
    const perpY = (tx - cx) * 0.25;
    return `M ${cx} ${cy} C ${cx + perpX * 0.5} ${cy + perpY * 0.5}, ${mx + perpX} ${my + perpY}, ${tx} ${ty}`;
  };

  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bodyGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(155 100% 81%)" stopOpacity="0.15" />
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

      {/* Background glow */}
      <circle cx="200" cy="200" r="100" fill="url(#bodyGlow)" />

      {/* Tentacle arms */}
      {armTargets.map((arm) => {
        const isGlowing = arm.active || hovered === arm.name;
        return (
          <g key={arm.name}>
            <path
              d={getArmPath(arm.x, arm.y)}
              stroke={isGlowing ? "hsl(155 100% 81%)" : "hsl(152 30% 25%)"}
              strokeWidth={isGlowing ? 3 : 2}
              strokeLinecap="round"
              fill="none"
              opacity={isGlowing ? 0.8 : 0.35}
              className="transition-all duration-500"
              filter={isGlowing ? "url(#glow)" : undefined}
            />
            {/* Suction cups along arm */}
            {[0.3, 0.5, 0.7].map((t) => {
              const rad = (arm.angle * Math.PI) / 180;
              const r = 130 * t;
              const perpX = -(arm.y - 200) * 0.25 * t;
              const perpY = (arm.x - 200) * 0.25 * t;
              const sx = 200 + r * Math.cos(rad) + perpX * (1 - t);
              const sy = 200 + r * Math.sin(rad) + perpY * (1 - t);
              return (
                <circle
                  key={t}
                  cx={sx}
                  cy={sy}
                  r={isGlowing ? 2.5 : 1.5}
                  fill={isGlowing ? "hsl(155 100% 81%)" : "hsl(152 30% 25%)"}
                  opacity={isGlowing ? 0.6 : 0.25}
                  className="transition-all duration-500"
                />
              );
            })}
            {/* Arm tip node */}
            <circle
              cx={arm.x}
              cy={arm.y}
              r={isGlowing ? 6 : 4}
              fill={isGlowing ? "hsl(155 100% 81%)" : "hsl(152 30% 25%)"}
              opacity={isGlowing ? 0.7 : 0.3}
              className="transition-all duration-500"
              filter={isGlowing ? "url(#glow)" : undefined}
            />
          </g>
        );
      })}

      {/* Octopus body */}
      <ellipse cx="200" cy="188" rx="38" ry="44" fill="hsl(152 58% 27%)" opacity="0.9" />
      {/* Head dome */}
      <ellipse cx="200" cy="170" rx="32" ry="36" fill="hsl(152 50% 30%)" />
      {/* Eyes */}
      <ellipse cx="188" cy="178" rx="8" ry="9" fill="hsl(150 30% 12%)" />
      <ellipse cx="212" cy="178" rx="8" ry="9" fill="hsl(150 30% 12%)" />
      <ellipse cx="189" cy="176" rx="4" ry="4.5" fill="hsl(155 100% 81%)" opacity="0.9" />
      <ellipse cx="213" cy="176" rx="4" ry="4.5" fill="hsl(155 100% 81%)" opacity="0.9" />
      {/* Pupils */}
      <circle cx="190" cy="175" r="2" fill="hsl(150 30% 8%)" />
      <circle cx="214" cy="175" r="2" fill="hsl(150 30% 8%)" />
      {/* Eye highlights */}
      <circle cx="191" cy="173" r="1" fill="hsl(155 100% 90%)" opacity="0.8" />
      <circle cx="215" cy="173" r="1" fill="hsl(155 100% 90%)" opacity="0.8" />
      {/* Glasses */}
      <ellipse cx="188" cy="178" rx="12" ry="12" stroke="hsl(152 30% 20%)" strokeWidth="1.5" fill="none" />
      <ellipse cx="212" cy="178" rx="12" ry="12" stroke="hsl(152 30% 20%)" strokeWidth="1.5" fill="none" />
      <line x1="200" y1="178" x2="200" y2="178" stroke="hsl(152 30% 20%)" strokeWidth="1.5" />
      <path d="M 200 176 Q 200 174 200 176" stroke="hsl(152 30% 20%)" strokeWidth="1.5" fill="none" />
      {/* Glasses bridge */}
      <path d="M 196 176 C 198 173, 202 173, 204 176" stroke="hsl(152 30% 20%)" strokeWidth="1.2" fill="none" />
      {/* Mouth - subtle smile */}
      <path d="M 193 192 Q 200 197, 207 192" stroke="hsl(155 100% 81%)" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Body pulse ring */}
      <circle cx="200" cy="190" r="50" stroke="hsl(155 100% 81%)" strokeWidth="0.5" opacity="0.15" className="animate-pulse-glow" />
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
