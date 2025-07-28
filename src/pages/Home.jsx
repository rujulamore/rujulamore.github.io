import React from "react";

import profileImage from "../assests/me.jpeg";
import { useEffect, useState } from "react";


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

    <h1 className="text-7xl font-bold mb-4 custom-font text-glossy-pink">

      {text}
      <span className="blinking-cursor">|</span>
    </h1>
  );
};



const ExperienceItem = ({ title, duration, bullets }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-b border-gray-300 pb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-left w-full text-xl font-semibold text-blue-800 hover:underline focus:outline-none"
      >
        {title}
      </button>
      <p className="text-sm text-gray-500 italic mt-1">{duration}</p>
      {isOpen && (
        <ul className="list-disc list-inside text-gray-700 mt-2 transition-all duration-300">
          {bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};




const Home = () => {
  return (
    <div className="px-4 mt-20 max-w-6xl mx-auto">
      {/* Intro */}
      <div className="text-center mb-16">
      <TypingName />
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Master’s student in Computer Science at Oregon State University.<br />
          Minor in Artificial Intelligence & Machine Learning.<br />
          I build smart things that work beautifully.
        </p>
       
      </div>

      {/* Image + Experience */}
      <div className="text-center mb-16">
  <img
    src={profileImage}
    alt="Illustrated profile of Rujula"
    className="w-96 h-auto mx-auto rounded-xl shadow-lg"
  />
</div> 
      

     <div className="w-full">
  <h2 className="text-3xl font-bold text-blue-700 mb-6 text-left">Experience</h2>

    <ExperienceItem
    title="Research Assistant : Oregon State University"
    duration="March 2024 – Jun 2025"
    bullets={[
      "Head over to the projects section to know more about the 2 amazing projects i worked on"
      
    ]}
  />

  <ExperienceItem
    title="Research Intern : Yuan Ze University (Taiwan)"
    duration="Feb 2023 – Jun 2023"
    bullets={[
      "Designed state/action spaces and developed a reward function for a Deep Q-Network using PyTorch.",
      "Trained an autonomous agent for optimal control and improved system performance via iterative reinforcement learning."
    ]}
  />

  <ExperienceItem
    title="Student Trainee Intern : Cata-list Consultant"
    duration="Jan 2021 – Aug 2021"
    bullets={[
      "Cleaned and refined data using Python for a learning management system, improving service quality for college students.",
      "Used Matplotlib, Seaborn, Plotly, and Tableau to align data science efforts with business goals, impacting nearly 50% of students positively."
    ]}
  />
</div>
  </div>
  );
};

export default Home;
