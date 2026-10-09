import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Timeline } from '../components/Timeline';
import { Perks } from '../components/Perks';
import { Projects } from '../components/Projects';
import { Leaderboard } from '../components/Leaderboard';
import { Sponsors } from '../components/Sponsors';
import { FAQ } from '../components/FAQ';
import { RegistrationForm } from '../components/RegistrationForm';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Perks />
      <Projects />
      <Leaderboard />
      <Sponsors />
      <FAQ />
      <RegistrationForm />
      <Footer />
    </main>
  );
}
