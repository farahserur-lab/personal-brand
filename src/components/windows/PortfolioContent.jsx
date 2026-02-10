import { useState } from 'react'

export default function PortfolioContent() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      name: 'Project_1.exe',
      icon: '🚀',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      name: 'Project_2.exe',
      icon: '🎮',
      title: 'Retro Game Collection',
      description: 'Browser-based retro games built with vanilla JavaScript',
      tech: ['JavaScript', 'Canvas API', 'CSS3'],
      link: '#'
    },
    {
      id: 3,
      name: 'Project_3.exe',
      icon: '📱',
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      tech: ['React', 'D3.js', 'Firebase', 'Tailwind'],
      link: '#'
    },
    {
      id: 4,
      name: 'Project_4.exe',
      icon: '🤖',
      title: 'AI Chatbot',
      description: 'Intelligent chatbot using natural language processing',
      tech: ['Python', 'TensorFlow', 'Flask', 'React'],
      link: '#'
    },
    {
      id: 5,
      name: 'Project_5.exe',
      icon: '🎨',
      title: 'Design System',
      description: 'Comprehensive UI component library',
      tech: ['React', 'Storybook', 'TypeScript'],
      link: '#'
    },
    {
      id: 6,
      name: 'Project_6.exe',
      icon: '📊',
      title: 'Data Visualization',
      description: 'Interactive data visualization platform',
      tech: ['Vue.js', 'D3.js', 'Python', 'Pandas'],
      link: '#'
    }
  ]

  return (
    <div className="p-4 min-h-full bg-white">
      {!selectedProject ? (
        <div className="grid grid-cols-3 gap-4 p-2">
          {projects.map(project => (
            <div
              key={project.id}
              className="flex flex-col items-center p-4 cursor-pointer hover:bg-win95-blue hover:bg-opacity-20 border-2 border-transparent hover:border-dotted hover:border-black"
              onDoubleClick={() => setSelectedProject(project)}
            >
              <div className="text-5xl mb-2">{project.icon}</div>
              <div className="text-xs text-center font-retro">{project.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 font-retro">
          <button
            className="win95-button px-3 py-1 mb-4 text-xs"
            onClick={() => setSelectedProject(null)}
          >
            ← Back
          </button>
          
          <div className="flex items-start gap-4">
            <div className="text-6xl">{selectedProject.icon}</div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-2 text-win95-blue">
                {selectedProject.title}
              </h2>
              <p className="text-sm mb-4 leading-relaxed">
                {selectedProject.description}
              </p>
              
              <div className="win95-border p-3 bg-win95-gray mb-4">
                <h3 className="text-xs font-bold mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="win95-button px-2 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button className="win95-button px-4 py-2 text-xs font-bold">
                View Project →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
