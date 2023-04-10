import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import {motion} from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import StarWrapper from "../hoc/StarWrapper";
import { textVariant } from "../utils/motion";

import { styles } from "../styles";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

const ExpCard = ({experience}) =>{
    return(
        <VerticalTimelineElement
            contentStyle={{
                background: "#151030",
                color: "#fff",
            }}
            contentArrowStyle={{borderRight: "7px solid #151030"}}
            iconStyle={{ background: '#000000' }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={experience.title}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
            </div>
            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
            <li
                key={`experience-point-${index}`}
                className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
                {point}
            </li>
        ))}
            </ul>
        </VerticalTimelineElement>
    )
}

const Experience = () => {
    const {language, changeLanguage} = useContext(LanguageContext);
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-center`}>
            {language[8].wid}
            </p>
        </motion.div>
        <div className='mt-20 flex flex-col'>
            <VerticalTimeline>
            {language[6].map((item, index) => (
                <ExpCard
                key={`experience-${index}`}
                experience={item}
                />
            ))}
            </VerticalTimeline>
        </div>
    </>
  )
}

export default StarWrapper(Experience, "experience");