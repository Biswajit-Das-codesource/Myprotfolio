import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const projects = [
  {
    title: "Moonbeam",
    description:
      "Never write from scratch again. Kickstart your next great writing piece with Moonbeam. Your long-form writing AI assistant.",
    tags: ["Front-end", "GPT-3", "Next.js", "React", "TailwindCSS", "Chrome Extension"],
  },
  {
    title: "Aceternity",
    description:
      "Building modern applications that scale well and are easy to maintain. Cutting edge websites with a pinch of magic, and a lot of love.",
    tags: ["Next.js", "React", "TailwindCSS", "Full-Stack"],
  },
  {
    title: "Aceternity",
    description:
      "Building modern applications that scale well and are easy to maintain. Cutting edge websites with a pinch of magic, and a lot of love.",
    tags: ["Next.js", "React", "TailwindCSS", "Full-Stack"],
  },
  {
    title: "Aceternity",
    description:
      "Building modern applications that scale well and are easy to maintain. Cutting edge websites with a pinch of magic, and a lot of love.",
    tags: ["Next.js", "React", "TailwindCSS", "Full-Stack"],
  }, {
    title: "Aceternity",
    description:
      "Building modern applications that scale well and are easy to maintain. Cutting edge websites with a pinch of magic, and a lot of love.",
    tags: ["Next.js", "React", "TailwindCSS", "Full-Stack"],
  },
  {
    title: "Aceternity",
    description:
      "Building modern applications that scale well and are easy to maintain. Cutting edge websites with a pinch of magic, and a lot of love.",
    tags: ["Next.js", "React", "TailwindCSS", "Full-Stack"],
  },
];

const ProjectCard = ({ title, description, tags }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <div
      className="relative p-6 rounded-xl border border-gray-700 overflow-hidden transition-shadow duration-300 shadow-xs shadow-cyan-500/50 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered
          ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(122, 255, 255, 0.2), transparent 100%)`
          : "",
      }}
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <>
    <section className="md:p-6 p-3 text-white md:w-3xl bg-zinc-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

    </section>
    <a className="text-white font-medium flex justify-center items-center p-4">See More Projects <span><IoIosArrowDown className="mt-1 ml-1" /></span></a>
    </>
  );
};

export default ProjectsSection;
