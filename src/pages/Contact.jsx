import React, { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "rujulamore1@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (_) {
      // no-op
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-sky-400/20 to-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/5 to-transparent dark:from-white/5" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-14">
        {/* header */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="bg-gradient-to-r from-indigo-400 via-sky-300 to-fuchsia-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
            Contact
          </h2>
          <p className="mt-4 text-gray-700/90 dark:text-gray-300">
            Let’s connect! Reach out using any of the options below.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {/* Email card */}
          <div className="group rounded-2xl border border-gray-200/70 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📧</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Email
                  </h3>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="mt-2 inline-block break-all text-blue-700 underline-offset-2 hover:underline dark:text-blue-300"
                >
                  {email}
                </a>
              </div>

              <button
                onClick={handleCopy}
                aria-label="Copy email address"
                className="rounded-xl border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 active:scale-[0.98] dark:border-white/10 dark:bg-white/10 dark:text-gray-200 dark:hover:bg-white/15"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            <a
              href={`mailto:${email}`}
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:brightness-110 active:scale-[0.98]"
            >
              Send an Email
            </a>
          </div>

          {/* LinkedIn card */}
          <div className="group rounded-2xl border border-gray-200/70 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
            <div className="flex items-start gap-2">
              <span className="text-2xl">💼</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  LinkedIn
                </h3>
                <p className="mt-1 text-gray-700/90 dark:text-gray-300">
                  Connect with me professionally.
                </p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/rujula-more-19b8721a6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-center text-sm font-semibold text-blue-800 transition hover:bg-blue-100 active:scale-[0.98] dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200 dark:hover:bg-blue-500/15"
            >
              Open LinkedIn Profile
            </a>
          </div>
        </div>

        {/* footer note (optional) */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          I usually respond within 1–2 days.
        </p>
      </div>
    </section>
  );
};

export default Contact;
