import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  // The project prop should contain data like:
  // {
  //   id: 'unique-id',
  //   title: 'Project Title',
  //   description: 'Short description of the project',
  //   imageUrl: '/path/to/image.jpg',
  //   category: 'Full Stack',
  //   tags: ['React', 'Node.js'],
  //   date: '2023-04-01'
  // }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      {/* TODO: Add image if available */}
      {project?.imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-4">
        {/* Category Badge */}
        {project?.category && (
          <span className="inline-block px-2 py-1 text-xs font-semibold rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-2">
            {project.category}
          </span>
        )}
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-2">{project?.title || 'Project Title'}</h3>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project?.description || 'Project description goes here. This is a brief overview of what the project is about.'}
        </p>
        
        {/* Tags */}
        {project?.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
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
        
        {/* View Project Button */}
        <Link 
          to={`/project/${project?.id || 'placeholder'}`}
          className="inline-block mt-2 text-primary hover:text-blue-700 font-medium"
        >
          View Project →
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard 