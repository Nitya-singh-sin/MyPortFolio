import React from "react";
import profile from "../../assets/pic3.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import aboutPic from "../../assets/pic2.png";
import cv from "../../assets/Nityasingh.pdf"; // ✅ CV file import
import Project from "./Project";
import Education from "./Education";
import Contact from "./Contact";
import PhoneButton from "./PhoneButton";

const Home = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="h-screen w-full bg-gray-900 text-white flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-32 px-4 md:px-20 pt-20">
        {/* Left Section */}
        <div className="max-w-xl w-full space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              Nitya Singh
            </span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-blue-400 font-semibold tracking-wide">
            <span className="animate-typing pr-2">MERN Stack Developer</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed opacity-0 animate-fadeIn [animation-delay:1s]">
            I build beautiful and responsive web applications using modern
            JavaScript technologies like React, Node.js, Express, and MongoDB.
            Let's turn your ideas into real-world digital solutions!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={cv}
              download="Nitya_Singh_CV.pdf"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-transform duration-300 w-full sm:w-auto text-center"
            >
              Download CV
            </a>

            <button
              onClick={scrollToContact}
              className="border border-blue-400 px-6 py-3 rounded-xl font-medium hover:bg-blue-500 hover:text-white hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
            >
              Let’s Talk
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6 text-2xl justify-center md:justify-start">
            <a
              href="https://github.com/Nitya-singh-sin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-110 transition-transform duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nitya-singh-b76a08347"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* ✅ Right Section - Profile Image */}
        <div className="relative flex justify-center mb-10 md:mb-0 mt-10 md:mt-0">
          <div
            className="relative 
                          w-40 h-40
                          sm:w-56 sm:h-56
                          md:w-72 md:h-72
                          lg:w-80 lg:h-80
                          rounded-full 
                          border-4 border-transparent 
                          bg-gradient-to-r from-blue-400 to-cyan-300 
                          p-1 shadow-2xl overflow-hidden group"
          >
            <img
              src={profile}
              alt="profile"
              className="w-full h-full object-cover rounded-full transform transition duration-500 group-hover:scale-110 group-hover:rotate-3"
            />
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-3xl group-hover:opacity-40 transition"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full bg-gray-800 text-white py-24 px-6 md:px-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          About{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-10">
          {/* ✅ Left - About Image (Responsive) */}
          <div className="flex justify-center md:w-1/2 mb-8 md:mb-0">
            <img
              src={aboutPic}
              alt="about"
              className="w-40 h-40 
                         sm:w-56 sm:h-56 
                         md:w-72 md:h-80 
                         lg:w-80 lg:h-96
                         object-cover rounded-3xl shadow-2xl 
                         transform transition duration-500 
                         hover:scale-105 hover:rotate-1"
            />
          </div>

          {/* Right - Content */}
          <div className="md:w-5/12 space-y-6 text-center md:text-left">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              I'm a passionate{" "}
              <span className="text-blue-400 font-semibold">
                MERN Stack Developer
              </span>{" "}
              creating interactive, scalable, and user-friendly web applications.
              I specialize in both frontend and backend development, delivering
              high-quality digital solutions.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Javascript",
                    "Tailwind CSS",
                    "HTML5",
                    "CSS3",
                    "Redux",
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 px-3 py-1 rounded-lg text-cyan-300 font-medium shadow hover:shadow-blue-500/30 hover:scale-105 transition-transform duration-300 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Mongoose",
                    "REST APIs",
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 px-3 py-1 rounded-lg text-cyan-300 font-medium shadow hover:shadow-blue-500/30 hover:scale-105 transition-transform duration-300 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  Tools & Others
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Git/GitHub", "Postman", "VS Code", "Figma"].map(
                    (skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 px-3 py-1 rounded-lg text-cyan-300 font-medium shadow hover:shadow-blue-500/30 hover:scale-105 transition-transform duration-300 text-sm"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
              <a
                href={cv}
                download="Nitya_Singh_CV.pdf"
                className="bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-transform duration-300 w-full sm:w-auto text-center"
              >
                Download CV
              </a>
              <button
                onClick={scrollToContact}
                className="border border-blue-400 px-6 py-3 rounded-xl font-medium hover:bg-blue-500 hover:text-white hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Project />
      <Education />
      <Contact />
      <PhoneButton />
    </>
  );
};

export default Home;
