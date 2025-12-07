import Image from 'next/image'
import ImageFlip from './small_components/ImageFlip';
import ImageC from './small_components/ImageC';
import React, { useState, useRef, useEffect } from 'react';

const PhotosM = () => {

  const [showIndicator, setShowIndicator] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);

          // Start timer when visible
          setTimeout(() => {
            setShowIndicator(false);
          }, 20000); // 20 seconds
        }
      },
      { threshold: 0.5 } // triggers when 50% visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [hasStarted]);

  return (
        <section id='galleryM' className='min-h-[px] pt-[6em] pb-[6em] relative flex flex-wrap box-border mt-[6em] z-0 lg:hidden'>
            {/* FLOWER */}
            <div className='w-[8em] md:w-[12em] h-[10em] md:h-[14em] top-[-1em] md:top-[-5em] right-[0em] rotate-275 absolute z-1 pointer-events-none box-border block'>
                <Image 
                    src={'/flowers/floater_6.png'}
                    alt=''
                    fill
                    className='object-cover'
                />
            </div>
            {showIndicator && (
              <div className='w-[11em] h-[11em] top-[35em] left-[3em] md:left-[9em] absolute z-1 pointer-events-none box-border block motion-preset-oscillate motion-duration-1300'>
                  <Image 
                      src={'/pictures/tap&slide.png'}
                      alt=''
                      ref={imgRef}
                      fill
                      className='object-cover absolute'
                  />
              </div>
            )}
            {showIndicator && (
              <div className='w-[11rem] h-[12rem] top-[116em] md:top-[105em] left-[3em] md:left-[9em] absolute z-1 pointer-events-none box-border motion-preset-oscillate motion-duration-1300'>
                  <Image 
                      src={'/pictures/slideme.png'}
                      alt=''
                      ref={imgRef}
                      fill
                      className='object-cover absolute'
                  />
              </div>
            )}
            {showIndicator && (
              <div className='w-[11rem] h-[12rem] top-[190em] md:top-[165em] left-[3em] md:left-[9em] absolute z-1 pointer-events-none box-border motion-preset-oscillate motion-duration-1300'>
                  <Image 
                      src={'/pictures/slideme.png'}
                      alt=''
                      ref={imgRef}
                      fill
                      className='object-cover absolute'
                  />
              </div>
            )}
            {showIndicator && (
              <div className='w-[11rem] h-[12rem] top-[82%] md:top-[80%] left-[3em] md:left-[9em] absolute z-1 pointer-events-none box-border motion-preset-oscillate motion-duration-1300'>
                  <Image 
                      src={'/pictures/slideme.png'}
                      alt=''
                      ref={imgRef}
                      fill
                      className='object-cover absolute'
                  />
              </div>
            )}
            {showIndicator && (
              <div className='w-[11rem] h-[12rem] top-[94%] left-[3em] md:left-[9em] absolute z-1 pointer-events-none box-border motion-preset-oscillate motion-duration-1300'>
                  <Image 
                      src={'/pictures/slideme.png'}
                      alt=''
                      ref={imgRef}
                      fill
                      className='object-cover absolute'
                  />
              </div>
            )}
            {/* TITLE */}
            <div className='absolute z-0 box-border block'>
                <h2 className='text-moss -rotate-90 relative whitespace-nowrap text-ellipsis z-0 pb-[0.5rem] top-[4.8em] left-[-1em] md:left-[-1em] text-[2.4em] md:text-[4.2em] leading-[0.9]'>Our Story</h2>
            </div>
            {/* IMAGES CONTAINER */}
            <div className='z-0 ml-auto grow-0 shrink-0 basis-[70%] max-w-[70%] min-h-[1px] max-h-[95rem] box-border'>
              <div className='justify-end flex flex-wrap box-border'>
                {/* IMAGE COLUMN */}
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[1em] pr-[1em] bg-amber-50 box-border block'>
                  {/* TITLE */}
                  <div className='box-border block pl-[1em] pr-[1em] pt-[2.5em]'>
                    <p className='text-moss text-[1.5rem] md:text-[2em] leading-[1] text-center font-medium'>How It All Began</p>
                  </div>
                  <div className='flex box-border pb-[2em] overflow-x-auto snap-x snap-mandatory snap-center'>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-1.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> June 16, 2024 –</a><br /><br />Unang bulaklak na natanggap mo sakin…<br />gusto mo ng flowers.<br />May nag f-fund raising na student, pinabili mo ako.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-2.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> June 19, 2024 –</a><br /><br />Unang date pagkatapos ng klaruhan,<br />unang litanya ng “gusto ko magpaligaw”<br />pero sabi ni Lord, “huwag nang patagalin.”<br />Aba, kahit nagka-LBM ako,<br />hindi nakapigil ang kalaban,<br />kasi mas malakas ang plano Niya.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-3.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> June 19, 2024 –</a><br /><br />Unang litrato natin na super lapit.<br />Sheesh, parang tayo na talaga,<br />it's getting real!<br />Pero sabi mo sa akin mag wait pa ako.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-4.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> June 25, 2024 –</a><br /><br />Unang date as “official na nanliligaw.”<br />Nag-pray ako, “Bless our fellowship, Lord.”<br />natawa ka pa kasi dapat “date” daw.<br />Eh, saan ba tayo nagsimula? Fellowship din diba?</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-6.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> June 28, 2024 –</a><br /><br />Victory@40. Una kong conference,<br />pero mas victory nung binulong mo ang “Yes.”<br />Doon ko unang nahawakan kamay mo…<br />at doon din nagsimula ang “tayo.”</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-8.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> July 01, 2024 –</a><br /><br />Unang date bilang officially na tayo.<br />Pero group date na naman,<br />kasama ang singles at mga full-time.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-9.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> July 02, 2024 –</a><br /><br />Hard launch agad!<br />Sabi nga a testimony should be told, there is no lamp under the bed.<br />Hindi pwedeng itago o isecret ang testimony.<br />Sabi ni Lord, let them see His light sa relationshop natin.<br />At doon nagumpisa magliwanag ang ikaw at ako</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-10.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> July 12, 2024 –</a><br /><br />Abay tayo sa kasal ni Ate Rachel,<br />parang prenup lang eh.<br />At ako, tuwang-tuwa,<br />kasi ang ganda ng love ko.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-11.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> July 20, 2024 –</a><br /><br />Unang birthday ko na may tayo.<br />Simple lang — pictures sa Old Moon,<br />tapos sa inyo,<br />pero sobra akong masaya,<br />dahil kasama kita.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-13.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> August 28, 2024 –</a><br /><br />Date sa Greenwich, pagkatapos ng away.<br />Tila buwanang pattern,<br />pero buwanan ding panalo,<br />dahil si Lord laging nasa gitna.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-14.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> August 28, 2024 –</a><br /><br />Pagmaya continuation —<br />another battle, another victory,<br />with Him, lagi tayong panalo.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-15.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> September 10, 2024 –</a><br /><br />Archery date!<br />Sabi mo magaling ka,<br />pero ako, first timer lang —<br />at mas tumama pa.<br />Princess Merida ka nga,<br />pero walang archery skills.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-16.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> September 20, 2024 –</a><br /><br />Night out with your beshies.<br />May bagong jowa si Camla,<br />at kahit di klaro kung okay tayo o hindi,<br />natapos ang gabi na ayos rin tayo.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-17.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> September 28, 2024 –</a><br /><br />Random grocery date after school.<br />Minsan ang simpleng lakad,<br />nagiging espesyal pag kasama ka.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-18.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> October 01, 2024 –</a><br /><br />First date of the month sa Checkpoint.<br />Parang milestone din ng love story natin.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-19.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> October 20, 2024 –</a><br /><br />Random pictorial after service.<br />Magkakulay ang suot natin,<br />pero ako ang nauna —<br />si Ayra lang naman ang nangopya.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-20.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> October 25, 2024 –</a><br /><br />Singles Go Away! Autumn ang theme.<br />Mainit man,<br />pero ang tingin ko sayo malamig at presko,<br />dahil sa ganda ng ngiti mo.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-21.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> November 14, 2024 –</a><br /><br />Purple Book class,<br />nag-volunteer ako,<br />pero kahit volunteerism,<br />hindi kayang pigilan ang “date” natin.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-22.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> November 23, 2024 –</a><br /><br />Unang Peniel experience!<br /> At hindi ito ang huli, God is good!</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-23.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> December 08, 2024 –</a><br /><br />Ice skating together!<br />Unang pagkafall, maliban sa pagkafall kay Ayra</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-24.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> December 11, 2024 –</a><br /><br />DIY ramen date!<br />Parang nag workout sa anghang,<br />pero worth it ang pawis, dahil share tayo ng word nyan sa isat isa.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-25.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> December 12, 2024 –</a><br /><br />Galing tayong Christmas party,<br />panalo pera at prizes…<br />pero dignity ko, talo.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-26.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> December 21, 2024 –</a><br /><br />Malamig sa Cafe Rosa,<br />pero wala ng mas lalamig pa sa nag iisang single namin na kasama.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-27.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> December 25, 2024 –</a><br /><br />Christmas service pictorial!<br />Minsan, random ang moment,<br />pero laging memorable.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-29.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> December 31, 2024 –</a><br /><br />Year End Party!<br />Salamat sa effort mo,<br />you made it happen.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-30.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> January 03, 2025 –</a><br /><br />First date of the year!<br />Group date na naman,<br />pero parang prenup ang itsura natin.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-31.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> January 03, 2025 –</a><br /><br />Lamok bites,<br />pero tiis ganda para lang sa picture.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-32.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> January 20, 2025 –</a><br /><br />Escalator ride, bili ng waffle.<br />Pero ang naalala ko —<br />bangs mo,<br />at kung gaano kita ka-mahal.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-33.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> February 12, 2025 –</a><br /><br />Second Peniel.<br />Bagong mga tao, bagong experience,<br />pero nanatiling mabuti ang Diyos satin.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-34.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> Februar 14, 2025 –</a><br /><br />Valentine’s Day.<br />Unang totoong bulaklak at tsokolate galing sa’kin.<br />May tampuhan man sa viewdeck,<br />hindi nagwagi ang kaaway.</p>} height={350} width={200}/></div>
                     <div className=''><ImageFlip frontImageSrc={'/pictures/transition/couple-35.jpg'} backContent={<p className="text-moss p-4 text-[0.9em] md:text-[1em]"><a className='font-bold'> February 21, 2025 –</a><br /><br />Unang BGC date.<br />Check ng rings sa Ongpin,<br />event sa Phirst,<br />at ikaw — parang diwata sa paningin ko.</p>} height={350} width={200}/></div>
                  </div>  
                </div>
              </div>
            </div>
            {/* PROPOSAL */}
            <div className='bg-amber-50 z-0 ml-auto pt-[1em] grow-0 shrink-0 basis-[70%] max-w-[70%] min-h-[1px] box-border block overflow-y-auto overflow-x-hidden'>
              {/* TITLE */}
              <div className='box-border block pl-[1em] pr-[1em] pb-[0rem]'>
                <p className='text-moss text-[1.5rem] md:text-[2em] leading-[1] text-center font-medium'>The Proposal</p>
              </div>
              {/* DETAIL */}
              <div className='box-border block text-left pl-[1em] pr-[1em] mt-[2.5em] mb-[2.5em]'>
                <p className='text-moss text-[0.9em] md:text-[1.125em]'>Date: March 22, 2025<br /><br />
                  <a className='font-bold'>💍 “A Love Written by Grace”</a><br /><br />Every chapter of our story has been guided by God’s hand — just as Ruth found favor in the fields of Boaz, we found grace in each other’s hearts. This proposal is more than a milestone; it’s a testament to patience, prayer, and divine orchestration. Through this video and the moments captured in every frame, we celebrate not only our love, but the faithfulness of the One who brought us together in His perfect time.
                  </p>
              </div>
              {/* YOUTUBE VIDEO */}
              <div className='justify-end flex flex-wrap box-border p-[1em]'>
                <iframe width="100%" height="210px" src="https://www.youtube.com/embed/TKMN3xWSTN4?si=aeM23f9XUqhrChR8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
              </div>
              <div className='flex box-border overflow-x-auto'>
                <div className='relative cursor-pointer pl-4'> <ImageC frontImageSrc={'/pictures/engagement/e1.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e2.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e3.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e4.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e5.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e6.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e7.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e8.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e9.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e10.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e11.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e12.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e13.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e14.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e15.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e16.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e17.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e18.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/engagement/e19.jpg'} height={350} width={200}/></div>
              </div>
            </div>
            {/* PRENUP */}
            <div className='bg-amber-50 z-0 ml-auto pt-[1em] mb-[1em] grow-0 shrink-0 basis-[70%] max-w-[70%] min-h-[1px] box-border block overflow-y-hidden'>
              {/* TITLE */}
              <div className='box-border block pl-[1em] pr-[1em]'>
                <p className='text-moss text-[1.5rem] md:text-[2em] leading-[1] text-center font-medium'>Moments Before 'I Do'</p>
              </div>
              {/* DETAIL */}
              <div className='box-border block text-left pl-[1em] pr-[1em] mt-[2.5em] mb-[2.5em]'>
                <p className='text-moss text-[0.9em] md:text-[1.125em]'>Date: October 10, 2025<br /><br />
                  <a className='font-bold'>🌸 “Grace in Every Frame”</a><br /><br />Our prenup isn’t just a photoshoot — it’s a reflection of grace. Inspired by the story of Ruth and Boaz, we wanted to capture love that’s pure, intentional, and grounded in faith. Behind every smile is gratitude for the waiting season, and behind every embrace is the joy of finding home in each other. This is our glimpse of forever — a celebration of love authored by God Himself.
                </p>
              </div>
              <div className='box-border block pl-[1em] pr-[1em]'>
                <p className='text-moss text-[1.5rem] md:text-[2em] leading-[1] text-center font-medium'>Set 1</p>
              </div>
              <div className='flex box-border overflow-x-auto'>
                <div className='relative cursor-pointer pl-4'> <ImageC frontImageSrc={'/pictures/prenup/I + A-18.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-13.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-14.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-15.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-16.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-11.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-19.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-21.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-24.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-25.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-27.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-28.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-29.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-31.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-32.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-34.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-35.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-36.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-37.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-38.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-41.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-42.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-43.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-45.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-46.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-48.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-50.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-51.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-52.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-57.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-60.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-61.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-62.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-63.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-64.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-67.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-68.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-71.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-72.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-73.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-75.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-76.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-77.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-79.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-80.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-83.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-84.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-85.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-86.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-87.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-89.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-90.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-91.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-92.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-95.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-97.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-98.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-99.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-100.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-101.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-103.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-106.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-107.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-109.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-111.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-112.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-113.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-115.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-117.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-118.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-119.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-120.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-121.jpg'} height={350} width={200}/></div>
              </div>
              <div className='box-border block pl-[1em] pr-[1em] mt-[1em]'>
                <p className='text-moss text-[1.5rem] md:text-[2em] leading-[1] text-center font-medium'>Set 2</p>
              </div>
              <div className='flex box-border overflow-x-auto'>
                <div className='relative cursor-pointer pl-4'> <ImageC frontImageSrc={'/pictures/prenup/I + A-154.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-127.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-128.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-130.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-133.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-134.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-137.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-143.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-144.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-146.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-149.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-150.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-152.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-126.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-155.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-156.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-160.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-161.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-162.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-163.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-166.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-168.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-170.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-171.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-174.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-175.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-183.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-186.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-189.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-190.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-191.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-193.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-194.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-195.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-196.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-197.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-200.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-202.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-205.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-206.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-217.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-221.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-224.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-231.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-232.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-233.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-234.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-235.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-237.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-238.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-239.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-240.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-241.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-243.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-244.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-245.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-246.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-247.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-248.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-250.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-252.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-253.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-254.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-256.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-257.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-258.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-259.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-261.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-264.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-265.jpg'} height={350} width={200}/></div>
              </div>
                            <div className='box-border block pl-[1em] pr-[1em] mt-[1em]'>
                <p className='text-moss text-[1.5rem] md:text-[2em] leading-[1] text-center font-medium'>Set 3</p>
              </div>
              <div className='flex box-border overflow-x-auto'>
                <div className='relative cursor-pointer pl-4'> <ImageC frontImageSrc={'/pictures/prenup/I + A-298.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-267.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-268.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-269.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-270.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-274.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-275.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-276.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-277.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-278.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-279.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-280.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-281.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-282.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-283.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-284.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-286.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-289.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-290.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-291.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-292.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-294.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-296.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-266.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-302.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-303.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-307.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-308.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-309.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-310.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-311.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-314.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-318.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-324.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-325.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-326.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-327.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-331.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-333.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-334.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-340.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-341.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-344.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-348.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-351.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-352.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-353.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-365.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-366.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-367.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-374.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-376.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-377.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-381.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-382.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-383.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-384.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-385.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-386.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-387.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-388.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-390.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-392.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-393.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-395.jpg'} height={350} width={200}/></div>
                <div className='relative cursor-pointer'> <ImageC frontImageSrc={'/pictures/prenup/I + A-396.jpg'} height={350} width={200}/></div>
              </div>
            </div>
        </section>
  )
}

export default PhotosM