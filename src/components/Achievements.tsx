import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { achievements } from '../constants';
import { useInView } from 'react-intersection-observer';

interface AchievementCardProps {
  title: string;
  description: string;
  icon: any;
  date: string;
  index: number;
}

const AchievementCard = ({ title, description, icon: Icon, date, index }: AchievementCardProps) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-tertiary p-6 rounded-lg flex flex-col items-center text-center hover:bg-tertiary/80 transition-all"
    >
      <div className="w-16 h-16 rounded-full bg-accent-purple/20 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-accent-purple" />
      </div>
      <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
      <p className="text-white/70 text-sm mb-4">{description}</p>
      <span className="text-accent-blue text-xs font-semibold px-3 py-1 bg-accent-blue/10 rounded-full">
        {date}
      </span>
    </motion.div>
  );
};

const Achievements = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="relative w-full min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-16">
        <motion.div 
          ref={ref}
          variants={textVariant()}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center"
        >
          <p className="sm:text-[18px] text-[14px] text-accent-purple uppercase tracking-wider">
            Recognitions
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Achievements
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={`achievement-${index}`}
              index={index}
              {...achievement}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;