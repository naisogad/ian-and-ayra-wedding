"use client"
import Image from 'next/image'
import React from 'react'

const Header = () => {

  return (
    <section id='top' className='hidden md:block min-h-screen pt-[5.5rem] pb-[2.5rem] mb-[1rem] relative justify-center flex-wrap mr-[15px] ml-[-15px]'>
        <div className='grow-0 shrink-0 basis-full max-w-full relative w-full min-h-[1px] pr-[15px] pl-[15px] block'>
            <div className='h-full justify-start flex flex-wrap mr-[-15px] ml-[-15px]'>
                <div className='grow-0 shrink-0 max-w-full relative w-full min-h-[1px] pr-[15px] pl-[15px] box-border'>
                    {/* IMAGE ROW 1 */}
                    <div className='mb-[2rem] min-h-[16rem] flex flex-wrap mr-[-15px] ml-[-15px]'>
                        <div className='grow-0 shrink-0 basis-[33%] max-w-[33%] relative w-full min-h-[1px] pr-[15px] pl-[15px] block'></div>
                        {/* IMAGE 1 */}
                        <div className='grow-0 shrink-0 basis-[58%] max-w-[58%] relative w-full min-h-[1px] pr-[15px] pl-[15px] block h-100 box-border motion-preset-slide-left motion-duration-1000'>
                            <Image
                                alt=''
                                src={'/pictures/photo-1.jpg'}
                                fill
                                className='object-cover object-[0%_65%]'
                            />
                        </div> 
                        {/* FLOWER 1    */}
                        <div className='w-[16rem] h-[19rem] top-[13rem] right-[2rem] absolute z-1 box-border motion-preset-slide-up motion-duration-1000'>
                            <Image
                                alt=''
                                src={'/flowers/floater_1.png'}
                                fill
                                className='object-cover'
                            />
                        </div>
                    </div>
                    {/* TITLE */}
                    <div className='absolute z-1 top-[10rem] flex flex-wrap mr-[-15px] ml-[15px] box-border motion-preset-slide-right motion-duration-1000'>
                        <h1 className='text-moss text-[5.6rem] drop-shadow-[3px_2px_rgba(255,255,255)]'>Ayra <a className='font-greatVibesR'>&</a> Ian</h1>
                    </div>
                    {/* IMAGE ROW 2 */}
                    <div className='flex flex-wrap mr-[-15px] ml-[-15px] box-border '>
                        <div className='h-[300px] grow-0 shrink-0 basis-[16%] max-w-[16%] relative w-full min-h-[1px] pr-[15px] pl-[15px] box-border block motion-preset-slide-up motion-duration-1000'>
                            {/* WEDDING DATE */}
                            <p className='text-moss w-[300px] h-[130px] -rotate-90 absolute top-[4rem] left-[-1rem] text-[1.625rem] tracking-[1px] leading-[1.7] mt-[0] mb-[1rem] box-border block space-y-[1em] space-x-[0px]'>November 28, 2025</p>
                        </div>
                        {/* IMAGE 2 */}
                        <div className='shrink-0 basis-[50%] max-w-[50%] relative w-full min-h-[1px] pr-[15px] pl-[15px] box-border block motion-preset-slide-left motion-duration-1000'>
                            <Image 
                                alt=''
                                src={"/pictures/photo-2.jpg"}
                                fill
                                className='object-cover'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header