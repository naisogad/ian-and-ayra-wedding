import React from 'react'
import { motion } from "framer-motion";

const AboutM = () => {

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
    <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='flex min-h-[1px] pt-[6em] pb-[6em] relative flex-wrap box-border lg:hidden'
    >
        {/* WELCOME */}
        <motion.div 
            variants={slideUp}
            className='absolute z-1 box-border block'
        >
            <h2 className='text-moss relative -rotate-90 whitespace-nowrap z-2 text-ellipsis top-[3em] md:top-[2em] left-[-0.5em] md:left-[-0.5em] text-[2.4em] md:text-[4.2em] leading-[1] text-right box-border block'>Welcome</h2>
        </motion.div>
        {/* CONTAINER */}
        <div className='z-1 ml-auto grow-0 shrink-0 basis-[70%] max-w-[70%] relative w-full min-h-[1px] box-border block'>
            {/* MESSAGE */}
            <div className='justify-end flex flex-wrap box-border'>
                <motion.div 
                    variants={slideRight}
                    className='ml-auto grow-0 shrink-0 basis-[100%] max-w-[100%] pl-[1em] pr-[1em] box-border block bg-amber-50'
                >
                    <div className='text-[0.9em] md:text-[1.125em] leading-[1.5] text-moss box-border block'>
                        <p className='mt-[0.5em] break-words relative z-2 text-left mb-[1em] block'>Hello everyone! <br /> </p>
                        <p className='mt-[0.5em] break-words relative z-2 text-left mb-[1em] block'>We’re so excited to be getting married and to share this special journey with our favorite people—you! Your presence is a gift from God that we deeply treasure.<br /> </p>
                        <p className='mt-[0.5em] break-words relative z-2 text-left mb-[1em] block'>This site has all the wedding details and helpful info you’ll need.<br /> </p>
                        <p className='mt-[0.5em] break-words relative z-2 text-left mb-[1em] block'>Thank you for your love and support—we can’t wait to celebrate with you on our big day! 💍✨</p>
                        <p className='mt-[0.5em] whitespace-normal text-clip break-words relative z-2 text-left mb-[1em] box-border block font-semibold'>- Ian & Ayra</p>
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.section>
  )
}

export default AboutM