"use client";

import { useEffect, useState } from "react";
const sections = [
  {
    id: "brunch",
    label: "Brunch",
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
  },
  {
    id: "drinks",
    label: "Drinks",
  },
  {
    id: "sides",
    label: "Sides",
  },
];

export default function StickyNav() {
    const [active, setActive] = useState("brunch");

    useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  sections.forEach((section) =>
    observer.observe(section)
  );

  return () => observer.disconnect();
}, []);
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-6 py-4">
        {sections.map((section) => (
        <a
  key={section.id}
  href={`#${section.id}`}
  className={`whitespace-nowrap rounded-full px-4 py-2 font-medium transition ${
    active === section.id
      ? "bg-amber-700 text-white"
      : "hover:bg-amber-100 hover:text-amber-700"
  }`}
>
  {section.label}
</a>
        ))}
      </div>
    </nav>
  );
}