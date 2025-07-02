import { motion } from "framer-motion";

const projects = [
  {
    title: "Trip Advisor Clone",
    desc: "Built a responsive Trip Advisor clone using ReactJS and Tailwind CSS featuring dynamic search and map-based location rendering. Interactive user reviews, ratings, and filters.",
    tech: ["ReactJS", "Tailwind CSS"],
    img: "/assets/project1.jpg",
    link: "https://riteshragav.github.io/TripAdvisorClone/"
  },
  {
    title: "Nostra Clothing Website",
    desc: "Designed a responsive clothing brand website (Nostra) using HTML, CSS, and JavaScript with a modern, visually appealing UI. Product sections, category filters, and smooth navigation.",
    tech: ["HTML", "CSS", "JS"],
    img: "/assets/project2.jpg",
    link: "https://riteshragav.github.io/Nostra/"
  },
  {
    title: "Greenden",
    desc: "Responsive and stylish plant e-commerce frontend mockup using HTML and Tailwind CSS. Focused on layout, responsiveness, and visual appeal.",
    tech: ["HTML", "Tailwind CSS"],
    img: "/assets/project3.jpg",
    link: "https://riteshragav.github.io/Greenden/"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <a
              key={proj.title}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-black/80 rounded-xl shadow-lg overflow-hidden flex flex-col hover:bg-black/90 hover:shadow-xl hover:-translate-y-1 transition border border-blue-900 cursor-pointer"
              >
                <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{proj.title}</h3>
                  <p className="text-blue-100 mb-4 flex-1">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {proj.tech.map((t) => (
                      <span key={t} className="bg-blue-800/70 text-blue-200 px-2 py-1 rounded text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}