// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Dance from "./pages/Dance";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main className="px-4">
        {/* Give each section a unique id for anchor links */}
        <section id="home" className="min-h-screen scroll-mt-20 py-6">
          <Home />
        </section>

        <section id="about" className="min-h-screen scroll-mt-20 py-6">
          <About />
        </section>

        <section id="projects" className="min-h-screen scroll-mt-20 py-6">
          <Projects />
        </section>

        <section id="skills" className="min-h-screen scroll-mt-20 py-6">
          <Skills />
        </section>

        <section id="dance" className="min-h-screen scroll-mt-20 py-6">
          <Dance />
        </section>

        <section id="resume" className="min-h-screen scroll-mt-20 py-6">
          <Resume />
        </section>

        <section id="contact" className="min-h-screen scroll-mt-20 py-6">
          <Contact />
        </section>
      </main>

      {/* Floating Watermark */}
      <div className="fixed bottom-4 right-4 text-xs text-gray-400 italic z-50 pointer-events-none">
        © Rujula More
      </div>
    </>
  );
}

export default App;
