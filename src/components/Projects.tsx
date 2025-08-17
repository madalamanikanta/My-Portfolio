import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  imageUrl, 
  projectUrl 
}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="h-48 bg-gray-300 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
          </svg>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <motion.a 
          href={projectUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project
        </motion.a>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "",
      projectUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks, setting deadlines, and tracking progress with team collaboration features.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      imageUrl: "",
      projectUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides real-time forecasts, historical data, and interactive maps for locations worldwide.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
      imageUrl: "",
      projectUrl: "#"
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={titleVariants}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          My Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;