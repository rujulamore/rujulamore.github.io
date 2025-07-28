import React from "react";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">About Me</h2>
      <p className="mb-8 text-gray-700 leading-relaxed">

        Hey everyone I am a Computer Science Major who gradiated this past June , I am a highly motivated individual who was introduced to the realm of computers very early in life by my mother since then I have been keen to learn more everyday! I am very facinated by the technology and new inovations for me computer science is not just a skill or something i studied but a way of life. It’s a way to create, to solve, to connect. It’s how I make sense of the world. On the days i am not working on a full stack project or learning about AI I love to attend a hip hop dance workshop or make some art , you might find me doing DIY artwork whenever possible. Thank you for taking the time out to read about me !
       </p>


      <h2 className="text-2xl font-bold text-blue-600 mb-2">Education</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Oregon State University, Corvallis, OR</h3>
        <p className="italic">Master of Computer Science – AIML | GPA: 3.88</p>
        <p>Relevant Coursework: Machine Learning, Intro to Computer Graphics, Deep Learning, Intelligent Agents, NLP, Topological Data Analysis</p>
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
