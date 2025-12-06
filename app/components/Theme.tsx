import React from 'react'
import Image from 'next/image'
import { motion, Variants } from "framer-motion";

const Theme = () => {

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
    <section className="hidden lg:flex relative flex-wrap justify-center text-moss mt-[10vw] mb-[10vw]">
      
      {/* MAIN CONTAINER */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grow-0 shrink-0 basis-full max-w-full relative w-full min-h-[1px]"
      >

        {/* FLOWER DECOR */}
        <motion.div
            variants={slideLeft}
            id="theme"
            className="w-[17vw] h-[15vw] absolute left-[8vw] top-[0vw] -rotate-30 z-1 "
        >
            <Image 
                src="/flowers/floater_5.png"
                alt=""
                fill
                className="object-cover pointer-events-none scale-x-[-1]"
            />
        </motion.div>

        {/* INNER WRAPPER */}
        <div className="flex flex-wrap justify-around ">

          {/* LEFT SIDE — THEME LABEL */}
            <motion.div 
                variants={slideUp}
                className="basis-[33%] max-w-[33%] relative px-4"
            >
                <h2 className="relative w-[45vw] top-[33vw] left-[-10vw] text-[5vw] z-0 leading-[1.1] text-right -rotate-90">
                Wedding Attire
                </h2>
            </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <div className="basis-[66%] max-w-[66%] relative rounded-lg">

            {/* INNER CONTENT */}
            <div className="w-full min-h-[1px]">

                {/* TITLE */}
                <motion.div 
                    variants={slideRight}
                >
                    <h3 className="text-moss text-[2.5vw] leading-[1.2] text-center">
                        Dress Code
                    </h3>
                </motion.div>

                {/* IMAGE */}
                <motion.div 
                    variants={slideRight}
                    className="w-[90%] h-[25vw] relative m-[2.5vw] pointer-events-none"
                >
                    <Image 
                        src="/pictures/dc-1.png"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* DRESS CODE DESCRIPTION */}
                <motion.div 
                    variants={slideRight}
                    className="bg-amber-50 py-[1vw] mt-[3.5vw] mb-[1vw]"
                >
                
                    <motion.div 
                        variants={slideRight}
                        className="px-[1vw] mb-[1vw]"
                    >
                        <p className="text-moss text-[1vw]">
                            We kindly ask our guests to dress in semi-formal or smart casual attire for our special day.
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={slideRight}
                        className="px-[1vw] mb-[1vw]"
                    >
                        <p className="text-moss text-[1vw]">
                            <span className="font-semibold">For the Ladies:</span> Feel effortlessly elegant in a flowy dress or chic jumpsuit—perfect for day-to-night celebration vibes. Pair with comfy heels or flats and your prettiest smile. ✨
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={slideRight}
                        className="px-[1vw]"
                    >
                        <p className="text-moss text-[1vw]">
                            <span className="font-semibold">For the Gentlemen:</span> Aim for a clean and classic look — something comfortable, coordinated, and event-appropriate. Whether it’s a dress shirt, polo, or simple blazer with khakis or slacks, just come looking your best. 👔
                        </p>
                    </motion.div>

                </motion.div>

                {/* COLOR MOTIF TITLE */}
                <motion.div 
                    variants={slideRight}
                    className="px-[1vw]"
                >
                    <h3 className="text-moss text-[2.5vw] leading-[3] text-center">
                        Color Motif
                    </h3>
                </motion.div>

                {/* DETAIL TEXT */}
                <motion.div 
                    variants={slideRight}
                    className="px-[1vw] mt-[2vw] py-[1vw] bg-amber-50 mb-[1vw]"
                >
                    <p className="text-moss text-[1vw]">
                        Our wedding will feature these elegant colors. We kindly ask that you skip the color black. Have fun mixing and matching the colors from our palette for your look! <br /><br />
                        Lastly, guests—wear your best accessories, your smiles, and lively personalities.
                    </p>
                </motion.div>

                {/* COLOR PALETTE */}
                <motion.div 
                    variants={slideRight}
                    className="flex flex-wrap justify-evenly gap-[2vw] text-center mt-[3vw] mb-[3vw]"
                >
                    <div className="flex flex-col items-center">
                        <div className="flex">
                            <div className="bg-coffee w-[4vw] h-[12vw]"></div>
                            <div className="bg-espresso w-[4vw] h-[12vw]"></div>
                            <div className="bg-caramel w-[4vw] h-[12vw]"></div>
                            <div className="bg-hazelnut-brown w-[4vw] h-[12vw]"></div>
                            <div className="bg-nude-cola w-[4vw] h-[12vw]"></div>
                        </div>
                        <p className="text-moss text-[1vw] mt-[1vw]">Guests</p>
                    </div>
                </motion.div>
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  )
}

export default Theme
