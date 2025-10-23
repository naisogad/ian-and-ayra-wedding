import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'


const ScheduleM = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    
        const toggleNav = () => {
          setToggleMenu(!toggleMenu);
          if (!toggleMenu) {
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = '';
          }
        }

        const [activeSection, setActiveSection] = useState('ps');

            const handleNavigation = (section) => {
            setActiveSection(section);

        };

        const [activeItem, setActiveItem] = useState('s1');
                  
            const handleItem = (item) => {
            setActiveItem(item);

        };

  return (
    <section id='scheduleM' className='flex min-h-[600px] pt-[4rem] pr-[0.5rem] pb-[4rem] relative justify-center flex-wrap box-border lg:hidden md:hidden'>
        {/* TITLE */}
        <div className='absolute top-0 left-0 z-0 box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'>
            <h2 className='text-moss -rotate-90 relative m-0 whitespace-nowrap text-ellipsis z-0 pb-[0.5rem] top-[11rem] left-[-2.3rem] text-[3.2rem] leading-[0.9]'>Schedule</h2>
        </div>
        {/* CONTENT */}
        <div className='z-0 pr-0 pl-0 ml-auto grow-0 shrink-0 basis-[70%] max-w-[70%] relative w-[100%] min-h-[1px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
            <div className='ml-0 mr-0 justify-end flex flex-wrap box-border'>
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pt-[3rem] box-border block bg-amber-50'>
                    {/* ROW */}
                    <div className='mr-0 ml-0 flex flex-wrap box-border'>
                        <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pr-[15px] box-border block'>
                            {/* LIST */}
                            <div className='box-border block text-right intersect-once intersect:motion-preset-slide-left motion-duration-1800'>
                            <p className='text-moss text-[1.2rem]'>Tuesday, November 18 <br /> 4:00 pm</p>
                                <a href='#top2' onClick={toggleNav} onClickCapture={() => {handleNavigation('ss'); handleItem('s2')}} className='text-moss text-[1.9rem] leading-[1] box-border hover:underline'>
                                    Ceremony
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right intersect-once intersect:motion-preset-slide-left motion-duration-2200'>
                            <p className='text-moss text-[1.2rem]'>Tuesday, November 18 <br /> 6:00 pm</p>
                                <a href='#top2' onClick={toggleNav} onClickCapture={() => {handleNavigation('rc'); handleItem('s3')}} className='text-moss text-[1.9rem] leading-[1] box-border hover:underline'>
                                    Reception
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* SCHEDULE DETAILS */}
        <div className={`${toggleMenu? '': 'hidden'} z-4 md:hidden size-full fixed top-0 right-0 m-0 bg-white overflow-x-hidden`}>
            {/* CLOSE BUTTON */}
            <button className='space-y-1 fixed top-[2%] right-[3%] z-5 md:hidden' onClick={toggleNav}>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? 'rotate-45 translate-y-3': ''}`}></span>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? 'scale-0 opacity-0': ''}`}></span>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? '-rotate-45 -translate-y-1': ''}`}></span>
            </button>
            <div id='top2' className='relative flex flex-col bg-clip-padding box-border'>
                {/* TITLE */}
                <div className='relative z-1 h-[4.3rem] flex items-center justify-between p-[15px box-border] intersect-once intersect:motion-preset-slide-right motion-duration-1000'>
                    <h1 className='text-moss text-[2.2rem] pt-[50px] ml-[15px] font-medium'>&nbsp;Schedule</h1>
                </div>
                {/* FLOWER 1 */}
                <div className='w-[6rem] h-[10rem] top-[0.5rem] left-[18rem] rotate-x-180 rotate-115 absolute z-1 pointer-events-none box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                    <Image 
                        alt=''
                        src={'/flowers/floater_4.png'}
                        fill
                        className='object-cover'
                    />
                </div>
                {/* CONTENT */}
                <div className='pt-[40px] relative grow-1 shrink-1 basis-auto p-[15px] box-border block'>
                    {/* NAV */}
                    <div className='mr-0 ml-0 justify-center flex flex-wrap box-border pb-[30px]'>
                        <div className='bg-amber-50 text-left text-moss font-georgia grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                            <div onClick={() => handleNavigation('ss')} onClickCapture={() => handleItem('s2')} className='inline-block intersect-once intersect:motion-preset-slide-right motion-duration-1000'>
                                <a className={`${activeItem === 's2' && ('bg-shadow')} text-[1.7rem] leading-[1.5] p-1 font-medium hover:underline`}>Ceremony</a>
                                <span className=' leading-[1] text-[1.5rem] font-bold'>|</span>
                            </div>
                            <div onClick={() => handleNavigation('rc')} onClickCapture={() => handleItem('s3')} className='inline-block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>
                                <a className={`${activeItem === 's3' && ('bg-shadow')} text-[1.7rem] leading-[1.5] p-1 font-medium hover:underline`}>Reception</a>
                                <span className=' leading-[1] text-[1.5rem] font-bold'>|</span>
                            </div>
                        </div>
                    </div>
                    {/* ITEMS */}
                    {/* CEREMONY SCHEDULE */}
                    {activeSection === 'ss' && (
                        <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                            <div className='z-1 grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <div className='flex flex-wrap mr-[-15px] ml-[-15px] box-border font-georgia'>
                                    {/* DATE */}
                                    <div className='grow-0 shrink-0 basis-[91%] max-w-[91%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                        <div className='flex flex-wrap mr-[-15px] ml-[-15px] box-border'>
                                            <div className='text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] box-border block'>
                                                <h3 className='text-[1.8rem] intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Tuesday, November 18</h3>
                                            </div>
                                        </div>   
                                    </div>
                                    {/* TIME 1 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7] intersect-once intersect:motion-preset-slide-right motion-duration-1000'>3:30pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1000'>Guest Arrival</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1000'>Welcome! Settle in, enjoy the atmosphere, and get ready for a beautiful afternoon of love and celebration.</p>
                                        </div>
                                    </div>
                                    {/* TIME 2 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7] intersect-once intersect:motion-preset-slide-right motion-duration-1100'>4:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1100'>Ceremony Begins</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1100'>The moment we’ve all been waiting for—join us as we begin our forever together.</p>
                                        </div>
                                    </div>
                                    {/* TIME 3 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7] intersect-once intersect:motion-preset-slide-right motion-duration-1100'>4:30pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1100'>Exchanging of Vows and “I Do’s”</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1100'>Watch as we promise our hearts and lives to each other in a heartfelt exchange of vows.</p>
                                        </div>
                                    </div>
                                    {/* TIME 4 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7] intersect-once intersect:motion-preset-slide-right motion-duration-1100'>5:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1100'>Family/Group Photos</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1100'>Let’s capture memories with our loved ones—smiles, hugs, and happy tears included!</p>
                                        </div>
                                    </div>
                                    {/* TIME 5 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7] intersect-once intersect:motion-preset-slide-right motion-duration-1100'>5:30pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1100'>Light Refreshments & Conversations</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1100'>Relax, mingle, and enjoy some light treats while sharing sweet moments with friends and family.</p>
                                        </div>
                                    </div>
                                    {/* TIME 1 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7] intersect-once intersect:motion-preset-slide-right motion-duration-1000'>6:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px] box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1000'>Opening of the Photobooth</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1000'>Strike a pose! Have fun and take home a keepsake from this special day.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* WHERE */}
                            <h1 className='text-moss text-[2.5rem] font-medium w-full pt-3 pb-3 intersect-once intersect:motion-preset-slide-right motion-duration-1300'>&nbsp;Where</h1>
                            <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                                {/* LOCATION IMAGE */}
                                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[18.5rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1400'>
                                    <Image 
                                        alt=''
                                        src={'/pictures/gp-ceremony-2.jpg'}
                                        fill
                                        className='object-cover'
                                        loading='eager'
                                    />
                                </div>
                                {/* LOCATION DETAILS */}
                                <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-screen min-h-[1px] mr-[-15px] ml-[-15px] box-border block'>
                                    <div className='pl-[15px] pr-[15px]'>
                                        <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2 font-georgia intersect-once intersect:motion-preset-slide-right motion-duration-1500'>GP Events Place</h3>
                                        <a href='https://www.facebook.com/gpsuitesandeventsplace?mibextid=wwXIfr&rdid=x5EJJd0lD2c2iccN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19u6wdbRfn%2F%3Fmibextid%3DwwXIfr#' className='text-[1.125rem] leading-[1.2] overflow-hidden relative box-border block font-georgia font-bold hover:underline intersect-once intersect:motion-preset-slide-right motion-duration-1600'>-GP Suites Facebook Page-</a>
                                        <p className='text-[1.125rem] leading-[1.2] mb-3 overflow-hidden relative box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1700'>09150922326</p>
                                    <p className='text-[1.125rem] leading-[1.2] overflow-hidden relative mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1800'>Greener Pastures, Main Ave, <br/>Sariaya, Quezon</p>
                                    </div>
                                </div>
                            </div>
                            {/* MAP */}
                            <iframe className='intersect-once intersect:motion-preset-slide-left motion-duration-1900' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.0751945026327!2d121.46153672697085!3d13.933815191774528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd4891f3a3b319%3A0xa47782049fa77391!2sGP%20Events%20Place!5e0!3m2!1sen!2sph!4v1744794439866!5m2!1sen!2sph" width="600" height="450" loading="lazy"></iframe>
                            <div className='ml-0 mr-0 justify-center flex flex-wrap bg-amber-50 box-border'>
                                {/* QR DETAILS */}
                                <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-screen min-h-[1px] mr-[-15px] ml-[-15px] box-border block'>
                                    <div className='pl-[15px] pr-[15px]'>
                                        <h3 className='text-[2rem] mt-[1.5rem] mb-[1.5rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2 font-georgia intersect-once intersect:motion-preset-slide-right motion-duration-2000'>QR Code</h3>
                                    </div>
                                </div>
                                {/* QR IMAGE */}
                                <div className='grow-0 shrink-0 basis-[80%] max-w-[80%] relative w-[100%] min-h-[1rem] h-[18rem] mb-[3rem] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-2100'>
                                    <Image 
                                        alt=''
                                        src={'/pictures/gpep-qr.png'}
                                        fill
                                        className='object-cover'
                                        loading='eager'
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    {/* RECEPTION SCHEDULE */}
                    {activeSection === 'rc' && (
                        <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                            <div className='z-1 grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <div className='flex flex-wrap mr-[-15px] ml-[-15px] box-border font-georgia'>
                                    {/* DATE */}
                                    <div className='grow-0 shrink-0 basis-[91%] max-w-[91%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                        <div className='flex flex-wrap mr-[-15px] ml-[-15px] box-border'>
                                            <div className='text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] box-border block'>
                                                <h3 className='text-[1.8rem] intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Tuesday, November 18</h3>
                                            </div>
                                        </div>   
                                    </div>
                                    {/* TIME 2 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7] intersect-once intersect:motion-preset-slide-right motion-duration-1100'>6:30pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1100'>Grand Entrance</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1100'>Introducing the newlyweds! Let’s welcome them with love, cheers, and celebration!</p>
                                        </div>
                                    </div>
                                    {/* TIME 3 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7] intersect-once intersect:motion-preset-slide-right motion-duration-1200'>6:45pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1200'>Games</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1200'>Let the fun begin! Enjoy laughter and friendly competition with our interactive wedding games.</p>
                                        </div>
                                    </div>
                                    {/* TIME 4 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7] intersect-once intersect:motion-preset-slide-right motion-duration-1300'>7:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1300'>Special Dances by Team Bride & Team Groom</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1300'>Our amazing crew takes the floor for a fun and lively performance!</p>
                                        </div>
                                    </div>
                                    {/* TIME 5 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7] intersect-once intersect:motion-preset-slide-right motion-duration-1400'>7:15pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1400'>First Dance as Husband and Wife</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1400'>A magical moment as we share our first dance together as Mr. and Mrs. 💕</p>
                                        </div>
                                    </div>
                                    {/* TIME 6 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7] intersect-once intersect:motion-preset-slide-right motion-duration-1500'>7:30pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1500'>Dinner is Served</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1500'>Enjoy a delicious meal prepared with love—time to dine and celebrate!</p>
                                        </div>
                                    </div>
                                    {/* TIME 7 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7] intersect-once intersect:motion-preset-slide-right motion-duration-1500'>8:30pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1500'>Toast & Cake Cutting</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1500'>Raise your glasses and join us in a sweet moment of gratitude and joy.</p>
                                        </div>
                                    </div>
                                    {/* TIME 8 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7] intersect-once intersect:motion-preset-slide-right motion-duration-1500'>9:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1500'>Games for the Single Ladies and Gents</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1500'>Time for laughter and excitement—who is next?</p>
                                        </div>
                                    </div>
                                    {/* TIME 9 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7] intersect-once intersect:motion-preset-slide-right motion-duration-1500'>9:30pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1500'>Messages for the Couple</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1500'>Heartfelt words and blessings from our dearest family and friends.</p>
                                        </div>
                                    </div>
                                    {/* TIME 10 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7] intersect-once intersect:motion-preset-slide-right motion-duration-1500'>10:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1500'>Thank You & Farewell Message</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1500'>A moment to express our deepest gratitude for sharing this day with us.</p>
                                        </div>
                                    </div>
                                    {/* TIME 11 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7] intersect-once intersect:motion-preset-slide-right motion-duration-1500'>11:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1500'>Open Dance Floor & Celebration</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem] intersect-once intersect:motion-preset-slide-left motion-duration-1500'>Let’s end the night with music, dancing, and pure joy—celebrate love with us! 💃🕺</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* WHERE */}
                            <h1 className='text-moss text-[2.5rem] font-medium w-full pt-3 pb-3 intersect-once intersect:motion-preset-slide-right motion-duration-1600'>&nbsp;Where</h1>
                            <div className='ml-0 mr-0 justify-center flex flex-wrap box-border font-georgia'>
                                {/* LOCATION IMAGE */}
                                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[18.5rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1700'>
                                    <Image 
                                        alt=''
                                        src={'/pictures/gp-reception-1.jpg'}
                                        fill
                                        className='object-cover'
                                        loading='eager'
                                    />
                                </div>
                                {/* LOCATION DETAILS */}
                                <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-screen min-h-[1px] mr-[-15px] ml-[-15px] box-border block'>
                                    <div className='pl-[15px] pr-[15px]'>
                                        <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1800'>GP Events Place</h3>
                                        <a href='https://www.facebook.com/gpsuitesandeventsplace?mibextid=wwXIfr&rdid=x5EJJd0lD2c2iccN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19u6wdbRfn%2F%3Fmibextid%3DwwXIfr#' className='text-[1.125rem] leading-[1.2] overflow-hidden relative box-border block font-georgia font-bold hover:underline intersect-once intersect:motion-preset-slide-right motion-duration-1900'>-GP Suites Facebook Page-</a>
                                        <p className='text-[1.125rem] leading-[1.2] mb-3 overflow-hidden relative box-border block intersect-once intersect:motion-preset-slide-right motion-duration-2000'>09150922326</p>
                                    <p className='text-[1.125rem] leading-[1.2] overflow-hidden relative mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-2100'>Greener Pastures, Main Ave, <br/>Sariaya, Quezon</p>
                                    </div>
                                </div>
                            </div>
                            {/* MAP */}
                            <iframe className='intersect-once intersect:motion-preset-slide-left motion-duration-2200' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.0751945026327!2d121.46153672697085!3d13.933815191774528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd4891f3a3b319%3A0xa47782049fa77391!2sGP%20Events%20Place!5e0!3m2!1sen!2sph!4v1744794439866!5m2!1sen!2sph" width="600" height="450" loading="lazy"></iframe>
                            <div className='ml-0 mr-0 justify-center flex flex-wrap bg-amber-50 box-border font-georgia'>
                                {/* QR DETAILS */}
                                <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-screen min-h-[1px] mr-[-15px] ml-[-15px] box-border block'>
                                    <div className='pl-[15px] pr-[15px]'>
                                        <h3 className='text-[2rem] mt-[1.5rem] mb-[1.5rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-2300'>QR Code</h3>
                                    </div>
                                </div>
                                {/* QR IMAGE */}
                                <div className='grow-0 shrink-0 basis-[80%] max-w-[80%] relative w-[100%] min-h-[1rem] h-[18rem] mb-[3rem] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-2400'>
                                    <Image 
                                        alt=''
                                        src={'/pictures/gpep-qr.png'}
                                        fill
                                        className='object-cover'
                                        loading='eager'
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        {/* FLOWER 1 */}
        <div className='w-[9rem] h-[13rem] bottom-[14%] left-[4.2%] absolute z-1 pointer-events-none box-border block intersect-once intersect:motion-preset-slide-up motion-duration-1000'>
            <Image 
                alt=''
                src={'/flowers/floater_4.png'}
                fill
                className='object-cover'
            />
        </div>
    </section>
  )
}

export default ScheduleM