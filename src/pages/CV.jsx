function CV() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1>Curriculum Vitae</h1>
      
      {/* Download CV button */}
      <div className="mb-8">
        <a 
          href="/path-to-your-cv.pdf" 
          download 
          className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          {/* TODO: Replace with actual PDF download link */}
          Download CV as PDF
        </a>
      </div>
      
      {/* Profile section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold pb-2 border-b border-gray-300 dark:border-gray-700">
          Profile
        </h2>
        <div className="mt-4">
          <p className="text-gray-700 dark:text-gray-300">
            {/* TODO: Add a professional summary about yourself */}
            A motivated and dedicated frontend developer with a strong foundation in 
            modern web technologies. Passionate about creating engaging user experiences 
            through clean, efficient code and thoughtful design.
          </p>
        </div>
      </section>
      
      {/* Work Experience section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold pb-2 border-b border-gray-300 dark:border-gray-700">
          Work Experience
        </h2>
        
        <div className="mt-4 space-y-6">
          {/* TODO: Add your actual work experience */}
          {/* Example job */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between mb-1">
              <h3 className="text-xl font-semibold">Job Title</h3>
              <span className="text-gray-600 dark:text-gray-400">Month YYYY - Present</span>
            </div>
            <div className="text-lg text-gray-700 dark:text-gray-300 mb-2">Company Name, Location</div>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Accomplished X by implementing Y which led to Z% improvement.</li>
              <li>Designed and developed responsive web applications using React and Tailwind CSS.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality products.</li>
            </ul>
          </div>
          
          {/* Previous job example */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between mb-1">
              <h3 className="text-xl font-semibold">Previous Job Title</h3>
              <span className="text-gray-600 dark:text-gray-400">Month YYYY - Month YYYY</span>
            </div>
            <div className="text-lg text-gray-700 dark:text-gray-300 mb-2">Company Name, Location</div>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Developed and maintained web applications with a focus on user experience.</li>
              <li>Implemented new features that improved user engagement by X%.</li>
              <li>Optimized application performance and resolved technical issues.</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Education section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold pb-2 border-b border-gray-300 dark:border-gray-700">
          Education
        </h2>
        
        <div className="mt-4 space-y-6">
          {/* TODO: Add your actual education */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between mb-1">
              <h3 className="text-xl font-semibold">Degree Name</h3>
              <span className="text-gray-600 dark:text-gray-400">YYYY - YYYY</span>
            </div>
            <div className="text-lg text-gray-700 dark:text-gray-300">University Name, Location</div>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Relevant coursework: Course 1, Course 2, Course 3
            </p>
          </div>
        </div>
      </section>
      
      {/* Skills section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold pb-2 border-b border-gray-300 dark:border-gray-700">
          Skills
        </h2>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {/* TODO: Replace with your actual skills */}
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">HTML</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">CSS</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Git</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Problem Solving</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Communication</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Team Collaboration</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">Time Management</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Languages section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold pb-2 border-b border-gray-300 dark:border-gray-700">
          Languages
        </h2>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* TODO: Replace with your actual languages */}
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-700 dark:text-gray-300">English</span>
            <span className="text-gray-600 dark:text-gray-400">Fluent</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-700 dark:text-gray-300">Spanish</span>
            <span className="text-gray-600 dark:text-gray-400">Intermediate</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CV 