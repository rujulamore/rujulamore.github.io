import React from "react";

const Contact = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Contact</h2>
      <p className="text-gray-700 mb-6">Let’s connect! Feel free to reach out to me using any of the methods below:</p>

      <div className="space-y-4 text-lg text-gray-800">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:morer@oregonstate.edu"
            className="text-blue-600 hover:underline"
          >
            morer@oregonstate.edu
          </a>
        </p>
        <p>
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/rujula-more-19b8721a6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Rujula More
          </a>
        </p>
        <p>📱 Phone: +1 (971) 563 9711</p>
      </div>
    </section>
  );
};

export default Contact;
