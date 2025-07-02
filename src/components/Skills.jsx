import {
    SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiReact, SiMongodb, SiMysql, SiNextdotjs, SiGit, SiPython, SiGithub
  } from "react-icons/si";
 

const skills = [
  { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
  { name: "C", icon: <span className="text-4xl font-bold text-gray-400">C</span> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
 
  { name: "Git", icon: <SiGit className="text-orange-600" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
 
  { name: "Python", icon: <SiPython className="text-blue-300" /> },
 
  { name: "Github", icon: <SiGithub className="text-gray-300" /> },

];
  export default function Skills() {
    return (
      <section id="skills" className="py-20 bg-transparent ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            <span className="text-white"> </span>
            <span className="text-blue-500">Skillsets</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center bg-black/70 dark:bg-black border border-gray-700 dark:border-gray-700 rounded-2xl shadow-md py-8 transition-transform hover:scale-105"
              >
                <div className="mb-3 text-5xl">{skill.icon}</div>
                <span className="text-lg font-semibold text-gray-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
