import { Target, Cpu, UserCheck, Rocket } from "lucide-react";

const steps = [
  { icon: Target, title: "Define Intent", desc: "Set the direction and goals" },
  { icon: Cpu, title: "AI Orchestrates", desc: "Systems align intelligently" },
  { icon: UserCheck, title: "You Guide", desc: "Human oversight at every step" },
  { icon: Rocket, title: "Deploy Infrastructure", desc: "Structured systems go live" },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(152,63%,15%,0.06)] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            From intent to deployed infrastructure in four steps.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px connector-line" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative text-center group">
                <div className="w-14 h-14 rounded-2xl glass-panel border-accent/20 flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_-5px_hsl(155,100%,81%,0.2)] transition-all duration-500">
                  <Icon size={22} className="text-accent" />
                </div>

                <div className="absolute top-4 -right-2 text-[10px] text-muted-foreground/40 font-mono hidden md:block">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
