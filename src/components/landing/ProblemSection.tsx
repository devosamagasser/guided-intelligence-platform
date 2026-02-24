import { Bot, HandMetal, Sparkles } from "lucide-react";

const columns = [
  {
    icon: Bot,
    title: "AI-Only Systems",
    points: [
      "No human oversight",
      "Hallucinated outputs",
      "Unstructured chaos",
    ],
    highlight: false,
  },
  {
    icon: HandMetal,
    title: "Manual Systems",
    points: [
      "Slow to build",
      "Doesn't scale",
      "High operational cost",
    ],
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Guided Intelligence™",
    points: [
      "Human-led direction",
      "AI-orchestrated execution",
      "Structured & scalable",
    ],
    highlight: true,
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            A New Category
          </h2>
          <p className="text-muted-foreground text-lg">
            Why existing approaches fall short.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((col) => {
            const Icon = col.icon;
            return (
              <div
                key={col.title}
                className={`rounded-2xl p-8 transition-all duration-500 ${
                  col.highlight
                    ? "glass-panel border-accent/30 mint-glow-box"
                    : "glass-panel"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    col.highlight
                      ? "bg-accent/15 text-accent"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  <Icon size={22} />
                </div>

                <h3
                  className={`text-xl font-bold mb-4 ${
                    col.highlight ? "text-accent" : "text-foreground"
                  }`}
                >
                  {col.title}
                </h3>

                <ul className="space-y-3">
                  {col.points.map((point) => (
                    <li
                      key={point}
                      className={`text-sm flex items-start gap-2 ${
                        col.highlight ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                          col.highlight ? "bg-accent" : "bg-muted-foreground/40"
                        }`}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
