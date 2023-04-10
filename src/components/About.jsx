import React from 'react';
import Tilt from 'react-tilt';
import {motion} from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import StarWrapper from '../hoc/StarWrapper';
import { useContext } from 'react';
import { LanguageContext } from '../Context/LanguageContext';


const Card = ({index, title, icon}) =>{
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
                    className='w-16 h-16 object-contain fill-white text-white stroke-white '
                />
                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    const {language, changeLanguage} = useContext(LanguageContext);
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>{language[3].introduction}</p>
            <h2 className={styles.sectionHeadText}>{language[3].overview}</h2>
        </motion.div>
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
            {language[3].content1}
        </motion.p>
        <div className='mt-20 flex flex-wrap gap-10'>
            {language[5].map((service, index) =>(
                <Card key={service.title} index={index} {...service}/>
            ))}
        </div>
    </>
  )
}

export default StarWrapper(About, "about");