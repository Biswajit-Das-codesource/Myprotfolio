import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaLaptopCode, FaDatabase, FaRocket } from "react-icons/fa";
import {
  SiFirebase,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import { useSelector } from "react-redux";
import { FaGithub } from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";
const projects = [
  {
    title: "Webby AI",
    description:
      "It is an advanced AI-powered application that utilizes Google's Gemini API to fetch and process data efficiently.",
    tags: ["Gemini API", "React", "TailwindCSS"],
    icon: <FaRocket size={"2rem"} />,
    link: "https://github.com/Biswajit-Das-codesource/Webby-AI",
  },
  {
    title: "Code Twitter",
    description:
      "Building modern applications that help users share their code manually, allowing others to view.",
    tags: ["MongoDB", "Express", "Node.js", "React", "TailwindCSS"],
    icon: <FaLaptopCode size={"2rem"} />,
    link: "https://github.com/Biswajit-Das-codesource/Code_Saver-webby-",
  },
  {
    title: "Node Saver",
    description:
      "A note-taking application where users can save and manage their notes. Uses Firebase for backend and authentication.",
    tags: ["Firebase", "React", "TailwindCSS"],
    icon: <SiFirebase size={"2rem"} />,
    link: "https://github.com/Biswajit-Das-codesource/Note-saver-Firebase-",
  },
  {
    title: "WebbyUI",
    description:
      "A modern UI library for scalable, maintainable web development. Ideal for TSX & JSX in web development.",
    tags: [
      "Shadcn UI",
      "React",
      "TailwindCSS",
      "Express",
      "MongoDB",
      "Node.js",
    ],
    icon: <SiReact size={"2rem"} />,
    link: "https://github.com/Biswajit-Das-codesource/webbyUI",
  },
  {
    title: "ShortURL Generator",
    description:
      "A backend service for generating short URLs that are easy to manage and track.",
    tags: ["Node.js", "Express"],
    icon: <SiNodedotjs size={"2rem"} />,
    link: "https://github.com/Biswajit-Das-codesource/ShortUrl-nodejs",
  },
  {
    title: "Code Saver",
    description:
      "A modern web application for storing and managing code snippets efficiently.",
    tags: ["TailwindCSS", "MongoDB", "Express", "Node.js", "EJS"],
    icon: <FaDatabase size={"2rem"} />,
    link: "https://github.com/Biswajit-Das-codesource/code-saver",
  },
];

const ProjectCard = ({ title, description, tags, icon, link }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - left, y: e.clientY - top });
  };

  const theme = useSelector((store) => store.app.theme);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className="relative p-6 hover:scale-102 transition-all  rounded-xl border border-gray-700 overflow-hidden  duration-500 shadow-xs shadow-cyan-500/50 cursor-pointer min-h-[300px]"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(122, 255, 255, 0.2), transparent 80%)`
            : "",
        }}
      >
        <div
          className={`flex items-center gap-2 mb-2 ${
            theme ? "text-white" : "text-black"
          } `}
        >
          <div className="flex flex-col gap-6 mr-2">
            <h3 className="text-xl">{icon}</h3>

            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
        <p className={`${theme ? " text-gray-400" : "text-black"} mb-4`}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`${
                !theme ? "bg-gray-200 text-black" : "text-white bg-gray-900"
              } px-3 py-1 text-[0.8rem] rounded-md flex items-center gap-1`}
            >
              {getTagIcon(tag)} {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const getTagIcon = (tag) => {
  switch (tag) {
    case "React":
      return <SiReact className="text-cyan-400" />;
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

const ProjectShowcase = () => {
  const theme = useSelector((store) => store.app.theme);

  return (
    <>
    <ScrollToTop/>
      <div
        className={`min-h-screen w-full pt-25 pb-7 ${
          !theme ? "bg-white" : "bg-zinc-950"
        } flex justify-center items-center flex-col`}
      >
        <section
          className={`md:p-6 p-3 text-white md:w-3xl ${
            theme ? "bg-zinc-950 " : "bg-white text-black"
          } min-h-screen w-full `}
        >
          <div className="container mx-auto px-4">
            <h2
              className={`text-3xl ${
                theme ? "text-white" : "text-black"
              } font-bold mb-6`}
            >
              Projects
            </h2>
            <p className="text-gray-400 text-base">
              I love building things and learning along the way—whether it's a
              client project, a course assignment, or just experimenting for
              fun. Always picking up something new.
            </p>
            <div className="grid md:grid-cols-2 gap-6 grid-cols-1 mt-7">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>
        <div>
        
        </div>

        <button className="text-white border border-gray-400 rounded-3xl py-3 px-5 flex justify-center items-center gap-2 cursor-pointer">See all at <FaGithub size={"1.5rem"}/></button>
      </div>
    </>
  );
};

export default ProjectShowcase;
