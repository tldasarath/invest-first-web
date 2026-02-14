"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scheduleContent } from "@/data/MeetingData";
import Container from "../Layout/Contianer";


export default function ScheduleMeetingSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const animateCard = (ref) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 3,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ref.current,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      };

      animateCard(leftCardRef);
      animateCard(rightCardRef);
    }); // Scope not strictly needed if we use refs directly, but good practice. Pass main container ref if available, or just empty.

    return () => ctx.revert(); // Cleanup
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setIsOpen(true);
  };

  const daysToShow = 5;
  const today = new Date();

  const dates = Array.from({ length: daysToShow }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return d;
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,15}$/; // 7–15 digits (international safe)

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must contain only digits (7–15)";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!selectedDate) {
      newErrors.date = "Please select a date";
    }

    if (!formData.time) {
      newErrors.time = "Please select a time";
    }

    if (!formData.purpose.trim()) {
      newErrors.purpose = "Purpose is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    purpose: "",
    time: "",
  });

  const [errors, setErrors] = useState({});

  const handleSendWhatsApp = () => {
    if (!validate()) return;

    const message = `
📅 *Schedule Meeting Request*

👤 Name: ${formData.fullName}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
🛠 Service: ${formData.service}

📆 Date: ${selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    })}
⏰ Time: ${formData.time}

📝 Purpose:
${formData.purpose}
`;

    const phoneNumber = "9947695010"; // 🔴 replace
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      service: "",
      purpose: "",
      time: "",
    });

    setSelectedDate(null);
    setErrors({});
    setIsOpen(false);
  };

  return (
    <section className=" relative w-full py-10 md:py-20">
      <Container>
        <div className="relative ">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-1 rounded-3xl items-stretch">

            {/* ================= LEFT CARD ================= */}
            <div ref={leftCardRef} className="relative rounded-3xl flex flex-col overflow-hidden h-full">

              {/* 🔹 TOP PANEL */}
              <div className="flex-1 p-8 bg-[#000F2B] rounded-bl-3xl">
                <h2 className="text-4xl md:text-[2.5rem] font-semibold text-white mb-4">
                  {scheduleContent.leftCard.heading}
                </h2>

                <p className="text-sm md:text-base leading-relaxed max-w-md text-slate-300">
                  {scheduleContent.leftCard.description}
                </p>
              </div>

              {/* 🔹 BOTTOM PANEL */}
              <div className="flex-1 flex h-full flex-col md:flex-row items-stretch">

                {/* ───────── CONSULTANT ───────── */}
                <div className="md:flex-1 w-full">
                  <div className="flex h-full overflow-hidden rounded-tl-3xl rounded-bl-3xl bg-[#000F2B] isolate">
                    <div className="flex-[0.8] flex flex-col items-center justify-center">
                      <div className="bg-black w-full p-3 flex flex-col overflow-hidden rounded-t-3xl">

                        {/* Image Section – FIXED HEIGHT */}
                        <div className="relative w-full h-[200px]">
                          <Image
                            src="/assets/images/t.png"
                            alt="Consultant"
                            fill
                            className="object-cover rounded-t-3xl"
                            priority
                          />
                        </div>

                        {/* Bottom Section */}
                        <div className="text-center w-full py-3 bg-[#000F2B] flex flex-row gap-2 items-center justify-center rounded-b-3xl">
                          <p className="text-white text-base font-medium">
                            Meet Consultants
                          </p>
                          <span className="text-blue-400 text-base"> →</span>
                        </div>
                        <div className="block md:hidden flex flex-col pt-4 gap-4">
                          <button className="flex w-full items-center gap-3 bg-[#E6F5FA] text-black px-8 py-4 rounded-2xl text-lg font-medium">
                            <Image
                              src="/assets/images/icons/whatsapp.png"
                              alt="Chat"
                              width={30}
                              height={30}
                            />
                            Chat Now
                          </button>

                          <button className="flex w-full items-center gap-5 bg-[#0b1328] text-white px-8 py-4 rounded-2xl text-lg font-medium">
                            <Image
                              src="/assets/images/icons/call.png"
                              alt="Call"
                              width={25}
                              height={25}
                            />
                            Call Now
                          </button>
                        </div>
                      </div>
                    </div>


                    <div className="flex-[0.2] bg-black overflow-hidden">
                      <div className="h-full bg-[#000F2B] rounded-bl-3xl rounded-br-3xl" />
                    </div>

                  </div>
                </div>

                {/* ───────── BUTTONS ───────── */}
                <div className="md:flex-1 h-full flex flex-row items-stretch">

                  {/* LEFT — 80% */}
                  <div className="w-[85%] bg-[#ffff]  pb-0 h-full">
                    <div className="w-full  bg-[#000F2B]  h-full flex flex-col">

                      {/* TOP — 50% */}
                      <div className="hidden md:flex flex-1 items-start">

                      </div>

                      {/* BOTTOM — 50% */}
                      <div className="hidden md:flex flex-col justify-center items-center p-4 gap-4 bg-black rounded-t-3xl flex-1">
                        <button className="flex w-full items-center gap-3 bg-[#E6F5FA] text-black px-8 py-4 rounded-2xl text-lg font-medium">
                          <Image
                            src="/assets/images/icons/whatsapp.png"
                            alt="Chat"
                            width={30}
                            height={30}
                          />
                          Chat Now
                        </button>

                        <button className="flex w-full items-center gap-5 bg-[#0b1328] text-white px-8 py-4 rounded-2xl text-lg font-medium">
                          <Image
                            src="/assets/images/icons/call.png"
                            alt="Call"
                            width={25}
                            height={25}
                          />
                          Call Now
                        </button>
                      </div>


                    </div>

                  </div>

                  {/* RIGHT — 20% */}
                  <div className="w-[15%] bg-[#0b1328] rounded-br-3xl rounded-bl-3xl h-full" />

                </div>


              </div>
            </div>

            {/* ================= RIGHT CARD ================= */}
            <div ref={rightCardRef} className="rounded-[28px] overflow-hidden flex items-stretch h-full isolate">

              {/* LEFT — 90% */}
              <div className="bg-[#660033] md:flex-[0.85] flex-[0.8] flex flex-col h-full">

                <div className="flex-[0.8] p-8">
                  <h2 className="text-4xl md:text-[2.5rem] font-semibold mb-4">
                    {scheduleContent.rightCard.heading}
                  </h2>

                  <p className="text-sm md:text-base leading-relaxed max-w-md">
                    {scheduleContent.rightCard.description}
                  </p>
                </div>

                <div className="flex-[0.2] flex flex-row items-stretch overflow-hidden">
                  <div className="flex-[0.3] bg-[#0b1328]">
                    <div className="bg-[#660033] m-0 w-full h-full rounded-br-3xl" />
                  </div>

                  <div className="flex-[0.5] flex flex-col">
                    <div className="md:flex-[0.5] flex-[0.3]" />
                    <div className="md:flex-[0.5] flex-[0.7] flex justify-center items-end">
                      <div className="w-full bg-[#660033] overflow-hidden">
                        <div className="bg-[#020e27] rounded-t-3xl w-full max-w-sm p-4">
                          <button onClick={() => handleDateClick()}
                            className="w-full bg-[#122130] text-white py-3 px-3 rounded-3xl flex items-center justify-center gap-3">
                            Schedule Meeting →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-[0.2] bg-[#0b1328]">
                    <div className="bg-[#660033] w-full h-full rounded-bl-3xl" />
                  </div>
                </div>

              </div>

              {/* RIGHT — 10% */}
              <div className="md:flex-[0.15] flex-[0.2] flex flex-col items-stretch overflow-hidden isolate">
                <div className="md:flex-[0.1] flex-[0.2] lg:flex-[0.2]">
                  <div className="bg-[#660033] rounded-br-3xl h-full relative -left-1" />
                </div>
                <div className="md:flex-[0.8] flex-[0.6] lg:flex-[0.6] bg-[#660033] overflow-hidden">
                  <div className="bg-[#020e27] w-full h-full rounded-tl-3xl rounded-bl-3xl flex items-center justify-center">
                    <div className="rounded-2xl p-3 space-y-2">
                      {dates.map((date, i) => {
                        const isToday =
                          date.toDateString() === new Date().toDateString();

                        return (
                          <div
                            key={date.toISOString()}
                            onClick={() => handleDateClick(date)}

                            className={`w-12 h-12 flex flex-col items-center justify-center rounded-xl text-xs ${isToday
                              ? "bg-white text-black"
                              : "bg-[#122130] text-white"
                              }`}
                          >
                            <span className="text-sm font-semibold">
                              {date.getDate()}
                            </span>
                            <span>
                              {date.toLocaleDateString("en-US", {
                                weekday: "short",
                              })}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>



                <div className="md:flex-[0.1] flex-[0.2] lg:flex-[0.2]">
                  <div className="bg-[#660033] rounded-br-3xl rounded-tr-3xl h-full relative -left-1" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#020e27] text-white rounded-2xl p-6 w-[95%] max-w-xl relative">

            {/* Close */}
            <button
              onClick={resetForm}
              className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gray-300 text-black flex items-center justify-center"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold text-center mb-6">
              Schedule Meeting
            </h2>

            <div className="space-y-4">

              {/* Full Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm block mb-1">Full Name</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-2 rounded-full bg-white text-black outline-none border
                ${errors.fullName ? "border-red-500 focus:border-red-500" : "border-transparent"}
              `}
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="text-sm block mb-1">Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-2 rounded-full bg-white text-black outline-none border
                ${errors.email ? "border-red-500 focus:border-red-500" : "border-transparent"}
              `}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm block mb-1">Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    const onlyNumbers = e.target.value.replace(/\D/g, "");
                    setFormData({ ...formData, phone: onlyNumbers });
                  }}
                  placeholder="Enter your phone"
                  inputMode="numeric"
                  maxLength={15}
                  className={`w-full px-4 py-2 rounded-full bg-white text-black outline-none border
    ${errors.phone ? "border-red-500 focus:border-red-500" : "border-transparent"}
  `}
                />

                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Service */}
              <div>
                <label className="text-sm block mb-1">Select Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-full bg-white text-black outline-none border
              ${errors.service ? "border-red-500" : "border-transparent"}
            `}
                >
                  <option value="">Select Service</option>
                  <option>Business Setup</option>
                  <option>Visa Services</option>
                  <option>Bank Account</option>
                </select>
                {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
              </div>

              {/* Select Date */}
              <div>
                <label className="text-sm block mb-2">Select Date</label>
                <div className="flex gap-2 flex-wrap">
                  {dates.map((date) => {
                    const isSelected =
                      selectedDate?.toDateString() === date.toDateString();

                    return (
                      <button
                        key={date.toISOString()}
                        type="button"
                        onClick={() => setSelectedDate(date)}
                        className={`px-4 py-2 rounded-xl text-sm
                    ${isSelected ? "bg-white text-black" : "bg-[#5a5a5a] text-white"}
                  `}
                      >
                        <div className="text-xs">
                          {date.toLocaleDateString("en-US", { weekday: "short" })}
                        </div>
                        <div className="font-semibold">
                          {date.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                      </button>
                    );
                  })}
                </div>
                {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
              </div>

              {/* Select Time */}
              <div>
                <label className="text-sm block mb-2">Select Time</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    "09:00 AM - 11:00 AM",
                    "11:00 AM - 01:00 PM",
                    "02:00 PM - 04:00 PM",
                    "04:00 PM - 06:00 PM",
                    "06:00 PM - 09:00 PM",
                  ].map((slot) => {
                    const isSelected = formData.time === slot;

                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData({ ...formData, time: slot })}
                        className={`py-2 rounded-xl text-sm border
                    ${isSelected ? "bg-white text-black border-white" : "bg-[#5a5a5a] text-white border-transparent"}
                    ${errors.time ? "border-red-500" : ""}
                  `}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
                {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
              </div>

              {/* Purpose */}
              <div>
                <label className="text-sm block mb-1">Purpose</label>
                <textarea
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Meeting purpose"
                  className={`w-full px-4 py-2 rounded-xl bg-white text-black outline-none border
              ${errors.purpose ? "border-red-500 focus:border-red-500" : "border-transparent"}
            `}
                />
                {errors.purpose && <p className="text-red-400 text-xs mt-1">{errors.purpose}</p>}
              </div>

              {/* Selected Schedule */}
              <div className="bg-gray-300 text-black px-4 py-2 rounded-xl text-sm">
                Selected Schedule:{" "}
                <strong>
                  {selectedDate
                    ? `${selectedDate.toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })} — ${formData.time || "--"}`
                    : "--"}
                </strong>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={resetForm}
                  className="flex-1 bg-red-700 text-white py-3 rounded-full"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSendWhatsApp}
                  className="flex-1 bg-white text-green-700 py-3 rounded-full font-medium"
                >
                  Send via WhatsApp
                </button>
              </div>

            </div>
          </div>
        </div>
      )}


    </section>
  );
}
