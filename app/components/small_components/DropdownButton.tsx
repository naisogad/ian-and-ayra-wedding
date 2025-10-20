import React, { useState } from 'react'

const DropdownButton = ({question, answer}) => {
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
  <button
      type="button"
      className=" border-b-2 text-moss text-left pl-[1rem] pt-[1.2rem] pb-[1.2rem] w-full block box-border"
      onClick={toggleNav}
  >
      <div className='flex flex-wrap justify-between items-center'>
          <a className='text-[1.8rem] w-[90%] leading-[2.2rem]'>{question}</a>
          <div className={`${toggleMenu? 'rotate-180': ''} box-border block w-[10%] justify-items-center relative transition-transform duration-150`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-3 relative align-middle">
                  <path strokeLinecap='round' strokeLinejoin='round' d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                </svg>
          </div>  
      </div>
          <div className={`${toggleMenu? '': 'hidden'} pt-4 pb-1 pr-2`}>
              <p>{answer}</p>
          </div>
  </button> 
  )
}

export default DropdownButton