// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#dance", label: "Dance" },
  { href: "#resume", label: "Resume" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  // Highlight the link for the section currently in view
  useEffect(() => {
    const sections = links
      .map(l => document.querySelector(l.href))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach(sec => obs.observe(sec));
    return () => obs.disconnect();
  }, []);

  // Smooth scroll using native API
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b">
      <div className="mx-auto max-w-6xl px-4 flex items-center gap-4 h-14">
        <a
          href="#home"
          className="font-semibold tracking-wide"
          onClick={(e) => handleClick(e, "#home")}
        >
          Rujula
        </a>
        <ul className="ml-auto flex flex-wrap items-center gap-4 text-sm">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleClick(e, href)}
                className={`px-2 py-1 rounded-md transition-colors ${
                  active === href.slice(1)
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
