import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { experiences } from '../constants';
import { useInView } from 'react-intersection-observer';

interface ExperienceCardProps {
  experience: {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  };
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col rounded-lg bg-tertiary p-6 hover:bg-tertiary/80 transition-all"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-full flex justify-center items-center"
            style={{ backgroundColor: experience.iconBg }}
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[80%] h-[80%] object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="text-white text-xl font-bold">{experience.title}</h3>
            <p className="text-accent-blue font-medium text-base">
              {experience.company_name}
            </p>
          </div>
        </div>
        <p className="text-white/60 text-sm">{experience.date}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white/70 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="work" className="relative w-full min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-16">
        <motion.div 
          ref={ref}
          variants={textVariant()}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center"
        >
          <p className="sm:text-[18px] text-[14px] text-accent-blue uppercase tracking-wider">
            My professional journey
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Work Experience
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col gap-10">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;