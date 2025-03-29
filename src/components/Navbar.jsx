import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4">
      <div className="container-custom flex justify-between items-center">
        {/* Left: Logo/Name */}
        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
          Hanhee Lee
        </Link>
        
        {/* Right: Navigation Links */}
        <div className="flex items-center space-x-6">
          {/* TODO: Add navigation links to CV, About Me, Experiences */}
          {/* Example: */}
          <Link to="/cv" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
            CV
          </Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
            About Me
          </Link>
          <Link to="/experiences" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
            Experiences
          </Link>
          
          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;