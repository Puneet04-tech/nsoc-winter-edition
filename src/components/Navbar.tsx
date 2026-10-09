import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 p-6 flex justify-between items-center text-white backdrop-blur-md">
      <Link href="/" className="text-2xl font-bold tracking-tighter">NSoC</Link>
      <div className="space-x-6">
        <Link href="#about">About</Link>
        <Link href="#timeline">Timeline</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#leaderboard">Leaderboard</Link>
        <Link href="/register" className="bg-sky-500 px-4 py-2 rounded-full">Register</Link>
      </div>
    </nav>
  );
};
