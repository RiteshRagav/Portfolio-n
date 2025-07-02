import { FaCertificate } from "react-icons/fa";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Yuga Yatra Retail Services Pvt Ltd",
    companyUrl: "https://yugayatraretail.com",
    date: "05/2025 - 07/2025",
    details: [
      "Developed responsive websites and apps using tools like Cursor AI, Firebase Studio, and AI-based technologies, focusing on rapid prototyping and user experience.",    
      "Designed visually engaging UIs using Canva to support marketing and product showcases.",
      "Contributed to real-time freelance project execution via Upwork, handling live requirements and client feedback loops.",
      "Integrated backend features on seller portals like Amazon and Flipkart, streamlining e-commerce operations.",
      "Collaborated efficiently with team members using Google Workspace, ensuring smooth communication and task tracking across multiple live projects.",
    ],
    certificate: null,
  },
  {
    title: "AI-ML Intern",
    company: "EduSkills",
    companyUrl: "https://eduskillsfoundation.org/",
    date: "04/2025 - 06/2025",
    details: [
      "Focused on AI/ML concepts and real-world applications.",
      "Gained hands-on experience with Python, TensorFlow, and data preprocessing.",
      "Built, optimized, and evaluated AI/ML models.",
      "Enhanced problem-solving and technical skills in AI/ML.",
    ],
    certificate: { url: "https://drive.google.com/file/d/1cONUUWI2w6SbVtQLMfd7rugOfN937Idv/view?usp=sharing", label: "View Certificate" },
  },
  // Add more experiences as needed
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Work Experience</h2>
        <div className="relative">
          {/* Timeline vertical line with gradient */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-700 via-blue-500 to-black opacity-60 rounded-full"></div>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={exp.title} className="relative flex items-start">
                {/* Timeline diamond shape */}
                <span className="absolute left-2.5 top-8 w-6 h-6 bg-gradient-to-br from-blue-700 to-black opacity-80 rotate-45 border-2 border-blue-400 shadow-lg"></span>
                {/* Card */}
                <div className="ml-16 w-full bg-gradient-to-br from-blue-900/80 to-black/80 rounded-2xl shadow-xl p-8 border border-blue-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <a href={exp.companyUrl} className="text-blue-300 hover:underline text-sm font-semibold">{exp.company}</a>
                    </div>
                    <span className="text-blue-200 text-sm mt-2 md:mt-0">{exp.date}</span>
                  </div>
                  <ul className="list-disc pl-5 text-blue-100 space-y-1 mb-3">
                    {exp.details.map((d, i) => (
                      <li key={i} className="leading-relaxed">{d}</li>
                    ))}
                  </ul>
                  {exp.certificate && (
                    <a
                      href={exp.certificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg mt-2 hover:bg-blue-800 transition"
                    >
                      <FaCertificate />
                      {exp.certificate.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}