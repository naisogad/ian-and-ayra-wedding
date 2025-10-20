import React from 'react'
import Image from 'next/image'
import DropdownButton from './small_components/DropdownButton';

const FAQs = () => {
  return (
    <section id='faqs' className='hidden md:flex flex-wrap min-h-[609px] pt-[2.5rem] pb-[2.5rem] mb-[10rem] mt-[20rem] relative justify-center -mr-4 -ml-4 box-border'>
        <div className='grow-0 shrink-0 basis-full min-w-full relative w-full min-h-[1px] pr-4 pl-4 box-border block'>
            {/* FLOWER */}
            <div className='w-[17rem] h-[24rem] top-[0rem] left-[-4rem] absolute box-border block'>
                <Image 
                     src={'/flowers/floater_17.png'}
                     alt=''
                     fill
                     className='object-cover'
                />
            </div>
            {/* CONTENT */}
            <div className='justify-around flex flex-wrap -mr-4 -ml-4 box-border'>
                {/* LEFT CONTAINER */}
                <div className='grow-0 shrink-0 basis-[33%] min-w-[33%] relative w-full min-h-[1px] pr-4 pl-4 box-border block'>
                    {/* TITLE */}
                    <div className='box-border block relative'>
                        <h2 className='text-moss text-[6rem] absolute leading-[1.1] -rotate-90 top-[10rem] left-[7rem]'>FAQs</h2>
                    </div>
                </div>
                {/* RIGHT CONTAINER */}
                <div className='grow-0 shrink-0 basis-[66%] min-w-[66%] relative w-full min-h-[1px] pr-4 pl-4 box-border block bg-amber-50'>
                    {/* FAQs */}
                    <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pt-[1rem] box-border block'>
                        <div className='w-[100%] box-border block'>
                            <div className='text-left font-georgia text-moss pb-[1.5em] relative box-border text-[1.125rem] leading-[1.5]'>
                                <span className='whitespace-normal inline text-ellipsis overflow-hidden'>
                                    <div className="h-max-[90rem] w-[100%] mb-3">
                                        <DropdownButton question={'Do I have a plus-one?'} answer={'Lorem Ipsum'} />
                                        <DropdownButton question={'Are children invited?'} answer={'Lorem Ipsum'} />
                                        <DropdownButton question={'When do I need to RSVP by?'} answer={'Lorem Ipsum'} />
                                        <DropdownButton question={"What if I can no longer attend after I've RSVP'd yes?"} answer={'Lorem Ipsum'} />
                                        <DropdownButton question={"What time should I arrive?"} answer={'Lorem Ipsum'} />
                                        <DropdownButton question={"Where are the ceremony and reception located?"} answer={'Lorem Ipsum'} />
                                        <DropdownButton question={"Can I take photos during the ceremony or reception?"} answer={'Lorem Ipsum'} />
                                        <DropdownButton question={"Do I need to bring a gift?"} answer={'We are truly blessed for all we have, so your presence and prayers are all we request. If you desire to give nonetheless, we suggest monetary gift.'} />
                                    </div>
                                </span>               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FAQs