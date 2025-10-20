import React, { useState } from 'react'
import Image from 'next/image'


const Abays = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
      
          const toggleNav = () => {
            setToggleMenu(!toggleMenu);
          }
  
    const [activeSection, setActiveSection] = useState('ps');
  
          const handleNavigation = (section) => {
            setActiveSection(section);
          };

    const [activeItem, setActiveItem] = useState('p1');
  
          const handleItem = (item) => {
            setActiveItem(item);
          };

  return (
    <section id='abays' className='hidden md:flex pt-[2.5rem] pb-[2.5rem] relative justify-center flex-wrap mr-[-15px] ml-[-15px] mb-[4rem] mt-[8rem] box-border'>
        <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
            {/* FLOWER */}
            <div className='top-[0rem] right-[-4rem] h-[12rem] rotate-20 w-[22rem] z-1 absolute box-border block'>
                <Image 
                alt=''
                src={'/flowers/floater_3.png'}
                fill
                className='object-cover'
            />
            </div>
            {/* CONTAINER */}
            <div className='mt-[5rem] flex flex-wrap mr-[-15px] ml-[-15px] box-border'>
                {/* LEFT CONTAINER */}
                <div className='h-auto grow-0 shrink-0 basis-[33%] max-w-[33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                    <h2 className='text-moss mt-[1.5rem] top-[-6rem] left-[-8rem] text-[6rem] leading-[2] text-center absolute whitespace-nowrap text-ellipsis box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>Abays</h2>
                </div>
                {/* RIGHT CONTAINER */}
                <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                    <div className='flex flex-wrap mr-[-15px] ml-[-15px] box-border'>
                        <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                            <div className='flex flex-wrap mr-[-15px] ml-[-15px] box-border'>
                                {/* RIGHT-LEFT CONTAINER */}
                                <div className='text-right grow-0 shrink-0 basis-[41%] max-w-[41%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-solid border-r-1 border-r-moss'>
                                    {/* CONTENT */}
                                    <div className='box-border block'>
                                        {/* CONTENT 1 */}
                                        <a onClick={() => handleNavigation('ps')} className='text-moss text-[2rem] leading-[2.5] break-words cursor-pointer hover:border-b-[7px] border-solid border-b-stain pb-[2px]'>Principal Sponsors <p className='font-georgia text-[1rem]'>+</p></a>
                                        {activeSection === 'ps' && (
                                        <ul className='block box-border text-moss text-[1.125rem] leading-[1.8] cursor-pointer font-georgia'>
                                                {/* ITEM 1 */}
                                                <li>
                                                    <a onClick={() => handleItem('p1')} className={`${activeItem === 'p1' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 2 */}
                                                <li>
                                                    <a onClick={() => handleItem('p2')} className={`${activeItem === 'p2' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 3 */}
                                                <li>
                                                    <a onClick={() => handleItem('p3')} className={`${activeItem === 'p3' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 4 */}
                                                <li>
                                                    <a onClick={() => handleItem('p4')} className={`${activeItem === 'p4' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                        </ul>
                                        )}
                                        {/* CONTENT 2 */}
                                        <a onClick={() => handleNavigation('ss')} className='text-moss text-[2rem] leading-[2.5] break-words cursor-pointer hover:border-b-[7px] border-solid border-b-stain pb-[2px]'>Secondary Sponsors <p className='font-georgia text-[1rem]'>+</p></a>
                                        {activeSection === 'ss' && (
                                        <ul className='block box-border text-moss text-[1.125rem] leading-[1.8] cursor-pointer font-georgia'>
                                                {/* ITEM 1 */}
                                                <li>
                                                    <a onClick={() => handleItem('s1')} className={`${activeItem === 's1' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 2 */}
                                                <li>
                                                    <a onClick={() => handleItem('s2')} className={`${activeItem === 's2' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 3 */}
                                                <li>
                                                    <a onClick={() => handleItem('s3')} className={`${activeItem === 's3' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 4 */}
                                                <li>
                                                    <a onClick={() => handleItem('s4')} className={`${activeItem === 's4' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                        </ul>
                                        )}
                                        {/* CONTENT 3 */}
                                        <a onClick={() => handleNavigation('bm')} className='text-moss text-[2rem] leading-[2.5] break-words cursor-pointer hover:border-b-[7px] border-solid border-b-stain pb-[2px]'>Bridesmaids <p className='font-georgia text-[1rem]'>+</p></a>
                                        {activeSection === 'bm' && (
                                        <ul className='block box-border text-moss text-[1.125rem] leading-[1.8] cursor-pointer font-georgia'>
                                                {/* ITEM 1 */}
                                                <li>
                                                    <a onClick={() => handleItem('bm1')} className={`${activeItem === 'bm1' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 2 */}
                                                <li>
                                                    <a onClick={() => handleItem('bm2')} className={`${activeItem === 'bm2' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 3 */}
                                                <li>
                                                    <a onClick={() => handleItem('bm3')} className={`${activeItem === 'bm3' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 4 */}
                                                <li>
                                                    <a onClick={() => handleItem('bm4')} className={`${activeItem === 'bm4' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                        </ul>
                                        )}
                                        {/* CONTENT 4 */}
                                        <a onClick={() => handleNavigation('gm')} className='text-moss text-[2rem] leading-[2.5] break-words cursor-pointer hover:border-b-[7px] border-solid border-b-stain pb-[2px]'>Groomsmen <p className='font-georgia text-[1rem]'>+</p></a>
                                        {activeSection === 'gm' && (
                                        <ul className='block box-border text-moss text-[1.125rem] leading-[1.8] cursor-pointer font-georgia'>
                                                {/* ITEM 1 */}
                                                <li>
                                                    <a onClick={() => handleItem('gm1')} className={`${activeItem === 'gm1' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 2 */}
                                                <li>
                                                    <a onClick={() => handleItem('gm2')} className={`${activeItem === 'gm2' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 3 */}
                                                <li>
                                                    <a onClick={() => handleItem('gm3')} className={`${activeItem === 'gm3' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 4 */}
                                                <li>
                                                    <a onClick={() => handleItem('gm4')} className={`${activeItem === 'gm4' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                        </ul>
                                        )}
                                        {/* CONTENT 5 */}
                                        <a onClick={() => handleNavigation('br')} className='text-moss text-[2rem] leading-[2.5] break-words cursor-pointer hover:border-b-[7px] border-solid border-b-stain pb-[2px]'>Bearers <p className='font-georgia text-[1rem]'>+</p></a>
                                        {activeSection === 'br' && (
                                        <ul className='block box-border text-moss text-[1.125rem] leading-[1.8] cursor-pointer font-georgia'>
                                                {/* ITEM 1 */}
                                                <li>
                                                    <a onClick={() => handleItem('br1')} className={`${activeItem === 'br1' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 2 */}
                                                <li>
                                                    <a onClick={() => handleItem('br2')} className={`${activeItem === 'br2' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 3 */}
                                                <li>
                                                    <a onClick={() => handleItem('br3')} className={`${activeItem === 'br3' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 4 */}
                                                <li>
                                                    <a onClick={() => handleItem('br4')} className={`${activeItem === 'br4' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                        </ul>
                                        )}
                                        {/* CONTENT 6 */}
                                        <a onClick={() => handleNavigation('pr')} className='text-moss text-[2rem] leading-[2.5] break-words cursor-pointer hover:border-b-[7px] border-solid border-b-stain pb-[2px]'>Parents <p className='font-georgia text-[1rem]'>+</p></a>
                                        {activeSection === 'pr' && (
                                        <ul className='block box-border text-moss text-[1.125rem] leading-[1.8] cursor-pointer font-georgia'>
                                                {/* ITEM 1 */}
                                                <li>
                                                    <a onClick={() => handleItem('pr1')} className={`${activeItem === 'pr1' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 2 */}
                                                <li>
                                                    <a onClick={() => handleItem('pr2')} className={`${activeItem === 'pr2' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 3 */}
                                                <li>
                                                    <a onClick={() => handleItem('pr3')} className={`${activeItem === 'pr3' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                                {/* ITEM 4 */}
                                                <li>
                                                    <a onClick={() => handleItem('pr4')} className={`${activeItem === 'pr4' && ('font-bold border-b-[7px] border-solid border-b-stain pb-[2px]')} hover:border-b-[7px] border-solid border-b-stain pb-[2px]`}>Pellentesque Id</a>
                                                </li>
                                        </ul>
                                        )}
                                    </div>
                                </div>
                                {/* RIGHT-RIGHT CONTAINER */}
                                <div className='grow-0 shrink-0 basis-[57%] max-w-[57%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] ml-3 box-border block'>
                                    {/* CONTENT */}
                                    <div className='flex flex-wrap mr-[-15px] ml-[-15px] box-border'>
                                        <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                            {/* PRIMARY SPONSORS */}
                                            {/* CONTENT 1 */}
                                            {activeItem === 'p1' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 1 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-1.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 1 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 2 */}
                                            {activeItem === 'p2' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 2 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-2.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 2 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 3 */}
                                            {activeItem === 'p3' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 3 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-3.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 3 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 4 */}
                                            {activeItem === 'p4' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 4 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-4.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 4 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* SECONDARY SPONSORS */}
                                            {/* CONTENT 1 */}
                                            {activeItem === 's1' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 1 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-5.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 1 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 2 */}
                                            {activeItem === 's2' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 2 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-6.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 2 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 3 */}
                                            {activeItem === 's3' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 3 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-7.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 3 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 4 */}
                                            {activeItem === 's4' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 4 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-8.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 4 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* BRIDESMAIDS */}
                                            {/* CONTENT 1 */}
                                            {activeItem === 'bm1' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 1 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-20.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 1 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 2 */}
                                            {activeItem === 'bm2' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 2 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-21.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 2 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 3 */}
                                            {activeItem === 'bm3' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 3 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-22.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 3 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 4 */}
                                            {activeItem === 'bm4' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 4 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-23.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 4 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* GROOMSMEN */}
                                            {/* CONTENT 1 */}
                                            {activeItem === 'gm1' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 1 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-16.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 1 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 2 */}
                                            {activeItem === 'gm2' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 2 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-17.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 2 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 3 */}
                                            {activeItem === 'gm3' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 3 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-18.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 3 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 4 */}
                                            {activeItem === 'gm4' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 4 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-19.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 4 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* BEARERS */}
                                            {/* CONTENT 1 */}
                                            {activeItem === 'br1' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 1 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-13.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 1 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 2 */}
                                            {activeItem === 'br2' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 2 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-14.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 2 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 3 */}
                                            {activeItem === 'br3' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 3 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-15.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 3 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 4 */}
                                            {activeItem === 'br4' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 4 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-24.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 4 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* PARENTS */}
                                            {/* CONTENT 1 */}
                                            {activeItem === 'pr1' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 1 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-9.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 1 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 2 */}
                                            {activeItem === 'pr2' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 2 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-12.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 2 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 3 */}
                                            {activeItem === 'pr3' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 3 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-10.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 3 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                            {/* CONTENT 4 */}
                                            {activeItem === 'pr4' && (
                                            <div className='mr-[-15px] ml-[-15px] box-border block'>
                                                {/* IMAGE 4 */}
                                                <div className='max-w-[100%] relative w-[100%] min-h-[35rem] pr-[15px] pl-[15px] box-border block'>
                                                  <Image 
                                                      alt=''
                                                      src={'/pictures/abays/a-photo-11.jpg'}
                                                      fill
                                                      className='object-cover'
                                                      loading='eager'
                                                  />
                                                </div>
                                                {/* DETAILS 4 */}
                                                <div className=' bg-amber-50 p-4'>
                                                    <h4 className='text-[1.8rem] text-moss leading-[1.5]'>Pellentesque Id</h4>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem Ipsum: Muspi Merol</p>
                                                    <p className='leading-[1.7] text-[1.125rem] text-moss mb-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                                                </div>
                                            </div>
                                            )}
                                        </div>
                                    </div>
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

export default Abays