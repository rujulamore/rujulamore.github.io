import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Dance from "./pages/Dance";
import Transcript from "./pages/Transcript";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/transcript" element={<Transcript />} />
          <Route path="/dance" element={<Dance />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* ✅ Floating Watermark */}
      <div className="fixed bottom-4 right-4 text-xs text-gray-400 italic z-50 pointer-events-none">
        © Rujula More
      </div>
    </Router>
  );
}

export default App;
