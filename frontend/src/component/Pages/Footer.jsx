import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 600, smooth: "easeInOutQuart" });
  };

  return (
    <section className="w-full bg-gray-900 text-gray-300 py-12 px-6 md:px-20 relative">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        {/* Logo */}
        <div className="text-white font-extrabold text-2xl md:text-3xl tracking-wide">
          NITYA
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-6 text-center md:text-left mt-4 md:mt-0">
          {["Home", "About", "Projects", "Contact"].map((link, i) => (
            <Link
              key={i}
              to={link.toLowerCase()}
              smooth={true}
              duration={600}
              offset={-70}
              className="cursor-pointer relative group text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Socials */}
        <div className="flex gap-5 text-xl mt-6 md:mt-0">
          <a href="https://github.com/Nitya-singh-sin" target="_blank" className="hover:text-blue-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nitya-singh-b76a08347" target="_blank" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Scroll-to-Top */}
      <div className="absolute right-6 bottom-6">
        <button onClick={scrollToTop} className="bg-blue-400 text-white p-3 rounded-full">
          <FaArrowUp />
        </button>
      </div>

      <div className="border-t border-gray-700 mt-8"></div>
      <p className="text-center text-gray-500 mt-4 text-sm">
        © {new Date().getFullYear()} Nitya Singh. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
