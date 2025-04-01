import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  const { id, title, description, tags, image, githubUrl, liveUrl } = project;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-5">
        <Link to={`/project/${id}`}>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
        </Link>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 transition-colors duration-300">
          {description}
        </p>

        <div className="flex space-x-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="View GitHub repository"
            >
              <Github size={16} className="mr-1" />
              <span className="text-sm">Code</span>
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="View live demo"
            >
              <ExternalLink size={16} className="mr-1" />
              <span className="text-sm">Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
