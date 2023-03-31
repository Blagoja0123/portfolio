import technologies from '../utils/constants';
import Tilt from 'react-tilt';
import { fadeIn, textVariant } from '../utils/motion';
import StarWrapper from '../hoc/StarWrapper';
import {motion} from 'framer-motion';
import { styles } from '../styles';
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
                  speed: 999,
              }}
              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] h-28 flex justify-evenly items-center flex-col'
            >
            <img
                src={icon}
                alt='web-development'
                className='w-16 h-16 object-contain '
            />
          </div>
        </motion.div>
    </Tilt>
  )
}

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {technologies.map((tech, index) =>(
            <TechCard key={tech.title} index={index} icon={tech.icon}/>
        ))}
      </div>
    </>
  )
}

export default StarWrapper(Tech, "tech");