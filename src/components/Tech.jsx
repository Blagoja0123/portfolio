import technologies from '../utils/constants';
import Tilt from 'react-tilt';
import { fadeIn, textVariant } from '../utils/motion';
import StarWrapper from '../hoc/StarWrapper';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';


const TechCard = ({index, icon}) =>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
            <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full lightblue-teal-gradient p-[1px] rounded-xl shadow-card'
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                >   
                    <img
                        src={icon}
                        alt='web-development'
                        className='w-20 h-20 object-contain'
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
        <p className={styles.sectionSubText}>{language[8].techsub}</p>
        <h2 className={styles.sectionHeadText}>{language[8].tech}</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
            {language[8].techcontent}
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {technologies.map((tech, index) =>(
              <TechCard key={tech.name} index={index} icon={tech.icon}/>
        ))}
      </div>
    </>
  )
}

export default StarWrapper(Tech, "tech");