import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import MarkdownRenderer from "../components/MarkdownRenderer";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch("/data/projects.json");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        const foundProject = data.find((p) => p.id === id);

        if (!foundProject) {
          throw new Error("Project not found");
        }

        setProject(foundProject);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching project:", error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (isLoading) {
    return (
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto bg-red-100 text-red-700 p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p>{error}</p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-700"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            Project not found
          </h2>
          <Link
            to="/"
            className="inline-flex items-center text-blue-500 hover:text-blue-700"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to all projects
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.category &&
                project.category.map((cat, index) => (
                  <span
                    key={`category-${index}`}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 transition-colors duration-300"
                  >
                    {cat}
                  </span>
                ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags &&
                project.tags.map((tag, index) => (
                  <span
                    key={`tag-${index}`}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
            </div>

            {project.image && (
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover h-auto max-h-[400px]"
                />
              </div>
            )}

            <div className="flex flex-wrap gap-4 mb-8">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <Github size={18} className="mr-2" />
                  View on GitHub
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  <ExternalLink size={18} className="mr-2" />
                  View Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 transition-colors duration-300">
            <MarkdownRenderer filePath={`/projects/${project.markdownFile}`} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
