import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tertiary py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6 md:mb-0"
          >
            <Github className="w-8 h-8 text-white" />
            <p className="text-white text-lg font-bold">
              Obupreethi G| Portfolio
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
            <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
            <a href="#work" className="text-white/70 hover:text-white transition-colors">Work</a>
            <a href="#skills" className="text-white/70 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex gap-4">
            <motion.a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent-blue/20 transition-colors"
            >
              <Github className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent-blue/20 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent-blue/20 transition-colors"
            >
              <Twitter className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a 
              href="mailto:johndoe@example.com" 
              whileHover={{ y: -5 }}
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent-blue/20 transition-colors"
            >
              <Mail className="w-5 h-5 text-white" />
            </motion.a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;