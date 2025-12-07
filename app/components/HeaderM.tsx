"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeaderM = () => {
  // Animation variants
  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  const slideDown = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
    };

  return (
    <section
      id="homeM"
      className="pb-[15em] pt-[6em] md:pt-[4em] relative justify-center flex flex-wrap box-border lg:hidden"
    >
      <div className="h-auto z-1 relative w-screen box-border block">
        {/* HEADER 1 - IMAGE 1 */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          className="relative flex flex-wrap justify-self-end mb-[2em] w-[90%] box-border h-auto min-h-[20em] md:min-h-[25em]"
        >
          <Image
            alt=""
            src={"/pictures/photo-2.jpg"}
            fill
            className="object-cover object-[0%_60%] md:object-[0%_50%]"
          />
        </motion.div>

        {/* DATE */}
        <motion.div
          variants={{ ...slideUp, visible: { ...slideUp.visible, transition: { duration: 2 } } }}
          initial="hidden"
          animate="visible"
          className="relative w-screen mt-[5em] box-border block break-words text-right"
        >
          <p className="top-[3em] left-[-2.5em] block text-[1.4em] text-moss transform -rotate-90 absolute z-2 mb-[1em] break-words text-right md:left-[-0.5em] md:text-[1.8em] md:top-[3.4em]">
            November 18, 2025
          </p>
        </motion.div>

        {/* IMAGE 2 */}
        <motion.div
          variants={{ ...slideRight, visible: { ...slideRight.visible, transition: { duration: 2 } } }}
          initial="hidden"
          animate="visible"
          className="w-[80%] max-w-[80%] relative ml-auto box-border block min-h-[30%] align-middle md:min-h-[35%]"
        >
          <Image
            alt=""
            src={"/pictures/photo-1.jpg"}
            fill
            className="object-cover object-[0%_50%] md:object-[0%_55%]"
          />
        </motion.div>

        {/* FLOWER 1 */}
        <motion.div
          variants={{ ...slideUp, visible: { ...slideUp.visible, transition: { duration: 2.2 } } }}
          initial="hidden"
          animate="visible"
          className="w-[8em] h-[10em] bottom-[10%] left-[60%] relative z-1 box-border md:left-[65%] md:w-[12em] md:h-[14em] "
        >
          <Image
            alt=""
            src={"/flowers/floater_1.png"}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* TITLE */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate="visible"
          className="left-[1em] absolute top-[0em] w-[100%] text-left box-border block md:left-[3em] md:top-[0em]"
        >
          <h1 className="relative z-2 mt-[6rem] min-h-[7em] drop-shadow-[3px_2px_rgba(255,255,255)] text-[3.5em] leading-[1.2] text-moss mb-[0.5rem] box-border block text-left md:text-[4.5em]">
            Ian
            <br />
            <a className="font-greatVibesR text-[4rem]">&nbsp; &</a>
            <br />
            Ayra
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default HeaderM;
