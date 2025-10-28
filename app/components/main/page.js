"use client"
import Navbar from "../Navbar";
import Header from "../Header";
import HeaderM from "../HeaderM";
import About from "../About";
import AboutM from "../AboutM";
import ObserverProvider from "../small_components/Observer";
import Couple from "../Couple";
import CoupleM from "../CoupleM";
import ScheduleM from "../ScheduleM";
import ThemeM from "../ThemeM";
import GalleryM from "../GalleryM";
import FAQsM from "../FAQsM";
import Schedule from "../Schedule";
import Theme from "../Theme";
import Gallery from "../Gallery";
import RSVP from "../RSVP";
import FAQs from "../FAQs";
import GiftM from "../GiftM";
import React, { useState, useEffect } from 'react'
import { BarLoader } from "react-spinners";
import { redirect } from "next/navigation";
import Abays from "../Abays";
import AbaysM from "../AbaysM";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

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
    {/* <div className="mr-auto ml-auto w-full 2x1:max-w-[1510px] xl:max-w-[1220px] lg:max-w-[984px] md:max-w-[720px] sm:max-w-[640px]">
      <Header/>
      <About />
      <Couple />
      <Abays />
      <Schedule />
      <Theme />
      <Gallery />
      <RSVP />
      <FAQs />
    </div> */}
    <div className="mr-auto ml-auto w-full 2x1:max-w-[1510px] xl:max-w-[1220px] lg:max-w-[984px] md:max-w-[720px] sm:max-w-[640px] overflow-x-hidden">
      <HeaderM/>
      <AboutM />
      <CoupleM />
      <AbaysM />
      <ScheduleM />
      <ThemeM />
      <GalleryM />
      {/* <RSVPM /> */}
      <GiftM />
      <FAQsM />
    </div>
    </ObserverProvider>
    </>
  );
}
