import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { educationList } from '../constants';
import { useInView } from 'react-intersection-observer';

interface EducationCardProps {
  education: {
    degree: string;
    school: string;
    date: string;
    description: string;
    icon: string;
    iconBg: string;
  };
  index: number;
}

const EducationCard = ({ education, index }: EducationCardProps) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col rounded-lg bg-tertiary p-6 hover:bg-tertiary/80 transition-all"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-full flex justify-center items-center"
            style={{ backgroundColor: education.iconBg }}
          >
            <img
              src={education.icon}
              alt={education.school}
              className="w-[80%] h-[80%] object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="text-white text-xl font-bold">{education.degree}</h3>
            <p className="text-accent-teal font-medium text-base">
              {education.school}
            </p>
          </div>
        </div>
        <p className="text-white/60 text-sm">{education.date}</p>
      </div>

      <p className="mt-5 text-white/70 text-[14px] tracking-wider leading-relaxed">
        {education.description}
      </p>
    </motion.div>
  );
};

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="education" className="relative w-full min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-16">
        <motion.div 
          ref={ref}
          variants={textVariant()}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center"
        >
          <p className="sm:text-[18px] text-[14px] text-accent-teal uppercase tracking-wider">
            My Learning Path
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Education
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col gap-10">
          {educationList.map((education, index) => (
            <EducationCard
              key={`education-${index}`}
              education={education}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;