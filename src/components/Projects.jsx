import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaLaptopCode, FaDatabase, FaRocket } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiExpress, SiMongodb, SiReact, SiNodedotjs } from "react-icons/si";

const projects = [
  {
    title: "Webby AI",
    description:
      "It is an advanced AI-powered application that utilizes Google's Gemini API to fetch and process data efficiently.",
    tags: ["Gemini API", "React", "TailwindCSS"],
    icon: <FaRocket size={"2rem"}/>,
  },
  {
    title: "Code Twitter",
    description:
      "Building modern applications that help users share their code manually, allowing others to view and review them.",
    tags: ["MongoDB", "Express", "Node.js", "React", "TailwindCSS"],
    icon: <FaLaptopCode size={"2rem"}/>,
  },
  {
    title: "Node Saver",
    description:
      "A note-taking application where users can save and manage their notes. Uses Firebase for backend and authentication.",
    tags: ["Firebase", "React", "TailwindCSS"],
    icon: <SiFirebase size={"2rem"}/>,
  },
  {
    title: "WebbyUI",
    description:
      "A modern UI component library for scalable and maintainable web development. Ideal for beginners in web development.",
    tags: ["Shadcn UI", "React", "TailwindCSS", "Express", "MongoDB", "Node.js"],
    icon: <SiReact size={"2rem"}/>,
  },
  {
    title: "ShortURL Generator",
    description:
      "A backend service for generating short URLs that are easy to manage and track.",
    tags: ["Node.js", "Express"],
    icon: <SiNodedotjs size={"2rem"}/>,
  },
  {
    title: "Code Saver",
    description:
      "A modern web application for storing and managing code snippets efficiently.",
    tags: ["TailwindCSS", "MongoDB", "Express", "Node.js", "EJS"],
    icon: <FaDatabase size={"2rem"}/>,
  },
];

const ProjectCard = ({ title, description, tags, icon }) => {
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
      <div className="flex items-center gap-2 mb-2 text-white">
        <span className="text-xl">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400 mb-4 ">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-800 text-gray-300 px-3 py-1 text-[0.8rem] rounded-md flex items-center gap-1"
          >
            {getTagIcon(tag)} {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const getTagIcon = (tag) => {
  switch (tag) {
    case "React":
      return <SiReact className="text-cyan-400"/>;
    case "TailwindCSS":
      return <SiTailwindcss className="text-blue-400" />;
    case "MongoDB":
      return <SiMongodb className="text-green-500" />;
    case "Express":
      return <SiExpress className="text-gray-500" />;
    case "Node.js":
      return <SiNodedotjs className="text-green-400" />;
    case "Firebase":
      return <SiFirebase className="text-yellow-500" />;
    default:
      return null;
  }
};

const ProjectsSection = () => {
  return (
    <>
      <section className="md:p-6 p-3 text-white md:w-3xl bg-zinc-950 min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
      <a className="text-white font-medium flex justify-center items-center p-4">
        See More Projects{" "}
        <span>
          <IoIosArrowDown className="mt-1 ml-1" />
        </span>
      </a>
    </>
  );
};

export default ProjectsSection;
