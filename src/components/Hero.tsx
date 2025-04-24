import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src="src\WhatsApp Image 2025-04-21 at 22.03.16_3c298975.jpg"
            alt="Obupreethi G"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-2 border-accent"
          />
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-lightest mb-4">
          Obupreethi G
          </h1>
          <p className="text-xl md:text-2xl font-sourceSans text-accent mb-6">
          Software Engineer
          </p>
          <p className="text-lg md:text-xl text-text max-w-2xl mx-auto leading-relaxed">
            Crafting elegant solutions to complex problems through clean, efficient code.
            Specializing in full-stack(mern) development and Artificial Intelligence with a focus on user experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center gap-4"
        >
          <a
            href="#about"
            className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 rounded-md font-sourceSans"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-accent text-background hover:bg-transparent hover:text-accent border-2 border-accent transition-all duration-300 rounded-md font-sourceSans"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;