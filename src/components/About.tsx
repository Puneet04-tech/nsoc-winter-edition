import { programStats } from '../data/nsoc-data';

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10">About NSoC</h2>
      <p className="text-lg text-muted-foreground mb-16">
        Nexus Spring of Code is a student-driven open-source initiative designed to bridge the gap between
        beginners and meaningful contribution. We host real projects, provide mentorship, and guide you
        through the PR review process in a collaborative community environment.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Contributors", value: programStats.contributors },
          { label: "Projects", value: programStats.projects },
          { label: "Sponsors", value: programStats.sponsors },
          { label: "Countries", value: programStats.countries },
        ].map((stat, i) => (
          <div key={i} className="glass p-6 rounded-2xl">
            <div className="text-3xl font-bold text-sky-400">{stat.value}</div>
            <div className="text-sm mt-2 text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
