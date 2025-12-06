"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import DropdownRadioButton from "./small_components/DropdownRadioButton";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    email: "",
    mobile: "",
  });


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hasFadedIn, setHasFadedIn] = useState(false);
  const [lastAttendance, setLastAttendance] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAllowed) {
      alert("Sorry, your name is not listed on the guest list.");
      return;
    }

    setIsSubmitting(true);
    if (formData.attendance.trim().toLowerCase() === "will attend") {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfmW9SPvlKrpXzK1Rjt-SniQrX5S8wvGFXG2rHxZcQHhqQpXg/formResponse";

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

      setLastAttendance(formData.attendance);

      setSuccess(true);
    } catch (error) {
      console.error("Form submission failed:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setFormData({ name: "", attendance: "", email: "", mobile: "" });
      }, 500);
    }
  };

  const isNameEmpty = !formData.name.trim();
  const isEmailEmpty = !formData.email.trim();
  const isMobileEmpty = !formData.mobile.trim();

  let buttonText = buttonLabel();
  function buttonLabel() {
    if (checkingGuest || (!isAllowed && !checkingGuest && !isNameEmpty) || isNameEmpty) return "submit";
    if (isEmailEmpty) return "fill in your email";
    if (isMobileEmpty) return "fill in your mobile";
    if (isSubmitting) return "submitting...";
    return "submit";
  }

  const isDisabled =
    isSubmitting ||
    isNameEmpty ||
    isEmailEmpty ||
    isMobileEmpty ||
    checkingGuest ||
    !isAllowed;

  useEffect(() => {
    if (!isDisabled && !hasFadedIn) setHasFadedIn(true);
  }, [isDisabled, hasFadedIn]);

  return (
    <section id="rsvp" className="hidden lg:flex min-h-[1px] pb-[10vw] pt-[10vw] relative justify-center flex-wrap box-border">
      {/* FLOWER */}
      <div
        className="w-[15vw] h-[18vw] top-[15vw] left-[7vw] rotate-0 absolute z-1"
      >
        <Image src={"/flowers/floater_9.png"} 
            alt="" 
            fill 
            className="object-cover" 
        />
      </div>

      {/* TITLE */}
      <div className="box-border absolute top-[22vw] right-[5vw] z-0 block">
        <h2 className="-rotate-90 relative margin-0 whitespace-nowrap text-ellipsis text-[5vw] leading-[0.9] text-moss">
          RSVP
        </h2>
      </div>

      {/* FORM */}
      <div className="grow-0 shrink-0 basis-[40%] max-w-[40%] relative w-[100%] min-h-[1px] box-border block bg-amber-50">
        <div className="mr-0 ml-0 box-border justify-end flex flex-wrap intersect-once intersect:motion-preset-slide-left motion-duration-1000">
          <div className="grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pt-[1rem] box-border block">
            <form
              onSubmit={handleSubmit}
              className="mr-auto ml-auto pl-[1vw] pr-[1vw] w-[100%] box-border block h-auto mb-[2vw] relative"
            >
              {/* NAME */}
              <div className="text-left font-georgia text-moss pt-[1vw] pb-[1vw] relative box-border text-[1vw] leading-[1.7]">
                <span>I, </span>
                <input
                  type="text"
                  name="name"
                  placeholder="your name here"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-white w-[97%] h-[2.5vw] inline-block pl-[0.8vw] mb-[0.3vw] outline-none appearance-none border-2 ${
                    isAllowed === false
                      ? "border-red-400"
                      : isAllowed === true
                      ? "border-moss"
                      : "border-shadow"
                  }`}
                />
                <span>, </span>
                <DropdownRadioButton
                  options={options}
                  defaultValue={formData.attendance}
                  onChange={handleDropdownChange}
                  width={97}
                />
                <span>the wedding.</span>

                {/* 🌸 FRIENDLY MESSAGE SECTION */}
                <div className="mt-[1vw] min-h-[1px] transition-all duration-300">
                  <AnimatePresence mode="wait">
                    {checkingGuest && (
                      <motion.p
                        key="checking"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-moss text-[1vw] pb-[1vw] flex items-center gap-2"
                      >
                        <span className="inline-block w-[1vw] h-[1vw] border-2 border-moss rounded-full border-t-transparent animate-spin"></span>
                        Checking guest list...
                      </motion.p>
                    )}

                    {isAllowed === true && (
                      <motion.p
                        key="allowed"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-moss font-medium text-[1vw] flex items-center gap-2 bg-green-50/60 p-[0.8vw] rounded-lg border border-green-200"
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
                        className="text-red-500 text-[1vw] flex flex-col items-start bg-red-50/60 p-[0.8vw] rounded-lg border border-red-200"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[1vw] ">🌺</span>
                          <span>We couldn’t find your name on the guest list.</span>
                        </div>
                        <p className="text-moss mt-[0.5vw] ml-[1.1vw] text-[1vw] italic">
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
                        className="text-moss text-[1vw] bg-green-50/60 p-[0.8vw] rounded-lg border border-green-200"
                      >
                        {message || "Please type your name to start 💌"}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              {/* EMAIL + MOBILE */}
              <div className="text-left font-georgia text-moss pb-[1.5em] relative box-border text-[1vw] leading-[1.7]">
                <span>You can contact and bring me more info at:</span>
                <input
                  type="email"
                  name="email"
                  placeholder="my_email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isAllowed}
                  className="bg-white w-[97%] h-[2.5vw] inline-block pl-[0.8vw] mb-[0.3vw] outline-none appearance-none border-2 border-shadow"
                />
                <input
                  type="tel"
                  name="mobile"
                  size={11}
                  placeholder="09164568604"
                  value={formData.mobile}
                  onChange={handleChange}
                  disabled={!isAllowed}
                  className="bg-white w-[97%] h-[2.5vw] inline-block pl-[0.8vw] mb-[0.3vw] outline-none appearance-none border-2 border-shadow"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isDisabled}
                className={`p-[0.5vw] text-center block w-[98%] border border-shadow text-[1vw] leading-[1.7] font-georgia box-border focus:outline-none focus:ring-2 focus:ring-moss focus:border-moss transition-all duration-300 rounded-xl
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
              <div className="relative bg-amber-50 rounded-2xl shadow-lg border border-moss/20 p-[1.5vw] text-center max-w-sm w-[90%] font-georgia">
                <div className="absolute top-[-4.5vw] left-1/2 transform -translate-x-1/2 h-[8vw] w-[11vw] rotate-260">
                  <Image
                    src="/flowers/floater_17.png"
                    alt="floral accent"
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-[1.4vw] text-moss mb-[0.6vw] tracking-wide">Thank You!</h3>

                {/* 🌸 Conditional message based on attendance */}
                {lastAttendance === "unable to attend" ? (
                  <>
                    <p className="text-moss text-[1vw] mb-[0.6vw]">
                      Your RSVP has been received.
                    </p>
                    <p className="text-moss text-[1vw]">
                      We’re sad you can’t make it, but we truly appreciate your message 💛
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-moss text-[1vw] mb-[0.6vw]">
                      Your RSVP has been received.
                    </p>
                    <p className="text-moss text-[1vw]">
                      We can’t wait to celebrate this beautiful day with you 💐
                    </p>
                  </>
                )}

                <div className="mt-[0.8vw] flex justify-center">
                  <div className="w-[2vw] h-[0.1vw] bg-moss/40 rounded-full"></div>
                </div>
                <button
                onClick={() => setSuccess(false)}
                className="inline-block mt-3 bg-moss text-white px-[1.2vw] py-[0.4vw] rounded-lg hover:bg-olive transition-all"
                >
                    Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
};

export default RSVP;