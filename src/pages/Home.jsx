import React, { useEffect, useState } from "react";
import profileImage from "../assests/me.jpeg"; 


const TypingName = () => {
  const [text, setText] = useState("");
  const fullText = "HI, I'M RUJULA";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className="
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl
        font-bold mb-3 sm:mb-4 leading-tight
        custom-font text-glossy-pink
      "
    >
      {text}
      <span className="blinking-cursor">|</span>
    </h1>
  );
};

const ExperienceItem = ({ title, duration, bullets }) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      className="
        mb-4 p-4 sm:p-5 
        border border-gray-200 
        rounded-xl shadow-sm 
        bg-white hover:shadow-md 
        transition-shadow duration-200
      "
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full text-left
          flex items-center justify-between gap-2
          py-1
          text-base sm:text-lg md:text-xl
          font-semibold text-blue-800
          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg
        "
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <span>{title}</span>
        <svg
          className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <p className="text-xs sm:text-sm text-gray-500 italic mt-1">{duration}</p>

      <div
        id={id}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="overflow-hidden list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm sm:text-base">
          {bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


const Home = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 max-w-6xl mx-auto">
      {/* Intro */}
      <section className="relative mb-12 sm:mb-16">
  {/* Decorative glow blobs */}
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-16 -left-10 h-52 w-52 rounded-full bg-pink-300/40 blur-3xl" />
    <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-blue-300/40 blur-3xl" />
  </div>

  <div className="mx-auto max-w-3xl px-4">
    {/* Gradient pill */}
    <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-gradient-to-r from-pink-100 via-white to-blue-100 px-3 py-1 shadow-sm backdrop-blur-sm">
      <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
      <span className="text-xs font-medium tracking-wide text-gray-700">
        CS @ Oregon State • AI/ML
      </span>
    </div>

    {/* Glassy card frame */}
    <div className="p-[2px] rounded-2xl bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400">
      <div className="rounded-2xl bg-white/70 backdrop-blur-sm px-5 py-6 sm:px-8 sm:py-8 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.3)]">
        {/* Title */}
        <div className="text-center">
          <TypingName />
        </div>

        {/* Description (updated copy) */}
        <p className="mt-3 text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 text-center">
          A software developer with the ability to design and build AI systems,
          backed by a Master’s in Computer Science and a Minor in Artificial Intelligence.
        </p>

        {/* CTA buttons
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white
                       bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700
                       shadow-md hover:shadow-lg transition-all"
          >
            View Projects
          </a>
          <a
            href="#/resume"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold
                       text-blue-700 bg-white border border-blue-200 hover:border-blue-300 hover:bg-blue-50
                       shadow-sm hover:shadow transition-all"
          >
            Resume
          </a>
        </div> */}

        {/* Tech chips (optional, compact & mobile-friendly) */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {[ "Python", "React", "PyTorch", "RAG Systems", "LangChain", "Postgres"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Profile Image */}
<section className="text-center mb-12 sm:mb-16 relative">
  {/* Decorative glow */}
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-pink-300/30 blur-3xl" />
    <div className="absolute bottom-0 right-1/2 translate-x-1/2 h-44 w-44 rounded-full bg-blue-300/30 blur-3xl" />
  </div>

  <div className="inline-block p-[3px] rounded-2xl bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 shadow-lg">
    <div className="rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm">
      <img
        src={profileImage}
        alt="Rujula"
        className="w-40 sm:w-56 md:w-72 lg:w-96 h-auto object-cover transform transition duration-300 hover:scale-[1.03]"
        loading="eager"
      />
    </div>
  </div>

  {/* Caption (optional) */}
  <p className="mt-4 text-sm text-gray-600 italic">
    Always building, always learning ✨
  </p>
</section>


      {/* Experience */}
<section id="experience" className="relative mb-12 sm:mb-16">
  {/* Decorative glow blobs */}
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-blue-300/30 blur-3xl" />
    <div className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-pink-300/30 blur-3xl" />
  </div>

  <div className="mx-auto max-w-4xl px-4">
    <div className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-400 via-fuchsia-400 to-pink-400">
      <div className="rounded-2xl bg-white/70 backdrop-blur-sm px-5 py-6 sm:px-8 sm:py-8 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.3)]">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center">
          Experience
        </h2>

        <div className="space-y-4">
          <ExperienceItem
            title="Research Assistant : Oregon State University"
            duration="March 2024 – Jun 2025"
            bullets={[
              "Head over to the projects section to know more about the 2 amazing projects I worked on",
            ]}
          />

          <ExperienceItem
            title="Research Intern : Yuan Ze University (Taiwan)"
            duration="Feb 2023 – Jun 2023"
            bullets={[
              "Designed state/action spaces and developed a reward function for a Deep Q-Network using PyTorch.",
              "Trained an autonomous agent for optimal control and improved system performance via iterative reinforcement learning.",
            ]}
          />

          <ExperienceItem
            title="Student Trainee Intern : Cata-list Consultant"
            duration="Jan 2021 – Aug 2021"
            bullets={[
              "Cleaned and refined data using Python for a learning management system, improving service quality for college students.",
              "Used Matplotlib, Seaborn, Plotly, and Tableau to align data science efforts with business goals, impacting nearly 50% of students positively.",
            ]}
          />
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};

export default Home;
