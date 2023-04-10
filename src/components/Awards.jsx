
import { useRef } from "react";
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

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ target: ref });
  const x = useParallax(scrollXProgress, 300);

  return (
    <Tilt className=" h-1/2 flex justify-center items-center relative">
      <div ref={ref} className=" w-[300px] h-[400px] relative max-h-[90vh] m-[20px] bg-white overflow-hidden">
        <img src={`/${id}.jpg`} alt="Unloaded diploma or certificate"  className="absolute inset-0 w-full h-full text-black"/>
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
  return (
    <>
        <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Awards.</h2>
            <p className={styles.sectionSubText}>A collection of awards from competitions and certificates from projects I've participated in</p>
        </motion.div>
        <motion.div variants={slideIn("left", "spring", 0.1, 1)} className="flex scroll-smooth overflow-y-hidden overflow-x-scroll w-full">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((image) => (
                <Image id={image} />
            ))}
        </motion.div>
        {/* <motion.div className=" fixed left-0 right-0 h-[5px] bottom-[100px]" style={{ scaleX }} /> */}
    </>
  );
}

export default StarWrapper(Awards, "awards")

