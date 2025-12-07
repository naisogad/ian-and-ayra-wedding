import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "framer-motion";


const AbaysM = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    
    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
        if (!toggleMenu) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = '';
        }
    }

    const [activeSection, setActiveSection] = useState('ps');

        const handleNavigation = (section) => {
        setActiveSection(section);

    };

    const [activeItem, setActiveItem] = useState('s1');
          
        const handleItem = (item) => {
        setActiveItem(item);
            
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // For smooth scrolling animation
        });
    };

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
        id='abaysM' className='flex min-h-[1px] pt-[6em] pb-[6em] relative flex-wrap box-border lg:hidden'
    >
        {/* FLOWER 1 */}
        <motion.div 
            variants={slideRight}
            className='w-[10em] md:w-[15em] h-[7em] md:h-[10em] top-[3%] md:top-[-3%] right-[0%] absolute z-1 pointer-events-none box-border block'
        >
            <Image 
                alt=''
                src={'/flowers/floater_3.png'}
                fill
                className='object-cover'
            />
        </motion.div>
        {/* TITLE */}
        <motion.div 
            variants={slideUp}
            className='absolute z-0 box-border block'
        >
            <h2 className='text-moss -rotate-90 relative whitespace-nowrap text-ellipsis z-0 pb-[0.5rem] top-[4em] left-[-0.6em] md:left-[-0.8em] text-[2.4em] md:text-[4.2em] leading-[0.9]'>Entourage</h2>
        </motion.div>
        {/* CONTENT */}
        <div id='abaysM' className='z-0 ml-auto grow-0 shrink-0 basis-[70%] max-w-[70%] relative w-[100%] min-h-[1px] box-border block'>
            <div className='justify-end flex flex-wrap box-border'>
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pt-[3em] box-border block bg-amber-50'>
                    {/* ROW */}
                    <div className='flex flex-wrap box-border'>
                        <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[1em] pr-[1em] box-border block'>
                            {/* LIST */}
                            <motion.div 
                                variants={{ ...slideRight, visible: { ...slideRight.visible, transition: { duration: 1.3 } } }}
                                className='box-border block text-right'
                            >
                                <a onClick={toggleNav} onClickCapture={() => {handleNavigation('ps'); handleItem('s1'); scrollToTop}} className='text-moss text-[1.6em] md:text-[1.9em] leading-[1] box-border hover:underline' href='#top1'>
                                    Primary Sponsors
                                    <p className='text-moss text-[0.5em] md:text-[0.6em] leading-[1.7] break-normal overflow-hidden relative z-2 mb-[2.5em] block font-medium'>+ View Details</p>
                                </a>
                            </motion.div>
                            <motion.div 
                                variants={{ ...slideRight, visible: { ...slideRight.visible, transition: { duration: 1.6 } } }}
                                className='box-border block text-right'
                            >
                                <a onClick={toggleNav} onClickCapture={() => {handleNavigation('ss'); handleItem('s2')}} className='text-moss text-[1.6em] md:text-[1.9em] leading-[1] box-border hover:underline' href='#top1'>
                                    Secondary Sponsors
                                    <p className='text-moss text-[0.5em] md:text-[0.6em] leading-[1.7] break-normal overflow-hidden relative z-2 mb-[2.5em] block font-medium'>+ View Details</p>
                                </a>
                            </motion.div>
                            <motion.div 
                                variants={{ ...slideRight, visible: { ...slideRight.visible, transition: { duration: 1.9 } } }}
                                className='box-border block text-right'
                            >
                                <a onClick={toggleNav} onClickCapture={() => {handleNavigation('bridesmaids'); handleItem('s3')}} className='text-moss text-[1.6em] md:text-[1.9em] leading-[1] box-border hover:underline' href='#top1'>
                                    Bridesmaids
                                    <p className='text-moss text-[0.5em] md:text-[0.6em] leading-[1.7] break-normal overflow-hidden relative z-2 mb-[2.5em] block font-medium'>+ View Details</p>
                                </a>
                            </motion.div>
                            <motion.div 
                                variants={{ ...slideRight, visible: { ...slideRight.visible, transition: { duration: 2.2 } } }}
                                className='box-border block text-right'
                            >
                                <a onClick={toggleNav} onClickCapture={() => {handleNavigation('groomsmen'); handleItem('s4')}} className='text-moss text-[1.6em] md:text-[1.9em] leading-[1] box-border hover:underline' href='#top1'>
                                    Groomsmen
                                    <p className='text-moss text-[0.5em] md:text-[0.6em] leading-[1.7] break-normal overflow-hidden relative z-2 mb-[2.5em] block font-medium'>+ View Details</p>
                                </a>
                            </motion.div>
                            <motion.div 
                                variants={{ ...slideRight, visible: { ...slideRight.visible, transition: { duration: 2.5 } } }}
                                className='box-border block text-right'
                            >
                                <a onClick={toggleNav} onClickCapture={() => {handleNavigation('bearers'); handleItem('s5')}} className='text-moss text-[1.6em] md:text-[1.9em] leading-[1] box-border hover:underline' href='#top1'>
                                    Bearers
                                    <p className='text-moss text-[0.5em] md:text-[0.6em] leading-[1.7] break-normal overflow-hidden relative z-2 mb-[2.5em] block font-medium'>+ View Details</p>
                                </a>
                            </motion.div>
                            <motion.div 
                                variants={{ ...slideRight, visible: { ...slideRight.visible, transition: { duration: 2.8 } } }}
                                className='box-border block text-right'
                            >
                                <a onClick={toggleNav} onClickCapture={() => {handleNavigation('parents'); handleItem('s6')}} className='text-moss text-[1.6em] md:text-[1.9em] leading-[1] box-border hover:underline' href='#top1'>
                                    Parents
                                    <p className='text-moss text-[0.5em] md:text-[0.6em] leading-[1.7] break-normal overflow-hidden relative z-2 mb-[2.5em] block font-medium'>+ View Details</p>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ABAY DETAILS */}
        <div className={`${toggleMenu? '': 'hidden'} z-4 lg:hidden size-full fixed top-0 right-0 bg-white overflow-x-hidden`}>
            {/* CLOSE BUTTON */}
            <button className='space-y-1 fixed top-[1em] right-[0.5em] z-5 lg:hidden' onClick={toggleNav}>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? 'rotate-45 translate-y-3': ''}`}></span>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? 'scale-0 opacity-0': ''}`}></span>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? '-rotate-45 -translate-y-1': ''}`}></span>
            </button>
            <div id='top1' className='relative flex flex-col bg-clip-padding box-border'>
                {/* TITLE */}
                <motion.div 
                    variants={slideRight}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className='relative z-1 h-[4.3em] flex items-center justify-between pt-[1em] pb-[1em] box-border'
                >
                    <h1 className='text-moss text-[1.8em] md:text-[2.2em] pt-[1.5em] ml-[0.5em] font-medium'>&nbsp;Wedding Entourage</h1>
                </motion.div>
                <motion.div 
                    variants={slideLeft}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className='w-[10em] h-[8em] top-[5.5em] right-[0em] rotate-30 absolute z-1 pointer-events-none box-border block'
                >
                    <Image 
                        alt=''
                        src={'/flowers/floater_3.png'}
                        fill
                        className='object-cover'
                    />
                </motion.div>
                {/* CONTENT */}
                <div className='pt-[4rem] relative grow-1 shrink-1 basis-auto p-[1em] box-border block'>
                    {/* NAV */}
                    <div className='justify-center flex flex-wrap box-border pb-[1.5em] font-georgia'>
                        <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                            <motion.div 
                                variants={{ ...slideRight, visible: { ...slideRight.visible, transition: { duration: 1.3 } } }}
                                onClick={() => handleNavigation('ps')} onClickCapture={() => handleItem('s1')} className='inline-block'
                            >
                                <a className={`${activeItem === 's1' && ('bg-shadow')} text-[1.5em] md:text-[1.7em] leading-[1.5] p-[0.1em] font-medium hover:underline`}>Principal Sponsors</a>
                                <span className=' leading-[1] text-[1.5em] font-bold'>|</span>
                            </motion.div>
                            <motion.div 
                                variants={{ ...slideRight, visible: { ...slideRight.visible, transition: { duration: 1.6 } } }}
                                onClick={() => handleNavigation('ss')} onClickCapture={() => handleItem('s2')} className='inline-block'
                            >
                                <a className={`${activeItem === 's2' && ('bg-shadow')} text-[1.5em] md:text-[1.7em] leading-[1.5] p-[0.1em] font-medium hover:underline`}>Secondary Sponsors</a>
                                <span className=' leading-[1] text-[1.5rem] font-bold'>|</span>
                            </motion.div>
                            <motion.div 
                                variants={{ ...slideRight, visible: { ...slideRight.visible, transition: { duration: 1.9 } } }}
                                onClick={() => handleNavigation('bridesmaids')} onClickCapture={() => handleItem('s3')} className='inline-block'
                            >
                                <a className={`${activeItem === 's3' && ('bg-shadow')} text-[1.5em] md:text-[1.7em] leading-[1.5] p-[0.1em] font-medium hover:underline`}>Bridesmaids</a>
                                <span className=' leading-[1] text-[1.5rem] font-bold'>|</span>
                            </motion.div>
                            <motion.div 
                                variants={{ ...slideRight, visible: { ...slideRight.visible, transition: { duration: 2.2 } } }}
                                onClick={() => handleNavigation('groomsmen')} onClickCapture={() => handleItem('s4')} className='inline-block'
                            >
                                <a className={`${activeItem === 's4' && ('bg-shadow')} text-[1.5em] md:text-[1.7em] leading-[1.5] p-[0.1em] font-medium hover:underline`}>Groomsmen</a>
                                <span className=' leading-[1] text-[1.5rem] font-bold'>|</span>
                            </motion.div>
                            <motion.div 
                                variants={{ ...slideRight, visible: { ...slideRight.visible, transition: { duration: 2.5 } } }}
                                onClick={() => handleNavigation('bearers')} onClickCapture={() => handleItem('s5')} className='inline-block'
                            >
                                <a className={`${activeItem === 's5' && ('bg-shadow')} text-[1.5em] md:text-[1.7em] leading-[1.5] p-[0.1em] font-medium hover:underline`}>Bearers</a>
                                <span className=' leading-[1] text-[1.5rem] font-bold'>|</span>
                            </motion.div>
                            <motion.div 
                                variants={{ ...slideRight, visible: { ...slideRight.visible, transition: { duration: 2.8 } } }}
                                onClick={() => handleNavigation('parents')} onClickCapture={() => handleItem('s6')} className='inline-block'>
                                <a className={`${activeItem === 's6' && ('bg-shadow')} text-[1.5em] md:text-[1.7em] leading-[1.5] p-[0.1em] font-medium hover:underline`}>Parents</a>
                                <span className=' leading-[1] text-[1.5rem] font-bold'>|</span>
                            </motion.div>
                        </div>
                    </div>
                    {/* ITEMS */}
                    {/* PRIMARY SPONSORS */}
                    {activeSection === 'ps' && (
                        <div className='justify-center flex flex-wrap box-border'>
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ty.png'}
                                    fill
                                    className='object-cover object-[100%_0%] md:object-[0%_80%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Mr. Edward Ty <br /><a className='font-greatVibesR '>&</a><br /> Mrs. Joann Ty</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/torres.png'}
                                    fill
                                    className='object-cover object-[40%_0%] md:object-[0%_30%] '
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Mr. Jerson Torres <br /><a className='font-greatVibesR '>&</a><br /> Mrs. Michelle Torres</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                            {/* ITEM 3 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/alandy-dy.png'}
                                    fill
                                    className='object-cover'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 3 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.6em] md:text-[1.9em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-pretty relative z-2'>Mr. Rondolf Alandy-dy <br /><a className='font-greatVibesR '>&</a><br /> Mrs. Marileth Alandy-dy</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                            {/* ITEM 4 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/collilap.png'}
                                    fill
                                    className='object-cover object-[44.5%_0%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 4 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Mr. Michael Colilap<br /><a className='font-greatVibesR '>&</a><br /> Mrs. Robessa Joy Colilap</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Wife and Mother</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                            {/* ITEM 5 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/camacho.jpg'}
                                    fill
                                    className='object-cover object-[63%_0%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 5 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Mr. Paul Joseph Camacho<br /><a className='font-greatVibesR '>&</a><br /> Mrs. Karen Carol Camacho</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Husband, Father, and OFW</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                            {/* ITEM 6 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/dinglasan.jpg'}
                                    fill
                                    className='object-cover object-[0%_40%] md:object-[0%_44%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 6 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Mr. Cyrus Dinglasan<br /><a className='font-greatVibesR '>&</a><br /> Mrs. Santa Teresa Dinglasan</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single and OFW</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                            {/* ITEM 7 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/mujar.png'}
                                    fill
                                    className='object-cover object-[60%_0%] md:object-[0%_35%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 7 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Mr. Joshua Mujar<br /><a className='font-greatVibesR '>&</a><br /> Mrs. Sheryl Mujar</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Husband, Father, and Senior Pastor</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                            {/* ITEM 8 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/villaverde.png'}
                                    fill
                                    className='object-cover md:object-[0%_100%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 8 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Mr. Rodil Villaverde<br /><a className='font-greatVibesR '>&</a><br /> Mrs. Evelyn Villaverde</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Wife and Mother</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                            {/* ITEM 9 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/jabrica.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_15%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 9 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Mr. Lorenzo Jabrica<br /><a className='font-greatVibesR '>&</a><br />Mrs. Gemma Jabrica</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Husband, Father, and Pastor</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                            {/* ITEM 9.5 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/jabrica-molina.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_5%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 9.5 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Mr. Bernie Jabrica<br /><a className='font-greatVibesR '>&</a><br />Mrs. Anibell Molina</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Husband, Father, and Pastor</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                            {/* ITEM 10 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/briones.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_5%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 10 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Mr. Joseph Briones<br /><a className='font-greatVibesR '>&</a><br />Mrs. Maricel Briones</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Wife, Mother, and Campus Missionary</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                            {/* ITEM 11 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/lim.png'}
                                    fill
                                    className='object-cover md:object-[0%_35%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 11 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Mr. Gerard Lim<br /><a className='font-greatVibesR '>&</a><br /> Mrs. Maureen Lim</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Husband, Father, and Campus Missionary</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                            {/* ITEM 12 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ed-driz.png'}
                                    fill
                                    className='object-cover object-[60%_0%] md:object-[0%_35%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 12 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Edizer Driz</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Wife, Mother, and Campus Missionary</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                            {/* ITEM 13 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/edna-sanchez.png'}
                                    fill
                                    className='object-cover object-[10%_0%] md:object-[0%_100%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 13 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Edna Sanchez</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Husband and Father</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                            {/* ITEM 14 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/che-hernandez.png'}
                                    fill
                                    className='object-cover object-[0%_100%] md:object-[0%_75%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 14 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Che Hernandez</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Wife and Mother</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                            {/* ITEM 15 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/melith-ballon.png'}
                                    fill
                                    className='object-cover object-[0%_100%] md:object-[0%_35%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 15 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-3 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Melith Ballon</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Husband and Father</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                        </div>  
                    )}
                    {/* SECONDARY SPONSORS */}
                    {activeSection === 'ss' && (
                        <div className='justify-center flex flex-wrap box-border'>
                            
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/mirhan.png'}
                                    fill
                                    className='object-cover object-[100%_0%] md:object-[0%_65%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px  ] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-2 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Mr. Vin Mirhan<br /><a className='font-greatVibesR '>&</a><br /> Mrs. Rachel Mirhan</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Husband and Businessman</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/mercado.png'}
                                    fill
                                    className='object-cover object-[61%_0%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-2 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Mr. MJ Mercado<br /><a className='font-greatVibesR '>&</a><br /> Mrs. Rachel Mercado</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Wife and Admin</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                        </div>
                    )}
                    {/* BRIDESMAIDS */}
                    {activeSection === 'bridesmaids' && (
                        <div className='justify-center flex flex-wrap box-border'>
                            <p className='text-moss text-[1.5em] font-medium'>Maid of Honor</p>
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/jane-j.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_25%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-3 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Jane Jabrica</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Student</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/nicole-j.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_18%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-2 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Nicole Jabrica</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Student</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            <p className='text-moss text-[1.8rem] pt-8 font-medium'>Bridesmaid</p>
                            {/* ITEM 3 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/danielle-manalo.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 3 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-3 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Danielle Manalo</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single and Ready to Mingle!</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>"Ang sunshine cutie ng bahay ni Mama Abby"</p>
                            </div>
                            {/* ITEM 4 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/katrice-villaflor.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_80%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 4 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-2 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Katrice Villaflor</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single but Taken</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            {/* ITEM 5 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/kimmy.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_75%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 5 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-2 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Kimberly Palillo</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            {/* ITEM 6 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/camla-fulo.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_15%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 6 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Camla Fulo</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single but Taken</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            {/* ITEM 7 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/zela.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_0%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 7 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-7 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Zelamae Bartiana</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>"Rich Tita na takot padin sa teenage pregnancy"</p>
                            </div>
                            {/* ITEM 8 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ims-ong.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_50%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 8 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-3 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Immanuelle Espiritu</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single but Taken</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            {/* ITEM 9 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/pauline-ty.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_40%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 9 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Pauline Ty</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Student</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>"I am Joanna Pauline Ty and pwede nyo na po ako ligawan after a year."</p>
                            </div>
                            {/* ITEM 10 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/thea-hugo.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 10 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-2 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Althea Rivere</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single but Taken</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            {/* ITEM 11 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/angel-gratuito.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_25%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 11 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-2 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Angel Gratuito</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single but Taken</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            {/* ITEM 12 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/kate-cedeno.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_35%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 12 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Kate Cedeno</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single but Taken</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>"A faithfully forward servant"</p>
                            </div>
                        </div>
                    )}
                    {/* GROOMSMEN */}
                    {activeSection === 'groomsmen' && (
                        <div className='justify-center flex flex-wrap box-border'>
                            <p className='text-moss text-[1.5em] font-medium'>Bestman</p>
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/deo-tabelon.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_80%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px  ] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-3 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Deo Tabelon</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single and Ready to Mingle!</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>"All for Jesus — my highest purpose"</p>
                            </div>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/jp-ramirez.png'}
                                    fill
                                    className='object-cover'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-3 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>JP Ramirez</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single but Taken</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            <p className='text-moss text-[1.8rem] pt-8 font-medium'>Groomsmen</p>
                            {/* ITEM 3 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/harold-yap.png'}
                                    fill
                                    className='object-cover object-[40%_0%] md:object-[0%_65%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 3 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-2 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Harold Yap</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single and Ready to Mingle!</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            {/* ITEM 4 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/jafet-bathan.png'}
                                    fill
                                    className='object-cover md:object-[0%_25%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 4 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-3 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Jafet Bathan</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single and Ready to Mingle!</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            {/* ITEM 5 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/king-villanueva.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_40%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 5 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>King Villanueva</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single but Taken</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            {/* ITEM 6 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/arvin-b.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_45%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 6 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-2 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Arvin Berina</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single but Taken</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>"My Angel will always protect me" 😇</p>
                            </div>
                            {/* ITEM 7 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/cj-villaverde.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_40%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 7 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>CJ Villaverde</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single and Ready to Mingle!</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            {/* ITEM 8 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/keiffer-cortez.png'}
                                    fill
                                    className='object-cover md:object-[0%_35%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 8 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Keiffer Cortez</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single and Father</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            {/* ITEM 9 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ced-deluna.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_45%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 9 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Ced De Luna</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single and Ready to Mingle!</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            {/* ITEM 10 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/charles-alcantara.png'}
                                    fill
                                    className='object-cover object-[40%_0%] md:object-[0%_30%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 10 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Charles Alcantara</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single but Taken</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            {/* ITEM 11 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/adi-balino.jpg'}
                                    fill
                                    className='object-cover object-[0%_0%] md:object-[0%_50%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 11 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-2 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Adi Balino</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single but Taken</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>“A Heart Led by Love, Grounded in Faith.”</p>
                            </div>
                            {/* ITEM 12 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/karlo-sandoval.png'}
                                    fill
                                    className='object-cover md:object-[0%_30%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 12 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-3 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Karlo Sandoval</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Single but Taken</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                        </div>
                    )}
                    {/* BEARERS */}
                    {activeSection === 'bearers' && (
                        <div className='justify-center flex flex-wrap box-border'>
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/geoff-jabrica.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_25%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Geoff Stephan</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Student</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/raj-mujar.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_0%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-2 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Raz Mujar</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Student</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                            {/* ITEM 3 */} 
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/justine-tuvieron.png'}
                                    fill
                                    className='object-cover object-[0%_0%] md:object-[0%_35%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 3 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-3 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Justine Tuvieron</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Student</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                            </div>
                        </div>
                    )}
                    {/* PARENTS */}
                    {activeSection === 'parents' && (
                        <div className='justify-center flex flex-wrap box-border'>
                            <p className='text-moss text-[1.5em] font-medium'>Parents of the Groom</p>
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/dagos.png'}
                                    fill
                                    className='object-cover object-top md:object-[0%_5%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] pl-2 mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Mr. Lazaro Dagos<br /><a className='font-greatVibesR '>&</a><br /> Mrs. Eleanor Dagos</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                            <p className='text-moss text-[1.5em] pt-8 font-medium'>Parents of the Bride</p>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[1em] pl-[1em] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/jabrica-parents.jpg'}
                                    fill
                                    className='object-cover md:object-[0%_35%]'
                                    loading='lazy'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-center text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <p className='text-[1.5em] md:text-[2em] mt-[0.5em] mb-[0.5em] leading-[1.2] overflow-hidden text-ellipsis relative z-2'>Mr. Raymundo Jabrica<br /><a className='font-greatVibesR '>&</a><br /> Mrs. Marissa Jabrica</p>
                                {/* <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'>Wife and Mother</p>
                                <p className='text-[0.9em] md:text-[1.125em] leading-[1.7] overflow-hidden relative z-2 mb-[0.6em] box-border block'></p> */}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default AbaysM