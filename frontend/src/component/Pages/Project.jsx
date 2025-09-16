import React from "react";

// ✅ Import local images
import spotify from "../../assets/spotify.png";
import portfolioImg from "../../assets/Portfolio1.png";
import coffeeImg from "../../assets/coffee.png";
import tracker from "../../assets/traker.png";

const projects = [
  
  {
    title: "Personal Portfolio",
    description: "My personal portfolio website showcasing my projects and skills.",
    image: portfolioImg,
    link: "https://your-portfolio-link.com"
  },
  
   {
    title: "Budget Tracker",
    description: "Track your expenses and manage your budget with this interactive web application.",
    image: tracker,
    link: "https://tracker-web-drab.vercel.app/"
  },
  {
    title: "Coffee Shop Website",
    description: "A responsive coffee shop website with product listings and animations.",
    image: coffeeImg,
    link: "https://online-coffe-shop-app-j6ah.vercel.app/"
  },
  {
    title: "Spotify Clone",
    description: "A Spotify-inspired music streaming web app built with the react",
    image: spotify,
    link: "https://sportify-clone-three.vercel.app/"
  },
];

const Project = () => {
  return (
    <section className="w-full bg-gray-900 text-white min-h-screen px-8 md:px-20 flex flex-col justify-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-16">
        My{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
          Projects
        </span>
      </h1>

      <div className="grid md:grid-cols-3 gap-12">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-3xl shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-transform duration-500 overflow-hidden"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-3xl"
            />

            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-5">
                {project.title}
              </h2>
              <p className="text-gray-300 text-lg mb-6">{project.description}</p>
              <a
                href={project.link}
                target="_blank"      // ✅ opens in new tab
                rel="noopener noreferrer" // ✅ security best practice
                className="text-cyan-300 font-semibold text-lg hover:text-blue-400 transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
