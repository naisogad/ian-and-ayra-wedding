"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const Header = () => {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const slideLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  const slideRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="home" className="hidden lg:block pt-[10vw] pb-[10vw] relative justify-center flex-wrap">
      <motion.div className="grow-0 shrink-0 basis-full max-w-full relative w-full min-h-[1px] pr-[1vw] pl-[1vw] block"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="h-full justify-start flex flex-wrap">
          <div className="grow-0 shrink-0 max-w-full relative w-full min-h-[1px] pr-[1vw] pl-[1vw] box-border">

            {/* IMAGE ROW 1 */}
            <div className="mb-[2rem] min-h-[16rem] flex flex-wrap">
              <div className="grow-0 shrink-0 basis-[33%] max-w-[33%] relative w-full min-h-[1px] pr-[1vw] pl-[1vw] block"></div>

              <motion.div variants={slideLeft} className="grow-0 shrink-0 basis-[58%] max-w-[58%] relative w-full min-h-[25vw] pr-[1vw] pl-[1vw] box-border">
                <Image alt="" src={"/pictures/photo-2.jpg"} fill className="object-cover object-[0%_50%]" />
              </motion.div>

              <motion.div variants={slideUp} className="w-[15vw] h-[18vw] top-[20vw] right-[0vw] absolute z-1 box-border">
                <Image alt="" src={"/flowers/floater_1.png"} fill className="object-cover" />
              </motion.div>
            </div>

            <motion.div variants={slideRight} className="absolute z-1 top-[11vw] flex flex-wrap box-border">
              <h1 className="text-moss text-[5vw] drop-shadow-[3px_2px_rgba(255,255,255)]">
                Ian <a className="font-greatVibesR">&</a> Ayra
              </h1>
            </motion.div>

            {/* IMAGE ROW 2 */}
            <div className="flex flex-wrap box-border">
              <motion.div variants={slideUp} className="grow-0 shrink-0 basis-[16%] max-w-[16%] relative w-full min-h-[18vw] box-border">
                <p className="text-moss w-[25vw] h-[8vw] -rotate-90 absolute top-[0vw] left-[0vw] text-[1.6vw] leading-[1.7]">
                  November 18, 2025
                </p>
              </motion.div>

              <motion.div variants={slideLeft} className="shrink-0 basis-[50%] max-w-[50%] relative w-full min-h-[1px] pr-[1vw] pl-[1vw] box-border">
                <Image alt="" src={"/pictures/photo-1.jpg"} fill className="object-cover" />
              </motion.div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Header;
