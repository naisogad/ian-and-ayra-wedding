"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const About = () => {
  // TypeScript-safe variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  const slideDown: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  const slideLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  const slideRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="hidden lg:block min-h-[1px] pt-[10vw] pb-[10vw] justify-center flex-wrap box-border">
      <motion.div
        className="grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-full min-h-[1px] pl-[1vw] pr-[1vw] box-border block"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="justify-between flex flex-wrap box-border">

          {/* WELCOME TITLE */}
          <motion.div
            variants={slideUp}
            className="h-auto grow-0 shrink-0 basis-[100%] max-w-[25%] relative w-full min-h-[1px] pl-[1vw] pr-[1vw] box-border block"
          >
            <div className="-rotate-90 absolute top-[4.5vw] left-[5vw] box-border block">
              <h2 className="text-[5vw] relative z-2 text-moss text-right">Welcome</h2>
            </div>
          </motion.div>

          {/* MESSAGE */}
          <motion.div
            variants={slideLeft}
            className="grow-0 shrink-0 basis-[66.66%] max-w-[66.66%] relative w-full min-h-[1px] p-[1.5vw] box-border block bg-amber-50"
          >
            <motion.p
              variants={slideLeft}
              className="text-moss text-[1vw] leading-[1.4] mb-[1vw]"
            >
              Hello everyone! <br /><br /> We’re so excited to be getting married and to share this special journey with our favorite people—you! Your presence is a gift from God that we deeply treasure.<br /><br />This site has all the wedding details and helpful info you’ll need.<br /><br />Thank you for your love and support—we can’t wait to celebrate with you on our big day! 💍✨
            </motion.p>
            <motion.p
              variants={slideLeft}
              className="text-moss text-[1vw] leading-[1.7] mt-0 font-semibold"
            >
              - Ian & Ayra
            </motion.p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;
