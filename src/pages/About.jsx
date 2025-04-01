import { motion } from "framer-motion";

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
              Hello! I'm Hanhee Lee, a passionate software developer with a
              strong foundation in full-stack development and machine learning.
              I enjoy solving complex problems and building applications that
              make a positive impact.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-300">
              My journey in software development started with my fascination
              with how technology can solve real-world problems. Since then,
              I've dedicated myself to continuously learning and expanding my
              skill set to stay at the forefront of technological advancements.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor
              activities to maintain a healthy work-life balance.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            Technical Skills
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 transition-colors duration-300">
                  Frontend
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 transition-colors duration-300">
                  <li>React.js</li>
                  <li>JavaScript/TypeScript</li>
                  <li>HTML/CSS</li>
                  <li>Tailwind CSS</li>
                  <li>Redux</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 transition-colors duration-300">
                  Backend
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 transition-colors duration-300">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Python</li>
                  <li>Django</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 transition-colors duration-300">
                  Data Science & ML
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 transition-colors duration-300">
                  <li>PyTorch</li>
                  <li>TensorFlow</li>
                  <li>Scikit-learn</li>
                  <li>Pandas</li>
                  <li>Data Visualization</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100 transition-colors duration-300">
                  Other
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 transition-colors duration-300">
                  <li>Git/GitHub</li>
                  <li>Docker</li>
                  <li>CI/CD</li>
                  <li>AWS/Azure</li>
                  <li>MongoDB/SQL</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            Education
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 transition-colors duration-300">
            <div className="mb-6 last:mb-0">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2 transition-colors duration-300">
                University Name, 2018-2022
              </p>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                Specialized in artificial intelligence and software engineering.
                Graduated with honors.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
