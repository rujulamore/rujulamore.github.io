import React from "react";

const Skills = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Skills</h2>

      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Languages & Tools:</strong> Python, SQL</li>
        <li><strong>AI/ML Techniques:</strong> Deep Q Networks (DQN), Neural Networks Architecture</li>
        <li><strong>Deep Learning:</strong> Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs)</li>
        <li><strong>NLP:</strong> Natural Language Processing (NLP)</li>
        <li><strong>Visualization & Libraries:</strong> OpenGL, Matplotlib, Seaborn</li>
        <li><strong>Languages Spoken:</strong> English, Mandarin, Japanese</li>
      </ul>
    </section>
  );
};

export default Skills;
