import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ImageFlip from "./small_components/ImageFlip";
import { galleryItems } from "./small_components/galleryData";
import { motion, AnimatePresence, Variants } from "framer-motion";

const IMAGES_PER_PAGE = 2;

const pageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
};


const Gallery = () => {
  const totalPages = Math.ceil(galleryItems.length / IMAGES_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const visibleItems = galleryItems.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
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

  const [showIndicator, setShowIndicator] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const imgRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);

          // Start timer when visible
          setTimeout(() => {
            setShowIndicator(false);
          }, 20000); // 20 seconds
        }
      },
        { threshold: 0.5 } // triggers when 50% visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [hasStarted]);

  return (
    <motion.section
      id="gallery"
      className="hidden lg:flex pt-[10v2] pb-[10vw] relative justify-center flex-wrap box-border"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* LEFT Floating Prev Button */}
      <button
        className="absolute left-[15%] top-1/2 -translate-y-1/2 z-1 px-[2vw] py-[2.2vw] opacity-50 border-moss border-l-5 rounded-3xl bg-amber-50 transition-all duration-300 hover:scale-110 hover:opacity-100 disabled:opacity-40"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        <Image
          src={'/right-arrow.svg'}
          alt=""
          fill
          className="object-contain scale-x-[-1]"
          loading="lazy"
        />
      </button>

      {/* RIGHT Floating Next Button */}
      <button
        className="absolute right-[5%] top-1/2 -translate-y-1/2 z-1 px-[2vw] py-[2.2vw] opacity-50 border-moss border-r-5 rounded-3xl bg-amber-50 transition-all duration-300 hover:scale-110 hover:opacity-100 disabled:opacity-40"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <Image
          src={'/right-arrow.svg'}
          alt=""
          fill
          className="object-contain"
          loading="lazy"
        />
      </button>
      {showIndicator && (
        <div className='w-[10vw] h-[15vw] top-[25vw] left-[15vw] absolute z-1 pointer-events-none box-border block motion-preset-oscillate motion-duration-1300'>
            <Image 
                src={'/pictures/tapme.png'}
                alt=''
                ref={imgRef}
                fill
                className='object-cover absolute'
            />
        </div>
      )}
      <div className="w-full px-[1vw]">
        <div className="flex flex-wrap justify-center -mx-[1vw]">

          {/* TITLE */}
          <motion.div 
            variants={slideUp}
            className="basis-[8%] max-w-[8%] px-4 relative z-1"
          >
            <div className="-rotate-90 absolute top-[20%] right-[-125%]">
              <h2 className="text-moss text-[5vw] text-right">Our&nbsp;Story</h2>
            </div>
          </motion.div>

          {/* GALLERY GRID */}
          <div className="basis-[91%] max-w-[91%] px-[1vw]">

            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                variants={pageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-[4vw] flex flex-wrap justify-around"
              >
                {visibleItems.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={imageVariants}
                    className={`relative inline-block grow-0 shrink-0 w-full min-h-[1px] ${item.className}`}
                  >
                    <ImageFlip
                      frontImageSrc={item.front}
                      backContent={item.back || undefined}
                      height={item.imageSize.height}
                      width={item.imageSize.width}
                    />

                    {/* FLOWER OVERLAY */}
                    {item.flower && (
                      <div
                        className="absolute z-1"
                        style={{
                          bottom: item.flower.bottom,
                          left: item.flower.left,
                          right: item.flower.right,
                          width: item.flower.w,
                          height: item.flower.h,
                        }}
                      >
                        <Image
                          src={item.flower.src}
                          alt=""
                          fill
                          className="object-contain"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* PAGE COUNTER */}
            <motion.div 
              variants={slideUp}
              className="flex justify-center mt-[10vw] font-georgia font-bold text-moss text-[1vw]"
            >
              Page {currentPage} / {totalPages}
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;
