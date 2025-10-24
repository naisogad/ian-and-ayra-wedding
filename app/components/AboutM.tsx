import React from 'react'

const AboutM = () => {
  return (
    <section className='pt-[4rem] pb-[4rem] pr-[0.5rem] relative flex flex-wrap box-border lg:hidden md:hidden'>
        {/* WELCOME */}
        <div className='absolute z-1 box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>
            <h2 className='text-moss relative -rotate-90 m-0 whitespace-nowrap z-2 text-ellipsis pb-[0.5rem] top-[10rem] left-[-2.3rem] text-[3.2rem] leading-[0.9] text-right box-border block'>Welcome</h2>
        </div>
        {/* CONTAINER */}
        <div className='z-1 ml-auto grow-0 shrink-0 basis-[73%] max-w-[73%] relative w-full min-h-[1px] pl-[0px] pr-[0px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
            {/* MESSAGE */}
            <div className='justify-end flex flex-wrap box-border'>
                <div className='ml-auto grow-0 shrink-0 basis-[100%] max-w-[100%] pl-[15px] pr-[15px] box-border block bg-amber-50'>
                    <div className='text-[1.125rem] leading-[1.5] text-moss box-border block'>
                        <p className='mt-[0.5rem] break-words relative z-2 text-left mb-[1rem] block intersect-once intersect:motion-preset-slide-left motion-duration-1200'>Hello everyone! <br /> </p>
                        <p className='mt-[0.5rem] break-words relative z-2 text-left mb-[1rem] block intersect-once intersect:motion-preset-slide-left motion-duration-1400'>We’re so excited to be getting married and to share this special journey with our favorite people—you! Your presence means the world to us.<br /> </p>
                        <p className='mt-[0.5rem] break-words relative z-2 text-left mb-[1rem] block intersect-once intersect:motion-preset-slide-left motion-duration-1600'>This site has all the wedding details and helpful info you’ll need.<br /> </p>
                        <p className='mt-[0.5rem] break-words relative z-2 text-left mb-[1rem] block intersect-once intersect:motion-preset-slide-left motion-duration-1800'>Thank you for your love and support—we can’t wait to celebrate with you on our big day! 💍✨</p>
                        <p className='mt-[0.5rem] whitespace-normal text-clip break-words relative z-2 text-left mb-[1rem] box-border block font-semibold intersect-once intersect:motion-preset-slide-left motion-duration-2000'>- Ian & Ayra</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutM