import React from 'react';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import StarWrapper from '../hoc/StarWrapper';
const Philosophy = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Philosophy</h2>
            <p className={styles.sectionSubText}>" I believe there is no task that is too difficult, simply a task that I do not yet fully understand. With this I aim to fully understand everything I do and learn to allow me to excel in my future. "</p>
        </motion.div>
    </>
  )
}

export default StarWrapper(Philosophy, "philosophy");