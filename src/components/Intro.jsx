import React from "react";
import {
  FaGithub,
  FaGoogleDrive,
  FaLinkedin,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import profilePic from "./me.jpeg"; // Ensure the correct path to the profile picture

function Intro() {
  return (
    <div className="w-full max-w-3xl h-max justify-between text-white p-8 rounded-lg flex flex-col items-center md:items-start">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full">
        <div className="heading text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-left">
            Biswajit Das
          </h1>
          <p className="text-lg mt-2 text-left">
            Building{" "}
            <span className="bg-gray-700 px-2 py-1 rounded-md font-semibold">
              Aceternity
            </span>
            ,
            <span className="bg-gray-700 px-2 py-1 rounded-md font-semibold ml-2">
              Rogue
            </span>
            <span className="font-semibold"> and other cool things</span>
          </p>
        </div>
        <img
          src={profilePic}
          alt="Profile"
          className="w-22 h-22  border-2 border-gray-300 rounded-2xl hidden md:block mb-4 md:mb-0 md:mr-6"
        />
      </div>
      <p className="text-gray-300 text-left w-full md:w-2xl mt-3">
        I’m a passionate Full-Stack Developer with expertise in both frontend
        and backend development. I specialize in crafting beautiful,
        user-friendly interfaces and building <br className="hidden md:block" />
        robust, scalable backend systems. With a strong foundation in modern{" "}
        <br className="hidden md:block" />
        web technologies, I enjoy every aspect of development.
        <br />
        <br />
        You can find me on{" "}
        <span className="font-bold text-white cursor-pointer">LinkedIn</span>,
        <span className="font-bold text-white cursor-pointer"> Github</span>,
        <span className="font-bold text-white cursor-pointer"> Twitter</span>.
      </p>
      <div className="w-full">
        <div className="connections flex items-center gap-2 border w-max p-2 mt-4 rounded-2xl cursor-pointer">
          View Resume
          <FaGoogleDrive />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="bg-gray-700 px-3 py-1 rounded-md flex items-center gap-2 text-sm ">
          <FaJs className="w-4 h-4" /> Javascript
        </span>
        <span className="bg-gray-700 px-3 py-1 rounded-md flex items-center gap-2 text-sm">
          <SiTypescript className="w-4 h-4" /> Typescript
        </span>
        <span className="bg-gray-700 px-3 py-1 rounded-md flex items-center gap-2 text-sm">
          <FaPython className="w-4 h-4" /> Python
        </span>
        <span className="bg-gray-700 px-3 py-1 rounded-md flex items-center gap-2 text-sm">
          <FaReact className="w-4 h-4" /> React.js
        </span>
        <span className="bg-gray-700 px-3 py-1 rounded-md flex items-center gap-2 text-sm">
          <SiNextdotjs className="w-4 h-4" /> Next.js
        </span>
        <span className="bg-gray-700 px-3 py-1 rounded-md flex items-center gap-2 text-sm">
          <FaReact className="w-4 h-4" /> React Native
        </span>
        <span className="bg-gray-700 px-3 py-1 rounded-md flex items-center gap-2 text-sm">
          <FaNodeJs className="w-4 h-4" /> Express.js
        </span>
        <span className="bg-gray-700 px-3 py-1 rounded-md flex items-center gap-2 text-sm">
          <SiMongodb className="w-4 h-4" /> MongoDB
        </span>
        <span className="bg-gray-700 px-3 py-1 rounded-md flex items-center gap-2 text-sm">
          <SiPostgresql className="w-4 h-4" /> Postgres
        </span>
        <span className="bg-gray-700 px-3 py-1 rounded-md flex items-center gap-2 text-sm">
          <SiPrisma className="w-4 h-4" /> Prisma
        </span>
        <span className="bg-gray-700 px-3 py-1 rounded-md flex items-center gap-2 text-sm">
          <SiTailwindcss className="w-4 h-4" /> Tailwind
        </span>
        <span className="bg-gray-700 px-3 py-1 rounded-md flex items-center gap-2 text-sm">
          <SiFramer className="w-4 h-4" /> Framer Motion
        </span>
        <span className="bg-gray-700 px-3 py-1 rounded-md flex items-center gap-2 text-sm">
          OpenAI, Gemini, Claude, Prompt Engineering
        </span>
      </div>
    </div>
  );
}

export default Intro;
