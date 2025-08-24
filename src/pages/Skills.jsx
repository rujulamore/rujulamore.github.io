import React from "react";

const Skills = () => {
  return (
    <section className="relative overflow-hidden">
      {/* background gradient hue + fade */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full 
          bg-gradient-to-r from-indigo-500/20 via-sky-400/20 to-fuchsia-500/20 blur-3xl"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40 
          bg-gradient-to-t from-black/40 to-transparent"
        />
      </div>

      {/* section content */}
      <div className="mx-auto max-w-5xl px-4 py-14">
        {/* header */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2
            className="bg-gradient-to-r from-indigo-400 via-sky-300 to-fuchsia-400 
            bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl"
          >
            Skills
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            A snapshot of the technical expertise and tools I bring to the table.
          </p>
        </div>

        {/* skill list */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-left">
          <li className="bg-white/40 backdrop-blur-md rounded-2xl p-4 shadow-md">
            <strong className="block text-indigo-600">Languages & Tools:</strong>
            Python, SQL
          </li>
          <li className="bg-white/40 backdrop-blur-md rounded-2xl p-4 shadow-md">
            <strong className="block text-indigo-600">AI/ML Techniques:</strong>
            Deep Q Networks (DQN), Neural Network Architectures
          </li>
          <li className="bg-white/40 backdrop-blur-md rounded-2xl p-4 shadow-md">
            <strong className="block text-indigo-600">Deep Learning:</strong>
            CNNs, RNNs
          </li>
          <li className="bg-white/40 backdrop-blur-md rounded-2xl p-4 shadow-md">
            <strong className="block text-indigo-600">NLP:</strong>
            Natural Language Processing
          </li>
          <li className="bg-white/40 backdrop-blur-md rounded-2xl p-4 shadow-md">
            <strong className="block text-indigo-600">Visualization & Libraries:</strong>
            OpenGL, Matplotlib, Seaborn
          </li>
          <li className="bg-white/40 backdrop-blur-md rounded-2xl p-4 shadow-md">
            <strong className="block text-indigo-600">Languages Spoken:</strong>
            English, Mandarin, Japanese
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
