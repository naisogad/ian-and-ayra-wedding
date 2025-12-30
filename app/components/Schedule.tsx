import Image from "next/image";
import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

const Schedule = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleItem = (item) => {
    setActiveItem((prev) => (prev === item ? "" : item));
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

  const dropdownMotion: Variants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.45,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.55,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };


  const ceremonySchedule = [
    {
      time: "3:30pm",
      title: "Guest Arrival",
      description:
        "Welcome! Settle in, enjoy the atmosphere, and get ready for a beautiful afternoon of love and celebration.",
    },
    {
      time: "4:00pm",
      title: "Ceremony Begins",
      description:
        "The moment we’ve all been waiting for—join us as we begin our forever together.",
    },
    {
      time: "4:30pm",
      title: "Exchanging of Vows and “I Do’s”",
      description:
        "Watch as we promise our hearts and lives to each other in a heartfelt exchange of vows.",
    },
    {
      time: "5:00pm",
      title: "Family/Group Photos",
      description:
        "Let’s capture memories with our loved ones—smiles, hugs, and happy tears included!",
    },
    {
      time: "5:30pm",
      title: "Light Refreshments & Conversations",
      description:
        "Relax, mingle, and enjoy some light treats while sharing sweet moments with friends and family.",
    },
    {
      time: "6:00pm",
      title: "Opening of the Photobooth",
      description:
        "Strike a pose! Have fun and take home a keepsake from this special day.",
    },
    {
      time: "6:30pm",
      title: "Grand Entrance",
      description:
        "Introducing the newlyweds! Let’s welcome them with love, cheers, and celebration!",
    },
    {
      time: "6:45pm",
      title: "Games",
      description:
        "Let the fun begin! Enjoy laughter and friendly competition with our interactive wedding games.",
    },
    {
      time: "7:00pm",
      title: "Special Dances by Team Bride & Team Groom",
      description:
        "Our amazing crew takes the floor for a fun and lively performance!",
    },
    {
      time: "7:15pm",
      title: "First Dance as Husband and Wife",
      description:
        "A magical moment as we share our first dance together as Mr. and Mrs. 💕",
    },
    {
      time: "7:30pm",
      title: "Dinner is Served",
      description:
        "Enjoy a delicious meal prepared with love—time to dine and celebrate!",
    },
    {
      time: "8:30pm",
      title: "Toast & Cake Cutting",
      description:
        "Raise your glasses and join us in a sweet moment of gratitude and joy.",
    },
    {
      time: "9:00pm",
      title: "Games for the Single Ladies and Gents",
      description:
        "Time for laughter and excitement—who is next?",
    },
    {
      time: "9:30pm",
      title: "Messages for the Couple",
      description:
        "Heartfelt words and blessings from our dearest family and friends.",
    },
    {
      time: "10:00pm",
      title: "Thank You & Farewell Message",
      description:
        "A moment to express our deepest gratitude for sharing this day with us.",
    },
    {
      time: "11:00pm",
      title: "Open Dance Floor & Celebration",
      description:
        "Let’s end the night with music, dancing, and pure joy—celebrate love with us! 💃🕺",
    },
  ];


