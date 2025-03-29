import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

function ProjectDetail() {
  const { projectId } = useParams()
  const [project, setProject] = useState(null)
  const [markdown, setMarkdown] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    // TODO: Implement fetching project data from your projects.json
    const fetchProject = async () => {
      try {
        // 1. Fetch project metadata from projects.json
        const response = await fetch('/src/data/projects.json')
        const data = await response.json()
        
        // 2. Find the specific project by ID
        const projectData = data.projects.find(p => p.id === projectId)
        
        if (!projectData) {
          throw new Error('Project not found')
        }
        
        setProject(projectData)
        
        // 3. Fetch the project markdown content
        const markdownResponse = await fetch(`/src/projects/${projectData.markdownFile}`)
        const markdownContent = await markdownResponse.text()
        setMarkdown(markdownContent)
        
        setLoading(false)
      } catch (err) {
        console.error('Error loading project:', err)
        setError(err.message)
        setLoading(false)
      }
    }
    
    fetchProject()
  }, [projectId])
  
  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="text-lg text-gray-600 dark:text-gray-400">Loading project...</div>
      </div>
    )
  }
  
  // Error state
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[300px]">
        <div className="text-lg text-red-600 dark:text-red-400 mb-4">{error}</div>
        <Link 
          to="/" 
          className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors"
        >
          Back to Projects
        </Link>
      </div>
    )
  }
  
  // Project detail view
  return (
    <div className="max-w-4xl mx-auto">
      {/* Back button */}
      <Link 
        to="/" 
        className="inline-flex items-center text-primary hover:underline mb-6"
      >
        ← Back to Projects
      </Link>
      
      {/* Project header */}
      {project && (
        <div className="mb-8">
          {/* Project image if available */}
          {project.imageUrl && (
            <div className="mb-6 rounded-lg overflow-hidden h-[300px]">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          {/* Project title */}
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          
          {/* Project metadata */}
          <div className="flex flex-wrap gap-4 mb-6">
            {/* Category */}
            {project.category && (
              <div className="flex items-center">
                <span className="inline-block px-3 py-1 text-sm font-semibold rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {project.category}
                </span>
              </div>
            )}
            
            {/* Date */}
            {project.date && (
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <span>{project.date}</span>
              </div>
            )}
          </div>
          
          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Project links */}
          {(project.demoUrl || project.githubUrl) && (
            <div className="flex gap-4 mb-6">
              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors"
                >
                  View Demo
                </a>
              )}
              
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  GitHub Repository
                </a>
              )}
            </div>
          )}
        </div>
      )}
      
      {/* Markdown content */}
      <div className="prose dark:prose-invert prose-blue max-w-none">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  )
}

export default ProjectDetail 