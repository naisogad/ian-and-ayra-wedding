import React from 'react'

const About = () => {
  return (
    <section className='hidden md:block min-h-[609px] pt-[2.5rem] pb-[2.5rem] justify-center flex-wrap ml-[-15px] mr-[-15px] mb-[8rem] box-border'>
        <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-full min-h-[1px] pl-[15px] pr-[15px] box-border block'>
            {/* ROW CONTENT */}
            <div className='justify-between flex flex-wrap ml-[-15px] mr-[-15px] box-border'>
                {/* WELCOME */}
                <div className='h-auto grow-0 shrink-0 basis-[100%] max-w-[25%] relative w-full min-h-[1px] pl-[15px] pr-[15px] box-border block intersect-once intersect:motion-preset-slide-up motion-duration-1000'>
                    <div className='h-[609px] w-[609px] -rotate-90 absolute top-[0rem] left-[8rem] box-border block'>
                        <h2 className='text-[6.87rem] relative z-2 text-moss text-right'>Welcome</h2>
                    </div>
                </div>
                {/* MESSAGE */}
                <div className='grow-0 shrink-0 basis-[66.66%] max-w-[66.66%] relative w-full min-h-[1px] p-4 box-border block bg-amber-50'>
                    <p className='text-moss text-[1.125rem] leading-[1.7] mt-0 mb-[1rem] intersect-once intersect:motion-preset-slide-left motion-duration-1000'>Hello everyone! <br /> <br />We’re so excited to be getting married and to share this special journey with our favorite people—you! Your presence means the world to us.<br /> <br />This site has all the wedding details and helpful info you’ll need.<br /> <br />Thank you for your love and support—we can’t wait to celebrate with you on our big day! 💍✨</p>
                    <p className='text-moss text-[1.125rem] leading-[1.7] mt-0 font-semibold intersect-once intersect:motion-preset-slide-left motion-duration-1200'>- Ayra & Ian</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About