import React from "react";
import Image from "../assests/avocado_poster.pdf";




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
            
            Capstone Project | Collaboration with HP Inc.

            Partnered with HP to build an intelligent assistant that reduces configuration errors in industrial printing by retrieving and interpreting structured data from historical print job PDFs.

            Designed a hybrid RAG pipeline combining BM25 lexical retrieval, structured filtering, numeric-aware re-ranking, and rule-based reasoning to answer operator queries with high precision.

            Engineered a two-stage preprocessing system using OpenCV (for layout-aware checkbox and field extraction) and LLM-driven prompts (for semantic normalization into JSON).

            Developed a robust query classification system to dynamically route questions into four reasoning engines: document search, ruleset evaluation, knowledge-based inference, and event retrieval.

            Built a custom ruleset evaluation engine that parsed HTML tables to compute configuration recommendations (e.g., press speed, dryer power) using deterministic Python logic.

            Achieved 98.5% accuracy in query classification, 99.06% document retrieval success (Top-10), and 91.44% precision in ruleset output, outperforming baseline LLM-only approaches.

            Deployed system entirely on CPU infrastructure, optimizing performance and cost-efficiency under resource constraints.

            Preparing this work for academic publication to advance structured-data-aware AI systems for industrial automation.

            Preparing this work for academic publication to advance structured-data-aware AI systems for industrial automation.{" "}
      <a
        href="https://drive.google.com/file/d/1nV1zvb-E_xjlzhrv7vW0ATlnI6ZqmLTp/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View Paper
      </a>
          </p>
        </div>

        {/* Avocado Ripeness – Raman spectroscopy */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">
            Avocado Ripeness Prediction using Raman Spectroscopy and ML
          </h3>
          <p className="text-gray-700 text-sm">
            In collaboration with the Food Science department, I developed a machine learning pipeline to predict avocado ripeness using Raman spectroscopy data, aiming to enable rapid, non-invasive quality assessment in agricultural supply chains. 
            The dataset comprised over 1,000 raw spectral samples, which I processed using interpolation and chemometric filtering to reduce noise and normalize measurements. 
            I explored both traditional and deep learning approaches, including SVMs with SMOTE resampling and 13 different neural network architectures. 
            Through extensive experimentation, ResNet-based models significantly outperformed classical ML techniques, achieving a classification accuracy of 94.8% and delivering superior generalization across ripeness classes.
            I also extended the framework to perform regression, enabling the prediction of continuous ripeness scores to support more granular quality control. This project not only deepened my expertise in signal preprocessing, model evaluation, and neural architecture search, but also reinforced the importance of interdisciplinary collaboration in solving real-world food technology challenges through applied machine learning.


          </p>
        </div>

        {/* Avocado Ripeness – Mobile App */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">
            Mobile App for Real-Time Avocado Ripeness Detection
          </h3>
          <p className="text-gray-700 text-sm">
            Spearheaded the development of “FRESH AI,” a real-time avocado ripeness prediction system combining lightweight deep learning with mobile deployment, in close collaboration with the Food Science Department at Oregon State University.
            Conducted rigorous, research-driven experimentation across the entire ML lifecycle from dataset engineering to mobile deployment. Leveraged a foundational image dataset of 1,000 avocado images, expanded to over 6,000 through a custom OpenCV augmentation pipeline incorporating stochastic rotation (±30°), translation (±20 px), and brightness normalization to mitigate overfitting and improve generalization.
            Extensively evaluated 3 state-of-the-art convolutional neural network architectures U-Net, MobileNetV2, and EfficientNetB0 for both classification and regression tasks. Through methodical hyperparameter optimization and loss convergence tuning, U-Net achieved a peak classification accuracy of 93.41%, while EfficientNetB0 excelled in regression with a minimum MSE of 15.63 and an R² of 0.96, indicating high predictive fidelity.
            All models were implemented in PyTorch with precise control over weight (w) and bias (b) initialization, followed by conversion to ONNX and TensorFlow Lite formats to enable efficient inference on mobile devices. The final pipeline was deployed through a Flutter-based application for real-time, camera driven predictions demonstrating edge ML deployment without reliance on cloud resources.
            Currently authoring a research paper detailing the model architecture, training methodology, deployment pipeline, and its implications for sustainable food technologies and AI-driven agricultural diagnostics.


          </p>
       
       <div className="mt-6">
  <h4 className="text-md font-semibold text-blue-600 mb-2">
    Graduate Research Poster Presentation
  </h4>
  <embed
    src={Image}
    type="application/pdf"
    className="rounded-lg shadow-lg border border-gray-200"
    width="100%"
    height="600px"
  />
  <p className="text-sm text-gray-600 mt-2">
    Presented at the OSU Graduate Research Poster Presentation.
    <a
      href={Image}
      download
      className="text-blue-500 underline ml-1"
    >
      Download poster
    </a>
  </p>
</div>
 </div>


      </div>
    </section>
  );
};

export default Projects;
