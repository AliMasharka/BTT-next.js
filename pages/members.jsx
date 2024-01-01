'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Members = () => (
  <section className={`${styles.paddings} bg-primary-black`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col space-y-4 gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <img src="/spkng.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
            Ümit Altındiş
          </h4>
          </div>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Founder BTT
          </p>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “With the development of today's technology, metaverse is very
          useful for today's work, or can be called web 9.0. by stay
          with mcharka team you can do whatever you want” “With the development of today's technology, metaverse is very
          useful for today's work, or can be called web 9.0. by stay
          with mcharka team you can do whatever you want” v “With the development of today's technology, metaverse is very
          useful for today's work, or can be called web 9.0. by stay
          with mcharka team you can do whatever you want”
        </p>
        </motion.div>
      </motion.div>
    
      <div className='mt-14'>
        <h2>◌</h2>
    </div>
    <div className='mt-14'>
        <h2>◌</h2>
    </div>
    <div className='mt-14'>
        <h2>◌</h2>
    </div>

      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <img src="/alimc.png"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
            Ali Mcharka
          </h4>
          </div>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Web Developer
          </p>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “With the development of today's technology, metaverse is very
          useful for today's work, or can be called web 9.0. by stay
          with mcharka team you can do whatever you want” “With the development of today's technology, metaverse is very
          useful for today's work, or can be called web 9.0. by stay
          with mcharka team you can do whatever you want” v “With the development of today's technology, metaverse is very
          useful for today's work, or can be called web 9.0. by stay
          with mcharka team you can do whatever you want”
        </p>
        </motion.div>
      </motion.div> 
  </section>
);

export default Members;