import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import Tilt from 'react-tilt'
import StarWrapper from '../hoc/StarWrapper'
import { LanguageContext } from '../Context/LanguageContext'


const OutsideCard = ({title, contents, index}) =>{
    return (

        <Tilt className='xs:w-[300px] w-full'>
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
                    className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px] flex justify-evenly items-center flex-col'
                >
                    <h2 className='text-white text-[19px] font-bold text-center'>
                        {title}
                    </h2>
                    <ul className=' list-disc'>
                        {contents.map((item) => (
                            <li className='text-[18px]' key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </Tilt>
    )
}

const Outside = () => {
    const {language, changeLanguage} = useContext(LanguageContext);
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>{language[14].subtext}</p>
            <h2 className={styles.sectionHeadText}>{language[14].headtext}</h2>
        </motion.div>
        <div className='mt-20 flex flex-wrap justify-center gap-10'>
            {language[14].categories.map((item, index) =>(
                <OutsideCard key={item.title} title={item.title} contents={item.contents} index={index}/>
            ))}
        </div>
    </>
  )
}

export default StarWrapper(Outside, "outside")