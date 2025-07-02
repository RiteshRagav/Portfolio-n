import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-black to-blue-900 px-4 md:px-16 py-16"
    >
      {/* Left: Text content */}
      <div className="flex-1 flex flex-col justify-center items-start text-left max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
            Hi, I am Ritesh Ragav
          </h1>
          <h2 className="text-2xl font-semibold mb-2 text-blue-200/80 min-h-[40px]">
            <Typewriter
              words={[
                "Full Stack Developer",
                "AI-ML Enthusiast",
                "Tech-Explorer"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h2>
          <p className="max-w-xl text-gray-300 text-lg mb-4">
            Passionate about building beautiful, performant web experiences. Always eager to learn new technologies and contribute to the tech community.
          </p>
          <div className="flex gap-6 mt-4">
            <a href="https://linkedin.com/in/riteshragav" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-2xl hover:text-purple-500" /></a>
            <a href="https://github.com/RiteshRagav" target="_blank" rel="noopener noreferrer"><FaGithub className="text-2xl hover:text-purple-500" /></a>
            <a href="mailto:rr5806@srmist.edu.in"><FaEnvelope className="text-2xl hover:text-purple-500" /></a>
          </div>
        </motion.div>
      </div>
      {/* Right: Profile image */}
      <div className="flex-1     flex justify-end items-center mt-10 mx-80 md:mt-50">
        <img
          src="/assets/Profile.png"
          alt="Ritesh Ragav"
          className="rounded-3xl shadow-2xl w-80 h-100 md:w-96 md:h-96 object-cover max-w-full"
        />
      </div>
    </section>
  );
}