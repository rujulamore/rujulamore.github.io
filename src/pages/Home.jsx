import React, { useEffect, useState } from "react";
import profileImage from "../assests/me.jpeg"; 
import { motion, AnimatePresence } from "framer-motion";


// Typing title
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
    <motion.h1
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 leading-tight custom-font text-glossy-pink"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {text}
      <span className="blinking-cursor">|</span>
    </motion.h1>
  );
};

// Experience item (animated accordion)
const ExperienceItem = ({ title, duration, bullets }) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      className="mb-4 p-4 sm:p-5 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow duration-200"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full text-left flex items-center justify-between gap-2
          py-1 text-base sm:text-lg md:text-xl font-semibold text-blue-800
          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg
        "
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <span>{title}</span>

        <motion.svg
          className="h-5 w-5 shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </motion.svg>
      </button>

      <p className="text-xs sm:text-sm text-gray-500 italic mt-1">{duration}</p>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={id}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm sm:text-base">
              {bullets.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Home = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 max-w-6xl mx-auto">
      {/* HERO: text left, image right (stacks on mobile) */}
       <section className="relative flex flex-col items-center justify-center h-[90vh] text-center mb-10 sm:mb-14">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 left-1/4 h-64 w-64 rounded-full bg-pink-300/40 blur-3xl" />
          <div className="absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-blue-300/40 blur-3xl" />
        </div>

        <TypingName />

        <motion.p
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          A software developer with the ability to design and build AI systems,
          backed by a Master’s in Computer Science and a Minor in Artificial Intelligence.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {["Python", "React", "PyTorch", "RAG Systems", "LangChain", "Postgres"].map(
            (t) => (
              <motion.span
                key={t}
                className="rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm text-gray-700 shadow-sm backdrop-blur-sm"
                variants={{
                  hidden: { opacity: 0, y: 6 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {t}
              </motion.span>
            )
          )}
        </motion.div>

        <p className="mt-6 text-sm text-gray-600 italic">
          Always building, always learning ✨
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="relative mb-10 sm:mb-14">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-10 -left-10 h-36 w-36 sm:h-40 sm:w-40 rounded-full bg-blue-300/30 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 sm:h-44 sm:w-44 rounded-full bg-pink-300/30 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl px-0 sm:px-4">
          <motion.div
            className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-400 via-fuchsia-400 to-pink-400"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="rounded-2xl bg-white/70 backdrop-blur-sm px-5 py-6 sm:px-7 sm:py-7 md:px-8 md:py-8 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.3)]">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-5 sm:mb-6 text-center">
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
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;