import React from "react";
import aboutPic from "../../assets/pic3.png";
import aboutBanner from "../../assets/about1.png";

const About = () => {
  return (
    <section className="w-full bg-gray-900 text-white">
      
      {/* Banner with overlay */}
      <div className="relative w-full">
        <img
          src={aboutBanner}
          alt="About Banner"
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            About Me
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 px-6 md:px-20 py-16">
        
        {/* Left Section - Profile Image */}
        <div className="relative flex justify-center">
          <img
            src={aboutPic}
            alt="about"
            className="w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 object-cover rounded-3xl shadow-2xl transform transition duration-500 hover:scale-105 hover:rotate-2"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 opacity-20 blur-3xl transition-all group-hover:opacity-40"></div>
        </div>

        {/* Right Section - Content */}
        <div className="max-w-2xl space-y-8 text-center md:text-left">
          
          {/* Heading & Tagline */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">Nitya Singh</span>
          </h2>
          <p className="text-blue-400 font-semibold text-lg md:text-xl">
            MERN Stack Developer | Frontend & Backend Specialist
          </p>

          {/* Professional Summary */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Passionate about building interactive, scalable, and user-friendly web applications. I have hands-on experience in React, Node.js, Express, and MongoDB, along with strong skills in frontend & backend development. My goal is to deliver impactful digital solutions that solve real-world challenges.
          </p>

          {/* Skills Section */}
          <div className="space-y-6 mt-6">
            {/* Frontend */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {["React", "Redux", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3"].map((skill, i) => (
                  <span key={i} className="bg-gray-800 px-4 py-2 rounded-xl text-cyan-300 font-medium shadow-md hover:shadow-blue-500/40 hover:scale-105 transition-transform duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"].map((skill, i) => (
                  <span key={i} className="bg-gray-800 px-4 py-2 rounded-xl text-cyan-300 font-medium shadow-md hover:shadow-blue-500/40 hover:scale-105 transition-transform duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Tools & Others</h3>
              <div className="flex flex-wrap gap-3">
                {["Git/GitHub", "Postman", "VS Code", "Figma", "NPM"].map((skill, i) => (
                  <span key={i} className="bg-gray-800 px-4 py-2 rounded-xl text-cyan-300 font-medium shadow-md hover:shadow-blue-500/40 hover:scale-105 transition-transform duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-10">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
              Download CV
            </button>
            <button className="border border-blue-400 px-6 py-3 rounded-xl font-medium hover:bg-blue-500 hover:text-white hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
