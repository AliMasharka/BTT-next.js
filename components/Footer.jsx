'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-light md:text-[64px] text-[44px] text-white">
          Ekibimize Katıl
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
        
          <img
            src="/owlbtt.svg"
            alt="headset"
            className="w-[35px] h-[35px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
          </span>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScoe6jTnH1Ef2VXTb4VS5G7tv3xNsuDWEL3HhlBiKmp97R4UQ/viewform" className='font-normal text-[16px] text-white'>Ekibe Katıl </a>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extralight text-[24px] text-white">
            BTT
          </h4>
          <p className="font-light text-[14px] text-white opacity-50">
            Copyright © 2024 - 2025 BTT. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;