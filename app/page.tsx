import Navbar from './components/ui/navbar';
import Hero from './components/layout/hero';
import About from './components/layout/about';
import Project from './components/layout/project';
import SkillsShowcase from './components/layout/skills-showcase';
import Footer from './components/ui/footer';

export default function Home() {
  return (
    <main className="relative bg-white">
      <Navbar />
      <Hero />
      <About />
      <SkillsShowcase />
      <Project />
      <Footer />
    </main>
  );
}
