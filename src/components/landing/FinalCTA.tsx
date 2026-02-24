const FinalCTA = () => {
  return (
    <section id="access" className="section-padding relative overflow-hidden">
      {/* Stronger background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(155,100%,81%,0.06)] via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[hsl(155,100%,81%,0.08)] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className="text-foreground">This is not automation.</span>
          <br />
          <span className="gradient-text">This is orchestration.</span>
        </h2>

        <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
          Be among the first to build on Guided Intelligence™ infrastructure.
        </p>

        <a
          href="#"
          className="inline-flex px-10 py-4 rounded-xl bg-accent text-accent-foreground font-semibold hover:shadow-[0_0_50px_-10px_hsl(155,100%,81%,0.5)] transition-all duration-300 hover:-translate-y-0.5"
        >
          Request Early Access
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
