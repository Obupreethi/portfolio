import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import Img1 from "./p1.jpg"; 
import p2 from "./p2.jpg";


const projects = [
  {
    title: "EduConnect Platform",
    description: "EduConnect is an AI-powered platform designed to enhance personalized learning experiences, connecting students with tailored educational resources and opportunities for growth.",
    // If your image is in the public folder, you can use the path as below
    image: Img1,

    tech: ["React", "Node.js", "MongoDB", "LLama model"]
   
  },
  {
    title: "Senior citizen portal",
    description: "A dedicated platform offering essential services, healthcare support, and community engagement for senior citizens.",
    // If your image is in the public folder, you can use the path as below
    image: p2,

    tech: ["React", "Node.js", "MongoDB", "Express.js"]
   
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Featured Projects</h2>
          <p className="section-subheading">
            A selection of my recent work
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.image} // Ensure the image path is correct
                    alt={project.title}
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-playfair font-bold text-lightest mb-3">
                    {project.title}
                  </h3>
                  <p className="text-text mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="text-accent text-sm font-sourceSans"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
