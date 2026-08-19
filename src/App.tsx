import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import CertificateModal from "./components/CertificateModal";
import Certificates from "./components/Certificates";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates/>
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;