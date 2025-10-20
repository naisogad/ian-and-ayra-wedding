import React from 'react'
import Image from 'next/image'
import DropdownRadioButton from './small_components/DropdownRadioButton';

const RSVP = () => {
    const availableOptions = [
    { label: 'preparation', value: 'preparation' },
    { label: 'ceremony', value: 'ceremony' },
    { label: 'reception', value: 'reception' },
    ];

    const handleSelection = (selected) => {
        console.log('Selected Options:', selected);
        // Do something with the selected options
    };

    const options = [
        { value: 'am attending', label: 'am attending' },
        { value: 'am not attending', label: 'am not attending' },
    ];

    const handleDropdownChange = (selectedValue) => {
        console.log('Selected:', selectedValue);
    };

  return (
    <section className='hidden md:flex pb-[1rem] pt-[2.5rem] mb-[1rem] relative justify-center flex-wrap -mr-4 -ml-4 box-border mt-[5rem]'>
        {/* MAIN CONTAINER */}
        <div id='rsvp' className='h-[5rem] w-full'></div>
        <div className='h-[10rem] w-full '></div>
        <div className='grow-0 shrink-0 basis-full min-w-full relative w-full min-h-[1px] pr-4 pl-4 box-border block'>
            <div className='justify-end flex flex-wrap -ml-4 -mr-4 box-border'>
                {/* LEFT CONTAINER */}
                <div className='grow-0 shrink-0 basis-[50%] min-w-[50%] relative w-full min-h-[1px] pr-4 pl-4 box-border block'>
                    <div className='box-border block text-moss'>
                        {/* CONTENT */}
                        <div className='text-[1.125rem] leading-[1.7] text-left font-georgia float-none box-border block'>
                            <div className='relative pb-[1.5rem] box-border block'>
                                {/* NAME FORM */}
                                <span className='whitespace-normal inline text-ellipsis overflow-hidden'>I, </span>
                                <span className='whitespace-normal inline text-ellipsis overflow-hidden'>
                                    <input type="text" placeholder='your name here' className='bg-white w-[60%] h-[2.5rem] inline-block pl-[1rem] mb-[0.5rem] outline-none appearance-none border-2 border-shadow'/>
                                </span>
                                <span className='whitespace-normal inline text-ellipsis overflow-hidden'>,</span>
                                <span className='flex pb-[4rem]'>
                                    <DropdownRadioButton options={options} defaultValue="am attending" onChange={handleDropdownChange} width={60}/>&nbsp; 
                                    the festivities.
                                </span>
                                {/* CONTACT FORM */}
                                <div className='text-left font-georgia text-moss pb-[1.5em] relative box-border text-[1.125rem] leading-[1.7]'>
                                <span className='whitespace-normal inline text-ellipsis overflow-hidden'>You can ping me, ring me, or bring me more info at:</span>
                                <span className='whitespace-normal inline text-ellipsis overflow-hidden'>
                                    <input type="text" placeholder='my_email@example.com' className='bg-white w-[60%] h-[2.5rem] inline-block pl-[1rem] mt-[0.5rem] mb-[0.5rem] outline-none appearance-none border-2 border-shadow'/>
                                    <input type="text" placeholder='09123456789' className='bg-white w-[60%] h-[2.5rem] inline-block pl-[1rem] mb-[0.5rem] outline-none appearance-none border-2 border-shadow'/>
                                </span>                         
                                </div>
                                <button className='p-[0.5rem] text-center block w-[30%] border border-shadow text-moss text-[1.125rem] leading-[1.7] bg-shadow font-georgia box-border focus:outline-none focus:ring-2 focus:ring-moss focus:border-moss'>submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* RIGHT CONTAINER */}
                <div className='grow-0 shrink-0 basis-[16%] min-w-[16%] relative w-full min-h-[1px] pr-4 pl-4 box-border block'>
                    <div className='box-border block'>
                        <h2 className='top-[-2rem] left-[-10rem] -rotate-90 text-moss text-[6rem] absolute'>RSVP</h2>
                    </div>
                </div>
            </div>
            {/* FLOWER */}
            <div className='w-[18rem] h-[32rem] left-[4rem] top-[4rem] absolute box-border block'>
                <Image 
                    src={'/flowers/floater_10.png'}
                    alt=''
                    fill
                     className='object-cover'
                />
            </div>
        </div>
    </section>
  )
}

export default RSVP