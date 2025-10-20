import React from 'react'
import DropdownCheckbox from './small_components/DropdownCheckbox';
import Image from 'next/image'
import DropdownRadioButton from './small_components/DropdownRadioButton';

const RSVPM = () => {

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
    <section className='min-h-[315px] pb-[1rem] mt-[12rem] relative justify-center flex flex-wrap box-border lg:hidden md:hidden'>
        {/* FLOWER */}
        <div id='rsvpM' className='w-[12rem] h-[16rem] top-[-27%] left-[20%] rotate-275 absolute z-1 pointer-events-none box-border block intersect-once intersect:motion-preset-slide-down motion-duration-1000'>
            <Image 
                src={'/flowers/floater_7.png'}
                alt=''
                fill
                className='object-cover'
            />
        </div>
        <div className='box-border absolute top-0 left-0 z-0 block intersect-once intersect:motion-preset-slide-right motion-duration-1000'>
            {/* TITLE */}
            <h2 className='-rotate-90 relative margin-0 whitespace-nowrap text-ellipsis z-0 pb-[0.5rem] top-[8rem] left-[-2.7rem] text-[3.2rem] leading-[0.9] text-moss'>RSVP</h2>
        </div>
        {/* CONTENT CONTAINER */}
        <div className='ml-auto pl-0 pr-0 z-0 grow-0 shrink-0 basis-[70%] max-w-[70%] relative w-[100%] min-h-[1px] box-border block bg-amber-50'>
            {/* ROW CONTAINTER */}
            <div className='mr-0 ml-0 box-border justify-end flex flex-wrap intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
              {/* RSVP */}
              <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pt-[1rem] box-border block'>
                  <div className='mr-auto ml-auto pl-[15px] pr-[15px] w-[100%] box-border block h-auto mb-[4rem] relative'>
                      {/* NAME FORM */}
                      <div className='text-left font-georgia text-moss pt-[1.5rem] mb-[1.5em] relative box-border text-[1.125rem] leading-[1.7]'>
                          <span className='whitespace-normal inline text-ellipsis overflow-hidden'>I,</span>
                          <span className='whitespace-normal inline text-ellipsis overflow-hidden'>
                              <input type="text" placeholder='your name here' className='bg-white w-[97%] h-[2.5rem] inline-block pl-[1rem] mb-[0.5rem] outline-none appearance-none border-2 border-shadow'/>
                          </span>
                          <span className='whitespace-normal inline text-ellipsis overflow-hidden'>,</span>
                          <DropdownRadioButton options={options} defaultValue="am attending" onChange={handleDropdownChange} width={97}/>
                          <span>the festivities.</span>                         
                      </div>
                      {/* EVENT FORM
                      <div className='text-left font-georgia text-moss mb-[3rem] relative box-border text-[1.125rem] leading-[1.5]'>
                          <span className='whitespace-normal inline text-ellipsis overflow-hidden'>I will be attending
                          </span>
                          <DropdownCheckbox options={availableOptions} onSelectionChange={handleSelection}/>                   
                      </div> */}
                      {/* CONTACT FORM */}
                      <div className='text-left font-georgia text-moss pb-[1.5em] relative box-border text-[1.125rem] leading-[1.7]'>
                          <span className='whitespace-normal inline text-ellipsis overflow-hidden'>You can ping me, ring me, or bring me more info at:</span>
                          <span className='whitespace-normal inline text-ellipsis overflow-hidden'>
                              <input type="text" placeholder='my_email@example.com' className='bg-white w-[97%] h-[2.5rem] inline-block pl-[1rem] mb-[0.5rem] outline-none appearance-none border-2 border-shadow'/>
                              <input type="text" placeholder='09123456789' className='bg-white w-[97%] h-[2.5rem] inline-block pl-[1rem] mb-[0.5rem] outline-none appearance-none border-2 border-shadow'/>
                          </span>                         
                      </div>
                      <button className='p-[0.5rem] text-center block w-[98%] border border-shadow text-moss text-[1.125rem] leading-[1.7] bg-shadow font-georgia box-border focus:outline-none focus:ring-2 focus:ring-moss focus:border-moss'>submit</button>
                  </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default RSVPM