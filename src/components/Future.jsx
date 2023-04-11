import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion';
import { styles } from '../styles';
import StarWrapper from '../hoc/StarWrapper';
import { LanguageContext } from '../Context/LanguageContext';
const Future = () => {
    const {language, changeLanguage} = useContext(LanguageContext)
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>{language[13].subtext}</p>
            <h2 className={styles.sectionHeadText}>{language[13].headtext}</h2>
        </motion.div>
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
           {language[13].content}
        </motion.p>
    </>
  )
}

export default StarWrapper(Future, "future")