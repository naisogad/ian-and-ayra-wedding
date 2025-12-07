import React from 'react'
import Image from 'next/image'

const ThemeM = () => {
  return (
    <section className='min-h-[1px] pt-[6em] pb-[6em] relative flex flex-wrap box-border lg:hidden'>
        <div className='w-[10em] md:w-[12em] h-[10em] md:h-[12em] top-[-0.5em] right-[-1.6em] absolute z-1 pointer-events-none box-border'>
            <Image 
                alt=''
                src={'/flowers/floater_5.png'}
                fill
                className='object-cover'
            />
        </div>
        {/* TITLE */}
        <div className='absolute z-0 box-border block'>
            <h2 className='text-moss -rotate-90 relative whitespace-nowrap text-ellipsis z-0 pb-[0.5rem] top-[5em] left-[-2.6em] md:left-[-2.4em] text-[2.4em] md:text-[4.2em] leading-[0.9]'>Wedding Attire</h2>
        </div>
        {/* CONTENT */}
        <div id='themeM' className='z-0 ml-auto grow-0 shrink-0 basis-[70%] max-w-[70%] relative w-[100%] min-h-[1px] box-border'>
            <div className='justify-end flex flex-wrap box-border'>
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pt-[3em] box-border block bg-amber-50'>
                    {/* ROW */}
                    <div className='flex flex-wrap box-border'>
                        <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[1em] pr-[1em] box-border block'>
                            {/* TITLE */}
                            <div className='box-border block pl-[1em] pr-[1em] pt-[1.8em] md:pt-[1em]'>
                                <h3 className='text-moss text-[1.6em] md:text-[2em] leading-[1] pb-[0.8em] text-center'>Dress Code</h3>
                            </div>
                            {/* IMAGE */}
                            <div className='w-[100%] h-[15em] relative z-1 pointer-events-none box-border block'>
                                <Image 
                                    src={'/pictures/dc-1.png'}
                                    alt=''
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            {/* CONTENT */}
                            <div className='box-border block text-left pt-[1em] pl-[1em] pr-[1em] mb-[1em]'>
                                <p className='text-moss text-[0.9em] md:text-[1.125em]'>We kindly ask our guests to dress in semi-formal or smart casual attire for our special day.</p>
                            </div>
                            <div className='box-border block text-left pl-[1em] pr-[1em] mb-[1em]'>
                                <p className='text-moss text-[0.9em] md:text-[1.125em]'><a className='font-semibold inline-block'>For the Ladies:</a> Feel effortlessly elegant in a flowy dress or chic jumpsuit—perfect for day-to-night celebration vibes. Pair with comfy heels or flats and your prettiest smile. ✨</p>
                            </div>
                            <div className='box-border block text-left pl-[1em] pr-[1em] mb-[4rem]'>
                                <p className='text-moss text-[0.9em] md:text-[1.125em]'><a className='font-semibold inline-block'>For the Gentlemen:</a> Aim for a clean and classic look — something comfortable, coordinated, and event-appropriate. Whether it’s a dress shirt, polo, or simple blazer and khaki or slacks, just come looking your best. 👔</p>
                            </div>
                            {/* TITLE */}
                            <div className='box-border block pl-[1em] pr-[1em]'>
                                <h3 className='text-moss text-[1.6em] md:text-[2em] leading-[1.5] text-center'>Color Motif</h3>
                            </div>
                            {/* DETAIL */}
                            <div className='box-border block text-left pl-[1em] pr-[1em] mt-[3em]'>
                                <p className='text-moss text-[0.9em] md:text-[1.125em]'>Our wedding will feature these elegant colors. We kindly ask that you skip the color black. Have fun mixing and matching the colors from our palette for your look! <br /> <br /> Lastly guests, wear your best accessories. Your smiles and lively personalities.</p>
                            </div>
                            {/* COLORS */}
                            <div className='flex flex-wrap justify-evenly gap-[2em] text-center mt-[3em] mb-[3em]'>
                                {/* Guests palette */}
                                <div className='flex flex-col items-center box-border'>
                                    <div className='flex'>
                                        <div className='bg-coffee w-[2.5em] h-[8em]'></div>
                                        <div className='bg-espresso w-[2.5em] h-[8em]'></div>
                                        <div className='bg-caramel w-[2.5em] h-[8em]'></div>
                                        <div className='bg-hazelnut-brown w-[2.5em] h-[8em]'></div>
                                        <div className='bg-nude-cola w-[2.5em] h-[8em]'></div>
                                    </div>
                                    <p className='text-moss text-[0.9em] md:text-[1.125em] mt-[1em]'>Guests</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ThemeM