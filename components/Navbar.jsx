import React from "react";
import { NAV_LINKS } from "../constants";
import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

// useMotionValueEvent(scrollY , (latest)  => {
//   const navbar = document.querySelector("nav.navbar");
//   const body = document.querySelector("body");
//   console.log(latest);

//   if (latest >= 100) {
//     navbar?.classList.add("navbar-active");
//     body?.classList.add("md:mt-[88px]");
//   } else {
//     navbar?.classList.remove("navbar-active");
//     body?.classList.remove("md:mt-[88px]");
//   }
// });

const Navbar = () => {
  return (

    // <motion.div
    // variants={fadeIn('up', 'tween', 0.2, 1)}
    // className="border-radius:25px;
    // margin:5px;
    // padding:25px"
    // >
    <nav className="border-2 border-primary-200 flexBetween max-container padding-container relative z-30 py-5">
      <Link href="about">
        </Link>

        <ul className="hidden h-full gap-12 lg:flex items-center justify-center">
           {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
           </Link> 
           ))} 
        </ul>

        {/* <div className="lg:flexCenter hidden">
          <Button
          className={"flexCenter gap-3 rounded-full border"}
          icon="/headset.svg"/>LOG IN
        </div> */}

           <Image 
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        />
        
    </nav>
   
  )
}

export default Navbar;