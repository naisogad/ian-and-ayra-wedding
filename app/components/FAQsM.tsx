import React, { useState } from 'react'
import Image from 'next/image'
import DropdownButton from './small_components/DropdownButton';
import { motion, Variants } from "framer-motion";

const FAQs = () => {

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
    <section id='faqsM' className='min-h-[1px] pb-[6em] mt-[6em] relative flex flex-wrap box-border lg:hidden'>
        {/* FLOWER */}
        <div className='w-[8em] md:w-[12em] h-[6em] md:h-[10em] top-[-4em] md:top-[-6em] right-[0em] rotate-0 absolute z-1 pointer-events-none box-border block'>
            <Image 
                src={'/flowers/floater_8.png'}
                alt=''
                fill
                className='object-cover'
            />
        </div>
            <div className='box-border absolute z-0 block'>
                {/* TITLE */}
                <h2 className='text-moss -rotate-90 relative m-0 whitespace-nowrap text-ellipsis z-0 top-[4em] md:top-[2.5em] left-[-0.3em] md:left-[0em] text-[2.4em] md:text-[4.2em] leading-[1]'>FAQs</h2>
            </div>
        {/* CONTENT CONTAINER */}
        <div className='ml-auto pl-0 pr-0 z-0 grow-0 shrink-0 basis-[70%] max-w-[70%] absolute w-[100%] min-h-[1px] left-[30%] box-border block bg-amber-50'>
            {/* ROW CONTAINTER */}
            <div className='mr-0 ml-0 box-border justify-end flex flex-wrap intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
              {/* FAQs */}
              <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[1em] pt-[1em] box-border block'>
                  <div className='w-[100%] box-border block'>
                        <div className='text-left font-georgia text-moss pb-[1.5em] relative box-border'>
                            <span className='whitespace-normal inline text-ellipsis overflow-hidden'>
                                <div className="h-max-[90em] w-[100%] mb-[1em]">
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.5em] md:text-[1.8em] leading-[1.1] p-[0.6em] font-medium">Do I have a plus-one?</span>} 
                                            answer={<div className="p-[1em] bg-stain text-moss text-[0.9em] md:text-[1.125em] shadow-md rounded">Check your invite! If it says you have a plus-one, bring them along! 💕</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.5em] md:text-[1.8em] leading-[1.1] p-[0.6em] font-medium">Are children invited?</span>} 
                                            answer={<div className="p-[1em] bg-stain text-moss text-[0.9em] md:text-[1.125em] shadow-md rounded">We love your kiddos, but this one’s an adults-only party.</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.5em] md:text-[1.8em] leading-[1.1] p-[0.6em] font-medium">Can we take home leftover food?</span>} 
                                            answer={<div className="p-[1em] bg-stain text-moss text-[0.9em] md:text-[1.125em] shadow-md rounded">We appreciate your thoughtfulness, but we kindly ask that all meals and desserts be enjoyed during the celebration only. Our caterers will make sure everyone is well served and satisfied — so no one goes home hungry! 💕</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.5em] md:text-[1.8em] leading-[1.1] p-[0.6em] font-medium">Can I share photos or videos from the wedding on social media?</span>} 
                                            answer={<div className="p-[1em] bg-stain text-moss text-[0.9em] md:text-[1.125em] shadow-md rounded">Absolutely! We’d love for you to capture and share the joy. Please feel free to post photos and tag us using our official hashtag: # 🌿Just remember to stay present and enjoy the moments with us, too!</div>} 
                                            />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.5em] md:text-[1.8em] leading-[1.1] p-[0.6em] font-medium">How can we help the couple have the best time during their wedding?</span>} 
                                            answer={<div className="p-[1em] bg-stain text-moss text-[0.9em] md:text-[1.125em] shadow-md rounded">Your presence, prayers, and genuine joy mean so much to us. Celebrate, dance, and enjoy the moment with us! The best gift you can give is your love, smiles, and participation in the memories we’re creating together. 💍</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.5em] md:text-[1.8em] leading-[1.1] p-[0.6em] font-medium">Can I announce my proposal or pregnancy at your wedding?</span>} 
                                            answer={<div className="p-[1em] bg-stain text-moss text-[0.9em] md:text-[1.125em] shadow-md rounded">First of all, congratulations — we’re truly happy for you! However, we hope you understand that this day is a sacred and once-in-a-lifetime celebration focused on the covenant God is writing in our lives. We’d love for you to share your wonderful news on another special day that’s all yours! 💐</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.5em] md:text-[1.8em] leading-[1.1] p-[0.6em] font-medium">When do I need to RSVP by?</span>} 
                                            answer={<div className="p-[1em] bg-stain text-moss text-[0.9em] md:text-[1.125em] shadow-md rounded">Please RSVP by November 11, 2025 so we can save you a seat (and a plate!).</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.5em] md:text-[1.8em] leading-[1.1] p-[0.6em] font-medium">What if I can no longer attend after I've RSVP'd yes?</span>} 
                                            answer={<div className="p-[1em] bg-stain text-moss text-[0.9em] md:text-[1.125em] shadow-md rounded">No worries—just let us know ASAP so we can adjust things.</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.5em] md:text-[1.8em] leading-[1.1] p-[0.6em] font-medium">What time should I arrive?</span>} 
                                            answer={<div className="p-[1em] bg-stain text-moss text-[0.9em] md:text-[1.125em] shadow-md rounded">Come by 3:30 PM to get comfy before the ceremony starts at 4:00 PM sharp!</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.5em] md:text-[1.8em] leading-[1.1] p-[0.6em] font-medium">Where are the ceremony and reception located?</span>} 
                                            answer={<div className="p-[1em] bg-stain text-moss text-[0.9em] md:text-[1.125em] shadow-md rounded">All in one place! You can find the full details in our Schedule section.</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.5em] md:text-[1.8em] leading-[1.1] p-[0.6em] font-medium">Can I take photos during the ceremony or reception?</span>} 
                                            answer={<div className="p-[1em] bg-stain text-moss text-[0.9em] md:text-[1.125em] shadow-md rounded">We’re keeping the ceremony unplugged—just enjoy the moment with us! But at the reception? Snap away and have fun! 📸✨</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.5em] md:text-[1.8em] leading-[1.1] p-[0.6em] font-medium">Do I need to bring a gift?</span>} 
                                            answer={<div className="p-[1em] bg-stain text-moss text-[0.9em] md:text-[1.125em] shadow-md rounded">Your presence is the best gift! But if you’d like to give, check our Gifting Guide section for details. 🎁</div>} 
                                        />
                                    </motion.div>
                                </div>
                            </span>               
                        </div>
                  </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default FAQs