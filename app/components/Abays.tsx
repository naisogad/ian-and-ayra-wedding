import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, Variants } from "framer-motion";



const Abays = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
      
          const toggleNav = () => {
            setToggleMenu(!toggleMenu);
          }
  
    const [activeSection, setActiveSection] = useState('ps');
  
          const handleNavigation = (section) => {
            setActiveSection(section);
          };

    const [activeItem, setActiveItem] = useState('p1');
  
          const handleItem = (item) => {
            setActiveItem(item);
          };

    const principalSponsors = [
        { id: "p1", label: "Edward Ty & Joann Ty" },
        { id: "p2", label: "Jerson Torres & Michelle Torres" },
        { id: "p3", label: "Rondolf Alandydy & Marileth Alandydy" },
        { id: "p4", label: "Michael Colilap & Jaja Colilap" },
        { id: "p5", label: "PJ Camacho & Karen Camacho" },
        { id: "p6", label: "Cyrus Dinglasan & Risa Dinglasan" },
        { id: "p7", label: "Joshua Mujar & Sheryl Mujar" },
        { id: "p8", label: "Roodil Villaverde & Evelyn Villaverde" },
        { id: "p9", label: "Lorenzo Jabrica & Gemma Jabrica" },
        { id: "p10", label: "Bernie Jabrica & Anibell Molina" },
        { id: "p11", label: "Joseph Briones & Maricel Briones" },
        { id: "p12", label: "Gerard Lim & Maureen Lim" },
        { id: "p13", label: "Edizer Driz" },
        { id: "p14", label: "Edna Sanchez" },
        { id: "p15", label: "Che Hernandez" },
        { id: "p16", label: "Melith Ballon" },
        ];

    const secondarySponsors = [
        { id: "s1", label: "Vin Mirhan & Rachel Mirhan" },
        { id: "s2", label: "MJ Mercado & Rachel Mercado" },
        ];

    const bridesmaids = [
        { id: "bm1", label: "Jane Jabrica" },
        { id: "bm2", label: "Nicole Jabrica" },
        { id: "bm3", label: "Danielle Manalo" },
        { id: "bm4", label: "Katrice VIllaflor" },
        { id: "bm5", label: "Kimberly Palillo" },
        { id: "bm6", label: "Camla Fulo" },
        { id: "bm7", label: "Zelamae Bartiana" },
        { id: "bm8", label: "Immanuelle Espiritu" },
        { id: "bm9", label: "Pauline Ty" },
        { id: "bm10", label: "Althea Rivere" },
        { id: "bm11", label: "Angel Gratuito" },
        { id: "bm12", label: "Kate Cedeno" },
        ];

    const groomsmen = [
        { id: "gm1", label: "Deo Tabelon" },
        { id: "gm2", label: "JP Ramirez" },
        { id: "gm3", label: "Harold Yap" },
        { id: "gm4", label: "Jafet Bathan" },
        { id: "gm5", label: "King Villanueva" },
        { id: "gm6", label: "Arvin Berina" },
        { id: "gm7", label: "CJ Villaverde" },
        { id: "gm8", label: "Keffer Cortez" },
        { id: "gm9", label: "Ced De Luna" },
        { id: "gm10", label: "Charles Alcantara" },
        { id: "gm11", label: "Adi Balino" },
        { id: "gm12", label: "Karlo Sandoval" },
        
        ];

    const bearers = [
        { id: "br1", label: "Geoff Stephan" },
        { id: "br2", label: "Raz Mujar" },
        { id: "br3", label: "Justine Tuvieron" },
        ];
    
    const parents = [
        { id: "pr1", label: "Lazaro Dagos & Eleanor Dagos" },
        { id: "pr2", label: "Raymundo Jabrica & Marissa Jabrica" },

        ];

    const underlineClasses = `
        relative inline-block pb-[0.1vw] cursor-pointer
        after:absolute after:left-0 after:bottom-0 after:h-[5px]
        after:w-0 after:bg-stain after:content-['']
        after:transition-all after:duration-500 after:ease-[cubic-bezier(.16,1,.3,1)]
        hover:after:w-full
        `;


    const listVariants: Variants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
        height: "auto",
        opacity: 1,
        transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.12,
        },
    },
    exit: {
        height: 0,
        opacity: 0,
        transition: {
        duration: 0.4,
        ease: "easeInOut",
        },
    },
    };

    const itemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
        },
    },
    };

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
    <section id='abays' className='hidden lg:flex pt-[10vw] pb-[10vw] relative justify-center flex-wrap box-border'>
        <motion.div 
            className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1vw] pl-[1vw] box-border block'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {/* FLOWER */}
            <motion.div 
                variants={slideRight}
                className='top-[-6vw] right-[-4vw] h-[12vw] rotate-20 w-[20vw] z-1 absolute box-border block'
                >
                    <Image 
                    alt=''
                    src={'/flowers/floater_3.png'}
                    fill
                    className='object-cover'
            />
            </motion.div>
            {/* CONTAINER */}
            <div className='flex flex-wrap box-border'>
                {/* LEFT CONTAINER */}
                <motion.div
                    variants={slideLeft} 
                    className='h-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative w-[100%] min-h-[1px] pr-[1vw] pl-[1vw] box-border block'
                >
                    <h2 className='text-moss -rotate-90 top-[10vw] left-[-2vw] text-[5vw] leading-[2] text-center absolute whitespace-nowrap text-ellipsis box-border block'>Entourage</h2>
                </motion.div>
                {/* RIGHT CONTAINER */}
                <motion.div 
                    variants={slideUp}
                    className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px] pr-[1vw] pl-[1vw] box-border block'>
                    <div className='flex flex-wrap mr-[-1vw] ml-[-1vw] box-border'>
                        <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1vw] pl-[1vw] box-border block'>
                            <div className='flex flex-wrap mr-[-1vw] ml-[-1vw] box-border'>
                                {/* RIGHT-LEFT CONTAINER */}
                                <div className='text-right grow-0 shrink-0 basis-[41%] max-w-[41%] relative w-[100%] min-h-[1px] pr-[1vw] pl-[1vw] box-border block border-solid border-r-1 border-r-moss'>
                                    {/* CONTENT */}
                                    <div className='box-border block'>
                                        {/* CONTENT 1 */}
                                        <motion.div 
                                            variants={slideLeft}
                                            className="text-right"
                                        >
                                            <motion.button
                                                onClick={() => handleNavigation("ps")}
                                                className="text-moss text-[1.6vw] leading-[2.5] inline-flex items-center gap-2"
                                            >
                                                Principal Sponsors

                                                <motion.span
                                                animate={{ rotate: activeSection === "ps" ? 45 : 0 }}
                                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                                className="font-georgia text-[1.4vw] inline-block"
                                                >
                                                +
                                                </motion.span>
                                            </motion.button>
                                        </motion.div>

                                        <AnimatePresence initial={false}>
                                        {activeSection === "ps" && (
                                            <motion.ul
                                            variants={listVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="mt-2 text-right text-moss text-[0.9vw] leading-[1.8] font-georgia overflow-hidden"
                                            >
                                            {principalSponsors.map(({ id, label }) => (
                                                <motion.li key={id} variants={itemVariants} className="block">
                                                <motion.button
                                                    onClick={() => handleItem(id)}
                                                    className={`
                                                    ${underlineClasses}
                                                    ${activeItem === id ? "font-bold after:w-full" : ""}
                                                    `}
                                                >
                                                    {label}
                                                </motion.button>
                                                </motion.li>
                                            ))}
                                            </motion.ul>
                                        )}
                                        </AnimatePresence>
                                        {/* CONTENT 2 */}
                                        <motion.div 
                                            variants={slideLeft}
                                            className="text-right"
                                        >
                                            <motion.button
                                                onClick={() => handleNavigation("ss")}
                                                className="text-moss text-[1.8vw] leading-[2.5] inline-flex items-center gap-2"
                                            >
                                                Secondary Sponsors

                                                <motion.span
                                                animate={{ rotate: activeSection === "ss" ? 45 : 0 }}
                                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                                className="font-georgia text-[1.4vw] inline-block"
                                                >
                                                +
                                                </motion.span>
                                            </motion.button>
                                        </motion.div>

                                        <AnimatePresence initial={false}>
                                        {activeSection === "ss" && (
                                            <motion.ul
                                            variants={listVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="mt-2 text-right text-moss text-[0.9vw] leading-[1.8] font-georgia overflow-hidden"
                                            >
                                            {secondarySponsors.map(({ id, label }) => (
                                                <motion.li key={id} variants={itemVariants} className="block">
                                                <motion.button
                                                    onClick={() => handleItem(id)}
                                                    className={`
                                                    ${underlineClasses}
                                                    ${activeItem === id ? "font-bold after:w-full" : ""}
                                                    `}
                                                >
                                                    {label}
                                                </motion.button>
                                                </motion.li>
                                            ))}
                                            </motion.ul>
                                        )}
                                        </AnimatePresence>
                                        {/* CONTENT 3 */}
                                       <motion.div 
                                            variants={slideLeft}
                                            className="text-right"
                                        >
                                            <motion.button
                                                onClick={() => handleNavigation("bm")}
                                                className="text-moss text-[1.8vw] leading-[2.5] inline-flex items-center gap-2"
                                            >
                                                Bridesmaids

                                                <motion.span
                                                animate={{ rotate: activeSection === "bm" ? 45 : 0 }}
                                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                                className="font-georgia text-[1.4vw] inline-block"
                                                >
                                                +
                                                </motion.span>
                                            </motion.button>
                                        </motion.div>

                                        <AnimatePresence initial={false}>
                                        {activeSection === "bm" && (
                                            <motion.ul
                                            variants={listVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="mt-2 text-right text-moss text-[0.9vw] leading-[1.8] font-georgia overflow-hidden"
                                            >
                                            {bridesmaids.map(({ id, label }) => (
                                                <motion.li key={id} variants={itemVariants} className="block">
                                                <motion.button
                                                    onClick={() => handleItem(id)}
                                                    className={`
                                                    ${underlineClasses}
                                                    ${activeItem === id ? "font-bold after:w-full" : ""}
                                                    `}
                                                >
                                                    {label}
                                                </motion.button>
                                                </motion.li>
                                            ))}
                                            </motion.ul>
                                        )}
                                        </AnimatePresence>
                                        {/* CONTENT 4 */}
                                        <motion.div 
                                            variants={slideLeft}
                                            className="text-right"
                                        >
                                            <motion.button
                                                onClick={() => handleNavigation("gm")}
                                                className="text-moss text-[1.8vw] leading-[2.5] inline-flex items-center gap-2"
                                            >
                                                Groomsmen

                                                <motion.span
                                                animate={{ rotate: activeSection === "gm" ? 45 : 0 }}
                                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                                className="font-georgia text-[1.4vw] inline-block"
                                                >
                                                +
                                                </motion.span>
                                            </motion.button>
                                        </motion.div>

                                        <AnimatePresence initial={false}>
                                        {activeSection === "gm" && (
                                            <motion.ul
                                            variants={listVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="mt-2 text-right text-moss text-[0.9vw] leading-[1.8] font-georgia overflow-hidden"
                                            >
                                            {groomsmen.map(({ id, label }) => (
                                                <motion.li key={id} variants={itemVariants} className="block">
                                                <motion.button
                                                    onClick={() => handleItem(id)}
                                                    className={`
                                                    ${underlineClasses}
                                                    ${activeItem === id ? "font-bold after:w-full" : ""}
                                                    `}
                                                >
                                                    {label}
                                                </motion.button>
                                                </motion.li>
                                            ))}
                                            </motion.ul>
                                        )}
                                        </AnimatePresence>
                                        {/* CONTENT 5 */}
                                        <motion.div 
                                            variants={slideLeft}
                                            className="text-right"
                                        >
                                            <motion.button
                                                onClick={() => handleNavigation("br")}
                                                className="text-moss text-[1.8vw] leading-[2.5] inline-flex items-center gap-2"
                                            >
                                                Bearers

                                                <motion.span
                                                animate={{ rotate: activeSection === "br" ? 45 : 0 }}
                                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                                className="font-georgia text-[1.4vw] inline-block"
                                                >
                                                +
                                                </motion.span>
                                            </motion.button>
                                        </motion.div>

                                        <AnimatePresence initial={false}>
                                        {activeSection === "br" && (
                                            <motion.ul
                                            variants={listVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="mt-2 text-right text-moss text-[0.9vw] leading-[1.8] font-georgia overflow-hidden"
                                            >
                                            {bearers.map(({ id, label }) => (
                                                <motion.li key={id} variants={itemVariants} className="block">
                                                <motion.button
                                                    onClick={() => handleItem(id)}
                                                    className={`
                                                    ${underlineClasses}
                                                    ${activeItem === id ? "font-bold after:w-full" : ""}
                                                    `}
                                                >
                                                    {label}
                                                </motion.button>
                                                </motion.li>
                                            ))}
                                            </motion.ul>
                                        )}
                                        </AnimatePresence>
                                        {/* CONTENT 6 */}
                                        <motion.div 
                                            variants={slideLeft}
                                            className="text-right"
                                        >
                                            <motion.button
                                                onClick={() => handleNavigation("pr")}
                                                className="text-moss text-[1.8vw] leading-[2.5] inline-flex items-center gap-2"
                                            >
                                                Parents

                                                <motion.span
                                                animate={{ rotate: activeSection === "pr" ? 45 : 0 }}
                                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                                className="font-georgia text-[1.4vw] inline-block"
                                                >
                                                +
                                                </motion.span>
                                            </motion.button>
                                        </motion.div>

                                        <AnimatePresence initial={false}>
                                        {activeSection === "pr" && (
                                            <motion.ul
                                            variants={listVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="mt-2 text-right text-moss text-[0.9vw] leading-[1.8] font-georgia overflow-hidden"
                                            >
                                            {parents.map(({ id, label }) => (
                                                <motion.li key={id} variants={itemVariants} className="block">
                                                <motion.button
                                                    onClick={() => handleItem(id)}
                                                    className={`
                                                    ${underlineClasses}
                                                    ${activeItem === id ? "font-bold after:w-full" : ""}
                                                    `}
                                                >
                                                    {label}
                                                </motion.button>
                                                </motion.li>
                                            ))}
                                            </motion.ul>
                                        )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                                {/* RIGHT-RIGHT CONTAINER */}
                                <motion.div 
                                    variants={slideUp}
                                    className='grow-0 shrink-0 basis-[57%] max-w-[57%] relative w-[100%] min-h-[1px] pr-[1vw] pl-[1vw] ml-3 box-border block'
                                >
                                    {/* CONTENT */}
                                    <div className='flex flex-wrap box-border'>
                                        <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1vw] pl-[1vw] box-border block'>
                                            {/* PRIMARY SPONSORS */}
                                            {/* CONTENT 1 */}
                                            {activeItem === 'p1' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 1 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/ty.png'}
                                                      fill
                                                      className='object-cover object-[100%_0%]'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 1 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Edward Ty <a className='font-greatVibesR '>&</a> Joann Ty</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Couple</p> */}
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 2 */}
                                            {activeItem === 'p2' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 2 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/torres.png'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 2 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Jerson Torres <a className='font-greatVibesR '>&</a> Michelle Torres</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 3 */}
                                            {activeItem === 'p3' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 3 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/alandy-dy.png'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 3 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Rondolf Alandydy <a className='font-greatVibesR '>&</a> <br /> Marileth Alandydy</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 4 */}
                                            {activeItem === 'p4' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 4 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/collilap.png'}
                                                      fill
                                                      className='object-cover object-[50%_0%]'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 4 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Michael Colilap <a className='font-greatVibesR '>&</a> Jaja Colilap</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 5 */}
                                            {activeItem === 'p5' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 5 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/camacho.jpg'}
                                                      fill
                                                      className='object-cover object-[65%_0%]'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 5 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>PJ Camacho <a className='font-greatVibesR '>&</a> Karen Camacho</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 6 */}
                                            {activeItem === 'p6' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 6 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/dinglasan.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 6 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Cyrus Dinglasan <a className='font-greatVibesR '>&</a> Risa Dinglasan</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 7 */}
                                            {activeItem === 'p7' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 7 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/mujar.png'}
                                                      fill
                                                      className='object-cover object-[65%_0%]'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 7 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Joshua Mujar <a className='font-greatVibesR '>&</a> Sheryl Mujar</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 8 */}
                                            {activeItem === 'p8' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 8 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/villaverde.png'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 8 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Rodil Villaverde <a className='font-greatVibesR '>&</a> Evelyn Villaverde</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 9 */}
                                            {activeItem === 'p9' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 9 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/jabrica.jpg'}
                                                      fill
                                                      className='object-cover object-[65%_0%]'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 9 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Lorenzo Jabrica <a className='font-greatVibesR '>&</a> Gemma Jabrica</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 10 */}
                                            {activeItem === 'p10' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 10 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/jabrica-molina.jpg'}
                                                      fill
                                                      className='object-cover object-[65%_0%]'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 10 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Bernie Jabrica <a className='font-greatVibesR '>&</a> Anibell Molina</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 11 */}
                                            {activeItem === 'p11' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 11 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/briones.jpg'}
                                                      fill
                                                      className='object-cover object-[65%_0%]'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 11 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Joseph Briones <a className='font-greatVibesR '>&</a> Maricel Briones</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 12 */}
                                            {activeItem === 'p12' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 12 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/lim.png'}
                                                      fill
                                                      className='object-cover object-[65%_0%]'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 12 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Gerard Lim <a className='font-greatVibesR '>&</a> Maureen Lim</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 13 */}
                                            {activeItem === 'p13' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 13 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/ed-driz.png'}
                                                      fill
                                                      className='object-cover object-[65%_0%]'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 13 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Edizer Driz</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 14 */}
                                            {activeItem === 'p14' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 14 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/edna-sanchez.png'}
                                                      fill
                                                      className='object-cover object-[0%_0%]'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 14 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Edna Sanchez</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 15 */}
                                            {activeItem === 'p15' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 15 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/che-hernandez.png'}
                                                      fill
                                                      className='object-cover object-[0%_55%]'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 15 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Che Hernandez</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 16 */}
                                            {activeItem === 'p16' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 16 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/melith-ballon.png'}
                                                      fill
                                                      className='object-cover object-[55%_0%]'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 16 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Melith Ballon</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* SECONDARY SPONSORS */}
                                            {/* CONTENT 1 */}
                                            {activeItem === 's1' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 1 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/mirhan.png'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 1 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Vin Mirhan <a className='font-greatVibesR '>&</a> Rachel Mirhan</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 2 */}
                                            {activeItem === 's2' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 2 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/mercado.png'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 2 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>MJ Mercado <a className='font-greatVibesR '>&</a> Rachel Mercado</h4>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* BRIDESMAIDS */}
                                            {/* CONTENT 1 */}
                                            {activeItem === 'bm1' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 1 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/jane-j.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 1 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Jane Jabrica</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Maid of Honor - Student</p>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 2 */}
                                            {activeItem === 'bm2' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 2 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/nicole-j.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 2 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Nicole Jabrica</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Maid of Honor - Student</p>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 3 */}
                                            {activeItem === 'bm3' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 3 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/danielle-manalo.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 3 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Danielle Manalo</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single - Ready to Mingle</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>"Ang sunshine cutie ng bahay ni Mama Abby"</p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 4 */}
                                            {activeItem === 'bm4' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 4 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/katrice-villaflor.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 4 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Katrice Villaflor</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single - Taken</p>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 5 */}
                                            {activeItem === 'bm5' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 5 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/kimmy.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 5 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Kimberly Palillo</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single</p>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 6 */}
                                            {activeItem === 'bm6' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 6 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/camla-fulo.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 6 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Camla Fulo</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single - Taken</p>
                                                    {/* <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p> */}
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 7 */}
                                            {activeItem === 'bm7' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 7 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/zela.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 7 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Zelamae Bartiana</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>"Rich Tita na takot padin sa teenage pregnancy"</p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 8 */}
                                            {activeItem === 'bm8' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 8 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/ims-ong.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 8 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Immanuelle Espiritu</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single - Taken</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'></p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 9 */}
                                            {activeItem === 'bm9' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 9 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/pauline-ty.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 9 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Pauline Ty</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single - Student</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>"I am Joanna Pauline Ty and pwede nyo na po ako ligawan after a year."</p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 10 */}
                                            {activeItem === 'bm10' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 10 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/thea-hugo.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 10 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Althea Rivere</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single - Taken</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'></p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 11 */}
                                            {activeItem === 'bm11' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 11 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/angel-gratuito.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 11 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Angel Gratuito</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single - Taken</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'></p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 12 */}
                                            {activeItem === 'bm12' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 12 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/kate-cedeno.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 12 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Kate Cedeno</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single - Student</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>"A faithfully forward servant"</p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* GROOMSMEN */}
                                            {/* CONTENT 1 */}
                                            {activeItem === 'gm1' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 1 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/deo-tabelon.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 1 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Deo Tabelon</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Bestman - Single - Ready to Mingle</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>"All for Jesus — my highest purpose"</p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 2 */}
                                            {activeItem === 'gm2' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 2 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/jp-ramirez.png'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 2 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>JP Ramirez</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Bestman - Single - Taken</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'></p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 3 */}
                                            {activeItem === 'gm3' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 3 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/harold-yap.png'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 3 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Harold Yap</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single - Ready to Mingle</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'></p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 4 */}
                                            {activeItem === 'gm4' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 4 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/jafet-bathan.png'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 4 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Jafet Bathan</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single - Ready to Mingle</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'></p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 5 */}
                                            {activeItem === 'gm5' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 5 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/king-villanueva.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 5 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>King Villanueva</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Married - Loyal</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'></p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 6 */}
                                            {activeItem === 'gm6' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 6 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/arvin-b.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 6 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Arvin Berina</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single - Taken</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>"My Angel will always protect me" 😇</p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 7 */}
                                            {activeItem === 'gm7' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 7 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/cj-villaverde.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 7 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>CJ Villaverde</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single - Ready to Mingle</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'></p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 8 */}
                                            {activeItem === 'gm8' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 8 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/keiffer-cortez.png'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 8 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Keiffer Cortez</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single - Father</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'></p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 9 */}
                                            {activeItem === 'gm9' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 9 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/ced-deluna.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 9 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Ced De Luna</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single - Ready to Mingle</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'></p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 10 */}
                                            {activeItem === 'gm10' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 10 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/charles-alcantara.png'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 10 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Charles Alcantara</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single - Taken</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'></p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 11 */}
                                            {activeItem === 'gm11' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 11 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/adi-balino.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 11 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Adi Balino</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single - Taken</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>“A Heart Led by Love, Grounded in Faith.”</p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 12 */}
                                            {activeItem === 'gm12' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 12 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/karlo-sandoval.png'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 12 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Karlo Sandoval</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Single - Taken</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'></p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* BEARERS */}
                                            {/* CONTENT 1 */}
                                            {activeItem === 'br1' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 1 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/geoff-jabrica.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 1 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Geoff Stephan</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Coin Bearer - Student</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'></p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 2 */}
                                            {activeItem === 'br2' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 2 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/raj-mujar.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 2 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Raz Mujar</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Ring Bearer - Student</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'></p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 3 */}
                                            {activeItem === 'br3' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 3 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/justine-tuvieron.png'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 3 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Justine Tuvieron</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Bible Bearer - Student</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* PARENTS */}
                                            {/* CONTENT 1 */}
                                            {activeItem === 'pr1' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 1 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/dagos.png'}
                                                      fill
                                                      className='object-cover object-top'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 1 */}
                                                <motion.div 
                                                    className=' bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Lazaro Dagos <a className='font-greatVibesR '>&</a><br /> Eleanor Dagos</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'>Parents of the Groom</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'></p>
                                                </motion.div>
                                            </div>
                                            )}
                                            {/* CONTENT 2 */}
                                            {activeItem === 'pr2' && (
                                            <div className='mr-[-1vw] ml-[-1vw] box-border block'>
                                                {/* IMAGE 2 */}
                                                <motion.div 
                                                    variants={listVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className='max-w-[100%] relative w-[100%] min-h-[35vw] pr-[1vw] pl-[1vw] box-border block'
                                                >
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/jabrica-parents.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </motion.div>
                                                {/* DETAILS 2 */}
                                                <motion.div 
                                                    className='bg-amber-50 p-4 text-center'
                                                >
                                                    <h4 className='text-[1.5vw] text-moss leading-[1.5]'>Raymundo Jabrica <a className='font-greatVibesR '>&</a><br /> Marissa Jabrica</h4>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[0vw]'>Parents of the Bride</p>
                                                    <p className='leading-[1.7] text-[1vw] text-moss mb-[1vw]'></p>
                                                </motion.div>
                                            </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Abays