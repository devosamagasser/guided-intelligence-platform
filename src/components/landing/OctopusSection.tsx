import { useState } from "react";
import octopusImg from "@/assets/octopus-mascot.jpeg";

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
          {/* Central octopus */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative w-36 h-36 md:w-48 md:h-48">
              <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse-glow" />
              <img
                src={octopusImg}
                alt="PLATME Orchestration"
                className="w-full h-full object-contain rounded-full relative z-10"
              />
            </div>
          </div>

          {/* Industry nodes */}
          {industries.map((ind) => {
            const rad = (ind.angle * Math.PI) / 180;
            const radius = 42; // % from center
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
                {/* Connector line */}
                <div
                  className="absolute w-px"
                  style={{
                    height: `${radius * 2}px`,
                    background: glowing
                      ? "linear-gradient(to bottom, hsl(155 100% 81% / 0.3), transparent)"
                      : "linear-gradient(to bottom, hsl(150 15% 30% / 0.2), transparent)",
                    left: "50%",
                    bottom: "100%",
                    transformOrigin: "bottom center",
                    transform: `rotate(${ind.angle + 90}deg)`,
                    display: "none",
                  }}
                />

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
