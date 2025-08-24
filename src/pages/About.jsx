import React from "react";

const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
    {children}
  </span>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] backdrop-blur-md">
    {children}
  </div>
);

const About = () => {
  return (
    <section className="relative overflow-hidden">
      {/* subtle background like on Home */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-sky-400/20 to-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-14">
        {/* header like the intro */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="bg-gradient-to-r from-indigo-400 via-sky-300 to-fuchsia-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
            About Me
          </h2>
          <p className="mt-3 text-base text-gray-800 md:text-lg">
            A software developer with the ability to design and build AI systems 
            backed by a Master’s in Computer Science and a Minor in AI.
          </p>
          {/* animated underline accent */}
          <div className="mx-auto mt-5 h-px w-24 overflow-hidden rounded-full bg-white/10">
            <div className="h-px w-1/2 animate-[pulse_2s_ease-in-out_infinite] bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
          </div>
        </div>

        {/* content card like the Home hero card */}
        <Card>
          <p className="text-gray-800 leading-relaxed">
            Hi everyone! I graduated this past June with a Master’s in Computer
            Science. My journey with computers began early thanks to my mother 
            and ever since, I’ve been eager to learn and grow every day.
            Technology and innovation deeply fascinate me; for me, computer
            science isn’t just something I studied it’s a way of life. It’s how
            I create, solve problems, and connect with the world around me.
            <br />
            <br />
            I love solving real-world problems. For example, when I struggled to find roommates, I built a web solution to make the process easier. I’m always building projects, learning new things, and if you’re ever looking for a research partner, I’m always excited to take on new challenges.
            </p>
        </Card>

        {/* education grid mirrors the Home section blocks */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-gray-800">
              Oregon State University, Corvallis, OR
            </h3>
            <p className="mt-1 text-sm italic text-gray-800">
              Master of Computer Science – AIML | GPA: 3.88/4.0
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Machine Learning",
                "Intro to Computer Graphics",
                "Deep Learning",
                "Intelligent Agents",
                "NLP",
                "Topological Data Analysis",
              ].map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-black">
              Savitribai Phule Pune University, India
            </h3>
            <p className="mt-1 text-sm italic text-black/70">
              B.Tech (Information Technology) | GPA: 9.37/10
            </p>
            <div className="mt-4 flex flex-wrap gap-2 ">
              {[
                "Data Structures & Algorithms",
                "OOP",
                "AI",
                "ML",
              ].map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </div>
          </Card>
        </div>

        {/* bottom border accent like Home */}
        <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </section>
  );
};

export default About;

