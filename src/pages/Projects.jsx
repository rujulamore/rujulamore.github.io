import React from "react";

const Projects = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Projects</h2>

      <div className="space-y-6">

        {/* AI Smart Advisor – HP Capstone */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">
            Capstone Project – AI Smart Advisor for Million Dollar Printing Press (HP)
          </h3>
          <p className="text-gray-700 text-sm">
            Designed and implemented a solution leveraging a Large Language Model (LLM) integrated with a Hybrid RAG framework
            to extract and standardize structured data from print report PDFs. Enabled similarity-based retrieval combining lexical and semantic techniques,
            using a weighted scoring mechanism to return the top 2–3 contextually relevant matches.
          </p>
        </div>

        {/* Avocado Ripeness – Raman spectroscopy */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">
            Avocado Ripeness Prediction using Raman Spectroscopy and ML
          </h3>
          <p className="text-gray-700 text-sm">
            Built a machine learning model to classify avocado ripeness using Raman spectroscopy data. Achieved 94.8% accuracy using CNNClassifier,
            combining chemometric techniques and data preprocessing. Also applied regression analysis on the dataset for extended insights.
          </p>
        </div>

        {/* Avocado Ripeness – Mobile App */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">
            Mobile App for Real-Time Avocado Ripeness Detection
          </h3>
          <p className="text-gray-700 text-sm">
            Designed a mobile application using lightweight CNN models (EfficientNetB0) with transfer learning.
            Converted PyTorch models to TensorFlow Lite for Android integration, enabling real-time avocado ripeness prediction through live camera input.
            Achieved R² score of 0.89.
          </p>
        </div>

        {/* Technical Debt in Game Engines */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">
            Analyzing Technical Debt in Open-Source Game Engines
          </h3>
          <p className="text-gray-700 text-sm">
            Conducted a study on maintainability challenges in open-source game engines (Pygame). Utilized SonarQube
            to detect technical debt, evaluate code quality, and recommend improvements for better long-term sustainability.
          </p>
        </div>

        {/* DialogueLLM */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">
            DialogueLLM – Context and Emotion Knowledge-Tuned LLM
          </h3>
          <p className="text-gray-700 text-sm">
            Developed DialogueLLM, a fine-tuned large language model for emotion recognition in conversations using multi-modal datasets
            (MELD, IEMOCAP, EmoryNLP). Trained DialogueLLM-7B with LoRA on 40GB A100 GPU, achieving up to 5.36% performance gain on ERC tasks.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
