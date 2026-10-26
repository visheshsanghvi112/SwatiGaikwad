import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Pathways } from './components/Pathways';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { MediaGallery } from './components/MediaGallery';
import { Education } from './components/Education';
import { Personality } from './components/Personality';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';

export function App() {
  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <About />
        <Pathways />
        <Timeline />
        <Skills />
        <MediaGallery />
        <Education />
        <Personality />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

export default App;
