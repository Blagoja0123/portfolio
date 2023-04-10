
import { motion } from "framer-motion";

import { styles } from "../styles";
import StarWrapper from "../hoc/StarWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import {testimonials} from '../utils/constants'
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
const RecommendCard = ({
    index,
    testimonial,
    name,
    role,
    contact,
    trans
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-8 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1 w-full'>
      <p className='text-white tracking-wider text-[18px] w-full h-96 overflow-y-scroll overflow-x-hidden'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {role}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {trans}: {contact}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Recommend = () => {
  const {language, changeLanguage} = useContext(LanguageContext);
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{language[8].others}</p>
          <h2 className={styles.sectionHeadText}>{language[8].test}</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {language[10].map((testimonial, index) => (
          <RecommendCard key={testimonial.name} index={index} {...testimonial} trans={language[8].contact} />
        ))}
      </div>
    </div>
  );
};

export default StarWrapper(Recommend, "recommendations");