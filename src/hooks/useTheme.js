import { useState, useEffect } from 'react'

export function useTheme() {
  // TODO: Implement theme state management
  // This hook should:
  // 1. Initialize a theme state (light or dark) from localStorage or system preference
  // 2. Provide a function to toggle between light and dark themes
  // 3. Apply the theme to the document by adding/removing the 'dark' class on <html>
  // 4. Store the user's preference in localStorage
  
  // Example implementation:
  const [theme, setTheme] = useState(() => {
    // Check localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light'
  })
  
  // useEffect to apply theme changes to document
  useEffect(() => {
    // TODO: Implement the effect to add/remove 'dark' class based on theme state
    // When theme is 'dark', add the 'dark' class to document.documentElement (the <html> tag)
    // When theme is 'light', remove the 'dark' class
    
    // Don't forget to save the preference to localStorage
  }, [theme])
  
  // Function to toggle theme
  const toggleTheme = () => {
    // TODO: Implement theme toggle logic
    // It should switch between 'light' and 'dark'
  }
  
  // Return the current theme and the toggle function
  return { theme, toggleTheme }
} 