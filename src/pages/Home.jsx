import React from "react";
import profileImage from "../assests/Ghibli.png";

const Home = () => {
  return (
    <div className="px-4 mt-20 max-w-6xl mx-auto">
      {/* Intro */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Hi, I’m Rujula More 👋</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Master’s student in Computer Science at Oregon State University.<br />
          Specializing in Artificial Intelligence & Machine Learning.<br />
          I build smart things that work beautifully.
        </p>
        <p className="mt-6 italic text-gray-500">This portfolio is proof I'm your best hire 😉</p>
      </div>

      {/* Image + Experience */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Ghibli Image */}
        <div className="md:w-1/2 w-full text-center">
          <img
            src={profileImage}
            alt="Illustrated profile of Rujula"
            className="w-64 h-auto mx-auto rounded-xl shadow-lg"
          />
          <p className="mt-2 text-sm text-gray-500 italic">Inspired by Ghibli 🌸</p>
        </div>

        {/* Experience */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-left">Experience</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold">Student Trainee Intern – Cata-list Consultant</h3>
            <p className="text-sm text-gray-500 italic">Jan 2021 – Aug 2021</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Cleaned and refined data using Python for a learning management system, improving service quality for college students.</li>
              <li>Used Matplotlib, Seaborn, Plotly, and Tableau to align data science efforts with business goals, impacting nearly 50% of students positively.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Research Intern – Yuan Ze University (Taiwan)</h3>
            <p className="text-sm text-gray-500 italic">Feb 2023 – Jun 2023</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Designed state/action spaces and developed a reward function for a Deep Q-Network using PyTorch.</li>
              <li>Trained an autonomous agent for optimal control and improved system performance via iterative reinforcement learning.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
