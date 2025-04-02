import { useState, useEffect } from "react";
import skillsData from "../data/skills.json";

const SkillSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Languages");
  const [filteredSkills, setFilteredSkills] = useState([]);

  // Get unique categories from skills data
  const categories = [
    ...new Set(skillsData.map((skill) => skill.category)),
  ];

  // Filter skills when category changes
  useEffect(() => {
    setFilteredSkills(
      skillsData.filter((skill) => skill.category === selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        Skills
      </h2>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 transition-colors duration-300">
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills display */}
        <div className="flex flex-wrap gap-3">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
