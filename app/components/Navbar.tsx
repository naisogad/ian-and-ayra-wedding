'use client'
import React, { useState } from 'react'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const toggleNav = () => {
      setToggleMenu(!toggleMenu);
    }

    

  return (
    <nav>
      <div className='top-0 left-0 z-4'>
        {/* MENU BUTTON*/}
        <h4 className='hidden lg:block fixed rotate-90 font-georgia z-4 top-[2.5vw] right-0 cursor-pointer text-[1.3vw] uppercase text-moss' onClick={toggleNav}>Menu</h4>
        {/* MOBILE BUTTON */}
        <div className='w-screen h-12 top-0 fixed z-4 block lg:hidden'>
          <button className='space-y-1 relative left-[90%] md:left-[95%] top-[30%] box-border block lg:hidden' onClick={toggleNav}>
            <span className={`block h-1 w-7 bg-moss transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1) ${toggleMenu? 'rotate-45 translate-y-3': ''}`}></span>
            <span className={`block h-1 w-7 bg-moss transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1) ${toggleMenu? 'scale-0 opacity-0': ''}`}></span>
            <span className={`block h-1 w-7 bg-moss transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1) ${toggleMenu? '-rotate-45 -translate-y-1': ''}`}></span>
          </button>
        </div>
        {/* NAV MENU */}
        <div className={`${toggleMenu? '': '-mr-[100vw]'} z-3 hidden lg:block size-full fixed top-0 right-0 m-0 bg-white/70 transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1)]`}>
          <ul className={`${toggleMenu? 'mr-[5vw]': '-mr-[90vw] '} hidden lg:flex flex-col font-georgia relative gap-6 w-80 max-h-[60%] mt-[5vw] pb-[20vw] pt-[2vw] pl-[3vw] float-right bg-stain transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1)]`}>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#home">Home</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#couple">The Couple</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#abays">Entourage</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#schedule">Timeline</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#theme">Wedding Attire</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#gallery">Our Story</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#rsvp">RSVP</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#gift">Gift Guide</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#faqs">FAQs</a></li>
          </ul>
        </div>
      {/* MOBILE MENU */}
        <div className={`${toggleMenu? '': '-mr-480'} z-3 lg:hidden size-full fixed top-0 right-0 m-0 transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1)] bg-white/70`}>
          <ul className={`${toggleMenu? '': '-ml-225'} lg:hidden flex flex-col font-georgia fixed gap-6 w-200 h-[100%] mt-15 pb-10 pt-10 pl-5 float-left bg-stain transition-all duration-400 ease-[cubic-bezier(0.77, 0.2, 0.05, 1)]`}>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#homeM">Home</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#coupleM">The Couple</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#abaysM">Entourage</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#scheduleM">Timeline</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#themeM">Wedding Attire</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#galleryM">Our Story</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#rsvpM">RSVP</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#giftM">Gift Guide</a></li>
            <li><a className='text-3xl text-moss hover:text-amber-50' onClick={toggleNav} href="#faqsM">FAQs</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar