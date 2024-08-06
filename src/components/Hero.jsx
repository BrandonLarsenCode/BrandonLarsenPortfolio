import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
  <div className='flex flex-col justify-center items-center mt-5'>
    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
    <div className='w-1 sm:h-80 h-40 violet-gradient' />
  </div>

  <div className='mb-24'> {/* Adjust the margin-bottom value as needed */}
    <h1 className={`${styles.heroHeadText} text-white`}>
      HI I'm <span className='text-[#915EFF]'>Brandon</span>
    </h1>
    <p className={`${styles.heroSubText} mt- text-white-50`}>
      I specialize in web development, creating responsive interfaces, and building dynamic web applications with HTML, CSS, JavaScript, and jQuery. <br className='sm:block hidden' />
      I also work with React for interactive UIs and Three.js for 3D modeling. Passionate about technology, 
      I focus on developing efficient and scalable solutions.
    </p>
  </div>
</div>

<ComputersCanvas className="relative" />

<div className='absolute xs:bottom-16 bottom-32 w-full flex justify-center items-center'>
  <a href='#about'>
    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
      <motion.div
        animate={{
          y: [0, 24, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className='w-3 h-3 rounded-full bg-secondary mb-1'
      />
    </div>
  </a>
</div>
    </section>
  );
};

export default Hero;
