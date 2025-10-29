'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

const GiftM = () => {
  const [showModal, setShowModal] = useState(false);

  // 🪄 Lock background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
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
      className="min-h-[600px] pt-[12rem] pr-[0.5rem] pb-[2rem] mb-10 relative justify-center flex flex-wrap box-border lg:hidden md:hidden"
    >
      {/* Decorative Flower */}
      <div className="w-[12rem] h-[12rem] top-[4%] left-[60%] absolute z-1 pointer-events-none box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000">
        <Image alt="" src="/flowers/floater_5.png" fill className="object-cover" />
      </div>

      {/* Title */}
      <div className="absolute top-10 left-0 z-0 box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000">
        <h2 className="text-moss -rotate-90 relative m-0 whitespace-nowrap text-ellipsis z-0 pb-[0.5rem] top-[22rem] left-[-4rem] text-[3.2rem] leading-[0.9]">
          Gift Guide
        </h2>
      </div>

      {/* Content */}
      <div
        id="themeM"
        className="z-0 pr-0 pl-0 ml-auto grow-0 shrink-0 basis-[70%] max-w-[70%] relative w-[100%] min-h-[1px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000"
      >
        <div className="ml-0 mr-0 justify-end flex flex-wrap box-border">
          <div className="grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pt-[3rem] box-border block bg-amber-50 rounded-2xl shadow-md p-4">
            
            {/* Paragraph */}
            <div className="box-border block text-left px-[15px] mb-[2rem] intersect-once intersect:motion-preset-slide-left motion-duration-1500">
              <p className="text-moss text-[1.125rem]">
                Your presence at our wedding is already the greatest gift we could ask for. ✨ <br />
                <br />
                But if you wish to bless us in another way, we’ve prepared a simple way to share your love through a monetary gift — a seed we’ll cherish as we build our life together. 🌾
              </p>
            </div>

            {/* Button */}
            <div className="text-center">
              <button
                onClick={() => setShowModal(true)}
                className="bg-moss font-georgia text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-moss/90 transition-all duration-300"
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
              className="fixed inset-0 bg-moss/40 backdrop-blur-[6px] z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={() => setShowModal(false)}
            />

            {/* Frosted Modal */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.1, ease: 'easeInOut' }}
            >
              <div
                className="bg-white/90 backdrop-blur-md border border-moss/20 shadow-2xl rounded-2xl max-w-[90%] w-[22rem] max-h-[85vh] overflow-y-auto p-6 relative text-center scrollbar-thin scrollbar-thumb-moss/40 scrollbar-track-transparent"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-moss text-2xl mb-4 font-georgia font-semibold">
                  Seeds of Blessing 🌱
                </h3>

                <p className="text-moss text-[1.125rem] text-center mb-4">
                  You may send your love and blessing through:
                </p>

                <div className="text-center">
                  <p className="text-moss text-[1.125rem] mb-2">
                    <span className="font-semibold">GCash:</span> 0916-456-8604
                  </p>

                  <div className="relative w-full h-[15rem] mt-4 mb-4">
                    <Image
                      src="/pictures/ian-gcash.jpg"
                      alt="GCash QR"
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>

                  <p className="text-moss text-[1.125rem] text-center mb-2">
                    <span className="font-semibold">BDO:</span> 0008-8033-2077
                  </p>

                  <div className="relative w-full h-[15rem] mt-4 mb-4">
                    <Image
                      src="/pictures/ian-bdo.jpg"
                      alt="BDO QR"
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setShowModal(false)}
                  className="bg-moss text-white font-georgia text-lg px-5 py-2 rounded-full hover:bg-moss/90 transition-all duration-300 mt-4"
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

export default GiftM;
