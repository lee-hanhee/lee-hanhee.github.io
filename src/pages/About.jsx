function About() {
  return (
    <div>
      <h1>About Me</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile photo - add your own image path */}
          <div className="w-full md:w-1/3">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg aspect-square flex items-center justify-center">
              {/* TODO: Replace with your actual photo */}
              <p className="text-gray-500 dark:text-gray-400 text-center p-4">
                Place your profile photo here
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {/* TODO: Write your bio/introduction */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
              nunc sit amet aliquam lacinia, nisl nisl aliquam nisl, eget aliquam nisl 
              nisl sit amet nisl. Sed euismod, nunc sit amet aliquam lacinia.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              {/* TODO: Additional personal information */}
              Based in [Your Location], I have a background in [Your Background]. 
              When I'm not coding, you can find me [Your Hobbies/Interests].
            </p>
          </div>
        </div>
      </section>
      
      {/* Skills section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-medium mb-3">Technical</h3>
            <ul className="space-y-2">
              {/* TODO: Add your actual technical skills */}
              <li className="flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">JavaScript</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">React</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              </li>
            </ul>
          </div>
          
          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-medium mb-3">Soft Skills</h3>
            <ul className="space-y-2">
              {/* TODO: Add your actual soft skills */}
              <li className="flex items-center">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Problem Solving</span>
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Team Collaboration</span>
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Communication</span>
              </li>
              <li className="flex items-center">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Time Management</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Education section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        
        <div className="space-y-4">
          {/* TODO: Add your education details */}
          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">Degree Name</h3>
            <p className="text-gray-600 dark:text-gray-400">University Name • 20XX - 20XX</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Brief description or notable achievements during your studies.
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">Another Degree/Certification</h3>
            <p className="text-gray-600 dark:text-gray-400">Institution Name • 20XX - 20XX</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Brief description or notable achievements.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 