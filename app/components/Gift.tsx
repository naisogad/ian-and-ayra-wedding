'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

const Gift = () => {
  const [showModal, setShowModal] = useState(false);

  // 🪄 Lock background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

  // ⌨️ Allow Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    if (showModal) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showModal]);

  return (
    <section
      id="giftGM"
      className="hidden lg:flex pt-[10vw] pb-[10vw] relative justify-center flex-wrap box-border"
    >
      {/* Decorative Flower */}
      <div className="w-[14vw] h-[12vw] top-[4%] left-[60%] absolute z-1 pointer-events-none box-border block">
        <Image alt="" src="/flowers/floater_8.png" fill className="object-cover" />
      </div>

      {/* Title */}
      <div className=" z-0 box-border block">
        <h2 className="text-moss relative m-0 whitespace-nowrap text-ellipsis z-0 text-[5vw] leading-[2.5]">
          Gift Guide
        </h2>
      </div>

      {/* Content */}
      <div
        id="themeM"
        className="z-0 grow-0 shrink-0 basis-[100%] max-w-[100%] relative min-h-[1px] box-border block"
      >
        <div className="ml-0 mr-0 justify-center flex flex-wrap box-border">
          <div className="grow-0 shrink-0 basis-[40%] max-w-[40%] relative min-h-[1px] pt-[1.5vw] box-border block bg-amber-50 rounded-2xl shadow-md p-[1vw]">
            
            {/* Paragraph */}
            <div className="box-border block text-center px-[1vw] mb-[1vw]">
              <p className="text-moss text-[1vw]">
                Your presence at our wedding is already the greatest gift we could ask for. ✨ <br />
                <br />
                But if you wish to bless us in another way, we’ve prepared a simple way to share your love through a monetary gift — a seed we’ll cherish as we build our life together. 🌾
              </p>
            </div>

            {/* Button */}
            <div className="text-center">
              <button
                onClick={() => setShowModal(true)}
                className="bg-moss font-georgia text-white px-[1.1vw] py-[0.4vw] rounded-full text-[1.15vw] shadow-md hover:bg-moss/90 transition-all duration-300"
              >
                See Gift Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* ✨ Soft Backdrop */}
            <motion.div
              className="fixed inset-0 bg-moss/40 backdrop-blur-[6px] z-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={() => setShowModal(false)}
            />

            {/* Frosted Modal */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-2 p-[1vw]"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.1, ease: 'easeInOut' }}
            >
              <div
                className="bg-white/90 backdrop-blur-md border border-moss/20 shadow-2xl rounded-2xl max-w-[90%] overflow-y-auto p-6 relative text-center scrollbar-thin scrollbar-thumb-moss/40 scrollbar-track-transparent"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-moss text-[1.4vw] mb-[1vw] font-georgia font-semibold">
                  Seeds of Blessing 🌱
                </h3>

                <p className="text-moss text-[1vw] text-center mb-[1vw]">
                  You may send your love and blessing through:
                </p>

                <div className="flex justify-center gap-5 text-center pl-[1.5vw] pr-[1.5vw]">
                  <div>
                    <p className="text-moss text-[1vw] mb-[0.6vw]">
                      <span className="font-semibold">GCash:</span> 0916-456-8604
                    </p>
                    <div className="relative w-full h-[15vw] mt-[1vw] mb-[1vw]">
                      <Image
                        src="/pictures/ian-gcash.jpg"
                        alt="GCash QR"
                        fill
                        className="object-contain rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-moss text-[1vw] text-center mb-2">
                      <span className="font-semibold">BDO:</span> 0008-8033-2077
                    </p>

                    <div className="relative w-full h-[15vw] mt-[1vw] mb-[1vw]">
                      <Image
                        src="/pictures/ian-bdo.jpg"
                        alt="BDO QR"
                        fill
                        className="object-contain rounded-xl"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-moss text-white font-georgia text-[1vw] px-[1vw] py-[0.5vw] rounded-full hover:bg-moss/90 transition-all duration-300 mt-[0.5vw]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gift;
