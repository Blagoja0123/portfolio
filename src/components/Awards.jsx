
import { useContext, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import StarWrapper from "../hoc/StarWrapper";
import { textVariant, fadeIn, staggerContainer, slideIn } from "../utils/motion";
import { styles } from "../styles";
import Tilt from 'react-tilt';
import { LanguageContext } from "../Context/LanguageContext";
import { certificates } from "../utils/constants";



function Image({ img }) {
  const ref = useRef();

  return (
    <Tilt className=" h-1/2 flex justify-center items-center relative">
      <div ref={ref} className=" w-[300px] h-[400px] relative max-h-[90vh] m-[20px] bg-white overflow-hidden">
        <img src={img} alt="Unloaded diploma or certificate"  className="absolute inset-0 w-full h-full text-black"/>
      </div>
    </Tilt>
  );
}

const Awards = () =>{
    const { scrollXProgress } = useScroll();
    const scaleX = useSpring(scrollXProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    
    const {language, changeLanguage} = useContext(LanguageContext);
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>{language[12].subtext}</p>
            <h2 className={styles.sectionHeadText}>{language[12].aw}</h2>
        </motion.div>
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
           {language[12].content}
        </motion.p>
        <motion.div variants={slideIn("left", "spring", 0.1, 1)} className="flex scroll scroll-smooth overflow-y-hidden overflow-x-scroll w-full gap-10">
            {certificates.map((image, index) => (
                <Image img={image} key={index}/>
            ))}
        </motion.div>
        {/* <motion.div className=" fixed left-0 right-0 h-[5px] bottom-[100px]" style={{ scaleX }} /> */}
    </>
  );
}

export default StarWrapper(Awards, "awards")

