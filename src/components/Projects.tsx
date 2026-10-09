import { nsocProjects } from '../data/nsoc-data';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {nsocProjects.map(project => (
          <div key={project.id} className="glass p-6 rounded-2xl flex flex-col">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.languages.map(lang => (
                <span key={lang} className="text-xs bg-sky-900/50 px-2 py-1 rounded">{lang}</span>
              ))}
            </div>
            <a href={project.repoUrl} target="_blank" className="text-sky-400 font-semibold hover:underline">
              View Repository →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
