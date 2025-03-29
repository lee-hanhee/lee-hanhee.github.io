import { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'

function Home() {
  // TODO: Implement state for projects and selected category
  const [projects, setProjects] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Full Stack', 'ML', 'Coursework']
  
  // TODO: Fetch projects from your data source
  useEffect(() => {
    // Here you will load the projects data from your projects.json file
    // Example:
    const loadProjects = async () => {
      try {
        // Fetch projects from your data file
        const response = await fetch('/src/data/projects.json')
        const data = await response.json()
        setProjects(data.projects)
      } catch (error) {
        console.error('Error loading projects:', error)
        // Set some default projects in case of error
        setProjects([])
      }
    }
    
    loadProjects()
  }, [])
  
  // TODO: Implement filtering logic for projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)
  
  return (
    <div>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {/* TODO: Add your introduction */}
          I'm Hanhee Lee, a frontend developer passionate about building beautiful and functional user interfaces.
        </p>
      </section>
      
      {/* Project Categories */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">My Projects</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              }`}
              onClick={() => {
                // TODO: Implement category selection
                setSelectedCategory(category)
              }}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="col-span-full text-gray-500 dark:text-gray-400 text-center py-8">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home 