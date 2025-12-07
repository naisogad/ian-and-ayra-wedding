import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

const CoupleM = () => {

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
      id='coupleM' className='min-h-[1px] pt-[4em] pb-[6em] relative flex flex-wrap box-border mt-[8em] z-0 lg:hidden'
    >
        {/* TITLE */}
        <motion.div 
          variants={slideUp}
          className='absolute z-0 box-border block'
        >
            <h2 className='-rotate-90 text-moss relative whitespace-nowrap text-ellipsis z-0 top-[4em] md:top-[4em] left-[-1.2em] md:left-[-1em] text-[2.4em] md:text-[4.2em] leading-[1]'>The Couple</h2>
        </motion.div>
        {/* FLOWER */}
        <motion.div 
          variants={slideRight}
          className='w-[9rem] md:w-[14rem] h-[8rem] md:h-[13rem] top-[-1em] left-[1.5em] md:left-[5em] rotate-275 absolute z-1 pointer-events-none box-border block'
        >
            <Image 
                src={'/flowers/floater_2.png'}
                alt=''
                fill
                className='object-cover'
            />
        </motion.div>
        {/* IMAGES CONTAINER */}
        <div className='z-0 ml-auto grow-0 shrink-0 basis-[70%] max-w-[70%] min-h-[1px] box-border block'>
          <div className='justify-end flex flex-wrap box-border'>
            {/* IMAGE COLUMN */}
            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] box-border block'>
              <div className='flex flex-wrap box-border'>
                {/* IMAGE 1 */}
                <motion.div 
                  variants={{ ...slideRight, visible: { ...slideRight.visible, transition: { duration: 1.3 } } }}
                  className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[12em] md:min-h-[16em] pl-[1em] pr-[1em] box-border block'
                >
                  <Image 
                    src={'/pictures/photo-3.jpg'}
                    alt=''
                    fill
                    className='object-cover md:object-[0%_0%]'
                  />
                </motion.div>
                {/* IMAGE 2 */}
                <motion.div 
                  variants={{ ...slideRight, visible: { ...slideRight.visible, transition: { duration: 1.6 } } }}
                  className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[12em] md:min-h-[16em] pl-[1em] pr-[1em] box-border block'
                >
                  <Image 
                    src={'/pictures/photo-4.jpg'}
                    alt=''
                    fill
                    className='object-cover'
                  />
                </motion.div>
                {/* IMAGE 3 */}
                <motion.div 
                  variants={{ ...slideRight, visible: { ...slideRight.visible, transition: { duration: 1.9 } } }}
                  className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[12em] md:min-h-[16em] pl-[1em] pr-[1em] box-border block'
                >
                  <Image 
                    src={'/pictures/photo-5.jpg'}
                    alt=''
                    fill
                    className='object-cover md:object-[0%_10%]'
                  />
                </motion.div>
                {/* IMAGE 4 */}
                <motion.div 
                  variants={{ ...slideRight, visible: { ...slideRight.visible, transition: { duration: 2.2 } } }}
                  className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[12em] md:min-h-[16em] pl-[1em] pr-[1em] box-border block'
                >
                  <Image 
                    src={'/pictures/photo-6.jpg'}
                    alt=''
                    fill
                    className='object-cover md:object-[0%_0%]'
                  />
                </motion.div>
              </div>
            </div>
            {/* CONTENT COLUMN */}
            <div className='z-0 ml-auto grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-full min-h-[1px] box-border block'>
                {/* MESSAGE */}
                <div className='justify-end flex flex-wrap box-border'>
                    <motion.div 
                      variants={slideRight}
                      className='ml-auto grow-0 shrink-0 basis-[100%] max-w-[100%] pl-[1em] pr-[1em] box-border block bg-amber-50'
                    >
                        <div className='text-[0.9em] md:text-[1.125em] leading-[1.5] text-moss box-border block'>
                            <p className='mt-[0.5em] mb-[1em] break-normal overflow-hidden relative z-0 text-moss text-left box-border block'>By God's loving design, we have been brought together, each reflecting His grace in unique ways. <br /> </p>
                            <p className='mt-[0.5em] mb-[1em] break-normal overflow-hidden relative z-0 text-moss text-left box-border block'>As we step into the sacred covenant of marriage, our hearts overflow with gratitude to God for guiding our paths and weaving our beautiful story. We give Him all the glory for the love we share and the life we are building together.</p>
                            <p className='mt-[0.5em] whitespace-normal text-clip break-words relative z-2 text-left mb-[1em] box-border block font-semibold'>- Ian & Ayra</p>
                        </div>
                    </motion.div>
                </div>
            </div>
          </div>
        </div>
    </motion.section>
  )
}

export default CoupleM