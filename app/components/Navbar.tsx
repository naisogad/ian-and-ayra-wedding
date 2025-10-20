'use client'
import React, { useState } from 'react'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const toggleNav = () => {
      setToggleMenu(!toggleMenu);
      // if (!toggleMenu) {
      //   document.body.style.overflow = 'hidden';
      //   document.body.style.paddingRight = '15px'
      // } else {
      //   document.body.style.overflow = '';
      //   document.body.style.paddingRight = ''
      // }
    }

    

  return (
    <nav>
      <div className='top-0 right-0 z-3'>
        {/* MENU BUTTON*/}
        <h4 className='hidden md:block fixed rotate-90 top-[4rem] font-georgia right-[0rem] z-3 cursor-pointer text-3xl uppercase text-moss' onClick={toggleNav}>Menu</h4>
        {/* MOBILE BUTTON */}
        <div className='w-screen h-12 top-0 fixed z-3 block'>
          <button className='space-y-1 relative left-[90%] top-[30%] box-border block md:hidden' onClick={toggleNav}>
            <span className={`block h-1 w-7 bg-moss transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1) ${toggleMenu? 'rotate-45 translate-y-3': ''}`}></span>
            <span className={`block h-1 w-7 bg-moss transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1) ${toggleMenu? 'scale-0 opacity-0': ''}`}></span>
            <span className={`block h-1 w-7 bg-moss transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1) ${toggleMenu? '-rotate-45 -translate-y-1': ''}`}></span>
          </button>
        </div>
        {/* NAV MENU */}
        <div className={`${toggleMenu? '': '-mr-480'} z-2 hidden md:block size-full fixed top-0 right-0 m-0 bg-white/70 transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1)]`}>
          <ul className={`${toggleMenu? 'mr-25': '-mr-90 '} hidden md:flex flex-col font-georgia relative gap-6 w-80 max-h-[60%] mt-20 pb-100 pt-10 pl-10 float-right bg-stain transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1)]`}>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#top">Home</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#couple">The Couple</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#abays">Abays</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#schedule">Schedule</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#theme">Theme</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#gallery">Our Story</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#rsvp">RSVP</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#faqs">FAQs</a></li>
          </ul>
        </div>
      {/* MOBILE MENU */}
        <div className={`${toggleMenu? '': '-mr-480'} z-2 md:hidden size-full fixed top-0 right-0 m-0 transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1)] bg-white/70`}>
          <ul className={`${toggleMenu? '': '-ml-225'} z-2 md:hidden flex flex-col font-georgia fixed gap-6 w-200 h-[100%] mt-15 pb-10 pt-10 pl-5 float-left bg-stain transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1)]`}>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#top">Home</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#coupleM">The Couple</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#abaysM">Abays</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#scheduleM">Schedule</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#themeM">Theme</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#galleryM">Our Story</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#rsvpM">RSVP</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#faqsM">FAQs</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar