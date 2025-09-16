import React from "react";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    college: "Patliputra University",
    year: "Nov 2022 - June 2024",
    grade: "8.27 CGPA",
    description: `I have completed my Master's degree (MCA) in Computer Applications from Patliputra University, Patna. 
    During my time at Patliputra University, I gained a strong foundation in programming, software development, 
    and computer science principles. I studied courses such as Data Structures, Algorithms, Object-Oriented Programming, 
    Database Management Systems, Web Development, and Software Engineering. I actively participated in workshops and technical events, 
    enhancing my skills and knowledge. My experience at Patliputra University has been instrumental in shaping my technical abilities and professional growth.`
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    college: "Jaipur National University",
    year: "Sept 2018 - Aug 2021",
    grade: "7.2 CGPA",
    description: `I completed my Bachelor's degree in Computer Applications from Jaipur National University. 
    Throughout my studies, I explored subjects such as Data Structures, Algorithms, Web Development, 
    and Database Management Systems, gaining practical insights into software development. 
    I also worked on projects that applied theoretical concepts to real-world problems, 
    which strengthened my understanding and prepared me for professional challenges in the tech industry.`
  }
];

const Education = () => {
  return (
    <section className="w-full bg-gray-900 text-white min-h-screen px-8 md:px-20 flex flex-col justify-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-16">
        My{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
          Education
        </span>
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {educationData.map((edu, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-3xl shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-transform duration-500 p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
              {edu.degree}
            </h2>
            <h3 className="text-lg text-cyan-300 font-medium mb-1">
              {edu.college} | {edu.year}
            </h3>
            <p className="text-yellow-400 font-semibold mb-2">{edu.grade}</p>
            <p className="text-gray-300 text-lg">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
