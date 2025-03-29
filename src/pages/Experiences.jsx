import { useState } from 'react'

function Experiences() {
  // TODO: Implement state for experiences if needed
  // Example: Filter by professional vs. academic
  const [filter, setFilter] = useState('all') // Options: 'all', 'professional', 'academic'
  
  return (
    <div>
      <h1>My Experiences</h1>
      
      {/* Optional: Filter tabs */}
      <div className="flex space-x-4 mb-8">
        <button 
          className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${filter === 'professional' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          onClick={() => setFilter('professional')}
        >
          Professional
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${filter === 'academic' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          onClick={() => setFilter('academic')}
        >
          Academic
        </button>
      </div>
      
      {/* Timeline of experiences */}
      <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-6 pl-6">
        {/* TODO: Replace with your actual experiences */}
        {/* Example Experience 1 */}
        <div className="mb-10 relative">
          {/* Timeline dot */}
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[2.45rem] top-1"></div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h2 className="text-xl font-bold">Job Position / Project Title</h2>
              <span className="text-gray-600 dark:text-gray-400">Jan 2023 - Present</span>
            </div>
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
              Company / Organization
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {/* TODO: Add description of your experience */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
              nunc sit amet aliquam lacinia, nisl nisl aliquam nisl, eget aliquam nisl 
              nisl sit amet nisl. Vivamus at est eu enim condimentum ultricies.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Node.js</span>
            </div>
          </div>
        </div>
        
        {/* Example Experience 2 */}
        <div className="mb-10 relative">
          {/* Timeline dot */}
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[2.45rem] top-1"></div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h2 className="text-xl font-bold">Another Position / Project</h2>
              <span className="text-gray-600 dark:text-gray-400">Mar 2022 - Dec 2022</span>
            </div>
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
              Company / Organization
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {/* TODO: Add description of your experience */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
              nunc sit amet aliquam lacinia, nisl nisl aliquam nisl, eget aliquam nisl 
              nisl sit amet nisl. Vivamus at est eu enim condimentum ultricies.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">CSS</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">HTML</span>
            </div>
          </div>
        </div>
        
        {/* Add more experience items as needed */}
      </div>
    </div>
  )
}

export default Experiences 