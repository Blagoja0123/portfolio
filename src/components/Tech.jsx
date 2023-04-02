import technologies from '../utils/constants';
import Tilt from 'react-tilt';
import { fadeIn, textVariant } from '../utils/motion';
import StarWrapper from '../hoc/StarWrapper';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';
const TechCard = ({index, icon, name}) =>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
        variants={fadeIn("left", "spring", index * 0.1, 0.3)}
        className='w-full lightblue-teal-gradient p-[1px] rounded-xl shadow-card'
        >
          <div
              options={{
                  max: 45,
                  scale: 1,
                  speed: 1,
              }}
              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] h-28 flex justify-evenly items-center flex-col'
            >
            <img
                key={index}
                src={icon}
                alt='web-development'
                className='w-16 h-16 object-contain'
            />
          </div>
        </motion.div>
    </Tilt>
  )
}

const Tech = () => {
  const{language, changeLanguage} = useContext(LanguageContext);
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>{language[8].tech}</h2>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {technologies.map((tech, index) =>(
            <TechCard key={tech.name} index={index} icon={tech.icon} name={tech.name}/>
        ))}
      </div>
    </>
  )
}

export default StarWrapper(Tech, "tech");