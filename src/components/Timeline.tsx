import { timelineEvents } from '../data/nsoc-data';

export const Timeline = () => {
  return (
    <section id="timeline" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">Program Timeline</h2>
      <div className="space-y-12">
        {timelineEvents.map((event, i) => (
          <div key={event.id} className="flex flex-col md:flex-row gap-6 items-start relative pl-6 border-l-2 border-sky-900">
            <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-sky-500" />
            <div className="md:w-1/4">
              <span className="text-sm font-semibold text-sky-400">{event.date}</span>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
