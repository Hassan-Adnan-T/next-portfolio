import Hero from './components/layout/hero';
import Navbar from './components/ui/navbar';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
    </main>
  );
}
