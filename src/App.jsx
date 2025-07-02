import Navbar from './components/Navbar';
import BackgroundParticles from './components/BackgroundParticles';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';
import AboutMe from './components/AboutMe';
import Globe from './components/Globe';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-black to-blue-900">
      <BackgroundParticles />
     
      <Navbar />
      <main className="relative z-10 w-full">
     
        <Home />
        <Globe />
        
        <div className="w-full min-h-screen px-2 sm:px-6 py-8 bg-black/40 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20">
          <AboutMe />
          <WorkExperience />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;


