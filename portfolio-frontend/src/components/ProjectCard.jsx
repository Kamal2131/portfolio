import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      {/* Project image with gradient overlay */}
      <div className="relative h-48 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 w-full h-full flex items-center justify-center">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {project.category || 'Web App'}
          </span>
        </div>
      </div>
      
      {/* Project content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
        </div>
        
        {/* Technologies used */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies?.slice(0, 4).map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies?.length > 4 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
          
          {/* Action buttons */}
          <div className="flex space-x-3">
            <a 
              href={project.demoUrl || '#'}
              className="flex-1 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Live Demo
            </a>
            <a 
              href={project.githubUrl || '#'}
              className="flex-1 text-center bg-gray-100 text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
//     </div>