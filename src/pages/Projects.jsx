import React from "react";
import Image from "../assests/avocado_poster.pdf";

// Small pill-style tag
const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/60 px-2.5 py-0.5 text-xs font-medium text-blue-700">
    {children}
  </span>
);

// Reusable card wrapper to match Home/About look
const Card = ({ children, className = "" }) => (
  <div
    className={
      "rounded-2xl border border-gray-200 bg-white/80 shadow-md hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm " +
      className
    }
  >
    {children}
  </div>
);

const Projects = () => {
  return (
    <section className="relative overflow-hidden">
      {/* background gradient hue + fade */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-sky-400/20 to-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* section content */}
      <div className="mx-auto max-w-6xl px-4 py-14 text-gray-900">
        {/* header like the intro */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="bg-gradient-to-r from-indigo-400 via-sky-300 to-fuchsia-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
            Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            A showcase of my work blending research, engineering, and creativity.
          </p>
        </div>

        <div className="grid gap-6">
          {/* HP Capstone */}
          <Card>
            <div className="p-6 sm:p-8">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Tag>Capstone</Tag>
                <Tag>AI</Tag>
                <Tag>RAG</Tag>
                <Tag>Computer Vision</Tag>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold leading-snug mb-2">
                AI Smart Advisor for Million Dollar Printing Press (HP)
              </h3>

              <p className="text-sm leading-relaxed text-gray-700">
                Capstone Project · Collaboration with HP Inc. Partnered with HP to
                build an intelligent assistant that reduces configuration errors in
                industrial printing by retrieving and interpreting structured data
                from historical print job PDFs. Designed a hybrid RAG pipeline
                combining BM25 lexical retrieval, structured filtering,
                numeric-aware re-ranking, and rule-based reasoning to answer
                operator queries with high precision. Engineered a two-stage
                preprocessing system using OpenCV (for layout-aware checkbox and
                field extraction) and LLM-driven prompts (for semantic
                normalization into JSON). Developed a robust query classification
                system to dynamically route questions into four reasoning engines:
                document search, ruleset evaluation, knowledge-based inference, and
                event retrieval. Built a custom ruleset evaluation engine that
                parsed HTML tables to compute configuration recommendations (e.g.,
                press speed, dryer power) using deterministic Python logic.
                Achieved <strong>98.5%</strong> accuracy in query classification,
                <strong> 99.06%</strong> document retrieval success (Top-10), and
                <strong> 91.44%</strong> precision in ruleset output, outperforming
                baseline LLM-only approaches. Deployed system entirely on CPU
                infrastructure, optimizing performance and cost-efficiency under
                resource constraints. Preparing this work for academic publication
                to advance structured-data-aware AI systems for industrial
                automation. {" "}
                <a
                  href="https://drive.google.com/file/d/1nV1zvb-E_xjlzhrv7vW0ATlnI6ZqmLTp/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-2 hover:text-blue-800"
                >
                  View Paper
                </a>
              </p>
            </div>
          </Card>

          {/* Avocado – Raman */}
          <Card>
            <div className="p-6 sm:p-8">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Tag>Research</Tag>
                <Tag>Raman Spectroscopy</Tag>
                <Tag>ML</Tag>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold leading-snug mb-2">
                Avocado Ripeness Prediction using Raman Spectroscopy and ML
              </h3>

              <p className="text-sm leading-relaxed text-gray-700">
                In collaboration with the Food Science department, I developed a
                machine learning pipeline to predict avocado ripeness using Raman
                spectroscopy data, enabling rapid, non-invasive quality assessment
                in agricultural supply chains. The dataset comprised over 1,000 raw
                spectral samples, processed with interpolation and chemometric
                filtering to reduce noise and normalize measurements. I explored
                both traditional and deep learning approaches—including SVMs with
                SMOTE resampling and 13 neural architectures. ResNet-based models
                significantly outperformed classical ML techniques, achieving a
                classification accuracy of <strong>94.8%</strong> and superior
                generalization across ripeness classes. I also extended the
                framework to regression for continuous ripeness scoring. {" "}
                <span className="inline">
                  <a
                    href="https://medium.com/@rujula2001/unlocking-insights-from-raman-spectroscopy-data-using-machine-learning-406bf24a7f49"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-2 hover:text-blue-800"
                  >
                    View Article
                  </a>
                </span>
              </p>
            </div>
          </Card>

          {/* Avocado – Mobile App */}
          <Card>
            <div className="p-6 sm:p-8">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Tag>Mobile</Tag>
                <Tag>PyTorch → TFLite</Tag>
                <Tag>Flutter</Tag>
                <Tag>Computer Vision</Tag>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold leading-snug mb-2">
                Mobile App for Real-Time Avocado Ripeness Detection
              </h3>

              <p className="text-sm leading-relaxed text-gray-700">
                Spearheaded the development of “FRESH AI,” a real-time avocado
                ripeness prediction system combining lightweight deep learning with
                mobile deployment. Built on a 1,000-image dataset expanded to over
                6,000 via a custom OpenCV augmentation pipeline (stochastic
                rotation ±30°, translation ±20px, brightness normalization).
                Evaluated U-Net, MobileNetV2, and EfficientNetB0 across
                classification and regression: U-Net reached <strong>93.41%</strong>
                classification accuracy; EfficientNetB0 achieved a minimum MSE of
                <strong> 15.63</strong> and <strong>R² = 0.96</strong>. Implemented
                in PyTorch with careful weight/bias init, converted to ONNX &
                TensorFlow Lite for efficient on-device inference, and deployed in
                a Flutter app for camera-driven predictions. Currently authoring a
                research paper documenting the architecture and deployment
                pipeline.
              </p>

              {/* Poster embed */}
              <div className="mt-6">
                <h4 className="text-base font-semibold text-blue-700 mb-2">
                  Graduate Research Poster Presentation
                </h4>
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <embed
                    src={Image}
                    type="application/pdf"
                    className="h-[60vh] w-full"
                  />
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  Presented at the OSU Graduate Research Poster Presentation.
                  <a
                    href={Image}
                    download
                    className="ml-2 font-medium text-blue-700 underline decoration-blue-200 underline-offset-2 hover:text-blue-800"
                  >
                    Download poster
                  </a>
                </p>
              </div>
            </div>
          </Card>

          {/* Roommate Matching Platform */}
          <Card>
            <div className="p-6 sm:p-8">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Tag>Full-Stack</Tag>
                <Tag>Next.js</Tag>
                <Tag>Supabase</Tag>
                <Tag>Postgres</Tag>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold leading-snug mb-2">
                Full-Stack Roommate-Matching Platform
              </h3>

              <p className="text-sm leading-relaxed text-gray-700">
                I built and deployed a full-stack roommate-matching web platform to
                solve the challenge of finding compatible roommates. The app was
                developed using Next.js for the frontend, Supabase for
                authentication and real-time capabilities, and Postgres as the
                database. The platform supports secure signup/login with session
                persistence, and its relational database schema (profiles,
                requests, messages) enables roommate discovery, sending/receiving
                contact requests, and one-to-one messaging. Users can create and
                customize their profiles by adding details like city, budget,
                interests, and personal bio, with privacy settings that let them
                choose between public and private visibility. I implemented
                real-time features powered by Supabase subscriptions, so users see
                instant updates when they receive a new request or message. The
                messaging system includes a responsive chat interface and stores
                chat history in Postgres for reliability and continuity across
                devices. In short, the project combines usability for everyday
                users with a technically solid foundation. {" "}
                <a
                  href="https://github.com/rujulamore/roomies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-2 hover:text-blue-800"
                >
                  View Repository
                </a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
