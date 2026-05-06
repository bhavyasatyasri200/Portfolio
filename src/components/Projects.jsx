import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const projects = [
  {
    title: "Job Board with Advanced Filtering",
    description: "A multi-page Job Board application featuring advanced client-side filtering, searching, sorting, pagination, and bookmarking.",
    tech: ["React (Vite)", "Zustand", "Tailwind CSS"],
    github: "https://github.com/bhavyasatyasri200/Job-Board-with-Advanced-Filtering-and-Bookmarking-using-React",
    live: "https://regal-fox-fb1f59.netlify.app/"
  },
  {
    title: "Rich Text Editor Component",
    description: "A feature-rich, production-ready Rich Text Editor component featuring advanced local state management, comprehensive testing, and accessibility compliance.",
    tech: ["React", "State Management", "Jest"],
    github: "https://github.com/bhavyasatyasri200/Rich-Text-Editor-Component-with-Advanced-Local-State-Management-and-Extensive-Testing",
    live: "https://papaya-pithivier-ac4b4d.netlify.app/"
  },
  {
    title: "Collaborative Todo Application",
    description: "A feature-rich, responsive Todo application demonstrating multi-context state management, memoization, custom hooks, and simulated collaboration.",
    tech: ["React", "Context API", "Hooks"],
    github: "https://github.com/bhavyasatyasri200/Collaborative_To_Do_Application",
    live: "https://todoapplication-react-vite.netlify.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient backgrounds */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work, highlighting my skills in scalable web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
              className="bg-zinc-800 rounded-2xl overflow-hidden border border-white/10 group flex flex-col h-full shadow-lg hover:shadow-blue-500/20"
            >
              {/* Top part showing tech stack decorative */}
              <div className="h-48 bg-zinc-900 border-b border-white/5 relative overflow-hidden p-6 flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-bold relative z-10 mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex text-sm items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1.5" /> Source Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex text-sm items-center text-blue-400 hover:text-blue-300 transition-colors ml-auto"
                  >
                    <ExternalLink className="w-4 h-4 mr-1.5" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
