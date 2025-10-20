import React, { useState } from 'react';
import Image from 'next/image'

const ImageC = ({ frontImageSrc, width, height, alt = "Flipping card" }) => {
  return (
    <section>
        {/* IMAGE 1 */}
        <div
            className="group cursor-pointer pt-3"
            style={{ perspective: '1000px', width: `${width}px`, height: `${height}px` }}
            role="button" // Better semantics than just a div
            tabIndex={0}  // Make it focusable
            aria-label={alt}
        >
             <div
                    className={`pr-[0%] pl-[0%] relative w-full h-full transition-transform duration-700 ease-in-out`}
                    style={{ transformStyle: 'preserve-3d' }} // Essential for 3D effect
            >
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[92.5%] shadow-xl min-h-full pl-[15px] pr-[15px] box-border block bg-white' style={{ backfaceVisibility: 'hidden' }}>
                    <Image 
                        src={frontImageSrc}
                        alt=''
                        fill
                        className='object-contain'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ImageC