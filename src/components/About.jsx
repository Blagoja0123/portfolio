import React from 'react';
import Tilt from 'react-tilt';
import {motion} from 'framer-motion';
import { fadeIn } from '../utils/motion';


const Card = ({index, title, icon}) =>{
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full '
        >
            
        </motion.div>
    </Tilt>
}

const About = () => {
  return (
    <section>

    </section>
  )
}

export default About