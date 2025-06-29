import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaLaptopCode, FaDatabase, FaRocket, FaUser, FaGraduationCap } from "react-icons/fa";
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
import { motion } from "framer-motion";
import ScrollToTop from "./ScrollToTop";
import { CheckCircle2 } from "lucide-react";


const educationData = [
  {
    year: "2026 (Expected)",
    title: "🎓 BCA – Lakhsya Institute of Technology",
    description: [
      "Completed full-stack projects using MERN stack. 💻",
      "Built a real-time Student Management System with automated reports. 🧠",
      "Integrated Firebase for authentication and media uploads. 🔐",
      "Learned TypeScript, React Native, and Next.js fundamentals. 📘",
      "Explore new technologies every day to grow consistently. 🚀",
      "Freelanced for coaching center websites using modern stacks. 🧑‍💼",
      "Started building a personal UI component library and CLI tools. 🧩",
    ],
  },
  {
    year: "2022",
    title: "📘 12th – Stewart Science College, Cuttack",
    description: [
      "Stream: Science (Mathematics, Physics, Biology). 📚",
      "Expected first prize in academic excellence. 🎖️",
      "Participated in long jump and shuttle run events. 🏃‍♂️",
    ],
  },
  {
    year: "2020",
    title: "🏫 10th – Saraswati Sishu Vidya Mandir",
    description: [
      "Achieved distinction in all subjects (75%+). 🏅",
      "Secured 1st position in inter-school math quizzes. 🥇",
      "Participated in science exhibition with a logic gates simulation project . 🔬",
      "Won long jump and recognized as a sports athlete. 👟",
    ],
  },
];

const ProjectShowcase = () => {
  const theme = useSelector((store) => store.app.theme);

  return (
    <>
      <ScrollToTop />
      <div
        className={`min-h-screen w-full pt-10 pb-7 ${!theme ? "bg-white" : "bg-zinc-950"} flex justify-center items-center flex-col`}
      >
        <section
          className={`md:p-6 p-3 text-white md:w-3xl ${theme ? "bg-zinc-950" : "bg-white text-black"} min-h-screen w-full`}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className={`text-4xl font-extrabold mb-2 flex items-center gap-2 ${theme ? "text-white" : "text-black"}`}>
                <FaUser /> Biswajit Das
              </h1>
              <p className="text-sm text-gray-400">
                📞 Contact: +91-9348269040| 💬 WhatsApp: +91-9348269040
              </p>
              <p className="mt-2 text-base text-gray-400">
                Passionate full-stack developer continuously exploring and building real-world projects. Daily learner with a strong foundation in MERN, Firebase, and UI/UX design systems.
              </p>
            </motion.div>

            <motion.h2
              className={`text-3xl ${theme ? "text-white" : "text-black"} font-bold mb-6`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Education
            </motion.h2>

            {educationData.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="mb-8"
              >
                <h3 className="text-lg font-medium text-gray-400 tracking-wide uppercase mb-1">
                  {entry.year}
                </h3>

                <div
                  className={`p-4 shadow-sm hover:shadow-md transition ${
                    index !== educationData.length - 1
                      ? "border-b border-gray-800"
                      : ""
                  }`}
                >
                  <h4 className={`text-2xl font-bold mb-4 ${theme ? "text-white" : "text-black"}`}>
                    {entry.title}
                  </h4>

                  <ul className="space-y-2.5 px-8 py-2">
                    {entry.description.map((line, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2 ${theme ? "text-zinc-400" : "text-gray-700"} text-[15px] leading-relaxed`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-400 mt-[2px]" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            <motion.h2
              className={`text-3xl ${theme ? "text-white" : "text-black"} font-bold mt-14 mb-6`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Projects
            </motion.h2>

            <motion.p
              className="text-gray-400 text-base"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              I love building things and learning along the way—whether it's a client project, a course assignment,
              or just experimenting for fun. Always picking up something new.
            </motion.p>

            <motion.div
              className="grid md:grid-cols-2 gap-6 grid-cols-1 mt-7"
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
            
            </motion.div>
          </div>
        </section>

        <button className="text-white border border-gray-400 rounded-3xl py-3 px-5 flex justify-center items-center gap-2 cursor-pointer">
          See all at <FaGithub size={"1.5rem"} />
        </button>
      </div>
    </>
  );
};

export default ProjectShowcase;
