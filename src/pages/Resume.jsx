import React from "react";
import transcriptPdf from "../assests/resume.pdf";


const Resume = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Resume</h2>
      <p className="text-gray-700 mb-6">
        Click below to view my Resume.
      </p>

      <div className="w-full h-[600px] border rounded shadow-md overflow-hidden">
        <embed
          src={transcriptPdf}
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>
    </section>
  );
};

export default Resume;
