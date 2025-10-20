import React from 'react'
import Image from 'next/image'
import ImageFlip from './small_components/ImageFlip';

const Gallery = () => {
  return (
    <section id='gallery' className='hidden md:flex pt-[2.5rem] pb-[2.5rem] mb-[1rem] mt-[5rem] relative justify-center flex-wrap box-border'>
        {/* CONTAINER */}
        <div className='grow-0 shrink-0 basis-full max-w-full relative w-full min-h[1px] pr-4 pl-4 box-border block'>
            <div className='justify-center flex flex-wrap -mr-4 -ml-4 box-border'>
                {/* LEFT CONTAINER */}
                <div className='grow-0 shrink-0 basis-[8%] max-w-[8%] relative w-full min-h[1px] pr-4 pl-4 box-border block'>
                    {/* TITLE */}
                    <div className='-rotate-90 absolute box-border block top-[15rem] left-[-10rem]'>
                        <h2 className='text-moss text-[6rem] relative text-right block box-border'>Our&nbsp;Story</h2>
                    </div>
                </div>
                {/* RIGHT CONTAINER */}
                <div className='grow-0 shrink-0 basis-[91%] max-w-[91%] relative w-full min-h[1px] pr-4 pl-4 box-border block'>
                    {/* INNER CONTAINER */}
                    <div className='mt-[5rem] justify-around flex flex-wrap'>
                        <div className='h-[502px] ml-[4rem] relative text-center inline-block grow-0 shrink-0 basis-[41%] max-w-full w-full min-h-[1px] box-border'>
                            {/* IMAGE 1 */}
                            <ImageFlip frontImageSrc={'/pictures/couple-1.jpg'} backContent={undefined} height={502} width={400}/>
                            {/* FLOWER */}
                            <div className='bottom-[-4rem] right-[10rem] w-[9rem] h-[10.5rem] absolute z-1 box-border'>
                                <Image 
                                    src={'/flowers/floater_12.png'}
                                    alt=''
                                    fill
                                    className='object-cover'
                                />
                            </div>
                        </div>
                        <div className='h-[502] mt-[10rem] relative inline-block grow-0 shrink-0 basis-[41%] max-w-[41%] w-full min-h-[1px] box-border'>
                            {/* IMAGE 2 */}
                            <ImageFlip frontImageSrc={'/pictures/couple-2.jpg'} backContent={undefined} height={502} width={400}/>
                            {/* FLOWER */}
                            <div className='bottom-[-3rem] right-[6rem] w-[10rem] h-[6rem] absolute z-1 box-border'>
                                <Image 
                                    src={'/flowers/floater_13.png'}
                                    alt=''
                                    fill
                                    className='object-contain'
                                />
                            </div>
                        </div>
                        <div className='h-[502] text-right mt-[5rem] relative inline-block grow-0 shrink-0 basis-[50%] max-w-[50%] w-full min-h-[1px] box-border'>
                            {/* IMAGE 3 */}
                            <ImageFlip frontImageSrc={'/pictures/couple-3.jpg'} backContent={undefined} height={502} width={400}/>
                            {/* FLOWER */}
                            <div className='bottom-[-3rem] right-[6=rem] w-[12rem] h-[8rem] absolute z-1 box-border'>
                                <Image 
                                    src={'/flowers/floater_14.png'}
                                    alt=''
                                    fill
                                    className='object-contain'
                                />
                            </div>
                        </div>
                        <div className='h-[502] mt-[18rem] pl-[2rem] pr-[2rem] relative inline-block grow-0 shrink-0 basis-[50%] max-w-[50%] w-full min-h-[1px] box-border'>
                            {/* IMAGE 3 */}
                            <ImageFlip frontImageSrc={'/pictures/couple-4.jpg'} backContent={undefined} height={502} width={400}/>
                            {/* FLOWER */}
                            <div className='bottom-[-3rem] left-[2rem] w-[6rem] h-[8rem] absolute z-1 box-border'>
                                <Image 
                                    src={'/flowers/floater_15.png'}
                                    alt='' 
                                    fill
                                    className='object-fit'
                                />
                            </div>
                        </div>
                        <div className='h-[502] mt-[10rem] pl-[2rem] pr-[2rem] relative text-center inline-block grow-0 shrink-0 basis-[50%] max-w-[50%] w-full min-h-[1px] box-border'>
                            {/* IMAGE 3 */}
                            <ImageFlip frontImageSrc={'/pictures/couple-5.jpg'} backContent={undefined} height={502} width={400}/>
                            {/* FLOWER */}
                            <div className='bottom-[-4rem] left-[15rem] w-[12rem] h-[10rem] absolute z-1 box-border'>
                                <Image 
                                    src={'/flowers/floater_16.png'}
                                    alt=''
                                    fill
                                    className='object-fit'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery