import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Savi Finance",
      location: "Toronto, ON",
      period: "January - April 2025",
      description:
        "",
      responsibilities: [
      ],
    },
    {
      id: 2,
      title: "Applied Machine Learning Researcher",
      company: "National University of Singapore",
      location: "Singapore",
      period: "May - August 2024",
      description:
        "",
      responsibilities: [
      ],
    },
  ];

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            Professional Experience
          </h1>

          <div className="space-y-8">
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: experience.id * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 transition-colors duration-300"
              >
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                    {experience.title}
                  </h2>
                  <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-300">
                    <div className="flex items-center mr-4 mb-2">
                      <Briefcase size={16} className="mr-1" />
                      <span>{experience.company}</span>
                    </div>
                    <div className="flex items-center mr-4 mb-2">
                      <MapPin size={16} className="mr-1" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="mr-1" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {experience.description}
                </p>

                <div>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 transition-colors duration-300">
                    {experience.responsibilities.map(
                      (responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      )
                    )}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experiences;
