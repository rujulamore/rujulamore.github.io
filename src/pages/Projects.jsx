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
            In collaboration with the Food Science department, I developed a machine learning pipeline to predict avocado ripeness using Raman spectroscopy data, aiming to enable rapid, non-invasive quality assessment in agricultural supply chains. The dataset comprised over 1,000 raw spectral samples, which I processed using interpolation and chemometric filtering to reduce noise and normalize measurements. I explored both traditional and deep learning approaches, including SVMs with SMOTE resampling and 13 different neural network architectures. Through extensive experimentation, ResNet-based models significantly outperformed classical ML techniques, achieving a classification accuracy of 94.8% and delivering superior generalization across ripeness classes. I also extended the framework to perform regression, enabling the prediction of continuous ripeness scores to support more granular quality control. This project not only deepened my expertise in signal preprocessing, model evaluation, and neural architecture search, but also reinforced the importance of interdisciplinary collaboration in solving real-world food technology challenges through applied machine learning.


          </p>
        </div>

        {/* Avocado Ripeness – Mobile App */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">
            Mobile App for Real-Time Avocado Ripeness Detection
          </h3>
          <p className="text-gray-700 text-sm">
            Spearheaded the development of “FRESH AI,” a real-time avocado ripeness prediction system combining lightweight deep learning with mobile deployment, in close collaboration with the Food Science Department at Oregon State University.
            Conducted rigorous, research-driven experimentation across the entire ML lifecycle—from dataset engineering to mobile deployment. Leveraged a foundational image dataset of 1,000 avocado images, expanded to over 6,000 through a custom OpenCV augmentation pipeline incorporating stochastic rotation (±30°), translation (±20 px), and brightness normalization to mitigate overfitting and improve generalization.
            Extensively evaluated 3 state-of-the-art convolutional neural network architectures—U-Net, MobileNetV2, and EfficientNetB0—for both classification and regression tasks. Through methodical hyperparameter optimization and loss convergence tuning, U-Net achieved a peak classification accuracy of 93.41%, while EfficientNetB0 excelled in regression with a minimum MSE of 15.63 and an R² of 0.96, indicating high predictive fidelity.
            All models were implemented in PyTorch with precise control over weight (w) and bias (b) initialization, followed by conversion to ONNX and TensorFlow Lite formats to enable efficient inference on mobile devices. The final pipeline was deployed through a Flutter-based application for real-time, camera-driven predictions—demonstrating edge ML deployment without reliance on cloud resources.
            Currently authoring a research paper detailing the model architecture, training methodology, deployment pipeline, and its implications for sustainable food technologies and AI-driven agricultural diagnostics.


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
