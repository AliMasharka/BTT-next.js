'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import {TitleText} from '../components';

const Members = () => (
  <section className={`${styles.paddings} bg-primary-black`}>
   <TitleText
          title={<>Takım Üyelerimiz ve<br className="md:block hidden" /> Otobiyografileri </>}
          textStyles="text-center"
        />

        <div className='h-[100px]'></div>

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
        <img src="/Metehan-Ertan.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-light sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
            Metehan Ertan
          </h4>
          </div>
          <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Takım Kaptanı
          </p>
        <p className="mt-[24px] font-light sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
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
    
      <div className='h-[100px]'></div>

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
        <img src="/Ömer-Cirbe.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-light sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
            Ömer Cirbe
          </h4>
          </div>
          <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Mekanik & PR
          </p>
        <p className="mt-[24px] font-light sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
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

      <div className='h-[100px]'></div>

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
        <img src="/EbrarNur.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-light sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
            Ebrar Nur Memiş
          </h4>
          </div>
          <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Mekanik
          </p>
        <p className="mt-[24px] font-light sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
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

      <div className='h-[100px]'></div>

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
        <img src="/nafi-.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-light sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
            Nafi Subaşı
          </h4>
          </div>
          <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            PR Captain
          </p>
        <p className="mt-[24px] font-light sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
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

      <div className='h-[100px]'></div>

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
        <img src="/.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-light sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
            Ali Mcharka
          </h4>
          </div>
          <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Web Developer
          </p>
        <p className="mt-[24px] font-light sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
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

      <div className='h-[100px]'></div>

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
        <img src="/biyo1.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-light sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
            Semanur Salih
          </h4>
          </div>
          <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            PR & Mekanik
          </p>
        <p className="mt-[24px] font-light sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        Benim adim Semanur Salih. 11. sınıf sayısal bölüm öğrencisiyim ve Başakşehir Teknoloji Takımı'nda yer alıyorum. Hem Java hem de C# gibi programlama dillerini öğrenmek benim için heyecan verici bir deneyim oldu. Aynı zamanda takımda mekanik ve PR alanlarındayım. Bu alanlara da ilgi duyuyorum ve bunlar üzerinde çalışıyorum. Farklı alanlara olan bu ilgim, beni daha özgün bir birey olmama yardımcı oluyor. Gelecekte kariyerimde başarılı olmak için azimle çalışmaya devam ediyorum.
        </p>
        </motion.div>
      </motion.div>
      
      <div className='h-[100px]'></div>

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
        <img src="/biyo4.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-light sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
            Berresu Deniz
          </h4>
          </div>
          <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            PR & Yazılım
          </p>
        <p className="mt-[24px] font-light sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
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

      <div className='h-[100px]'></div>

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
        <img src="/Göktürk-Özen.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-light sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
            Göktürk Özen
          </h4>
          </div>
          <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Elektrik & Mekanik
          </p>
        <p className="mt-[24px] font-light sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
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
      
      <div className='h-[100px]'></div>

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
        <img src="/Mert-Can-Büykbaş.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-light sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
            Mert can Büyükbaş
          </h4>
          </div>
          <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Mekanik Kaptanı
          </p>
        <p className="mt-[24px] font-light sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        Araştırmacı sürekli yeni fikirler üreten meraklı bir kaşif.. <br /> Kendimi bu kısa cümle ile tanıtıyorum herkese iyi günler dilerim...
        </p>
        </motion.div>
      </motion.div>
     
      <div className='h-[100px]'></div>


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
        <img src="/Yasin-Doğukan-Bayır.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-light sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
            Yasin Doğukan Bayır
          </h4>
          </div>
          <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Genç Mentör
          </p>
        <p className="mt-[24px] font-light sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
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

      <div className='h-[100px]'></div>

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
        <img src="/Enes-Akıncı.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-light sm:text-[32px] text-[28px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
          Enes Akıncı
          </h4>
          </div>
          <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Mekanik & Elektronik Kaptanı
          </p>
        <p className="mt-[24px] font-light sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        Merhaba ben Enes Akıncı 2008 yılında İstanbul'da doğdum ve hala da burada yaşıyorum. 10. Sınıf meslek lisesinde elektrik-elektronik bölümünde öğrencilik yapıyorum. Takım içersinde de Elektronik kaptanlığı yapıyorum. Geçmişte ilgi alanım olan drone eğitimi ve havacılık la ilgili bir çok eğitim aldım ve havacılık konusunda kariyer yapmayı planlıyorum.
        </p>
        </motion.div>
      </motion.div>

      <div className='h-[100px]'></div>

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
        <img src="/.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-light sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
          Salih Tavaş
          </h4>
          </div>
          <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            PR
          </p>
        <p className="mt-[24px] font-light sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        Merhaba, Ben Salih Tavaş. 2006 yılında İstanbul'da doğdum. Eğitim hayatıma İstanbul'da devam ettim ve şu anda lise öğrencisiyim. Public Relations alanına olan ilgimle öne çıkıyor ve bu alanda çalışmalar yapmaktan keyif alıyorum. Geçmişte, Teknofest Roket Yarışması ve BLL Girişimcilik Günü gibi etkinliklerde yarışmalara katıldım ve deneyimler kazandım. Hedefim, ileride bu alanda kariyer yapmak ve topluma faydalı olmak.
        </p>
        </motion.div>
      </motion.div>

      <div className='h-[100px]'></div>

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
        <img src="/Abdurrahman-Tür.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-light sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
          Abdurrahman Tür
          </h4>
          </div>
          <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Driver & Mekanik
          </p>
        <p className="mt-[24px] font-light sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        Merhaba, Ben abdurrahman tür küçüklüğümden beri teknoloji ye ve robotlara hayranım  bu özelliğim ben büyüdükçe arttı ve bana farklı kapılar açtı şimdilerde her kapıyı tek tek açıp önüme çıkan herşeyi öğrenmeye çalışıyorum kendimden biraz bahsetmem gerekirse yardım sever, lider ruhlu ve disiplinli beni tanımlayan 3 kelime olucaktır hobilerimden piyano çalmak ve profosyonel olarak oyun oynamak sevdiğim etkinlikler arasındadır. Olmazsa olmazım ise yağmur,  yağmurun her türlüsünü severim fakat en sevdiğim şey gece yağmurunda koşu yapmaktır.
        </p>
        </motion.div>
      </motion.div>

      <div className='h-[100px]'></div>

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
        <img src="/.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-light sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
          Sena Alakaş
          </h4>
          </div>
          <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Mekanik & PR
          </p>
        <p className="mt-[24px] font-light sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        Merhaba, ben Sena Alakaş. 2008 yılında İstanbul'da doğdum. Şehit Yüzbaşı Yusuf Kenan MTAL'de 10. sınıf Yazılım Geliştirme öğrencisiyim. FRC'de daha önce 9264 takımında safety kaptanlığı yaptım ve 2023 yılında Türkiye şampiyonu olduk. 8084 takımında da 9 ay takım kaptanlığı yaptım. FRC'de birçok takıma PR alanında destek oluyorum. 2024 Off Seasonlarından itibaren  yarışması için Gençlik ve Spor Bakanlığına bir FRC takımı açtım. Kendimi geliştirmeyi ve çevreme yararlı bir birey olmayı seviyorum.
        </p>
        </motion.div>
      </motion.div>

      <div className='h-[100px]'></div>

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
        <img src="/zeynep-tanrıverdi.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-light sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
          Zeynep Tanrıverdi
          </h4>
          </div>
          <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Mekanik & PR
          </p>
        <p className="mt-[24px] font-light sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
       ZZZZZZZZZZZZZZZZZZZZZZZ
        </p>
        </motion.div>
      </motion.div>

      <div className='h-[100px]'></div>

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
        <img src="/biyo2.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-light sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
          Feyza Bayar
          </h4>
          </div>
          <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Elektronik & PR
          </p>
        <p className="mt-[24px] font-light sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        Merhaba, ben Sena Alakaş. 2008 yılında İstanbul'da doğdum. Şehit Yüzbaşı Yusuf Kenan MTAL'de 10. sınıf Yazılım Geliştirme öğrencisiyim. FRC'de daha önce 9264 takımında safety kaptanlığı yaptım ve 2023 yılında Türkiye şampiyonu olduk. 8084 takımında da 9 ay takım kaptanlığı yaptım. FRC'de birçok takıma PR alanında destek oluyorum. 2024 Off Seasonlarından itibaren  yarışması için Gençlik ve Spor Bakanlığına bir FRC takımı açtım. Kendimi geliştirmeyi ve çevreme yararlı bir birey olmayı seviyorum.
        </p>
        </motion.div>
      </motion.div>

      <div className='h-[100px]'></div>

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
        <img src="/biyo5.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 justify-center items-center"
      >
        <div>
          <h4 className="font-light sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] mt-10 text-white">
          Muhammed Talha Kaplan
          </h4>
          </div>
          <p className="mt-[8px] font-light sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Elektronik & PR
          </p>
        <p className="mt-[24px] font-light sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        Adım Muhammed Talha Kaplan 15 yaşındayım. 10.sınıfa gidiyorum. Yazılım ve Mekanik bölümündeyim Yazılım konusunda kendimi her zaman geliştirmeye çalışıyor ve takım arkadaşlarımla iyi vakitler geçiriyorum. Satranç oynamayı severim Başaksehir teknoloji takımında ilk yılım ve çok heyecanlıyım.
        </p>
        </motion.div>
      </motion.div>
      
  </section>
);

export default Members;


// members section copy paste


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
        <img src="/Zeynep-Tanrıverdi.jpg"
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