const TimelineItem = ({ time, title, description }) => (
  <>
    {/* TIME */}
    <motion.div 
        className="border-solid border-r-1 border-moss text-right grow-0 shrink-0 basis-[33%] max-w-[33%] pr-[1vw] pt-[1vw] box-border"
    >
      <p className="text-moss leading-[1] text-[0.8vw]">{time}</p>
    </motion.div>

    {/* DETAILS */}
    <motion.div 
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={slideRight}
        className="grow-0 shrink-0 basis-[58%] max-w-[58%] p-[1vw] mb-[1vw] ml-[1vw] bg-amber-50 box-border"
    >
      <div className="text-moss">
        <p className="text-[1vw] leading-[1.8]">{title}</p>
        <p className="leading-[1.2] text-[0.8vw]">{description}</p>
      </div>
    </motion.div>
  </>
);


  return (
    <motion.section
      id="schedule"
      className="hidden lg:flex pt-[10vw] pb-[vw] relative justify-center flex-wrap box-border"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
        <div className="w-full box-border mb-[10vw]">
            {/* FLOATING IMAGE */}
            <motion.div 
                variants={slideLeft}
                className="top-[2vw] left-[21vw] scale-x-[-1] -rotate-55 w-[13vw] h-[20vw] absolute z-0"
            >
                <Image 
                    alt="" 
                    src="/flowers/floater_4.png" 
                    fill 
                    className="object-cover" 
                />
            </motion.div>

            {/* TITLE */}
            <motion.div
                variants={slideRight}
                className="flex justify-center"
            >
                <div className="basis-[91%] text-right">
                    <h2 className="text-moss text-[5vw] leading-[1.1]">Timeline</h2>
                </div>
            </motion.div>

            {/* DATE */}
            <motion.div 
                variants={slideLeft}
                className="flex justify-start font-georgia"
            >
                <div className="basis-[36%] flex">
                        <span className="text-moss text-[1.6vw] font-medium w-full text-right">
                          Tuesday, November 18
                        </span>
                </div>
            </motion.div>

            {/* CATEGORY BUTTON */}
            <motion.div 
                variants={slideLeft}
                className="flex justify-start font-georgia"
            >
                <div className="basis-[33%] text-right border-r border-moss">
                    <a
                    onClick={() => handleItem("p1")}
                    href="#preparation"
                    className={`text-moss text-[2vw] leading-[2] font-calligraphyBrilliant pr-[1vw] pt-[1.5vw] pb-[1.2vw] inline-block relative z-10 ${
                        activeItem === "p1"
                        ? "font-bold border-b-[0.3vw] border-stain"
                        : "hover:border-b-[0.3vw] border-stain"
                    }`}
                    >
                    Ceremony <span className="font-greatVibesR">&</span> Reception
                    </a>
                </div>
            </motion.div>

            {/* TIMELINE DETAILS */}
            <AnimatePresence initial={false}>
              {activeItem === "p1" && (
                <motion.div
                  key="timelineDropdown"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={dropdownMotion}
                  className="overflow-hidden"
                >
                  <div className="flex justify-start flex-wrap">
                    {ceremonySchedule.map((item, i) => (
                      <TimelineItem
                        key={i}
                        time={item.time}
                        title={item.title}
                        description={item.description}
                      />
                    ))}

                    {/* WHERE */}
                    <motion.div 
                        variants={slideLeft}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="border-r border-moss text-right basis-[33%] pr-[1vw]"
                    >
                        <a className="text-[3vw] leading-[2] font-calligraphyBrilliant text-moss">
                            Where
                        </a>
                    </motion.div>

                    <motion.div 
                        variants={slideRight}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className=" border-moss basis-[33%] ml-[3.6vw]"
                    >
                    </motion.div>

                    {/* LOCATION IMAGE */}
                    <motion.div 
                        variants={slideRight}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="border-r border-moss basis-[33%]"
                    >
                    </motion.div>
                    <motion.div 
                        variants={slideRight}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="basis-[58%] min-h-[20vw] relative"
                    >
                        <Image
                            alt=""
                            src="/pictures/gp-ceremony-2.jpg"
                            fill
                            className="object-cover"
                            loading="eager"
                        />
                    </motion.div>

                    {/* LOCATION DETAILS */}
                    <motion.div 
                        variants={slideRight}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="border-r border-moss basis-[33%]"
                    >
                    </motion.div>
                    <motion.div 
                        variants={slideRight}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="basis-[58%] bg-amber-50 p-[1.5vw] text-moss"
                    >
                        <motion.h3 
                            variants={slideRight}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="text-[1.3vw] mb-[1vw] leading-[1.5] overflow-hidden text-ellipsis relative z-2 font-georgia"
                        >
                            GP Suites
                        </motion.h3>
                        <motion.a
                            variants={slideRight}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            href="https://www.facebook.com/gpsuitesandeventsplace"
                            className='text-[1vw] leading-[1.2] overflow-hidden relative box-border block font-georgia font-bold hover:underline'
                        >
                            -GP Suites Facebook Page-
                        </motion.a>
                        <motion.p 
                            variants={slideRight}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className='text-[1vw] leading-[1.2] mb-3 overflow-hidden relative box-border block'
                        >
                            09150922326
                        </motion.p>
                        <motion.p 
                            variants={slideRight}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className='text-[1vw] leading-[1.2] overflow-hidden relative mb-[1rem] box-border block'
                        >
                            Greener Pastures, Main Ave,
                            <br />
                            Sariaya, Quezon
                        </motion.p>
                    </motion.div>

                    {/* MAP */}
                    <motion.div 
                        variants={slideRight}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="border-r border-moss basis-[33%]"
                    >
                    </motion.div>
                    <motion.div 
                        variants={slideRight}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="basis-[58%] bg-amber-50 pl-[1vw] pr-[1vw] pb-[2.5vw] flex justify-center"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.0751945026327!2d121.46153672697085!3d13.933815191774528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd49cb80d4e9d5%3A0x9ddfb10f5d78e0b7!2sGP%20SUITES!5e0!3m2!1sen!2sph!4v1744793361235!5m2!1sen!2sph"
                            width="600"
                            height="450"
                            loading="lazy"
                        >    
                        </iframe>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

        </div> 
    </motion.section>
  );
};

export default Schedule;


