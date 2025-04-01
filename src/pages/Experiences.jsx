import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Innovation Inc.",
      location: "San Francisco, CA",
      period: "Jan 2022 - Present",
      description:
        "Lead development of full-stack applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines to improve deployment efficiency.",
      responsibilities: [
        "Architected and developed scalable microservices",
        "Collaborated with cross-functional teams to deliver features on time",
        "Improved application performance by 40% through code optimization",
        "Implemented automated testing strategies increasing code coverage by 30%",
      ],
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      company: "Data Insights Corp.",
      location: "Seattle, WA",
      period: "Mar 2020 - Dec 2021",
      description:
        "Developed and deployed machine learning models for predicting customer behavior and business trends. Worked with large datasets and created data pipelines.",
      responsibilities: [
        "Built and trained deep learning models using PyTorch and TensorFlow",
        "Created ETL pipelines for processing large datasets",
        "Developed API endpoints for model inference",
        "Collaborated with data scientists to improve model accuracy",
      ],
    },
    {
      id: 3,
      title: "Software Developer",
      company: "Web Solutions LLC",
      location: "Boston, MA",
      period: "Jun 2018 - Feb 2020",
      description:
        "Developed responsive web applications and implemented RESTful APIs. Worked in an agile environment with daily stand-ups and sprint planning.",
      responsibilities: [
        "Built frontend components using React and Redux",
        "Implemented backend services with Node.js and Express",
        "Created and maintained database schemas and queries",
        "Participated in code reviews and pair programming sessions",
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
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    Key Responsibilities:
                  </h3>
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
