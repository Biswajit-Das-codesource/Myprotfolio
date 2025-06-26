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
import { motion } from "framer-motion";

function Intro() {
  const theme = useSelector((store) => store.app.theme);

  console.log(theme);

  const blurVariant = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <div
      className={`w-full max-w-3xl h-max justify-between md:mt-30 mt-20 ${
        theme ? "text-white bg-zinc-950" : "text-black bg-white"
      } p-8 flex flex-col items-center md:items-start  pt-6`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full">
        <motion.div className="heading text-center md:text-left">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-left bebas-neue-regular"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
          >
            Biswajit Das
          </motion.h1>

          <motion.p
            className="text-lg mt-2 text-left font-semibold"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Full-Stack Developer | UI/UX & Python Enthusiast | Always Learning &
            Innovating.
          </motion.p>
        </motion.div>

        <motion.img
          src={profilePic}
          alt="Profile"
          className="w-22 h-22 border-2 border-gray-300 rounded-2xl hidden md:block mb-4 md:mb-0 md:mr-6"
          initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>
      <motion.p
        className={`${
          theme ? "text-gray-300" : "text-black"
        } text-left w-full md:w-2xl mt-3`}
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6 }}
      >
        I’m a passionate Full-Stack Developer with expertise in both frontend
        and backend development. I specialize in crafting beautiful,
        user-friendly interfaces and building <br className="hidden md:block" />
        robust, scalable backend systems. With a strong foundation in modern{" "}
        <br className="hidden md:block" />
        web technologies, I enjoy every aspect of development.
        <br />
        <br />
        You can find me on
        <a href="https://www.linkedin.com/in/biswajitdas-/">
          <span className="font-bold  cursor-pointer"> LinkedIn</span>
        </a>
        ,
        <a href="https://github.com/Biswajit-Das-codesource">
          <span className="font-bold  cursor-pointer"> Github</span>
        </a>
        ,
        <a href="https://x.com/BISWAJITDA42361">
          <span className="font-bold  cursor-pointer"> Twitter</span>
        </a>
        .
      </motion.p>

      <div className="w-full">
      <a
        href="https://drive.google.com/file/d/1QF3ce-MVp7fx5C7QQP_YcYgLqUAx0Ju7/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          initial={{ filter: "blur(6px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="connections flex items-center gap-2 border w-max p-2 mt-4 rounded-2xl cursor-pointer font-medium"
        >
          View Resume
          <FaGoogleDrive />
        </motion.div>
      </a>
    </div>
      <div className="flex flex-wrap gap-2 mt-8">
        {[
          { icon: <FaJs className="w-4 h-4" />, label: "Javascript" },
          { icon: <FaPython className="w-4 h-4" />, label: "Python" },
          { icon: <FaReact className="w-4 h-4" />, label: "React.js" },
          { icon: <FaNodeJs className="w-4 h-4" />, label: "Express.js" },
          { icon: <SiMongodb className="w-4 h-4" />, label: "MongoDB" },
          { icon: <SiTailwindcss className="w-4 h-4" />, label: "Tailwind" },
          { icon: <SiFramer className="w-4 h-4" />, label: "Framer Motion" },
          { icon: <DiNodejsSmall className="w-4 h-4" />, label: "Node.js" },
        ].map((item, i) => (
          <motion.span
            key={item.label}
            className={`${
              !theme ? "bg-zinc-300 text-black" : "bg-gray-700 text-white"
            } px-3 py-1 rounded-md flex items-center gap-2 text-sm`}
            variants={blurVariant}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            {item.icon} {item.label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default Intro;
