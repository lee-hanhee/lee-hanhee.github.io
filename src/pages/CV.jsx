import { motion } from "framer-motion";
import { Download } from "lucide-react";

const CV = () => {
  const handleDownload = () => {
    // In a real app, this would point to an actual CV file
    alert("In a real app, this would download your CV file");
    // Alternatively: window.open('/path-to-your-cv.pdf', '_blank');
  };

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            Curriculum Vitae
          </h1>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
              Personal Information
            </h2>
            <div className="space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
              <p>
                <span className="font-semibold">Name:</span> Jane Doe
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                jane.doe@example.com
              </p>
              <p>
                <span className="font-semibold">Location:</span> San Francisco,
                CA
              </p>
              <p>
                <span className="font-semibold">LinkedIn:</span>{" "}
                linkedin.com/in/janedoe
              </p>
              <p>
                <span className="font-semibold">GitHub:</span>{" "}
                github.com/janedoe
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200 transition-colors duration-300">
                  Programming Languages
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 transition-colors duration-300">
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200 transition-colors duration-300">
                  Frameworks & Libraries
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 transition-colors duration-300">
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Next.js</li>
                  <li>TensorFlow</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200 transition-colors duration-300">
                  Tools & Platforms
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 transition-colors duration-300">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>Firebase</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200 transition-colors duration-300">
                  Methodologies
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 transition-colors duration-300">
                  <li>Agile/Scrum</li>
                  <li>Test-Driven Development</li>
                  <li>CI/CD</li>
                  <li>Microservices Architecture</li>
                  <li>RESTful API Design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                  Master of Science in Computer Science
                </h3>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  Stanford University | 2015 - 2017
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-300">
                  Specialized in Machine Learning and Artificial Intelligence
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                  Bachelor of Science in Computer Engineering
                </h3>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  Massachusetts Institute of Technology | 2011 - 2015
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-300">
                  Graduated with Honors, GPA: 3.8/4.0
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
              Certifications
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 transition-colors duration-300">
              <li>AWS Certified Solutions Architect</li>
              <li>Google Cloud Professional Data Engineer</li>
              <li>Microsoft Certified: Azure Developer Associate</li>
              <li>TensorFlow Developer Certificate</li>
              <li>Scrum Alliance Certified ScrumMaster</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
              Languages
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 transition-colors duration-300">
              <li>English (Native)</li>
              <li>Spanish (Fluent)</li>
              <li>French (Intermediate)</li>
              <li>German (Basic)</li>
            </ul>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleDownload}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md flex items-center transition-colors duration-300"
            >
              <Download size={18} className="mr-2" />
              Download CV
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CV;
