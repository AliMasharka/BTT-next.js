'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Takımımız Hakkında" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] text-inline font-normal sm:text-[30px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">BTT</span> Takımı {' '} FIRST Robotics Competition Programı kapsamında lise öğrencilerinin bilimi, mühendisliği ve robotik alanını 
sevdirmek amacıyla <span className="font-extrabold text-white">Ümit Altındiş </span>  mentörlüğünde öğrencilerle birlikte <span className="font-extrabold text-white">2022 </span> yılında kurulmuş bir robot 
takımıdır. Başakşehir Teknoloji Takımı, 2022'dan bu yana yarışmalara katılmakta ve her yarışmada üstün bir 
başarı göstererek kazanmış olduğu ödüllerle diğer robotik takımlarına ilham olmaya devam etmektedir. 
Başakşehir Teknoloji Takımı kuruluşundan bu yana Elektronik, Mekanik, Tasarım, İnsan Kaynakları ve Yazılım 
konusunda da kendisini geliştirerek <span className="font-extrabold text-white">vaatleriyle değil yaptıklarıyla</span> ön plana çıkmaktadır. Gençler gibi 
düşünmeyi, gençlerle birlikte hareket etmeyi ve gençlere öncü olmaya özen gösteren bir ekiptir. Takımımız, 
teknoloji ve bilim ışığında öğrencilerin kariyer başarılarına katkıda bulunmayı amaçlamaktadır. 
        
      </motion.p>

      {/* <span className="font-extrabold text-white">
          madness of the mcharka
        </span> */}

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;