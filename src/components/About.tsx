import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading gradient-text">About Me</h2>
        <p className="section-subheading">
          I’m a 2nd‑year Computer Science &amp; Engineering student at Kongu Engineering College.
          I specialize in full‑stack web development, AI, and UI/UX design, with hands-on experience in technologies like React, Node.js, MongoDB, and more.
        </p>
      </motion.div>
  
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-text"
        >
          <p className="leading-relaxed">
            I’m passionate about building accessible, human-centered products. My work spans across the MERN stack (MongoDB, Express.js, React.js, Node.js) and I also have experience with AI models like LLaMA for various applications.
          </p>
          <p className="leading-relaxed">
            I'm focused on creating intuitive user interfaces using tools like <strong>Figma</strong> and building robust backends with <strong>Node.js</strong> and <strong>Express.js</strong>. I also craft responsive websites using <strong>HTML</strong>, <strong>CSS</strong>, <strong>Bootstrap</strong>, and <strong>Next.js</strong>.
          </p>
          <div className="pt-4">
            <h3 className="text-lightest font-playfair text-xl mb-4">
              Technologies &amp; Tools:
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-text">
              <li>▹ MongoDB</li>
              <li>▹ Node.js</li>
              <li>▹ Express.js</li>
              <li>▹ React.js</li>
              <li>▹ HTML &amp; CSS</li>
              <li>▹ Bootstrap</li>
              <li>▹ Figma (UI/UX)</li>
              <li>▹ C &amp; C++</li>
              <li>▹ Java &amp; JavaScript</li>
              <li>▹ Python</li>
              <li>▹ Data Structures in C</li>
              <li>▹ Next.js &amp; TypeScript</li>
              <li>▹ Artificial Intelligence (LLaMA)</li>
            </ul>
          </div>
        </motion.div>
  
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative group">
            <img
              src="src/WhatsApp Image 2025-04-21 at 22.01.38_24dd4f30.jpg"  // Make sure the image path is correct
              alt="Profile"
              className="rounded-lg w-full max-w-md mx-auto"
            />
            <div className="absolute inset-0 bg-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  
  );
};

export default About;