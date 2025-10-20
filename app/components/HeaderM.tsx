"use client"
import React from 'react'
import Image from 'next/image'

const HeaderM = () => {
  return (
    <section id='top' className='pb-[15rem] relative mt-5 justify-center flex flex-wrap box-border lg:hidden md:hidden'>
        <div className='top-[5rem] h-auto z-1 pr-0 pl-0 relative w-screen box-border block'>
            {/* HEADER 1 */}
            <div className='relative flex flex-wrap justify-self-end mb-[92px] w-[95%] box-border h-auto min-h-[20rem] motion-preset-slide-left motion-duration-1000'>
                {/* IMAGE 1 */}
                <Image
                    alt=''
                    src={'/pictures/photo-1.jpg'}
                    fill
                    className='object-cover object-[0%_80%]'
                />
            </div>
            {/* DATE */}
            <div className='relative w-screen mt-[5rem] box-border block break-words text-right motion-preset-slide-right motion-duration-2000'>
                <p className='top-[65px] left-[-55px] block text-[1.4rem] text-moss transform -rotate-90 absolute z-2 mt-0 mb-[1rem]
                space-y-[1em] space-x-[0px] break-words text-right'>November 28, 2025</p>
            </div>
            {/* IMAGE 2 */}
            <div className='w-[80%] max-w-[80%] h-[0%] relative ml-auto box-border block min-h-[25%] align-middle motion-preset-slide-left motion-duration-2000'>
                <Image 
                    alt=''
                    src={'/pictures/photo-2.jpg'}
                    fill
                    className='object-cover object-[0%_80%]'
                />
            </div>
            {/* FLOWER 1 */}
            <div className='w-[11rem] h-[14rem] bottom-[10%] left-[55%] relative z-1 box-border motion-preset-slide-up motion-duration-2200'>
                <Image 
                    alt=''
                    src={'/flowers/floater_1.png'}
                    fill
                    className='object-cover'
                />
            </div>
            {/* TITLE */}
            <div className='left-[1rem] absolute top-[0px] w-[100%] text-left box-border block inert:h-auto min-h-[100vh] motion-preset-slide-right motion-duration-1000'>
                <h1 className='relative z-2 mt-[6rem] min-h-[7rem] drop-shadow-[3px_2px_rgba(255,255,255)] text-[3.5rem] leading-[1.2] text-moss mb-[0.5rem] box-border
                block space-x-[0px] text-left'>
                Ian
                <br />
                <a className='font-greatVibesR text-[4rem]'>&nbsp; &</a>
                <br />
                Ayra
                </h1>
            </div>
        </div>
    </section>
  )
}

export default HeaderM