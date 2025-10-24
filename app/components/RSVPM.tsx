"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import DropdownRadioButton from "./small_components/DropdownRadioButton";

const RSVPM = () => {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "will attend",
    email: "",
    mobile: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hasFadedIn, setHasFadedIn] = useState(false);

  // ✨ New guest list check states
  const [isAllowed, setIsAllowed] = useState(null);
  const [checkingGuest, setCheckingGuest] = useState(false);
  const [message, setMessage] = useState('Fill in your name');

  const options = [
    { value: "will attend", label: "will attend" },
    { value: "unable to attend", label: "unable to attend" },
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // restrict mobile to numbers only
    if (name === "mobile") {
      const onlyNumbers = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: onlyNumbers }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Dropdown change
  const handleDropdownChange = (value) => {
    setFormData((prev) => ({ ...prev, attendance: value }));
  };

  // ✅ Automatically check guest list when name changes
  useEffect(() => {
    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      setIsAllowed(null);
      setMessage("");
      return;
    }

    const timeout = setTimeout(async () => {
      setCheckingGuest(true);
      try {
        const res = await fetch("/api/check-guest", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: trimmedName }),
        });
        const data = await res.json();

        if (data.allowed) {
          setIsAllowed(true);
          setMessage("Fill in your email");
        } else {
          setIsAllowed(false);
          setMessage("");
        }
      } catch (err) {
        console.error("Error checking guest list:", err);
        setMessage("Error checking guest list");
      } finally {
        setCheckingGuest(false);
      }
    }, 600); // debounce for smoother typing

    return () => clearTimeout(timeout);
  }, [formData.name]);

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAllowed) {
      alert("Sorry, your name is not listed on the guest list.");
      return;
    }

    setSubmitting(true);
    setSuccess(false);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });

    const formUrl =
      "https://docs.google.com/forms/d/1HpYNwRIcl5wlZPZQHvksjeITeCEAysbg0OCKvW2yPqc/formResponse";
    const formBody = new URLSearchParams();
    formBody.append("entry.1606607000", formData.name);
    formBody.append("entry.1571335665", formData.attendance);
    formBody.append("entry.122322336", formData.email);
    formBody.append("entry.2058451053", formData.mobile);

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody.toString(),
      });

      setSuccess(true);
      setFormData({
        name: "",
        attendance: "will attend",
        email: "",
        mobile: "",
      });
      setIsAllowed(null);
      setMessage("Fill in your name");

      setTimeout(() => setSuccess(false), 4000);
    } catch (error) {
      console.error("Error submitting form", error);
      setMessage("Error submitting RSVP");
    } finally {
      setSubmitting(false);
    }
  };

  const isNameEmpty = !formData.name.trim();
  const isEmailEmpty = !formData.email.trim();
  const isMobileEmpty = !formData.mobile.trim();

  let buttonText = buttonLabel();
  function buttonLabel() {
    if (checkingGuest || (!isAllowed && !checkingGuest && !isNameEmpty) || isNameEmpty) return "submit";
    // if (!isAllowed && !checkingGuest && !isNameEmpty)
    //   return "submit";
    // if (isNameEmpty) return "submit";
    if (isEmailEmpty) return "fill in your email";
    if (isMobileEmpty) return "fill in your mobile";
    if (submitting) return "submitting...";
    return "submit";
  }

  const isDisabled =
    submitting ||
    isNameEmpty ||
    isEmailEmpty ||
    isMobileEmpty ||
    checkingGuest ||
    !isAllowed;

  useEffect(() => {
    if (!isDisabled && !hasFadedIn) setHasFadedIn(true);
  }, [isDisabled, hasFadedIn]);

  return (
    <section className="min-h-[315px] pb-[1rem] mt-[12rem] relative justify-center flex flex-wrap box-border lg:hidden md:hidden">
      {/* FLOWER */}
      <div
        id="rsvpM"
        className="w-[12rem] h-[16rem] top-[-9rem] left-[20%] rotate-275 absolute z-1 pointer-events-none box-border block intersect-once intersect:motion-preset-slide-down motion-duration-1000"
      >
        <Image src={"/flowers/floater_7.png"} alt="" fill className="object-cover" />
      </div>

      {/* TITLE */}
      <div className="box-border absolute top-0 left-0 z-0 block intersect-once intersect:motion-preset-slide-right motion-duration-1000">
        <h2 className="-rotate-90 relative margin-0 whitespace-nowrap text-ellipsis z-0 pb-[0.5rem] top-[8rem] left-[-2.7rem] text-[3.2rem] leading-[0.9] text-moss">
          RSVP
        </h2>
      </div>

      {/* FORM */}
      <div className="ml-auto pl-0 pr-0 z-0 grow-0 shrink-0 basis-[70%] max-w-[70%] relative w-[100%] min-h-[1px] box-border block bg-amber-50">
        <div className="mr-0 ml-0 box-border justify-end flex flex-wrap intersect-once intersect:motion-preset-slide-left motion-duration-1000">
          <div className="grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pt-[1rem] box-border block">
            <form
              onSubmit={handleSubmit}
              className="mr-auto ml-auto pl-[15px] pr-[15px] w-[100%] box-border block h-auto mb-[4rem] relative"
            >
              {/* NAME */}
              <div className="text-left font-georgia text-moss pt-[1.5rem] mb-[1.5em] relative box-border text-[1.125rem] leading-[1.7]">
                <span>I,</span>
                <input
                  type="text"
                  name="name"
                  placeholder="your name here"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-white w-[97%] h-[2.5rem] inline-block pl-[1rem] mb-[0.3rem] outline-none appearance-none border-2 ${
                    isAllowed === false
                      ? "border-red-400"
                      : isAllowed === true
                      ? "border-moss"
                      : "border-shadow"
                  }`}
                />
                <span>,</span>
                <DropdownRadioButton
                  options={options}
                  defaultValue={formData.attendance}
                  onChange={handleDropdownChange}
                  width={97}
                />
                <span>the wedding.</span>

                {/* 🌸 FRIENDLY MESSAGE SECTION */}
                <div className="mt-4 min-h-[2rem] transition-all duration-300">
                  <AnimatePresence mode="wait">
                    {checkingGuest && (
                      <motion.p
                        key="checking"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-moss text-[1.125rem] pt-0 pb-5 flex items-center gap-2"
                      >
                        <span className="inline-block w-4 h-4 border-2 border-moss rounded-full border-t-transparent animate-spin"></span>
                        Checking guest list...
                      </motion.p>
                    )}

                    {isAllowed === true && (
                      <motion.p
                        key="allowed"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-moss font-medium text-[1.125rem] flex items-center gap-2 bg-green-50/60 p-3 rounded-lg border border-green-200"
                      >
                        <span className="text-green-600 text-xl">🌾</span>
                        Welcome! You’re on the guest list.
                      </motion.p>
                    )}

                    {isAllowed === false && (
                      <motion.div
                        key="not-allowed"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-red-500 text-[1.125rem] flex flex-col items-start bg-red-50/60 p-3 rounded-lg border border-red-200"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[1.125rem] ">🌺</span>
                          <span>We couldn’t find your name on the guest list.</span>
                        </div>
                        <p className="text-moss mt-2 ml-7 text-[1.125rem] italic">
                          Kindly reach out to the couple for assistance.
                        </p>
                      </motion.div>
                    )}

                    {isAllowed === null && !checkingGuest && (
                      <motion.p
                        key="neutral"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-moss text-[1.125rem] bg-green-50/60 p-3 rounded-lg border border-green-200"
                      >
                        {message || "Please type your name to start 💌"}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              {/* EMAIL + MOBILE */}
              <div className="text-left font-georgia text-moss pb-[1.5em] relative box-border text-[1.125rem] leading-[1.7]">
                <span>You can contact and bring me more info at:</span>
                <input
                  type="email"
                  name="email"
                  placeholder="my_email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isAllowed}
                  className="bg-white w-[97%] h-[2.5rem] inline-block pl-[1rem] mb-[0.5rem] outline-none appearance-none border-2 border-shadow"
                />
                <input
                  type="tel"
                  name="mobile"
                  size={11}
                  placeholder="09164568604"
                  value={formData.mobile}
                  onChange={handleChange}
                  disabled={!isAllowed}
                  className="bg-white w-[97%] h-[2.5rem] inline-block pl-[1rem] mb-[0.5rem] outline-none appearance-none border-2 border-shadow"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isDisabled}
                className={`p-[0.5rem] text-center block w-[98%] border border-shadow text-[1.125rem] leading-[1.7] font-georgia box-border focus:outline-none focus:ring-2 focus:ring-moss focus:border-moss transition-all duration-300 rounded-xl
                ${
                  isDisabled
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed opacity-80"
                    : `text-moss animate-pulse-breathe button-hover-glow ${
                        !hasFadedIn ? "animate-fade-in-soft" : ""
                      }`
                }`}
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 💖 THANK YOU MODAL */}
      <AnimatePresence>
        {success && (
          <>
            <motion.div
              className="fixed inset-0 bg-moss/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <div className="relative bg-amber-50 rounded-2xl shadow-lg border border-moss/20 p-8 text-center max-w-sm w-[90%] font-georgia">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <Image
                    src="/flowers/floater_3.png"
                    alt="floral accent"
                    width={100}
                    height={100}
                    className="opacity-90 rotate-6"
                  />
                </div>
                <h3 className="text-3xl text-moss mb-3 tracking-wide">Thank You!</h3>
                <p className="text-moss text-[1.125rem] mb-3">
                  Your RSVP has been received.
                </p>
                <p className="text-moss text-[1.125rem]">
                  We can’t wait to celebrate this beautiful day with you 💐
                </p>
                <div className="mt-5 flex justify-center">
                  <div className="w-16 h-[2px] bg-moss/40 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RSVPM;
