import Navbar from './components/ui/navbar';
import Hero from './components/layout/hero';
import About from './components/layout/about';
import Project from './components/layout/project';
import SkillsShowcase from './components/layout/skills-showcase';
import Footer from './components/ui/footer';
import PageTransition from './components/ui/page-transition';
import Divider from './components/layout/divider';
import OJTPreview from './components/layout/ojt-preview';

export default function Home() {
  return (
    <PageTransition>
      <main className="relative bg-white">
        <Navbar />
        <Hero />
        <Project />
        <Divider />
        <SkillsShowcase />
        <Footer />
      </main>
    </PageTransition>
  );
}
