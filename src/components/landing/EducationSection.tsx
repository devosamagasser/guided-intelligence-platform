import { BookOpen, Users, GraduationCap, Award } from "lucide-react";

const modules = [
  { icon: BookOpen, title: "Courses", desc: "Structured learning paths with AI-assisted content orchestration." },
  { icon: Users, title: "Membership", desc: "Tiered access control and community infrastructure." },
  { icon: GraduationCap, title: "Cohorts", desc: "Time-bound group learning with automated progression." },
  { icon: Award, title: "Certification", desc: "Verifiable credentials issued on completion milestones." },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium tracking-wide mb-6">
            First Live Vertical
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Education Infrastructure
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The first vertical built entirely on Guided Intelligence™ architecture.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div key={mod.title} className="glass-panel-hover p-6 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{mod.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{mod.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
