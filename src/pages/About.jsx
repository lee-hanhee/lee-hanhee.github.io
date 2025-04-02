import { motion } from "framer-motion";
import SkillSection from "../components/SkillSection";

const About = () => {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            About Me
          </h1>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8 transition-colors duration-300">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-300">
              Hello! I'm Hanhee Lee, a 3rd year undergraduate student at the University of Toronto. Currently, I'm working on the EngSci Cheatcode project to help EngSci students succeed and be able to secure internships rather 
              than stuggle with the course load. 
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            Education
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8 transition-colors duration-300">
            <div className="mb-6 last:mb-0">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                Bachelor of Applied Science and Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2 transition-colors duration-300">
                University of Toronto, 2022-2026 + PEY Co-op
              </p>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                Specialized in machine intelligence.
                Graduated with honors.
              </p>
            </div>
          </div>

          {/* Filterable Skills Section */}
          <SkillSection />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
