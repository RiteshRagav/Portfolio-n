import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "BACHELOR OF TECHNOLOGY",
    place: "SRM Institute of Science and Technology",
    details: "CGPA: 7.947 (till 4th sem)",
  },
  {
    degree: "CLASS 12TH",
    place: "Pon Vidyashram Higher Sec School - Chennai, India",
    details: "Percentage: 70%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-transparent">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-black/80 rounded-xl shadow p-6 flex items-center gap-4 border border-blue-900 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <FaGraduationCap className="text-3xl text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold text-blue-200">{edu.degree}</h3>
                <p className="text-blue-100">{edu.place}</p>
                <p className="text-blue-300 text-sm">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}