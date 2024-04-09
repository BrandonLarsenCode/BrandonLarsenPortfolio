import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The projects below serve as tangible demonstrations of my budding coding skills and burgeoning experience. 
          These are just a glimpse of what's to come, as this portfolio represents only a fraction of my capabilities.
           Each project encapsulates real-world challenges I've tackled, accompanied by brief descriptions, links to code repositories,
          and live demos. They vividly illustrate my capacity to unravel intricate problems, adeptness with diverse technologies, 
          and knack for efficient project management
        </motion.p>
      </div>

      {/* Rendering the list of projects without using the ProjectCard component */}
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <div key={`project-${index}`} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
            <div className='relative w-full h-[230px]'>
              <img
                src={project.image}
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />

              <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                <div
                  onClick={() => window.open(project.source_code_link, "_blank")}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                >
                  <img
                    src={github}
                    alt='source code'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            </div>

            <div className='mt-5'>
              <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
              <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
            </div>

            <div className='mt-4 flex flex-wrap gap-2'>
              {project.tags.map((tag, tagIndex) => (
                <p
                  key={`${project.name}-${tagIndex}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
