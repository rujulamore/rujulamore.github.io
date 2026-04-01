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
            <h3 className="text-xl sm:text-2xl font-semibold leading-snug mb-2">🌸 My Story</h3>

    <p>Hey everyone! I’m <strong>Rujula More</strong>, born on October 15, 2001, to two wonderful parents, <strong>Pooja</strong> and <strong>Uday More</strong>, who have been my rock ever since. I was born and raised in <strong>Pune, India</strong>, and my childhood was filled with love from my family and a few close friends. I was especially fond of my late grandmother, who took care of me while my mom was at work she played a huge role in shaping who I am today.</p>

    <p>Growing up, I was the definition of a busy kid I played three sports (<strong>hockey, tennis, and swimming</strong>), learned <strong>Kathak dance</strong>, and even attended <strong>drawing classes</strong> on weekends. My days started early with hockey practice and ended late with tennis, dance, and homework. Looking back, I have no idea how I managed it all but I wouldn’t change a thing. Those years taught me <strong>time management</strong>, <strong>discipline</strong>, and the importance of <strong>trying new things</strong> to find what truly excites you.</p>

    <p>For the longest time, I was a shy and introverted kid. That changed in <strong>7th grade</strong> when I attended a <strong>20-day military camp</strong>, where we lived and trained like real soldiers. Waking up at 3 a.m. wasn’t fun, but that experience made me stronger and more confident. When I returned, I started speaking up more, made new friends, and even received the <strong>Best Dancer Award</strong> at school a moment I’ll always cherish.</p>

    <h3 className="text-xl sm:text-2xl font-semibold leading-snug mb-2">Why Computer Science?</h3>

    <p>My love for computers started early, thanks to my mom she has a <strong>Ph.D. in Electronics</strong>. I used to sit beside her as she worked on <strong>breadboards, capacitors, and transistors</strong>, and she’d explain things like bit calculations and circuits to me. I was fascinated! In school, computer classes came naturally to me I rarely needed to study for them. That curiosity led me to major in <strong>Computer Science</strong> for my undergraduate degree.</p>

    <p>During my undergrad in Pune, I dove deep into every concept I learned. I especially enjoyed coding in <strong>Python</strong> and <strong>C++</strong> the latter helped me build strong fundamentals because it’s such a low-level, logic-driven language. I earned several certifications and worked on different projects, but my biggest break came during my <strong>final-year internship in Taiwan</strong>, where I worked on <strong>Reinforcement Learning</strong> a field I knew nothing about at first but quickly fell in love with.</p>

    <p>Living and working in Taiwan was one of the best experiences of my life. I met amazing people, learned a ton, and grew immensely both professionally and personally. Fun fact: I was also part of my college’s <strong>dance crew</strong>, and we made it to the <strong>semifinals at Mood Indigo</strong>, Asia’s largest college cultural festival!</p>

    <h3 className="text-xl sm:text-2xl font-semibold leading-snug mb-2">Moving to the U.S.</h3>

    <p>In <strong>2023</strong>, I moved to the <strong>United States</strong> for my master’s degree excited, nervous, and ready for new beginnings. The first few months were magical, but soon, homesickness hit hard. Still, I reminded myself why I was here: to <strong>learn, grow, and say yes to every opportunity</strong>.</p>

    <p>Like many international students, I faced my share of challenges. I worked part-time as a <strong>tech support assistant</strong>, managing Canvas pages and later helping with <strong>inventory management</strong> at the College of Engineering. Balancing everything wasn’t easy, but I made sure my grades never suffered.</p>

    <p>Then came one of the hardest chapters of my life in the summer of <strong>2024</strong>, I fell very sick. It was a terrifying experience. I was far from home, working part-time, and unable to fly because of medical restrictions. After a month of struggling on my own, I finally decided to go back to <strong>India</strong> to recover.</p>

    <p>Those two months at home were a mix of healing and reflection. When it was time to return to the U.S., I was scared and uncertain unsure if coming back was the right decision for me. That’s when I expressed my concerns to my doctor, and I’ll never forget what he said:</p>

    <blockquote>“If it’s not affecting your day-to-day life, you should go live your dream.”</blockquote>

    <p>Those words have stayed with me ever since they gave me the courage to come back and continue pursuing my goals. And today, I’m so grateful that I did.</p>

    <h3 className="text-xl sm:text-2xl font-semibold leading-snug mb-2">The AI Journey</h3>

    <p>Soon after returning, I got the incredible opportunity to work with <strong>HP</strong> on an <strong>AI project</strong> under the guidance of <strong>Professor Alan Fern</strong>. The project involved <strong>Large Language Models (LLMs)</strong> and <strong>Model Context Protocols (MCPs)</strong> exactly the kind of work I had dreamed of doing. Around the same time, I also became a <strong>Research Assistant</strong> at the <strong>OSU Food Science Department</strong>, working on a fascinating project that used <strong>Machine Learning models</strong> to detect <strong>avocado ripeness</strong>.</p>

    <p>What made this project even more special was the personal connection my father owns a <strong>food-processing machinery manufacturing company</strong> called <a href="https://www.process-masters.com/" target="_blank">Process Masters</a>, so working on food technology felt like coming full circle. My final terms were filled with learning <strong>Neural Networks, LLMs, NLP, image classification, regression, TensorFlow Lite</strong>, and more. Every day was a new adventure, and I even had the chance to present my research at a <strong>campus poster event</strong> one of my proudest moments.</p>

    <p>In the <strong>Fall of 2024</strong>, I also joined the <strong>Indian Student Association (ISA)</strong> at OSU as part of the <strong>Public Relations team</strong>. I helped host multiple cultural and community events that brought together over <strong>1,000 Indian students</strong>. Being able to give back to the community that supported me throughout my journey was my way of saying <em>thank you</em>.</p>

    <h3 className="text-xl sm:text-2xl font-semibold leading-snug mb-2">Life Now</h3>

    <p>After graduating, I moved to <strong>New Jersey</strong> to be close to my aunt and uncle while job hunting. Their support during that time meant everything to me. I’m now working as a <strong>Software Engineer</strong>, continuing to grow, learn, and build meaningful projects. On weekends, I love attending <strong>tech events</strong> and meeting like-minded people it keeps me inspired and connected to the fast-moving world of AI.</p>

    <p>And of course, <strong>dance</strong> is still my forever escape. I may not practice as much as I used to, but <strong>Kathak</strong> will always be a part of me a reminder of where I came from, how far I’ve come, and everything I’m yet to become. 💫</p>
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

