import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import BackgroundLayout from "./components/layout/BackgroundLayout";
import TechStack from "./components/tech/TechStack";
import Projects from "./components/projects/Projects"
import Achievements from "./components/achivements/Achievements";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact"
import Navbar from "./components/NavBar";

function App() {
  return (
    <BackgroundLayout className="min-h-screen bg-[#05050B] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Achievements />
      <Experience />
      <Contact />
    </BackgroundLayout>
  );
}

export default App;