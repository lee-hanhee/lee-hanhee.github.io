import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "border-b-2 border-blue-500" : "";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 py-4 px-6 bg-white dark:bg-gray-900 shadow-md z-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300"
        >
          Hanhee Lee
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className={`text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 ${isActive(
              "/"
            )}`}
          >
            Projects
          </Link>
          <Link
            to="/experiences"
            className={`text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 ${isActive(
              "/experiences"
            )}`}
          >
            Experiences
          </Link>
          <Link
            to="/cv"
            className={`text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 ${isActive(
              "/cv"
            )}`}
          >
            CV
          </Link>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              theme === "dark"
                ? "bg-gray-700 text-yellow-300"
                : "bg-blue-100 text-blue-800"
            }`}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
