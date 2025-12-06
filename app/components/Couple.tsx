"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const Couple = () => {
  // Parent stagger container
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // Slide variants
  const slideUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  const slideRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  const slideLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="couple"
      className="hidden lg:flex pt-[10vw] pb-[10vw] relative justify-center flex-wrap box-border"
    >
      <motion.div
        className="grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1vw] pl-[1vw] box-border block"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="justify-center flex flex-wrap box-border">
          {/* FLOWER 1 */}
          <motion.div
            variants={slideRight}
            className="top-[-10vw] left-[-5vw] w-[20vw] h-[15vw] absolute z-1 block"
          >
            <Image
              src={"/flowers/floater_2.png"}
              alt=""
              fill
              className="object-cover"
            />
          </motion.div>

          {/* IMAGES ROW 1 */}
          <div className="grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1vw] pl-[1vw] box-border block">
            <div className="mr-0 ml-0 flex flex-wrap box-border justify-evenly">
              <motion.div variants={slideUp} className="grow-0 shrink-0 basis-[32%] max-w-[32%] relative w-[100%] min-h-[25vw] box-border block">
                <Image
                  alt=""
                  src={"/pictures/photo-3.jpg"}
                  fill
                  className="object-cover object-[42%_0%]"
                />
              </motion.div>
              <motion.div variants={slideUp} className="grow-0 shrink-0 basis-[32%] max-w-[32%] relative w-[100%] min-h-[25vw] box-border block">
                <Image
                  alt=""
                  src={"/pictures/photo-4.jpg"}
                  fill
                  className="object-cover object-[41%_0%]"
                />
              </motion.div>
              <motion.div variants={slideUp} className="grow-0 shrink-0 basis-[32%] max-w-[32%] relative w-[100%] min-h-[25vw] box-border block">
                <Image
                  alt=""
                  src={"/pictures/prenup/I + A-48.jpg"}
                  fill
                  className="object-cover object-[100%_0%]"
                />
              </motion.div>
            </div>
          </div>

          {/* TEXT / ROW 2 */}
          <div className="grow-0 shrink-0 basis-[95%] max-w-[95%] relative w-[100%] min-h-[1px] ml-[2vw] mr-[2vw] box-border block">
            <div className="justify-between flex flex-wrap box-border">
              {/* CONTENT */}
              <motion.div variants={slideRight} className="grow-0 shrink-0 basis-[50%] max-w-[50%] relative w-[100%] min-h-[1px] pr-[1vw] pl-[1vw] mt-[2vw] box-border block">
                <p className="bg-amber-50 text-moss leading-[1.4] text-[1vw] p-4 box-border block">
                  By God's loving design, we have been brought together, each reflecting His grace in unique ways. <br /> <br />
                  As we step into the sacred covenant of marriage, our hearts overflow with gratitude to God for guiding our paths and weaving our beautiful story. We give Him all the glory for the love we share and the life we are building together.
                </p>
                <p className="bg-amber-50 text-moss leading-[1.7] text-[1vw] font-semibold p-4 box-border block">
                  - Ian & Ayra
                </p>
              </motion.div>
              {/* TITLE */}
              <motion.div variants={slideLeft} className="z-1 grow-0 shrink-0 basis-[50%] max-w-[50%] relative w-[100%] min-h-[1px] box-border block">
                <h2 className="text-moss mt-[2vw] text-[5vw] leading-[2] text-center box-border block">
                  &nbsp;The Couple
                </h2>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Couple;
