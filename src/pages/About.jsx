import React from "react";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">About Me</h2>
      <p className="mb-8 text-gray-700 leading-relaxed">
        Hello! I am Rujula More, a Master of Computer Science student specializing in AIML at Oregon State University.
        I am passionate about software development, data analytics, and machine learning. Welcome to my portfolio website!
      </p>

      <h2 className="text-2xl font-bold text-blue-600 mb-2">Education</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Oregon State University, Corvallis, OR</h3>
        <p className="italic">Master of Computer Science – AIML | GPA: 4.0</p>
        <p>Relevant Coursework: Machine Learning, Intro to Computer Graphics, Deep Learning, Intelligent Agents, NLP, Topological Data Analysis</p>
        <p>Research: Block Movement Path Planning using RL – Prof. Prasad Tadepalli</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Savitribai Phule Pune University, India</h3>
        <p className="italic">Bachelor of Technology (Information Technology) | GPA: 9.37/10</p>
        <p>Relevant Coursework: Data Structures & Algorithms, OOP, AI, ML</p>
      </div>
    </section>
  );
};

export default About;
