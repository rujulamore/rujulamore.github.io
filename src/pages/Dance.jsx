import React from "react";

const AboutDance = () => {
  return (
    <section className="relative overflow-hidden">
  
    <div className="pointer-events-none absolute inset-0 -z-10">
    <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-sky-400/20 to-fuchsia-500/20 blur-3xl" />
    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
  </div>

    {/* header like the intro */}
    <div className="mx-auto max-w-5xl px-4 py-14">
      <div className="mx-auto mb-8 max-w-3xl text-center">
      <h2 className="bg-gradient-to-r from-indigo-400 via-sky-300 to-fuchsia-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
        My Dance Journey
      </h2>
      </div>
        <p className="mt-4 text-base sm:text-lg text-gray-700">
          Classical roots, modern exploration, and a lifelong love for movement.
        </p>
     

      {/* Intro Copy Card */}
      <div className="mx-auto max-w-5xl space-y-8">
        <article className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8">
          <p className="text-gray-900 leading-relaxed text-base sm:text-lg">
            I began my dance journey at the age of 7, training in classical Kathak for
            over 13 years. The rhythm, grace, and storytelling of classical dance shaped
            my foundation as an artist. Later, I expanded my expression by joining my
            college's dance crew, where I explored styles like hip-hop and contemporary.
            Even after moving to the U.S., I’ve continued nurturing my passion by
            attending local dance workshops—always learning, evolving, and staying
            connected to the stage.
          </p>

          <p className="mt-4 text-gray-900 leading-relaxed text-base sm:text-lg">
            Dance has taught me patience, discipline, and expression—qualities I carry
            into my creative and technical work. Whether I’m debugging code or
            practicing choreography, I approach both with heart, flow, and precision.
          </p>

          {/* Style tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
              Kathak
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
              Hip-hop
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
              Contemporary
            </span>
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
              Workshops
            </span>
          </div>
        </article>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Video Card 1 */}
          <article className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Kathak Performance
              </h3>
              <div className="mt-3 rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/h6qBgEwkLGg"
                    title="Kathak Dance Performance"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </article>

          {/* Video Card 2 */}
          <article className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                College Crew Hip-Hop
              </h3>
              <div className="mt-3 rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/s1ZtXvMFAZ4"
                    title="Hip-Hop Performance"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Quote card */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="p-6 sm:p-8">
            <p className="text-center text-sm sm:text-base text-gray-700 italic">
              “When I dance I am the happiest”
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutDance;
