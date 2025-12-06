"use client"
import Navbar from "../Navbar";
import Header from "../Header";
import About from "../About";
import Couple from "../Couple";
import Abays from "../Abays";
import Schedule from "../Schedule";
import Theme from "../Theme";
import Gallery from "../Gallery";
import RSVP from "../RSVP";
import Gift from "../Gift";
import FAQs from "../FAQs";
import HeaderM from "../HeaderM";
import AboutM from "../AboutM";
import CoupleM from "../CoupleM";
import AbaysM from "../AbaysM";
import ScheduleM from "../ScheduleM";
import ThemeM from "../ThemeM";
import GalleryM from "../GalleryM";
import RSVPM from "../RSVPM";
import GiftM from "../GiftM";
import FAQsM from "../FAQsM";
import ObserverProvider from "../small_components/Observer";
import React, { useState, useEffect } from 'react'
import { BarLoader } from "react-spinners";
import { redirect } from "next/navigation";




export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '1.2rem',
        flexDirection: 'column',
        gap: '4px'
      }}
      >
        <p className="text-moss gap-1">Loading...</p>
        <BarLoader 
          color="#527d39" 
          height={3} 
          width={100}
        />
      </div>
    );
  }

  return (
    <>
    <ObserverProvider>
    <Navbar />
    <div className="hidden lg:block">
      <div className="mr-auto ml-auto w-full 2x1:max-w-[80vw] xl:max-w-[80vw] lg:max-w-[80vw] md:max-w-[80vw] sm:max-w-[80vw]">
        <Header/>
        <About />
        <Couple />
        <Abays />
        <Schedule />
        <Theme />
        <Gallery />
        <RSVP />
        <Gift />
        <FAQs />
      </div>
    </div>
    
    <div className="block lg:hidden">
      <div className="mr-auto ml-auto w-full h-full 2x1:max-w-[1510px] xl:max-w-[1220px] lg:max-w-[984px] md:max-w-[720px] sm:max-w-[640px] overflow-x-hidden">
        <HeaderM/>
        <AboutM />
        <CoupleM />
        <AbaysM />
        <ScheduleM />
        <ThemeM />
        <GalleryM />
        <RSVPM />
        <GiftM />
        <FAQsM />
      </div>
    </div>
    
    </ObserverProvider>
    </>
  );
}
