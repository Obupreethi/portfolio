import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { technologies } from '../constants';
import { useInView } from 'react-intersection-observer';

interface TechCardProps {
  name: string;
  icon: string;
  proficiency: number;
  index: number;
}

const TechCard = ({ name, icon, proficiency, index }: TechCardProps) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-tertiary rounded-lg p-5 flex flex-col items-center hover:shadow-lg hover:bg-tertiary/80 transition-all"
    >
      <img 
        src={icon} 
        alt={name}
        className="w-14 h-14 object-contain mb-3" 
      />
      <h3 className="text-white text-center font-semibold mb-2">{name}</h3>
      
      <div className="w-full bg-black/30 h-2 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={inView ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
          className="h-full rounded-full"
          style={{ 
            background: `linear-gradient(90deg, #3498db 0%, #8e44ad 100%)`,
          }}
        />
      </div>
      <p className="text-white/80 mt-1 text-xs">{proficiency}%</p>
    </motion.div>
  );
};

const Tech = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="skills" className="relative w-full min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-16">
        <motion.div 
          ref={ref}
          variants={textVariant()}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center"
        >
          <p className="sm:text-[18px] text-[14px] text-accent-pink uppercase tracking-wider">
            My Toolkit
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Technologies & Skills
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((technology, index) => (
            <TechCard 
              key={technology.name}
              index={index}
              {...technology}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;