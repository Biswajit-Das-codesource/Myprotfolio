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
import { useSelector } from "react-redux";
import { DiNodejsSmall } from "react-icons/di";

function Intro() {
  const theme = useSelector((store) => store.app.theme);

  console.log(theme);
  return (
    <div
      className={`w-full max-w-3xl h-max justify-between ${
        theme ? "text-white bg-zinc-950" : "text-black bg-white"
      } p-8 flex flex-col items-center md:items-start  pt-6`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full">
        <div className="heading text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-left">
            Biswajit Das
          </h1>
          <p className="text-lg mt-2 text-left font-semibold">
            Full-Stack Developer | UI/UX & Python Enthusiast | Always Learning &
            Innovating.
          </p>
        </div>
        <img
          src={profilePic}
          alt="Profile"
          className="w-22 h-22  border-2 border-gray-300 rounded-2xl hidden md:block mb-4 md:mb-0 md:mr-6"
        />
      </div>
      <p
        className={`${
          theme ? "text-gray-300" : "text-black"
        } text-left w-full md:w-2xl mt-3`}
      >
        I’m a passionate Full-Stack Developer with expertise in both frontend
        and backend development. I specialize in crafting beautiful,
        user-friendly interfaces and building <br className="hidden md:block" />
        robust, scalable backend systems. With a strong foundation in modern{" "}
        <br className="hidden md:block" />
        web technologies, I enjoy every aspect of development.
        <br />
        <br />
        You can find me on{" "}
        <span className="font-bold  cursor-pointer">LinkedIn</span>,
        <span className="font-bold  cursor-pointer"> Github</span>,
        <span className="font-bold  cursor-pointer"> Twitter</span>.
      </p>
      <div className="w-full">
        <a href="https://drive.google.com/file/d/1QF3ce-MVp7fx5C7QQP_YcYgLqUAx0Ju7/view?usp=drive_link">
          <div className="connections flex items-center gap-2 border w-max p-2 mt-4 rounded-2xl cursor-pointer font-medium">
            View Resume
            <FaGoogleDrive />
          </div>
        </a>
      </div>
      <div className="flex flex-wrap gap-2 mt-8">
        <span
          className={`${
            !theme ? "bg-zinc-300 text-black" : "bg-gray-700 text-white"
          }  px-3 py-1 rounded-md flex items-center gap-2 text-sm `}
        >
          <FaJs className="w-4 h-4" /> Javascript
        </span>
       
        <span
          className={`${
            !theme ? "bg-zinc-300 text-black" : "bg-gray-700 text-white"
          }  px-3 py-1 rounded-md flex items-center gap-2 text-sm `}
        >
          <FaPython className="w-4 h-4" /> Python
        </span>
        <span
          className={`${
            !theme ? "bg-zinc-300 text-black" : "bg-gray-700 text-white"
          }  px-3 py-1 rounded-md flex items-center gap-2 text-sm `}
        >
          <FaReact className="w-4 h-4" /> React.js
        </span>
        <span
          className={`${
            !theme ? "bg-zinc-300 text-black" : "bg-gray-700 text-white"
          }  px-3 py-1 rounded-md flex items-center gap-2 text-sm `}
        >
          <FaNodeJs className="w-4 h-4" /> Express.js
        </span>
        <span
          className={`${
            !theme ? "bg-zinc-300 text-black" : "bg-gray-700 text-white"
          }  px-3 py-1 rounded-md flex items-center gap-2 text-sm `}
        >
          <SiMongodb className="w-4 h-4" /> MongoDB
        </span>

        <span
          className={`${
            !theme ? "bg-zinc-300 text-black" : "bg-gray-700 text-white"
          }  px-3 py-1 rounded-md flex items-center gap-2 text-sm `}
        >
          <SiTailwindcss className="w-4 h-4" /> Tailwind
        </span>
        <span
          className={`${
            !theme ? "bg-zinc-300 text-black" : "bg-gray-700 text-white"
          }  px-3 py-1 rounded-md flex items-center gap-2 text-sm `}
        >
          <SiFramer className="w-4 h-4" /> Framer Motion
        </span>
        <span
          className={`${
            !theme ? "bg-zinc-300 text-black" : "bg-gray-700 text-white"
          }  px-3 py-1 rounded-md flex items-center gap-2 text-sm `}
        >
          <DiNodejsSmall className="w-4 h-4" /> Node.js
        </span>
          
      </div>
    </div>
  );
}

export default Intro;
