import React, { useState } from 'react'
import Image from 'next/image'
import DropdownButton from './small_components/DropdownButton';

const FAQs = () => {

  return (
    <section id='faqsM' className='min-h-[315px] pb-[1rem] mt-[8rem] relative justify-center flex flex-wrap box-border lg:hidden md:hidden'>
        {/* FLOWER */}
        <div className='w-[12rem] h-[10rem] top-[95%] left-[-2%] rotate-275 absolute z-1 pointer-events-none box-border block intersect-once intersect:motion-preset-slide-down motion-duration-1000'>
            <Image 
                src={'/flowers/floater_8.png'}
                alt=''
                fill
                className='object-cover'
            />
        </div>
            <div className='box-border absolute top-0 left-0 z-0 block intersect-once intersect:motion-preset-slide-right motion-duration-1000'>
                {/* TITLE */}
                <h2 className='-rotate-90 relative margin-0 whitespace-nowrap text-ellipsis z-2 pb-[0.5rem] top-[8rem] left-[-1rem] text-[3.2rem] leading-[0.9] text-moss'>FAQs</h2>
            </div>
        {/* CONTENT CONTAINER */}
        <div className='ml-auto pl-0 pr-0 z-0 grow-0 shrink-0 basis-[70%] max-w-[70%] absolute w-[100%] min-h-[1px] left-[30%] box-border block bg-amber-50'>
            {/* ROW CONTAINTER */}
            <div className='mr-0 ml-0 box-border justify-end flex flex-wrap intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
              {/* FAQs */}
              <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pt-[1rem] box-border block'>
                  <div className='w-[100%] box-border block'>
                        <div className='text-left font-georgia text-moss pb-[1.5em] relative box-border text-[1.125rem] leading-[1.5]'>
                            <span className='whitespace-normal inline text-ellipsis overflow-hidden'>
                                <div className="h-max-[90rem] w-[100%] mb-3">
                                    <div className='intersect-once intersect:motion-preset-slide-left motion-duration-1000'><DropdownButton question={'Do I have a plus-one?'} answer={'Lorem Ipsum'} /></div>
                                    <div className='intersect-once intersect:motion-preset-slide-left motion-duration-1300'><DropdownButton question={'Are children invited?'} answer={'Lorem Ipsum'} /></div>
                                    <div className='intersect-once intersect:motion-preset-slide-left motion-duration-1500'><DropdownButton question={'When do I need to RSVP by?'} answer={'Lorem Ipsum'} /></div>
                                    <div className='intersect-once intersect:motion-preset-slide-left motion-duration-1800'><DropdownButton question={"What if I can no longer attend after I've RSVP'd yes?"} answer={'Lorem Ipsum'} /></div>
                                    <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><DropdownButton question={"What time should I arrive?"} answer={'Lorem Ipsum'} /></div>
                                    <div className='intersect-once intersect:motion-preset-slide-left motion-duration-1400'><DropdownButton question={"Where are the ceremony and reception located?"} answer={'Lorem Ipsum'} /></div>
                                    <div className='intersect-once intersect:motion-preset-slide-left motion-duration-1700'><DropdownButton question={"Can I take photos during the ceremony or reception?"} answer={'Lorem Ipsum'} /></div>
                                    <div className='intersect-once intersect:motion-preset-slide-left motion-duration-3000'><DropdownButton question={"Do I need to bring a gift?"} answer={'We are truly blessed for all we have, so your presence and prayers are all we request. If you desire to give nonetheless, we suggest monetary gift.'} /></div>
                                </div>
                            </span>               
                        </div>
                  </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default FAQs