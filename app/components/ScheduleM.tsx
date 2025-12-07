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
    <section id='scheduleM' className='flex min-h-[1px] pt-[6em] pb-[6em] relative flex-wrap box-border lg:hidden'>
        {/* TITLE */}
        <div className='absolute z-0 box-border block'>
            <h2 className='text-moss -rotate-90 relative m-0 whitespace-nowrap text-ellipsis z-0 top-[2em] md:top-[1.2em] left-[-0.2em] md:left-[0em] text-[2.4em] md:text-[4.2em] leading-[1]'>Timeline</h2>
        </div>
        {/* CONTENT */}
        <div className='z-0 ml-auto grow-0 shrink-0 basis-[70%] max-w-[70%] relative w-[100%] min-h-[1px] box-border block'>
            <div className='justify-end flex flex-wrap box-border'>
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pt-[3em] box-border block bg-amber-50'>
                    {/* ROW */}
                    <div className='mr-0 ml-0 flex flex-wrap box-border'>
                        <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[1em] pr-[1em] box-border block'>
                            {/* LIST */}
                            <div className='box-border block text-right'>
                            <p className='text-moss text-[0.9em] md:text-[1.1em]'>Tuesday, November 18 <br /> 4:00 pm</p>
                                <a href='#top2' onClick={toggleNav} onClickCapture={() => {handleNavigation('ss'); handleItem('s2')}} className='text-moss text-[1.6em] md:text-[1.9em] leading-[1.3] box-border hover:underline'>
                                    Ceremony <span className='font-greatVibesR'>&</span> Reception
                                    <p className='text-moss text-[0.5em] md:text-[0.6em] leading-[1.9] break-normal overflow-hidden relative z-2 mt-0 mb-[2em] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* SCHEDULE DETAILS */}
        <div className={`${toggleMenu? '': 'hidden'} z-4 lg:hidden size-full fixed top-0 right-0 m-0 bg-white overflow-x-hidden`}>
            {/* CLOSE BUTTON */}
            <button className='space-y-1 fixed top-[1em] right-[0.5em] z-5 lg:hidden' onClick={toggleNav}>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? 'rotate-45 translate-y-3': ''}`}></span>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? 'scale-0 opacity-0': ''}`}></span>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? '-rotate-45 -translate-y-1': ''}`}></span>
            </button>
            <div id='top2' className='relative flex flex-col bg-clip-padding box-border'>
                {/* TITLE */}
                <div className='relative z-1 h-[4.3em] flex items-center justify-between pt-[1em] pb-[1em] box-border'>
                    <h1 className='text-moss text-[2.2em] pt-[1.5em] ml-[0.5em] font-medium'>&nbsp;Timeline</h1>
                </div>
                {/* FLOWER 1 */}
                <div className='w-[4.5em] md:w-[6em] h-[8em] md:h-[10em] top-[1.2em] md:top-[0.5em] left-[13em] md:left-[17em] rotate-x-180 rotate-115 absolute z-1 pointer-events-none box-border block'>
                    <Image 
                        alt=''
                        src={'/flowers/floater_4.png'}
                        fill
                        className='object-cover'
                    />
                </div>
                {/* CONTENT */}
                <div className='pt-[2.5em] relative grow-1 shrink-1 basis-auto box-border block'>
                    {/* NAV */}
                    {/* ITEMS */}
                    {/* CEREMONY SCHEDULE */}
                    {activeSection === 'ss' && (
                        <div className='justify-center flex flex-wrap box-border'>
                            <div className='z-1 grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                <div className='flex flex-wrap box-border font-georgia'>
                                    {/* DATE */}
                                    <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block'>
                                        <div className='flex flex-wrap box-border'>
                                            <div className='text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] box-border block'>
                                                <h3 className='text-[1.4rem] md:text-[1.8rem]'>Tuesday, November 18</h3>
                                            </div>
                                        </div>   
                                    </div>
                                    {/* TIME 1 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[0.9em] md:text-[1.125em] leading-[1.7]'>3:30pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[1em] pl-[1em]'>
                                            <h3 className='text-[1.3em] md:text-[1.5em] mb-[0.5rem]'>Guest Arrival</h3>
                                            <p className='text-[0.9rem] md:text-[1.125em] leading-[1.5] mb-[0.5rem]'>Welcome! Settle in, enjoy the atmosphere, and get ready for a beautiful afternoon of love and celebration.</p>
                                        </div>
                                    </div>
                                    {/* TIME 2 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[0.9em] md:text-[1.125em] leading-[1.7]'>4:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[1em] pl-[1em]'>
                                            <h3 className='text-[1.3em] md:text-[1.5em] mb-[0.5rem]'>Ceremony Begins</h3>
                                            <p className='text-[0.9rem] md:text-[1.125em] leading-[1.5] mb-[0.5rem]'>The moment we’ve all been waiting for—join us as we begin our forever together.</p>
                                        </div>
                                    </div>
                                    {/* TIME 3 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[0.9em] md:text-[1.125em] leading-[1.7]'>4:30pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[1em] pl-[1em]'>
                                            <h3 className='text-[1.3em] md:text-[1.5em] mb-[0.5rem]'>Exchanging of Vows and “I Do’s”</h3>
                                            <p className='text-[0.9rem] md:text-[1.125em] leading-[1.5] mb-[0.5rem]'>Watch as we promise our hearts and lives to each other in a heartfelt exchange of vows.</p>
                                        </div>
                                    </div>
                                    {/* TIME 4 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[0.9em] md:text-[1.125em] leading-[1.7]'>5:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[1em] pl-[1em]'>
                                            <h3 className='text-[1.3em] md:text-[1.5em] mb-[0.5rem]'>Family/Group Photos</h3>
                                            <p className='text-[0.9rem] md:text-[1.125em] leading-[1.5] mb-[0.5rem]'>Let’s capture memories with our loved ones—smiles, hugs, and happy tears included!</p>
                                        </div>
                                    </div>
                                    {/* TIME 5 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[0.9em] md:text-[1.125em] leading-[1.7]'>5:30pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[1em] pl-[1em]'>
                                            <h3 className='text-[1.3em] md:text-[1.5em] mb-[0.5rem]'>Light Refreshments & Conversations</h3>
                                            <p className='text-[0.9rem] md:text-[1.125em] leading-[1.5] mb-[0.5rem]'>Relax, mingle, and enjoy some light treats while sharing sweet moments with friends and family.</p>
                                        </div>
                                    </div>
                                    {/* TIME 1 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[0.9em] md:text-[1.125em] leading-[1.7]'>6:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px] box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[1em] pl-[1em]'>
                                            <h3 className='text-[1.3em] md:text-[1.5em] mb-[0.5rem]'>Opening of the Photobooth</h3>
                                            <p className='text-[0.9rem] md:text-[1.125em] leading-[1.5] mb-[0.5rem]'>Strike a pose! Have fun and take home a keepsake from this special day.</p>
                                        </div>
                                    </div>
                                    {/* RECEPTION */}
                                    {/* TIME 2 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[0.9em] md:text-[1.125em] leading-[1.7]'>6:30pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[1em] pl-[1em]'>
                                            <h3 className='text-[1.3em] md:text-[1.5em] mb-[0.5rem]'>Grand Entrance</h3>
                                            <p className='text-[0.9rem] md:text-[1.125em] leading-[1.5] mb-[0.5rem]'>Introducing the newlyweds! Let’s welcome them with love, cheers, and celebration!</p>
                                        </div>
                                    </div>
                                    {/* TIME 3 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[0.9em] md:text-[1.125em] leading-[1.7]'>6:45pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[1em] pl-[1em]'>
                                            <h3 className='text-[1.3em] md:text-[1.5em] mb-[0.5rem]'>Games</h3>
                                            <p className='text-[0.9rem] md:text-[1.125em] leading-[1.5] mb-[0.5rem]'>Let the fun begin! Enjoy laughter and friendly competition with our interactive wedding games.</p>
                                        </div>
                                    </div>
                                    {/* TIME 4 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[0.9em] md:text-[1.125em] leading-[1.7]'>7:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[1em] pl-[1em]'>
                                            <h3 className='text-[1.3em] md:text-[1.5em] mb-[0.5rem]'>Special Dances by Team Bride & Team Groom</h3>
                                            <p className='text-[0.9rem] md:text-[1.125em] leading-[1.5] mb-[0.5rem]'>Our amazing crew takes the floor for a fun and lively performance!</p>
                                        </div>
                                    </div>
                                    {/* TIME 5 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[0.9em] md:text-[1.125em] leading-[1.7]'>7:15pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[1em] pl-[1em]'>
                                            <h3 className='text-[1.3em] md:text-[1.5em] mb-[0.5rem]'>First Dance as Husband and Wife</h3>
                                            <p className='text-[0.9rem] md:text-[1.125em] leading-[1.5] mb-[0.5rem]'>A magical moment as we share our first dance together as Mr. and Mrs. 💕</p>
                                        </div>
                                    </div>
                                    {/* TIME 6 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[0.9em] md:text-[1.125em] leading-[1.7]'>7:30pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[1em] pl-[1em]'>
                                            <h3 className='text-[1.3em] md:text-[1.5em] mb-[0.5rem]'>Dinner is Served</h3>
                                            <p className='text-[0.9rem] md:text-[1.125em] leading-[1.5] mb-[0.5rem]'>Enjoy a delicious meal prepared with love—time to dine and celebrate!</p>
                                        </div>
                                    </div>
                                    {/* TIME 7 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[0.9em] md:text-[1.125em] leading-[1.7]'>8:30pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[1em] pl-[1em]'>
                                            <h3 className='text-[1.3em] md:text-[1.5em] mb-[0.5rem]'>Toast & Cake Cutting</h3>
                                            <p className='text-[0.9rem] md:text-[1.125em] leading-[1.5] mb-[0.5rem]'>Raise your glasses and join us in a sweet moment of gratitude and joy.</p>
                                        </div>
                                    </div>
                                    {/* TIME 8 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[0.9em] md:text-[1.125em] leading-[1.7]'>9:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[1em] pl-[1em]'>
                                            <h3 className='text-[1.3em] md:text-[1.5em] mb-[0.5rem]'>Games for the Single Ladies and Gents</h3>
                                            <p className='text-[0.9rem] md:text-[1.125em] leading-[1.5] mb-[0.5rem]'>Time for laughter and excitement—who is next?</p>
                                        </div>
                                    </div>
                                    {/* TIME 9 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[0.9em] md:text-[1.125em] leading-[1.7]'>9:30pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[1em] pl-[1em]'>
                                            <h3 className='text-[1.3em] md:text-[1.5em] mb-[0.5rem]'>Messages for the Couple</h3>
                                            <p className='text-[0.9rem] md:text-[1.125em] leading-[1.5] mb-[0.5rem]'>Heartfelt words and blessings from our dearest family and friends.</p>
                                        </div>
                                    </div>
                                    {/* TIME 10 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[0.9em] md:text-[1.125em] leading-[1.7]'>10:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[1em] pl-[1em]'>
                                            <h3 className='text-[1.3em] md:text-[1.5em] mb-[0.5rem]'>Thank You & Farewell Message</h3>
                                            <p className='text-[0.9rem] md:text-[1.125em] leading-[1.5] mb-[0.5rem]'>A moment to express our deepest gratitude for sharing this day with us.</p>
                                        </div>
                                    </div>
                                    {/* TIME 11 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[1em] pl-[1em] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[0.9em] md:text-[1.125em] leading-[1.7]'>11:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[1em] pl-[1em]'>
                                            <h3 className='text-[1.3em] md:text-[1.5em] mb-[0.5rem]'>Open Dance Floor & Celebration</h3>
                                            <p className='text-[0.9rem] md:text-[1.125em] leading-[1.5] mb-[0.5rem]'>Let’s end the night with music, dancing, and pure joy—celebrate love with us! 💃🕺</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* WHERE */}
                            <h1 className='text-moss text-[2.2em] font-medium w-full pt-[1em] pb-[1em]'>&nbsp;Where</h1>
                            <div className='justify-center flex flex-wrap box-border'>
                                {/* LOCATION IMAGE */}
                                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[18.5em] pr-[15px] pl-[15px] box-border block'>
                                    <Image 
                                        alt=''
                                        src={'/pictures/gp-ceremony-2.jpg'}
                                        fill
                                        className='object-cover'
                                        loading='eager'
                                    />
                                </div>
                                {/* LOCATION DETAILS */}
                                <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-screen min-h-[1px] box-border block'>
                                    <div className='pl-[1em] pr-[1em]'>
                                        <h3 className='text-[1.3em] md:text-[1.5em] mt-[0.6em] mb-[0.6em] leading-[1.5] overflow-hidden text-ellipsis relative z-2 font-georgia'>GP Events Place</h3>
                                        <a href='https://www.facebook.com/gpsuitesandeventsplace?mibextid=wwXIfr&rdid=x5EJJd0lD2c2iccN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19u6wdbRfn%2F%3Fmibextid%3DwwXIfr#' className='text-[0.9em] md:text-[1.125rem] leading-[1.2] overflow-hidden relative box-border block font-georgia font-bold hover:underline intersect-once intersect:motion-preset-slide-right motion-duration-1600'>-GP Suites Facebook Page-</a>
                                        <p className='text-[0.9em] md:text-[1.125em] leading-[1.2] mb-[1em] overflow-hidden relative box-border block'>09150922326</p>
                                    <p className='text-[0.9em] md:text-[1.125em] leading-[1.2] overflow-hidden relative mt-0 mb-[2em] box-border block'>Greener Pastures, Main Ave, <br/>Sariaya, Quezon</p>
                                    </div>
                                </div>
                            </div>
                            {/* MAP */}
                            <iframe className='' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.0751945026327!2d121.46153672697085!3d13.933815191774528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd4891f3a3b319%3A0xa47782049fa77391!2sGP%20Events%20Place!5e0!3m2!1sen!2sph!4v1744794439866!5m2!1sen!2sph" width="600" height="450" loading="lazy"></iframe>
                            <div className='justify-center flex flex-wrap bg-amber-50 box-border'>
                                {/* QR DETAILS */}
                                <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-screen min-h-[1px] mr-[-15px] ml-[-15px] box-border block'>
                                    <div className='pl-[15px] pr-[15px]'>
                                        <h3 className='text-[1.3em] md:text-[1.5em] text-center mt-[1.5em] mb-[1em] leading-[1.5] overflow-hidden text-ellipsis relative z-2 font-georgia'>Scan to Get Directions</h3>
                                    </div>
                                </div>
                                {/* QR IMAGE */}
                                <div className='grow-0 shrink-0 basis-[80%] max-w-[80%] relative w-[100%] min-h-[1rem] h-[18em] mb-[3em] box-border block'>
                                    <Image 
                                        alt=''
                                        src={'/pictures/gpep-qr.png'}
                                        fill
                                        className='object-contain'
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
        <div className='w-[7em] md:w-[9em] h-[11em] md:h-[13em] top-[-0.8em] rotate-x-180 rotate-105 right-[0em] absolute z-1 pointer-events-none box-border block'>
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