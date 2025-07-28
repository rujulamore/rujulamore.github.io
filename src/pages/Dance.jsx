import React from "react";

const AboutDance = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">My Dance Journey</h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        I began my dance journey at the age of 7, training in classical Kathak for over 13 years. The rhythm,
        grace, and storytelling of classical dance shaped my foundation as an artist. Later, I expanded my
        expression by joining my college's dance crew, where I explored styles like hip-hop and contemporary.
        Even after moving to the U.S., I’ve continued nurturing my passion by attending local dance workshops 
        always learning, evolving, and staying connected to the stage.
      </p>

      <p className="text-gray-700 leading-relaxed mb-10">
        Dance has taught me patience, discipline, and expression  all of which I carry into my creative and technical work.
        Whether I'm debugging code or practicing choreography, I approach both with heart, flow, and precision.
      </p>

      {/* Videos */}
      <div className="space-y-12">
        {/* Video 1 */}
        {/* Video 1 */}
  <div>
    <h3 className="text-xl font-semibold text-blue-600 mb-2">Kathak Performance</h3>
    <div className="w-full h-64">
      <iframe
        className="w-full h-full rounded-lg shadow-lg"
        src="https://www.youtube.com/embed/h6qBgEwkLGg"
        title="Kathak Dance Performance"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>

  {/* Video 2 */}
  <div>
    <h3 className="text-xl font-semibold text-blue-600 mb-2">College Crew Hip-Hop</h3>
    <div className="w-full h-64">
      <iframe
        className="w-full h-full rounded-lg shadow-lg"
        src="https://www.youtube.com/embed/s1ZtXvMFAZ4"
        title="Hip-Hop Performance"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
      </div>

      <p className="text-center text-sm mt-10 text-gray-600 italic">
        “When I dance I am the happiest”
      </p>
    </section>
  );
};

export default AboutDance;
