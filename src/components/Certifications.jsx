import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    name: "IBM RDBMS Certificate",
    org: "Coursera",
  },
  {
    name: "C++ Basics: Selection and Iteration",
    org: "Coursera",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-transparent">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div key={cert.name} className="bg-black/80 border border-gray-700 rounded-2xl shadow-md p-6 flex items-center gap-4 hover:bg-black/90 hover:shadow-xl hover:-translate-y-1 transition">
              <FaCertificate className="text-3xl text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold text-blue-200 mb-2">{cert.name}</h3>
                <p className="text-blue-100">{cert.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}