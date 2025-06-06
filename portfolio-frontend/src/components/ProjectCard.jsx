export default function ProjectCard({ project }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="mt-2">{project.description}</p>
      <p className="mt-1 text-sm text-gray-600">Tech: {project.tech_stack}</p>
      <div className="mt-3 flex space-x-4">
        <a 
          href={project.repo_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub
        </a>
        {project.demo_url && (
          <a 
            href={project.demo_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
