import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  FaUserGraduate,
  FaBriefcase,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const projects = [
  {
    title: "Student Management System",
    description:
      "The Student Academic Management System (SAMS) is a web-based application designed to help educational institutions.",
    tags: [],
    icon: <FaUserGraduate className="text-blue-400 text-2xl" />,
  },
  {
    title: "Job Portal System",
    description:
      "The Job Portal System is a web-based platform designed to connect job seekers with employers. ",
    tags: [],
    icon: <FaBriefcase className="text-green-400 text-2xl" />,
  },
];

const ProjectCard = ({ title, description, tags, icon }) => {
  
  const theme = useSelector(store=>store.app.theme)

  return (
    <div className={`relative p-5 rounded-xl border border-gray-700 overflow-hidden shadow-xs shadow-cyan-500/50 cursor-pointer ${theme ? "bg-gray-950" : "bg-white text-black" }`}>
      <div className="flex items-center gap-2 mb-2 text-white">
        <span>{icon}</span>
        <h3 className={`text-base font-semibold ${theme ? "text-white " : "text-black" }`}>{title}</h3>
      </div>
      <p className="mb-4 text-base">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-800 text-gray-300 px-3 py-1 text-xs rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const UpcomingProjects = () => {
  const theme = useSelector(store=>store.app.theme)

  return (
    <>
      <section className={`md:p-6 p-3 text-white md:w-3xl ${theme ? "bg-zinc-950" : "bg-white" } min-h`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-6 ${!theme ? "text-black" : "text-white"}`}>Upcoming Projects</h2>
          <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <div className={`flex justify-center items-center min-h mt-10  text-white`}>
        <div className={`${!theme ? "bg-white text-black" : "bg-[#0f0f1a]"} md:px-50 p-6  rounded-xl shadow-xl w-full  text-center`}>
          <h2 className="text-xl font-bold">Get in Touch</h2>
          <p className="mt-2">Let's discuss your project.</p>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/9348269040"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500  px-4 py-2 rounded-md mt-4 flex justify-center items-center gap-2 w-full"
          >
            <FaWhatsapp size={20} /> Chat on WhatsApp
          </a>

          <hr className="border-gray-600 my-5" />

          {/* Email Section */}
          <p className="">
            Drop an email, and I'll get back to you.
          </p>

          {/* <div className="mt-3 flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md bg-gray-800 text-white outline-none"
            />
            <button className="ml-2 bg-indigo-600 px-4 py-2 rounded-md flex items-center gap-2">
              <FaEnvelope size={18} /> Send
            </button>
          </div> */}

          {/* Email Display */}
          <div className="mt-4 text-gray-300 flex items-center justify-center gap-2">
            <FaEnvelope size={18} />
            <a
              href="mailto:biswajit9348das@gmail.com"
              className="text-indigo-900 hover:underline"
            >
              biswajit9348das@gmail.com
            </a>
          </div>
        </div>
      </div>
      <footer className={`${theme?"text-gray-300" : "text-black"} text-center w-full py-10 `}>
      <p className={`${theme?"text-gray-300" : "text-black"} text-base font-bold`}>Find me on:</p>
      <div className="flex justify-center gap-6 mt-3">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/biswajitdas-/"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-blue-500 transition-all text-2xl"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Biswajit-Das-codesource"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-gray-500 transition-all text-2xl"
        >
          <FaGithub />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/its_biswajit._?igsh=MTE5eWNxb3AzdGJocQ=="
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-pink-600 transition-all text-2xl"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
    </>
  );
};

export default UpcomingProjects;
