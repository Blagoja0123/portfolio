import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import {motion} from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import StarWrapper from "../hoc/StarWrapper";
import { experience } from "../utils/constants";
import { textVariant } from "../utils/motion";

import { styles } from "../styles";

const ExpCard = ({experience}) =>{
    return(
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{borderRight: "7px solid #232631"}}
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
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-center`}>
            What I have done so far
            </p>
        </motion.div>
        <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experience.map((item, index) => (
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

export default StarWrapper(Experience, "work");