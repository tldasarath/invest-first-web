import Image from "next/image";
import Container from "../Common/Layout/Contianer";

export default function ScheduleMeetingSection() {
    return (
        <section className="w-full py-10 md:py-20 ">
            <Container>
                <div className="max-w-7xl mx-auto ">
                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-1 rounded-[32px]  ">

                        {/* LEFT CARD */}
                    <div className="rounded-[28px]  flex flex-col overflow-hidden">

  {/* 🔹 TOP PANEL */}
  <div className="flex-1 p-11 bg-[#000F2B] ">
    <h2 className="text-4xl md:text-[2.5rem] font-semibold text-white mb-4">
      Schedule Meeting
    </h2>

    <p className="text-sm md:text-base leading-relaxed max-w-md text-slate-300">
      Start your business journey with Invest First through expert
      business setup services UAE tailored to your goals. Our
      specialists support company formation, licensing, visas, and
      banking, ensuring compliance, clarity, and a seamless setup
      process from start to finish.
    </p>
  </div>

  {/* 🔹 BOTTOM PANEL */}
<div className="flex-1 flex h-full flex-col md:flex-row">

  {/* ───────────────── CONSULTANT ───────────────── */}
  <div className="flex-1 h-full">
    {/* OUTER defines the shape */}
    <div className="flex h-full overflow-hidden rounded-tl-3xl rounded-bl-3xl ">

      {/* LEFT — CONTENT */}
      <div className="flex-[0.8] flex flex-col items-center justify-center gap-4 p-4">

        <Image
          src="/assets/images/t.png"
          alt="Consultant"
          width={200}
          height={200}
          className="rounded-t-3xl object-cover"
        />

        <div className="text-center">
          <p className="text-white text-base font-medium">
            Meet Consultants
          </p>
          <span className="text-blue-400 text-sm">View →</span>
        </div>
      </div>

      {/* RIGHT — BLUE PANEL */}
      <div className="flex-[0.2] bg-[#000F2B] rounded-b-3xl" />
    </div>
  </div>

  {/* ───────────────── BUTTONS ───────────────── */}
  <div className="flex-1 h-full">
    {/* OUTER defines the shape */}
    <div className="flex h-full overflow-hidden rounded-tr-3xl rounded-br-3xl bg-[#000F2B]">

      {/* LEFT — BUTTONS */}
      <div className="w-[80%] flex flex-col gap-3  p-4">

       <div className="w-full bg-black rounded-t-3xl p-2">
         <button className="flex items-center gap-3 bg-[#E6F5FA] text-black px-8 py-4 rounded-xl text-lg font-medium w-full">
          <Image src="/assets/images/icons/whatsapp.png" alt="Chat" width={30} height={30} />
          Chat Now
        </button>

        <button className="flex items-center gap-4 bg-[#0b1328] text-white px-8 py-4 rounded-xl text-lg font-medium w-full">
          <Image src="/assets/images/icons/call.png" alt="Call" width={25} height={25} />
          Call Now
        </button>
       </div>

      </div>

      {/* RIGHT — BLUE PANEL */}
      <div className="w-[20%] bg-[#000F2B]" />
    </div>
  </div>

</div>

</div>


                        {/* RIGHT CARD */}
                        <div className="relative bg-[#660033] rounded-[28px] p-10 overflow-hidden">

                            <h2 className="text-4xl md:text-[2.5rem]  font-semibold  mb-4">
                                Schedule a Call
                            </h2>
                            <p className=" text-sm md:text-base leading-relaxed max-w-md">
                                Prefer a quick call instead? Choose your preferred date and time
                                to connect with Invest First specialists. We provide end-to-end
                                business setup services across the UAE, advising on legal
                                requirements, licensing, timelines, costs, and company
                                structures aligned with your goals, budget, and long-term growth
                                plans.
                            </p>

                            <button className="mt-10 bg-[#0b1328] text-white px-6 py-3 rounded-full flex items-center gap-3">
                                Schedule Meeting →
                            </button>

                            {/* Calendar */}
                            <div className="absolute right-6 top-6 bg-[#0b1328] rounded-2xl p-3 space-y-2">
                                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
                                    <div
                                        key={day}
                                        className={`w-12 h-12 flex flex-col items-center justify-center rounded-xl text-xs
                  ${i === 1
                                                ? "bg-white text-black"
                                                : "bg-[#121b35] text-white"
                                            }`}
                                    >
                                        <span className="text-sm font-semibold">{i + 31}</span>
                                        <span>{day}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}
