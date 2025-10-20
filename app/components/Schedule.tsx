import Image from 'next/image'
import React, { useState } from 'react'

const Schedule = () => {

    const [activeItem, setActiveItem] = useState('p1');
          
        const handleItem = (item) => {
            if (activeItem === item) {
                // If the clicked item is already active, deactivate it (toggle off)
                setActiveItem('');
            } else {
                // If the clicked item is different, activate it
                setActiveItem(item);
            }
        };

  return (
    <section id='schedule' className='hidden md:flex pt-10 pb-10 relative justify-center flex-wrap -mr-4 -ml-4 box-border mt-[10rem]'>
        <div className='grow-0 shrink-0 basis-full max-w-full relative w-full min-h-1 box-border block'>
            {/* IMAGE */}
            <div className='top-0 -left-30 w-[19rem] h-[29rem] absolute box-border block'>
                <Image 
                    alt=''
                    src={'/flowers/floater_4.png'}
                    fill
                    className='object-cover'
                />
            </div>
            {/* CONTENT */}
            <div className='justify-center flex flex-wrap -mr-4 -ml-4 box-border'>
                {/* TITLE */}
                <div className='z-1 grow-0 shrink-0 basis-[91%] max-w-[91%] relative w-full min-h-1 pr-4 pl-4 box-border block'>
                    <div className='box-border block'>
                        <h2 className='text-moss leading-[1.1] text-right mb-0.5 block text-[6rem]'>Schedule</h2>
                    </div>
                </div>
                {/* EVENTS */}
                <div className='grow-0 shrink-0 basis-full max-w-full relative w-full min-h-1 pr-4 pl-4 box-border block'>
                    <div className='justify-end flex flex-wrap -mr-4 -ml-4 box-border font-georgia'>
                        {/* DATE */}
                        <div className='grow-0 shrink-0 basis-[91%] max-w-[91%] relative w-full min-h-0.5 pl-4 pr-4 box-border block'>
                            <div className='flex flex-wrap -mr-4 -ml-4 box-border mb-4'>
                                <div className='text-right grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pl-4 pr-4 box-border block'>
                                    <span className='text-moss text-[2rem] box-border font-medium'>Sunday, November 28</span>
                                </div>
                            </div>
                        </div>
                        {/* EVENT 1 */}
                        <div id='preparation' className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                            <div className='box-border block text-moss text-[2.5rem] leading-[2] font-calligraphyBrilliant mb-6'>
                                {/* TITLE */}
                                <a onClick={() => handleItem('p1')} className={`${activeItem === 'p1' &&  ('font-bold border-b-[7px] border-solid border-b-stain pb-[-1rem]')} hover:border-b-[7px] border-solid border-b-stain`} href='#preparation'>Preparation</a>
                            </div>
                        </div>
                        {/* DETAILS 1*/}
                        <div className='ml-[3.84rem] grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 box-border block'>
                        </div>
                        {activeItem === 'p1' && (
                            <div className={`justify-end flex flex-wrap -mr-4 -ml-4 box-border`}>
                                {/* TIME 1*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                                    <ul className='mb-4 block'>
                                        <li>
                                            <p className='text-moss leading-[1.7] text-[1.125rem] mb-4 box-border block'>09:00am</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* DETAILS */}
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 bg-amber-50 box-border block'>
                                    {/* CONTENT */}
                                    <div className='box-border block text-moss'>
                                        {/* TITLE */}
                                        <a className='text-[1.8rem]'>Lorem</a>
                                        {/* DESCRIPTION */}
                                        <p className='leading-[1.7] text-[1.125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                {/* TIME 2*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                                    <ul className='mb-4 block'>
                                        <li>
                                            <p className='text-moss leading-[1.7] text-[1.125rem] mb-4 box-border block'>10:00am</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* DETAILS */}
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 bg-amber-50 box-border block'>
                                    {/* CONTENT */}
                                    <div className='box-border block text-moss'>
                                        {/* TITLE */}
                                        <a className='text-[1.8rem]'>Ipsum</a>
                                        {/* DESCRIPTION */}
                                        <p className='leading-[1.7] text-[1.125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                {/* TIME 3*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                                    <ul className='mb-4 block'>
                                        <li>
                                            <p className='text-moss leading-[1.7] text-[1.125rem] mb-4 box-border block'>11:00am</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* DETAILS */}
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 bg-amber-50 box-border block'>
                                    {/* CONTENT */}
                                    <div className='box-border block text-moss'>
                                        {/* TITLE */}
                                        <a className='text-[1.8rem]'>Dolor</a>
                                        {/* DESCRIPTION */}
                                        <p className='leading-[1.7] text-[1.125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                {/* TIME 4*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                                    <ul className='mb-4 block'>
                                        <li>
                                            <p className='text-moss leading-[1.7] text-[1.125rem] mb-4 box-border block'>12:00am</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* DETAILS */}
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 bg-amber-50 box-border block'>
                                    {/* CONTENT */}
                                    <div className='box-border block text-moss'>
                                        {/* TITLE */}
                                        <a className='text-[1.8rem]'>Sit</a>
                                        {/* DESCRIPTION */}
                                        <p className='leading-[1.7] text-[1.125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                {/* TIME 5*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                                    <ul className='mb-4 block'>
                                        <li>
                                            <p className='text-moss leading-[1.7] text-[1.125rem] mb-4 box-border block'>1:00pm</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* DETAILS */}
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 bg-amber-50 box-border block'>
                                    {/* CONTENT */}
                                    <div className='box-border block text-moss'>
                                        {/* TITLE */}
                                        <a className='text-[1.8rem]'>Amet</a>
                                        {/* DESCRIPTION */}
                                        <p className='leading-[1.7] text-[1.125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                {/* TIME 6*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                                    <ul className='mb-4 block'>
                                        <li>
                                            <p className='text-moss leading-[1.7] text-[1.125rem] mb-4 box-border block'>2:00pm</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* DETAILS */}
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 bg-amber-50 box-border block'>
                                    {/* CONTENT */}
                                    <div className='box-border block text-moss'>
                                        {/* TITLE */}
                                        <a className='text-[1.8rem]'>Consectetur</a>
                                        {/* DESCRIPTION */}
                                        <p className='leading-[1.7] text-[1.125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                {/* TIME 7*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                                    <ul className='mb-4 block'>
                                        <li>
                                            <p className='text-moss leading-[1.7] text-[1.125rem] mb-4 box-border block'>3:00pm</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* DETAILS */}
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 bg-amber-50 box-border block'>
                                    {/* CONTENT */}
                                    <div className='box-border block text-moss'>
                                        {/* TITLE */}
                                        <a className='text-[1.8rem]'>Adipiscing</a>
                                        {/* DESCRIPTION */}
                                        <p className='leading-[1.7] text-[1.125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                {/* WHERE*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 pt-4 pb-4 box-border block'>
                                    <div className='box-border block text-moss ml-1'>
                                        {/* TITLE */}
                                        <a className='text-[2.5rem] leading-[2] font-calligraphyBrilliant'>Where</a>
                                    </div>
                                </div>
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 box-border block'>
                                </div>
                                {/* LOCATION IMAGE*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'></div>
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-[40rem] box-border block'>
                                    <div className='box-border block text-moss ml-1'>
                                        {/* IMAGE */}
                                        <Image 
                                            alt=''
                                            src={'/pictures/gp-prep-1.jpg'}
                                            fill
                                            className='object-fill'
                                            loading='eager'
                                        />
                                    </div>
                                </div>
                                {/* LOCATION DETAILS */}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'></div>
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-[1] pl-4 pr-4 pb-4 box-border block bg-amber-50'>
                                    <div className='box-border block text-moss'>
                                        <div className='pl-[15px] pr-[15px'>
                                            <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2 font-georgia'>GP Suites</h3>
                                            <a href='https://www.facebook.com/gpsuitesandeventsplace?mibextid=wwXIfr&rdid=x5EJJd0lD2c2iccN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19u6wdbRfn%2F%3Fmibextid%3DwwXIfr#' className='text-[1.125rem] leading-[1.2] overflow-hidden relative box-border block font-georgia font-bold hover:underline'>-GP Suites Facebook Page-</a>
                                            <p className='text-[1.125rem] leading-[1.2] mb-3 overflow-hidden relative box-border block'>09150922326</p>
                                            <p className='text-[1.125rem] leading-[1.2] overflow-hidden relative mb-[1rem] box-border block'>Greener Pastures, Main Ave, <br/>Sariaya, Quezon</p>
                                        </div>
                                    </div>
                                </div>
                                {/* LOCATION MAP */}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'></div>
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-[1] pl-4 pr-4 pb-8 box-border block bg-amber-50'>
                                    <div className='box-border flex justify-center'>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.0751945026327!2d121.46153672697085!3d13.933815191774528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd49cb80d4e9d5%3A0x9ddfb10f5d78e0b7!2sGP%20SUITES!5e0!3m2!1sen!2sph!4v1744793361235!5m2!1sen!2sph" width="600" height="450"  loading="lazy">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* EVENT 2 */}
                        <div id='ceremony' className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                            <div className='box-border block text-moss text-[2.5rem] leading-[2] font-calligraphyBrilliant mb-6'>
                                {/* TITLE */}
                                <a onClick={() => handleItem('p2')} className={`${activeItem === 'p2' &&  ('font-bold border-b-[7px] border-solid border-b-stain pb-[-1rem]')} hover:border-b-[7px] border-solid border-b-stain`} href='#ceremony'>Ceremony</a>
                            </div>
                        </div>
                        {/* DETAILS 2*/}
                        <div className='ml-[3.84rem] grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 box-border block'>
                        </div>
                        {activeItem === 'p2' && ( 
                            <div className={`justify-end flex flex-wrap -mr-4 -ml-4 box-border`}>
                                {/* TIME 1*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                                    <ul className='mb-4 block'>
                                        <li>
                                            <p className='text-moss leading-[1.7] text-[1.125rem] mb-4 box-border block'>04:00pm</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* DETAILS */}
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 bg-amber-50 box-border block'>
                                    {/* CONTENT */}
                                    <div className='box-border block text-moss'>
                                        {/* TITLE */}
                                        <a className='text-[1.8rem]'>Ipsum</a>
                                        {/* DESCRIPTION */}
                                        <p className='leading-[1.7] text-[1.125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                {/* TIME 2*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                                    <ul className='mb-4 block'>
                                        <li>
                                            <p className='text-moss leading-[1.7] text-[1.125rem] mb-4 box-border block'>05:00pm</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* DETAILS */}
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 bg-amber-50 box-border block'>
                                    {/* CONTENT */}
                                    <div className='box-border block text-moss'>
                                        {/* TITLE */}
                                        <a className='text-[1.8rem]'>Lorem</a>
                                        {/* DESCRIPTION */}
                                        <p className='leading-[1.7] text-[1.125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                {/* WHERE*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 pt-4 pb-4 box-border block'>
                                    <div className='box-border block text-moss ml-1'>
                                        {/* TITLE */}
                                        <a className='text-[2.5rem] leading-[2] font-calligraphyBrilliant'>Where</a>
                                    </div>
                                </div>
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 box-border block'></div>
                                {/* LOCATION IMAGE*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'></div>
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-[40rem] box-border block'>
                                    <div className='box-border block text-moss ml-1'>
                                        {/* IMAGE */}
                                        <Image 
                                            alt=''
                                            src={'/pictures/gp-ceremony-2.jpg'}
                                            fill
                                            className='object-fill'
                                            loading='eager'
                                        />
                                    </div>
                                </div>
                                {/* LOCATION DETAILS */}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'></div>
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-[1] pl-4 pr-4 pb-4 box-border block bg-amber-50'>
                                    <div className='box-border block text-moss'>
                                        <div className='pl-[15px] pr-[15px'>
                                            <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2 font-georgia'>GP Events Place</h3>
                                            <a href='https://www.facebook.com/gpsuitesandeventsplace?mibextid=wwXIfr&rdid=x5EJJd0lD2c2iccN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19u6wdbRfn%2F%3Fmibextid%3DwwXIfr#' className='text-[1.125rem] leading-[1.2] overflow-hidden relative box-border block font-georgia font-bold hover:underline'>-GP Suites Facebook Page-</a>
                                            <p className='text-[1.125rem] leading-[1.2] mb-3 overflow-hidden relative box-border block'>09150922326</p>
                                            <p className='text-[1.125rem] leading-[1.2] overflow-hidden relative mb-[1rem] box-border block'>Greener Pastures, Main Ave, <br/>Sariaya, Quezon</p>
                                        </div>
                                    </div>
                                </div>
                                {/* LOCATION MAP */}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'></div>
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-[1] pl-4 pr-4 pb-8 box-border block bg-amber-50'>
                                    <div className='box-border flex justify-center'>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.0751945026327!2d121.46153672697085!3d13.933815191774528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd4891f3a3b319%3A0xa47782049fa77391!2sGP%20Events%20Place!5e0!3m2!1sen!2sph!4v1744794439866!5m2!1sen!2sph" width="600" height="450"  loading="lazy">
                                        </iframe>
                                    </div>
                                </div>                 
                            </div>
                        )}
                        <div id='reception' className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                            <div className='box-border block text-moss text-[2.5rem] leading-[2] font-calligraphyBrilliant mb-6'>
                                {/* TITLE */}
                                <a onClick={() => handleItem('p3')} className={`${activeItem === 'p3' &&  ('font-bold border-b-[7px] border-solid border-b-stain pb-[-1rem]')} hover:border-b-[7px] border-solid border-b-stain`} href='#reception'>Reception</a>
                            </div>
                        </div>
                        {/* DETAILS 3*/}
                        <div className='ml-[3.84rem] grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 box-border block'>
                        </div>
                        {activeItem === 'p3' && ( 
                            <div className={`justify-end flex flex-wrap -mr-4 -ml-4 box-border`}>
                                {/* TIME 1*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                                    <ul className='mb-4 block'>
                                        <li>
                                            <p className='text-moss leading-[1.7] text-[1.125rem] mb-4 box-border block'>06:00pm</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* DETAILS */}
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 bg-amber-50 box-border block'>
                                    {/* CONTENT */}
                                    <div className='box-border block text-moss'>
                                        {/* TITLE */}
                                        <a className='text-[1.8rem]'>Ipsum</a>
                                        {/* DESCRIPTION */}
                                        <p className='leading-[1.7] text-[1.125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                {/* TIME 2*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                                    <ul className='mb-4 block'>
                                        <li>
                                            <p className='text-moss leading-[1.7] text-[1.125rem] mb-4 box-border block'>07:00pm</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* DETAILS */}
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 bg-amber-50 box-border block'>
                                    {/* CONTENT */}
                                    <div className='box-border block text-moss'>
                                        {/* TITLE */}
                                        <a className='text-[1.8rem]'>Lorem</a>
                                        {/* DESCRIPTION */}
                                        <p className='leading-[1.7] text-[1.125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                {/* TIME 2*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                                    <ul className='mb-4 block'>
                                        <li>
                                            <p className='text-moss leading-[1.7] text-[1.125rem] mb-4 box-border block'>08:00pm</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* DETAILS */}
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 bg-amber-50 box-border block'>
                                    {/* CONTENT */}
                                    <div className='box-border block text-moss'>
                                        {/* TITLE */}
                                        <a className='text-[1.8rem]'>Dolor</a>
                                        {/* DESCRIPTION */}
                                        <p className='leading-[1.7] text-[1.125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                {/* TIME 2*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                                    <ul className='mb-4 block'>
                                        <li>
                                            <p className='text-moss leading-[1.7] text-[1.125rem] mb-4 box-border block'>09:00pm</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* DETAILS */}
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 bg-amber-50 box-border block'>
                                    {/* CONTENT */}
                                    <div className='box-border block text-moss'>
                                        {/* TITLE */}
                                        <a className='text-[1.8rem]'>Sit</a>
                                        {/* DESCRIPTION */}
                                        <p className='leading-[1.7] text-[1.125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                {/* TIME 2*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                                    <ul className='mb-4 block'>
                                        <li>
                                            <p className='text-moss leading-[1.7] text-[1.125rem] mb-4 box-border block'>10:00pm</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* DETAILS */}
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 bg-amber-50 box-border block'>
                                    {/* CONTENT */}
                                    <div className='box-border block text-moss'>
                                        {/* TITLE */}
                                        <a className='text-[1.8rem]'>Amet</a>
                                        {/* DESCRIPTION */}
                                        <p className='leading-[1.7] text-[1.125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                {/* TIME 2*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'>
                                    <ul className='mb-4 block'>
                                        <li>
                                            <p className='text-moss leading-[1.7] text-[1.125rem] mb-4 box-border block'>11:00pm</p>
                                        </li>
                                    </ul>
                                </div>
                                {/* DETAILS */}
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 bg-amber-50 box-border block'>
                                    {/* CONTENT */}
                                    <div className='box-border block text-moss'>
                                        {/* TITLE */}
                                        <a className='text-[1.8rem]'>Consectetur</a>
                                        {/* DESCRIPTION */}
                                        <p className='leading-[1.7] text-[1.125rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                {/* WHERE*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 pt-4 pb-4 box-border block'>
                                    <div className='box-border block text-moss ml-1'>
                                        {/* TITLE */}
                                        <a className='text-[2.5rem] leading-[2] font-calligraphyBrilliant'>Where</a>
                                    </div>
                                </div>
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-0.5 pl-4 pr-4 pt-2 pb-2 mb-2 box-border block'></div>
                                {/* LOCATION IMAGE*/}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'></div>
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-[40rem] box-border block'>
                                    <div className='box-border block text-moss ml-1'>
                                        {/* IMAGE */}
                                        <Image 
                                            alt=''
                                            src={'/pictures/gp-reception-1.jpg'}
                                            fill
                                            className='object-fill'
                                            loading='eager'
                                        />
                                    </div>
                                </div>
                                {/* LOCATION DETAILS */}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'></div>
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-[1] pl-4 pr-4 pb-4 box-border block bg-amber-50'>
                                    <div className='box-border block text-moss'>
                                        <div className='pl-[15px] pr-[15px'>
                                            <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2 font-georgia'>GP Events Place</h3>
                                            <a href='https://www.facebook.com/gpsuitesandeventsplace?mibextid=wwXIfr&rdid=x5EJJd0lD2c2iccN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19u6wdbRfn%2F%3Fmibextid%3DwwXIfr#' className='text-[1.125rem] leading-[1.2] overflow-hidden relative box-border block font-georgia font-bold hover:underline'>-GP Suites Facebook Page-</a>
                                            <p className='text-[1.125rem] leading-[1.2] mb-3 overflow-hidden relative box-border block'>09150922326</p>
                                            <p className='text-[1.125rem] leading-[1.2] overflow-hidden relative mb-[1rem] box-border block'>Greener Pastures, Main Ave, <br/>Sariaya, Quezon</p>
                                        </div>
                                    </div>
                                </div>
                                {/* LOCATION MAP */}
                                <div className='border-solid border-r-1 border-moss text-right ml-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative min-h-0.5 pr-4 pl-4 box-border block'></div>
                                <div className='ml-auto grow-0 shrink-0 basis-[58%] max-w-[58%] relative min-h-[1] pl-4 pr-4 pb-8 box-border block bg-amber-50'>
                                    <div className='box-border flex justify-center'>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.0751945026327!2d121.46153672697085!3d13.933815191774528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd4891f3a3b319%3A0xa47782049fa77391!2sGP%20Events%20Place!5e0!3m2!1sen!2sph!4v1744794439866!5m2!1sen!2sph" width="600" height="450"  loading="lazy">
                                        </iframe>
                                    </div>
                                </div>                 
                            </div>
                        )}
                    </div>               
                </div>
            </div>
        </div>
    </section>
  ) 
}

export default Schedule