import { lazy, Suspense, useEffect, useState } from 'react';
import Loader from './components/Loader/Loader.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import Achievements from './components/Achievements/Achievements.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import useScrollReveal from './hooks/useScrollReveal.js';

// Lazy load the heavy 3D scene so it doesn't block initial paint
const Scene3D = lazy(() => import('./components/Scene3D/Scene3D.jsx'));

export default function App() {
  const [loading, setLoading] = useState(true);
  useScrollReveal();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
  }, [loading]);

  return (
    <>
      {loading && <Loader />}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
