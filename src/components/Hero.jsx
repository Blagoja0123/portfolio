import { useContext } from "react";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas"
import {motion} from 'framer-motion';
import { LanguageContext } from "../Context/LanguageContext";
import img from '/assets/Blagoja.jpg'
const Hero = () => {
  const {language, changeLanguage} = useContext(LanguageContext);
  return (
    <>
      <section className="relative w-full xs:mx-none mx-auto h-screen">
          <div className={`flex flex-wrap absolute inset-0 max-w-7xl top-[50px] mx-auto ${styles.paddingX} justify-center items-start h-full`}>
              <div className="flex flex-row gap-4 lg:h-56 sm:w-screen p-4">
                <div className="flex flex-col justify-center items-center mt-5 ">
                    <div className="lg:w-5 lg:h-10 w-5 h-5 rounded-full bg-sky-400"/>
                    <div className="w-1 xs:h-96 h-[40px] blue-gradient"/>
                </div>
                <div>
                  <h1 className={`${styles.heroHeadText} text-white`}>{language[2].intro}<span className=" text-[#37c3ff]">{language[2].name}</span></h1>
                  <p className={`${styles.heroSubText} mt-2 text-white-100 mb-10`}>{language[2].subtext}</p>
                  <div className="bg-white h-96 w-72 p-3 rotate-2 xs:-z-[2px]">
                    <img src={img} alt="" className="w-full h-full shadow-black shadow-2xl" />
                  </div>
                </div>
              </div>
              <div className="w-[31rem] h-[31rem]">
                <EarthCanvas/>
              </div>
          </div>
          <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.div 
                animate={{y:[0, 24, 0],}}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }} className='w-3 h-3 rounded-full bg-secondary mb-1'/>
              </div>
            </a>
          </div>
      </section>
    </>
  )
}

export default Hero