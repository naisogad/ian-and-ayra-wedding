import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'


const AbaysM = () => {

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

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // For smooth scrolling animation
            });
        };

  return (
    <section id='abaysM' className='flex min-h-[600px] pt-[12rem] pr-[0.5rem] pb-[4rem] relative justify-center flex-wrap box-border lg:hidden md:hidden'>
        {/* FLOWER 1 */}
        <div className='w-[18rem] h-[14rem] top-[2%] left-[30%] absolute z-1 pointer-events-none box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
            <Image 
                alt=''
                src={'/flowers/floater_3.png'}
                fill
                className='object-cover'
            />
        </div>
        {/* TITLE */}
        <div className='absolute top-0 left-0 z-0 box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'>
            <h2 className='text-moss -rotate-90 relative m-0 whitespace-nowrap text-ellipsis z-0 pb-[0.5rem] top-[23rem] left-[-3.5rem] text-[3.2rem] leading-[0.9]'>Entourage</h2>
        </div>
        {/* CONTENT */}
        <div id='abaysM' className='z-0 pr-0 pl-0 ml-auto grow-0 shrink-0 basis-[70%] max-w-[70%] relative w-[100%] min-h-[1px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
            <div className='ml-0 mr-0 justify-end flex flex-wrap box-border'>
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pt-[3rem] box-border block bg-amber-50'>
                    {/* ROW */}
                    <div className='mr-0 ml-0 flex flex-wrap box-border'>
                        <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pr-[15px] box-border block'>
                            {/* LIST */}
                            <div className='box-border block text-right intersect-once intersect:motion-preset-slide-left motion-duration-1200'>
                                <a onClick={toggleNav} onClickCapture={() => {handleNavigation('ps'); handleItem('s1'); scrollToTop}} className='text-moss text-[1.9rem] leading-[1] box-border hover:underline' href='#top1'>
                                    Primary Sponsors
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right intersect-once intersect:motion-preset-slide-left motion-duration-1400'>
                                <a onClick={toggleNav} onClickCapture={() => {handleNavigation('ss'); handleItem('s2')}} className='text-moss text-[1.9rem] leading-[1] box-border hover:underline' href='#top1'>
                                    Secondary Sponsors
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right intersect-once intersect:motion-preset-slide-left motion-duration-1600'>
                                <a onClick={toggleNav} onClickCapture={() => {handleNavigation('bridesmaids'); handleItem('s3')}} className='text-moss text-[1.9rem] leading-[1] box-border hover:underline' href='#top1'>
                                    Bridesmaids
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right intersect-once intersect:motion-preset-slide-left motion-duration-1800'>
                                <a onClick={toggleNav} onClickCapture={() => {handleNavigation('groomsmen'); handleItem('s4')}} className='text-moss text-[1.9rem] leading-[1] box-border hover:underline' href='#top1'>
                                    Groomsmen
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right intersect-once intersect:motion-preset-slide-left motion-duration-2000'>
                                <a onClick={toggleNav} onClickCapture={() => {handleNavigation('bearers'); handleItem('s5')}} className='text-moss text-[1.9rem] leading-[1] box-border hover:underline' href='#top1'>
                                    Bearers
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right intersect-once intersect:motion-preset-slide-left motion-duration-2200'>
                                <a onClick={toggleNav} onClickCapture={() => {handleNavigation('parents'); handleItem('s6')}} className='text-moss text-[1.9rem] leading-[1] box-border hover:underline' href='#top1'>
                                    Parents
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ABAY DETAILS */}
        <div className={`${toggleMenu? '': 'hidden'} z-4 md:hidden size-full fixed top-0 right-0 m-0 bg-white overflow-x-hidden`}>
            {/* CLOSE BUTTON */}
            <button className='space-y-1 fixed top-[2%] right-[3%] z-5 md:hidden' onClick={toggleNav}>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? 'rotate-45 translate-y-3': ''}`}></span>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? 'scale-0 opacity-0': ''}`}></span>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? '-rotate-45 -translate-y-1': ''}`}></span>
            </button>
            <div id='top1' className='relative flex flex-col bg-clip-padding box-border'>
                {/* TITLE */}
                <div className='relative z-1 h-[4.3rem] flex items-center justify-between p-[15px box-border] intersect-once intersect:motion-preset-slide-right motion-duration-1000'>
                    <h1 className='text-moss text-[2.2rem] pt-[50px] ml-[15px] font-medium'>&nbsp;Wedding Entourage</h1>
                </div>
                <div className='w-[10rem] h-[8rem] top-20 left-65 rotate-30 absolute z-1 pointer-events-none box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                    <Image 
                        alt=''
                        src={'/flowers/floater_3.png'}
                        fill
                        className='object-cover'
                    />
                </div>
                {/* CONTENT */}
                <div className='pt-[4rem] relative grow-1 shrink-1 basis-auto p-[15px] box-border block'>
                    {/* NAV */}
                    <div className='mr-0 ml-0 justify-center flex flex-wrap box-border pb-[40px] font-georgia'>
                        <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                            <div onClick={() => handleNavigation('ps')} onClickCapture={() => handleItem('s1')} className='inline-block intersect-once intersect:motion-preset-slide-right motion-duration-1000'>
                                <a className={`${activeItem === 's1' && ('bg-shadow')} text-[1.7rem] leading-[1.5] p-1 font-medium hover:underline`}>Principal Sponsors</a>
                                <span className=' leading-[1] text-[1.5rem] font-bold'>|</span>
                            </div>
                            <div onClick={() => handleNavigation('ss')} onClickCapture={() => handleItem('s2')} className='inline-block intersect-once intersect:motion-preset-slide-right motion-duration-1000'>
                                <a className={`${activeItem === 's2' && ('bg-shadow')} text-[1.7rem] leading-[1.5] p-1 font-medium hover:underline`}>Secondary Sponsors</a>
                                <span className=' leading-[1] text-[1.5rem] font-bold'>|</span>
                            </div>
                            <div onClick={() => handleNavigation('bridesmaids')} onClickCapture={() => handleItem('s3')} className='inline-block intersect-once intersect:motion-preset-slide-right motion-duration-1000'>
                                <a className={`${activeItem === 's3' && ('bg-shadow')} text-[1.7rem] leading-[1.5] p-1 font-medium hover:underline`}>Bridesmaids</a>
                                <span className=' leading-[1] text-[1.5rem] font-bold'>|</span>
                            </div>
                            <div onClick={() => handleNavigation('groomsmen')} onClickCapture={() => handleItem('s4')} className='inline-block intersect-once intersect:motion-preset-slide-right motion-duration-1000'>
                                <a className={`${activeItem === 's4' && ('bg-shadow')} text-[1.7rem] leading-[1.5] p-1 font-medium hover:underline`}>Groomsmen</a>
                                <span className=' leading-[1] text-[1.5rem] font-bold'>|</span>
                            </div>
                            <div onClick={() => handleNavigation('bearers')} onClickCapture={() => handleItem('s5')} className='inline-block intersect-once intersect:motion-preset-slide-right motion-duration-1000'>
                                <a className={`${activeItem === 's5' && ('bg-shadow')} text-[1.7rem] leading-[1.5] p-1 font-medium hover:underline`}>Bearers</a>
                                <span className=' leading-[1] text-[1.5rem] font-bold'>|</span>
                            </div>
                            <div onClick={() => handleNavigation('parents')} onClickCapture={() => handleItem('s6')} className='inline-block intersect-once intersect:motion-preset-slide-right motion-duration-1000'>
                                <a className={`${activeItem === 's6' && ('bg-shadow')} text-[1.7rem] leading-[1.5] p-1 font-medium hover:underline`}>Parents</a>
                                <span className=' leading-[1] text-[1.5rem] font-bold'>|</span>
                            </div>
                        </div>
                    </div>
                    {/* ITEMS */}
                    {/* PRIMARY SPONSORS */}
                    {activeSection === 'ps' && (
                        <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Edward Ty</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Husband, Father, and Senior Pastor</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-3 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Joann Ty</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Wife and Mother</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                            {/* ITEM 3 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 3 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-3 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Jerson Torres</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Husband, Father, and Pastor</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                            {/* ITEM 4 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 4 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Michelle Torres</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Wife and Mother</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 5 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 5 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Edizer Driz</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Husband, Father, and OFW</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 6 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 6 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Edna Sanchez</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single and OFW</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 7 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 7 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Rondolf Alandy-dy</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Husband, Father, and Senior Pastor</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 8 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 8 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Marileth Alandy-dy</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Wife and Mother</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 9 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 9 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Micheal Colilap</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Husband, Father, and Pastor</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 10 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 10 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-3 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Jaja Colilap</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Wife, Mother, and Campus Missionary</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 11 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 11 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>PJ Camacho</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Husband, Father, and Campus Missionary</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 12 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 12 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Karen Camacho</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Wife, Mother, and Campus Missionary</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 13 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 13 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-3 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Joshua Mujar</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Husband and Father</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 14 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 14 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Sheryl Mujar</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Wife and Mother</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 15 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 15 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-3 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Rodil Villaverde</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Husband and Father</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 16 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 16 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Evelyn Villaverde</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Wife and Mother</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 17 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 17 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Cy Dinglasan</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Husband and Father</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 18 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 18 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Riza Dinglasan</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Wife and Mother</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 19 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 19 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Che Hernandez</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Wife and Mother</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 20 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 20 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Melith Ballon</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 21 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 21 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 pt-[0.75rem] pb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Larry Jabrica</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Husband and Father</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 22 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 22 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Gemma Jabrica</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Wife and Mother</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 23 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 23 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-4 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Bernie Jabrica</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Husband and Father</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 24 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 24 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-4 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Bernie's Wife Jabrica</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Wife and Mother</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 21 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 21 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-3 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Joseph Briones</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Husband and Father</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 22 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 22 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Cel Briones</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Wife and Mother</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                        </div>  
                    )}
                    {/* SECONDARY SPONSORS */}
                    {activeSection === 'ss' && (
                        <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                            
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px  ] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Vin Mirhan</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Husband and Businessman</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Rachel Mirhan</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Wife and Admin</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                            {/* ITEM 3 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 3 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>MJ Mercado</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Husband</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                            {/* ITEM 4 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 4 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Rachelle Mercado</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Wife</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                        </div>
                    )}
                    {/* BRIDESMAIDS */}
                    {activeSection === 'bridesmaids' && (
                        <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                            <p className='text-moss text-[1.8rem] font-medium'>Maid of Honor</p>
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-3 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Jane Jabrica</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Student</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Nicole Jabrica</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Student</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                            <p className='text-moss text-[1.8rem] pt-8 font-medium'>Bridesmaid</p>
                            {/* ITEM 3 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 3 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-3 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Danielle Manalo</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                            {/* ITEM 4 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 4 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Katrice Villaflor</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 5 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 5 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Kimberly Palillo</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 6 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 6 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Camla Fulo</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 7 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 7 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-7 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Zelamae Bartiana</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 8 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 8 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-3 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Immanuelle Espiritu</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 9 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 9 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Pauline Ty</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 10 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 10 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Althea Rivere</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 11 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 11 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Angel Gratuito</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 12 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 12 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Kate Cedeno</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                        </div>
                    )}
                    {/* GROOMSMEN */}
                    {activeSection === 'groomsmen' && (
                        <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                            <p className='text-moss text-[1.8rem] font-medium'>Bestman</p>
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px  ] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-3 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Deo Tabelon</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-3 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>JP Ramirez</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                            <p className='text-moss text-[1.8rem] pt-8 font-medium'>Groomsmen</p>
                            {/* ITEM 3 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 3 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Harold Yap</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                            {/* ITEM 4 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 4 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-3 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Jafet Bathan</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 5 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 5 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>King Villanueva</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 6 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/arvin-b.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 6 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Arvin Berina</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'>"My Angel will always protect me" 😇</p>
                            </div>
                            {/* ITEM 7 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 7 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>CJ Villaverde</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 8 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 8 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Keiffer Cortez</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single and Father</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 9 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 9 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Ced De Luna</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 10 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 10 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Charles Alcantara</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 11 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 11 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Adi Balino</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                            {/* ITEM 12 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 12 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-3 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Karlo Sandoval</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Single</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'></p>
                            </div>
                        </div>
                    )}
                    {/* BEARERS */}
                    {activeSection === 'bearers' && (
                        <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Geoff Stephan</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Student</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Raz Mujar</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Student</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                            {/* ITEM 3 */} 
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 3 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-3 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Justine Tuvieron</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Student</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                        </div>
                    )}
                    {/* PARENTS */}
                    {activeSection === 'parents' && (
                        <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                            <p className='text-moss text-[1.8rem] font-medium'>Parents of the Groom</p>
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Lazaro Dagos</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Husband and Father</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-1 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Eleanor Dagos</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Wife and Mother</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                            <p className='text-moss text-[1.8rem] pt-8 font-medium'>Parents of the Bride</p>
                            {/* ITEM 3 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-male.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 3 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Raymundo Jabrica</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Husband and Father</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                            {/* ITEM 4 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/ph-female.png'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 4 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] pl-2 mt-[0.75rem] mb-[0.75rem] leading-[2.5] overflow-hidden text-ellipsis relative z-2 intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Marissa Jabrica</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>Wife and Mother</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1400'></p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AbaysM