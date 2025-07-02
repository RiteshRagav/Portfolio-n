import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const contacts = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/riteshragav",
    icon: <FaLinkedin className="w-6 h-6" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/RiteshRagav",
    icon: <FaGithub className="w-6 h-6" />,
  },
  {
    name: "Email",
    url: "mailto:rr5806@srmist.edu.in",
    icon: <FaEnvelope className="w-6 h-6" />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">Contact</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {contacts.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black/80 border border-gray-700 rounded-2xl shadow-md p-4 hover:bg-black/90 hover:shadow-xl hover:-translate-y-1 transition"
            >
              {c.icon}
              <span className="font-medium text-blue-200">{c.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}