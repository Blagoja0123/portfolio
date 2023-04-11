import React, { useContext } from 'react';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import StarWrapper from '../hoc/StarWrapper';
import { LanguageContext } from '../Context/LanguageContext';
const Philosophy = () => {
  const {language, changeLanguage} = useContext(LanguageContext)
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>{language[11].subtext}</p>
            <h2 className={styles.sectionHeadText}>{language[11].phil}</h2>
            <p className={styles.sectionSubText}>"{language[11].content}"</p>
        </motion.div>
    </>
  )
}

export default StarWrapper(Philosophy, "philosophy");