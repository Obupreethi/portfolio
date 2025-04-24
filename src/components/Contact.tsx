import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading gradient-text">Get In Touch</h2>
          <p className="section-subheading">
            I'm currently open to new opportunities. Whether you have a question or
            just want to say hi, I'll get back to you!
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="mailto:preethiusha007@gmail.com"
              className="p-4 border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Obupreethi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/obupreethi-gnanasekaran-0301a12b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-background transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <p className="text-text text-sm">
            © {new Date().getFullYear()}  All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;