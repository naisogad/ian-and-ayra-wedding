import React from 'react'
import Image from 'next/image'
import ImageC from './small_components/ImageC';

const GiftM = () => {
  return (
    <section className='min-h-[600px] pt-[12rem] pr-[0.5rem] pb-[2rem] mb-10 relative justify-center flex flex-wrap box-border lg:hidden md:hidden'>
            <div className='w-[12rem] h-[12rem] top-[4%] left-[60%] absolute z-1 pointer-events-none box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                <Image 
                    alt=''
                    src={'/flowers/floater_5.png'}
                    fill
                    className='object-cover'
                />
            </div>
            {/* TITLE */}
            <div className='absolute top-10 left-0 z-0 box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'>
                <h2 className='text-moss -rotate-90 relative m-0 whitespace-nowrap text-ellipsis z-0 pb-[0.5rem] top-[22rem] left-[-7rem] text-[3.2rem] leading-[0.9]'>Gift Registry</h2>
            </div>
            {/* CONTENT */}
            <div id='themeM' className='z-0 pr-0 pl-0 ml-auto grow-0 shrink-0 basis-[70%] max-w-[70%] relative w-[100%] min-h-[1px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                <div className='ml-0 mr-0 justify-end flex flex-wrap box-border'>
                    <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pt-[3rem] box-border block bg-amber-50'>
                        {/* ROW */}
                        <div className='mr-0 ml-0 flex flex-wrap box-border'>
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pr-[15px] box-border block'>
                                {/* TITLE */}
                                <div className='box-border block pl-[15px] pr-[15px] pb-8 intersect-once intersect:motion-preset-slide-left motion-duration-1300'>
                                    <h3 className='text-moss text-[2rem] leading-[2] text-center'>Seeds of Blessing</h3>
                                </div>
                                {/* CONTENT */}
                                <div className='box-border block text-left pl-[15px] pr-[15px] mb-[2rem] intersect-once intersect:motion-preset-slide-left motion-duration-1500'>
                                    <p className='text-moss text-[1.125rem]'>Your presence at our wedding is already the greatest gift we could ask for. ✨ <br /><br /> But if you wish to bless us in another way, we’ve prepared a simple way to share your love through a monetary gift — a seed we’ll cherish as we build our life together. 🌾</p>
                                </div>
                                <div className='box-border block text-left pl-[15px] pr-[15px] mb-[0.3rem] intersect-once intersect:motion-preset-slide-left motion-duration-1800'>
                                    <p className='text-moss text-[1.125rem]'><a className='font-semibold inline-block'>GCash:</a> 0916-456-8604</p>
                                </div>
                                {/* IMAGE 1 */}
                                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[20rem] pl-[15px] pr-[15px] mb-[0.3rem] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    src={'/pictures/ian-gcash.jpg'}
                                    alt=''
                                    fill
                                    className='object-contain'
                                />
                                </div>
                                <div className='box-border block text-left pl-[15px] pr-[15px] mb-[0.3rem] intersect-once intersect:motion-preset-slide-left motion-duration-2100'>
                                    <p className='text-moss text-[1.125rem]'><a className='font-semibold inline-block'>BDO:</a> 0008-8033-2077</p>
                                </div>
                                {/* IMAGE 1 */}
                                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[17rem] pl-[15px] pr-[15px] mb-[1.5rem] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    src={'/pictures/ian-bdo.jpg'}
                                    alt=''
                                    fill
                                    className='object-contain'
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

export default GiftM