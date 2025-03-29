import { useTheme } from '../hooks/useTheme'
// Import icons from lucide-react
// You can replace these imports with the actual icons you want to use
import { Moon, Sun } from 'lucide-react'

function ThemeToggle() {
  // TODO: Import and use the useTheme hook to get the current theme and toggleTheme function
  // const { theme, toggleTheme } = useTheme()
  
  return (
    <button 
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      onClick={() => {
        // TODO: Implement theme toggle functionality
        // Call toggleTheme function from useTheme hook
      }}
      aria-label="Toggle dark mode"
    >
      {/* TODO: Conditionally render Sun or Moon icon based on current theme */}
      {/* Example: theme === 'dark' ? <Sun size={20} /> : <Moon size={20} /> */}
      <span className="block dark:hidden"><Moon size={20} /></span>
      <span className="hidden dark:block"><Sun size={20} /></span>
    </button>
  )
}

export default ThemeToggle 