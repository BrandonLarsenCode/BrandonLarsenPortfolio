import React from "react"; // Correct import statement for React
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       As an aspiring coder with a fervent passion for technology, 
       I've recently delved into the world of programming.
       Through various courses and personal projects, 
       I've begun my journey in web development and 3D modeling.
       Proficient in TypeScript and JavaScript, 
       I've also gained expertise in frameworks such as React, Node.js, and Three.js.
        I thrive on learning quickly and working closely with clients to develop efficient, scalable, 
        and intuitive solutions that tackle real-world challenges.
        Let's collaborate to turn your concepts into reality!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
