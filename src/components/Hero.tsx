import { Snowflake } from './Snowflake';

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950 to-background opacity-80" />
        {[...Array(20)].map((_, i) => <Snowflake key={i} />)}
      </div>
      <h1 className="text-6xl md:text-8xl font-bold z-10 text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-indigo-200">
        Nexus Spring of Code
      </h1>
      <p className="text-xl md:text-2xl mt-6 z-10 text-sky-100">
        Winter Edition | 15 Oct - 30 Dec
      </p>
      <a href="/register" className="mt-10 z-10 bg-sky-500 text-sky-950 px-8 py-4 rounded-full text-lg font-bold hover:bg-sky-400">
        Start Contributing
      </a>
    </section>
  );
};
