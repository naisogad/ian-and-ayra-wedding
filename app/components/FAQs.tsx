import React from 'react'
import Image from 'next/image'
import DropdownButton from './small_components/DropdownButton';
import { motion, Variants } from "framer-motion";

const FAQs = () => {

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
    <section id='faqs' className='hidden lg:flex flex-wrap min-h-[1px] pt-[10vw] pb-[10vw] relative justify-center box-border'>
        <div className='grow-0 shrink-0 basis-full min-w-full relative w-full min-h-[1px] pr-[1vw] pl-[1vw] box-border block'>
            {/* FLOWER */}
            <div className='w-[12vw] h-[19vw] top-[-12vw] right-[10vw] rotate-90 absolute box-border block z-1'>
                <Image 
                     src={'/flowers/floater_17.png'}
                     alt=''
                     fill
                     className='object-cover'
                />
            </div>
            {/* CONTENT */}
            <div className='justify-around flex flex-wrap box-border'>
                {/* LEFT CONTAINER */}
                <div className='grow-0 shrink-0 basis-[33%] min-w-[33%] relative w-full min-h-[1px] pr-[1vw] pl-[1vw] box-border block'>
                    {/* TITLE */}
                    <div className='box-border block relative'>
                        <h2 className='text-moss text-[5vw] absolute leading-[1.1] -rotate-90 top-[10vw] left-[7vw]'>FAQs</h2>
                    </div>
                </div>
                {/* RIGHT CONTAINER */}
                <div className='grow-0 shrink-0 basis-[66%] min-w-[66%] relative w-full min-h-[1px] pr-[1vw] pl-[1vw] box-border block bg-amber-50'>
                    {/* FAQs */}
                    <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[1vw] pt-[1vw] box-border block'>
                        <div className='w-[100%] box-border block'>
                            <div className='font-georgia text-moss pb-[1.5em] relative box-border'>
                                <span className='whitespace-normal inline text-ellipsis overflow-hidden'>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.4vw] leading-[1.1] p-[0.8vw] font-medium">Do I have a plus-one?</span>} 
                                            answer={<div className="p-[1vw] bg-stain text-moss text-[0.9vw] shadow-md rounded-3x1">Check your invite! If it says you have a plus-one, bring them along! 💕</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.4vw] leading-[1.1] p-[0.8vw] font-medium">Are children invited?</span>} 
                                            answer={<div className="p-[1vw] bg-stain text-moss text-[0.9vw] shadow-md rounded-3x1">We love your kiddos, but this one’s an adults-only party.</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.4vw] leading-[1.1] p-[0.8vw] font-medium">Can we take home leftover food?</span>} 
                                            answer={<div className="p-[1vw] bg-stain text-moss text-[0.9vw] shadow-md rounded-3x1">We appreciate your thoughtfulness, but we kindly ask that all meals and desserts be enjoyed during the celebration only. Our caterers will make sure everyone is well served and satisfied — so no one goes home hungry! 💕</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.4vw] leading-[1.1] p-[0.8vw] font-medium">Can I share photos or videos from the wedding on social media?</span>} 
                                            answer={<div className="p-[1vw] bg-stain text-moss text-[0.9vw] shadow-md rounded-3x1">Absolutely! We’d love for you to capture and share the joy. Please feel free to post photos and tag us using our official hashtag: # 🌿Just remember to stay present and enjoy the moments with us, too!</div>} 
                                            />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.4vw] leading-[1.1] p-[0.8vw] font-medium">How can we help the couple have the best time during their wedding?</span>} 
                                            answer={<div className="p-[1vw] bg-stain text-moss text-[0.9vw] shadow-md rounded-3x1">Your presence, prayers, and genuine joy mean so much to us. Celebrate, dance, and enjoy the moment with us! The best gift you can give is your love, smiles, and participation in the memories we’re creating together. 💍</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.4vw] leading-[1.1] p-[0.8vw] font-medium">Can I announce my proposal or pregnancy at your wedding?</span>} 
                                            answer={<div className="p-[1vw] bg-stain text-moss text-[0.9vw] shadow-md rounded-3x1">First of all, congratulations — we’re truly happy for you! However, we hope you understand that this day is a sacred and once-in-a-lifetime celebration focused on the covenant God is writing in our lives. We’d love for you to share your wonderful news on another special day that’s all yours! 💐</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.4vw] leading-[1.1] p-[0.8vw] font-medium">When do I need to RSVP by?</span>} 
                                            answer={<div className="p-[1vw] bg-stain text-moss text-[0.9vw] shadow-md rounded-3x1">Please RSVP by November 11, 2025 so we can save you a seat (and a plate!).</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.4vw] leading-[1.1] p-[0.8vw] font-medium">What if I can no longer attend after I've RSVP'd yes?</span>} 
                                            answer={<div className="p-[1vw] bg-stain text-moss text-[0.9vw] shadow-md rounded-3x1">No worries—just let us know ASAP so we can adjust things.</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.4vw] leading-[1.1] p-[0.8vw] font-medium">What time should I arrive?</span>} 
                                            answer={<div className="p-[1vw] bg-stain text-moss text-[0.9vw] shadow-md rounded-3x1">Come by 3:30 PM to get comfy before the ceremony starts at 4:00 PM sharp!</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.4vw] leading-[1.1] p-[0.8vw] font-medium">Where are the ceremony and reception located?</span>} 
                                            answer={<div className="p-[1vw] bg-stain text-moss text-[0.9vw] shadow-md rounded-3x1">All in one place! You can find the full details in our Schedule section.</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.4vw] leading-[1.1] p-[0.8vw] font-medium">Can I take photos during the ceremony or reception?</span>} 
                                            answer={<div className="p-[1vw] bg-stain text-moss text-[0.9vw] shadow-md rounded-3x1-3xl">We’re keeping the ceremony unplugged—just enjoy the moment with us! But at the reception? Snap away and have fun! 📸✨</div>} 
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={slideLeft}
                                    >
                                        <DropdownButton 
                                            question={<span className="text-[1.4vw] leading-[1.1] p-[0.8vw] font-medium">Do I need to bring a gift?</span>} 
                                            answer={<div className="p-[1vw] bg-stain text-moss text-[0.9vw] shadow-md rounded-3x1">Your presence is the best gift! But if you’d like to give, check our Gifting Guide section for details. 🎁</div>} 
                                        />
                                    </motion.div>
                                </span>               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FAQs