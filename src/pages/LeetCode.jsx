import React from "react";
import leetcodeImage from "../assests/leetcode.png"; // Make sure the image is placed in src/assets/

const LeetCode = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">LeetCode Progress</h2>
      <p className="text-gray-700 mb-6">
        Here's a snapshot of my LeetCode journey! I solve problems regularly to sharpen my skills.
      </p>

      <img
        src={leetcodeImage}
        alt="LeetCode Stats"
        className="w-full max-w-3xl mx-auto rounded-lg shadow-md border"
      />

      <p className="text-center text-sm mt-4 text-gray-600">
        Powered by{" "}
        <a
          href="https://github.com/rujulamore/leetcoding_everyday/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LeetCode Stats Card
        </a>
      </p>
    </section>
  );
};

export default LeetCode;
