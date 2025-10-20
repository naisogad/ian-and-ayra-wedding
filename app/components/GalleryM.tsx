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
        <section id='galleryM' className='min-h-[600px] pt-[4rem] pb-[0rem] relative justify-center flex flex-wrap box-border mt-[8rem] mb-[6rem] z-0 lg:hidden md:hidden'>
            {/* FLOWER */}
            <div className='w-[12rem] h-[14rem] top-[-3%] left-[50%] rotate-275 absolute z-1 pointer-events-none box-border block intersect-once intersect:motion-preset-slide-down motion-duration-1000'>
                <Image 
                    src={'/flowers/floater_6.png'}
                    alt=''
                    fill
                    className='object-cover'
                />
            </div>
            {showIndicator && (
              <div className='w-[11rem] h-[11rem] top-[17%] left-[6%] absolute z-1 pointer-events-none box-border block motion-preset-oscillate motion-duration-1300'>
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
              <div className='w-[11rem] h-[12rem] top-[55%] left-[6%] absolute z-1 pointer-events-none box-border block motion-preset-oscillate motion-duration-1300'>
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
              <div className='w-[11rem] h-[12rem] top-[90%] left-[6%] absolute z-1 pointer-events-none box-border block motion-preset-oscillate motion-duration-1300'>
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
            <div className='absolute top-0 left-0 z-0 box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'>
                <h2 className='-rotate-90 text-moss relative whitespace-nowrap text-ellipsis z-0 pb-[0.5rem] top-[14rem] left-[-3.9rem] text-[3.2rem] leading-[0.9]'>Our Story</h2>
            </div>
            {/* IMAGES CONTAINER */}
            <div className='z-0 ml-auto grow-0 shrink-0 basis-[70%] max-w-[70%] min-h-[1px] max-h-[95rem] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
              <div className='justify-end flex flex-wrap box-border'>
                {/* IMAGE COLUMN */}
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pr-[15px] bg-amber-50 box-border block'>
                  {/* TITLE */}
                  <div className='box-border block pl-[15px] pr-[15px] pt-10 intersect-once intersect:motion-preset-slide-left motion-duration-1300'>
                    <h3 className='text-moss text-[2rem] leading-[3] text-center'>The Transition</h3>
                  </div>
                  <div className='flex box-border pb-[2rem] overflow-x-auto snap-x snap-mandatory snap-center'>
                     <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'><ImageFlip frontImageSrc={'/pictures/transition/couple-1.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> June 16, 2024 –</a><br /><br />Unang bulaklak na natanggap mo sakin…<br />gusto mo ng flowers.<br />May nag f-fund raising na student, pinabili mo ako.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-1300'><ImageFlip frontImageSrc={'/pictures/transition/couple-2.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> June 19, 2024 –</a><br /><br />Unang date pagkatapos ng klaruhan,<br />unang litanya ng “gusto ko magpaligaw”<br />pero sabi ni Lord, “huwag nang patagalin.”<br />Aba, kahit nagka-LBM ako,<br />hindi nakapigil ang kalaban,<br />kasi mas malakas ang plano Niya.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-1000'><ImageFlip frontImageSrc={'/pictures/transition/couple-3.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> June 19, 2024 –</a><br /><br />Unang litrato natin na super lapit.<br />Sheesh, parang tayo na talaga,<br />it's getting real!<br />Pero sabi mo sa akin mag wait pa ako.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-1500'><ImageFlip frontImageSrc={'/pictures/transition/couple-4.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> June 25, 2024 –</a><br /><br />Unang date as “official na nanliligaw.”<br />Nag-pray ako, “Bless our fellowship, Lord.”<br />natawa ka pa kasi dapat “date” daw.<br />Eh, saan ba tayo nagsimula? Fellowship din diba?</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-1800'><ImageFlip frontImageSrc={'/pictures/transition/couple-6.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> June 28, 2024 –</a><br /><br />Victory@40. Una kong conference,<br />pero mas victory nung binulong mo ang “Yes.”<br />Doon ko unang nahawakan kamay mo…<br />at doon din nagsimula ang “tayo.”</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-8.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> July 01, 2024 –</a><br /><br />Unang date bilang officially na tayo.<br />Pero group date na naman,<br />kasama ang singles at mga full-time.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-9.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> July 02, 2024 –</a><br /><br />Hard launch agad!<br />Sabi nga a testimony should be told, there is no lamp under the bed.<br />Hindi pwedeng itago o isecret ang testimony.<br />Sabi ni Lord, let them see the His light sa relationshop natin.<br />At doon nagumpisa magliwanag ang ikaw at ako</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-10.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> July 12, 2024 –</a><br /><br />Abay tayo sa kasal ni Ate Rachel,<br />parang prenup lang eh.<br />At ako, tuwang-tuwa,<br />kasi ang ganda ng love ko.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-11.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> July 20, 2024 –</a><br /><br />Unang birthday ko na may tayo.<br />Simple lang — pictures sa Old Moon,<br />tapos sa inyo,<br />pero sobra akong masaya,<br />dahil kasama kita.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-13.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> August 28, 2024 –</a><br /><br />Date sa Greenwich, pagkatapos ng away.<br />Tila buwanang pattern,<br />pero buwanan ding panalo,<br />dahil si Lord laging nasa gitna.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-14.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> August 28, 2024 –</a><br /><br />Pagmaya continuation —<br />another battle, another victory,<br />with Him, lagi tayong panalo.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-15.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> September 10, 2024 –</a><br /><br />Archery date!<br />Sabi mo magaling ka,<br />pero ako, first timer lang —<br />at mas tumama pa.<br />Princess Merida ka nga,<br />pero walang archery skills.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-16.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> September 20, 2024 –</a><br /><br />Night out with your beshies.<br />May bagong jowa si Camla,<br />at kahit di klaro kung okay tayo o hindi,<br />natapos ang gabi na ayos rin tayo.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-17.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> September 28, 2024 –</a><br /><br />Random grocery date after school.<br />Minsan ang simpleng lakad,<br />nagiging espesyal pag kasama ka.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-18.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> October 01, 2024 –</a><br /><br />First date of the month sa Checkpoint.<br />Parang milestone din ng love story natin.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-19.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> October 20, 2024 –</a><br /><br />Random pictorial after service.<br />Magkakulay ang suot natin,<br />pero ako ang nauna —<br />si Ayra lang naman ang nangopya.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-20.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> October 25, 2024 –</a><br /><br />Singles Go Away! Autumn ang theme.<br />Mainit man,<br />pero ang tingin ko sayo malamig at presko,<br />dahil sa ganda ng ngiti mo.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-21.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> November 14, 2024 –</a><br /><br />Purple Book class,<br />nag-volunteer ako,<br />pero kahit volunteerism,<br />hindi kayang pigilan ang “date” natin.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-22.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> November 23, 2024 –</a><br /><br />Unang Peniel experience!<br /> At hindi ito ang huli, God is good!</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-23.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> December 08, 2024 –</a><br /><br />Ice skating together!<br />Unang pagkafall, maliban sa pagkafall kay Ayra</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-24.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> December 11, 2024 –</a><br /><br />DIY ramen date!<br />Parang nag workout sa anghang,<br />pero worth it ang pawis, dahil share tayo ng word nyan sa isat isa.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-25.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> December 12, 2024 –</a><br /><br />Galing tayong Christmas party,<br />panalo pera at prizes…<br />pero dignity ko, talo.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-26.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> December 21, 2024 –</a><br /><br />Malamig sa Cafe Rosa,<br />pero wala ng mas lalamig pa sa nag iisang single namin na kasama.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-27.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> December 25, 2024 –</a><br /><br />Christmas service pictorial!<br />Minsan, random ang moment,<br />pero laging memorable.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-29.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> December 31, 2024 –</a><br /><br />Year End Party!<br />Salamat sa effort mo,<br />you made it happen.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/photo-2.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> January 03, 2025 –</a><br /><br />First date of the year!<br />Group date na naman,<br />pero parang prenup ang itsura natin.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-31.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> January 03, 2025 –</a><br /><br />Lamok bites,<br />pero tiis ganda para lang sa picture.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-32.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> January 20, 2025 –</a><br /><br />Escalator ride, bili ng waffle.<br />Pero ang naalala ko —<br />bangs mo,<br />at kung gaano kita ka-mahal.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-33.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> February 12, 2025 –</a><br /><br />Second Peniel.<br />Bagong mga tao, bagong experience,<br />pero nanatiling mabuti ang Diyos satin.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-34.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> Februar 14, 2025 –</a><br /><br />Valentine’s Day.<br />Unang totoong bulaklak at tsokolate galing sa’kin.<br />May tampuhan man sa viewdeck,<br />hindi nagwagi ang kaaway.</p>} height={500} width={300}/></div>
                     <div className='intersect-once intersect:motion-preset-slide-left motion-duration-2100'><ImageFlip frontImageSrc={'/pictures/transition/couple-35.jpg'} backContent={<p className="text-moss p-4"><a className='font-bold'> February 21, 2025 –</a><br /><br />Unang BGC date.<br />Check ng rings sa Ongpin,<br />event sa Phirst,<br />at ikaw — parang diwata sa paningin ko.</p>} height={500} width={300}/></div>
                  </div>  
                </div>
              </div>
            </div>
            {/* PROPOSAL */}
            <div className='bg-amber-50 z-0 ml-auto pt-[1rem] grow-0 shrink-0 basis-[70%] max-w-[70%] min-h-[1px] max-h-[1000rem] box-border block overflow-y-auto overflow-x-hidden intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
              {/* TITLE */}
              <div className='box-border block pl-[15px] pr-[15px] pb-[0rem] intersect-once intersect:motion-preset-slide-left motion-duration-1300'>
                <h3 className='text-moss text-[2rem] leading-[3] text-center'>The Proposal</h3>
              </div>
              {/* DETAIL */}
              <div className='box-border block text-left pl-[15px] pr-[15px] mt-6 mb-6 intersect-once intersect:motion-preset-slide-left motion-duration-1500'>
                <p className='text-moss text-[1.125rem]'>Date: March 22, 2025<br /><br />
                  <a className='font-bold'>💍 “A Love Written by Grace”</a><br /><br />Every chapter of our story has been guided by God’s hand — just as Ruth found favor in the fields of Boaz, we found grace in each other’s hearts. This proposal is more than a milestone; it’s a testament to patience, prayer, and divine orchestration. Through this video and the moments captured in every frame, we celebrate not only our love, but the faithfulness of the One who brought us together in His perfect time.
                  </p>
              </div>
              {/* YOUTUBE VIDEO */}
              <div className='justify-end flex flex-wrap box-border p-2'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TKMN3xWSTN4?si=aeM23f9XUqhrChR8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
              </div>
              <div className='flex box-border overflow-x-auto'>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e1.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e2.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e3.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e4.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e5.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e6.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e7.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e8.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e9.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e10.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e11.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e12.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e13.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e14.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e15.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e16.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e17.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e18.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/engagement/e19.jpg'} height={500} width={300}/></div>
              </div>
            </div>
            {/* PRENUP */}
            <div className='bg-amber-50 z-0 ml-auto pt-[1rem] mb-[5rem] grow-0 shrink-0 basis-[70%] max-w-[70%] min-h-[1px] max-h-[100rem] box-border block overflow-y-auto intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
              {/* TITLE */}
              <div className='box-border block pl-[15px] pr-[15px] intersect-once intersect:motion-preset-slide-left motion-duration-1300'>
                <h3 className='text-moss text-[2rem] leading-[3] text-center'>Prenup</h3>
              </div>
              {/* DETAIL */}
              <div className='box-border block text-left pl-[15px] pr-[15px] mt-6 mb-6 intersect-once intersect:motion-preset-slide-left motion-duration-1500'>
                <p className='text-moss text-[1.125rem]'>Date: October 10, 2025<br /><br />
                  <a className='font-bold'>🌸 “Grace in Every Frame”</a><br /><br />Our prenup isn’t just a photoshoot — it’s a reflection of grace. Inspired by the story of Ruth and Boaz, we wanted to capture love that’s pure, intentional, and grounded in faith. Behind every smile is gratitude for the waiting season, and behind every embrace is the joy of finding home in each other. This is our glimpse of forever — a celebration of love authored by God Himself.
                </p>
              </div>
              <div className='flex box-border overflow-x-auto'>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p1.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p2.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p3.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p4.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p5.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p6.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p7.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p8.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p9.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p10.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p11.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p12.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p13.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p14.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p15.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p16.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p17.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p18.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p19.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p20.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p21.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p22.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p23.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p24.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p25.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p26.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p27.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p28.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p29.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p30.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p31.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p32.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p33.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p34.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p35.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p36.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p37.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p38.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p39.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p40.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p41.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p42.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p43.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p44.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p45.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p46.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p47.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p48.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p49.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p50.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p51.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p52.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p53.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p54.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p55.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p56.jpg'} height={500} width={300}/></div>
                <div className='relative cursor-pointer intersect-once intersect:motion-preset-slide-left motion-duration-1000'> <ImageC frontImageSrc={'/pictures/prenup/p57.jpg'} height={500} width={300}/></div>
              </div>
            </div>

        </section>
  )
}

export default PhotosM