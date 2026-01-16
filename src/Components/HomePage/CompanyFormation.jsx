import React from "react";
import PrimaryButton from "../Common/Buttons/PrimaryButton";
import Container from "../Common/Layout/Contianer";

export default function CompanyFormation() {
  return (
    <section className="relative w-full py-10 md:py-20">
    <Container>
        <div className="grid grid-cols-1 max-w-7xl mx-auto  md:grid-cols-3 gap-10">
         <div className="relative group ">
      <div
        className={`absolute -inset-1 rounded-[28px] blur-2xl opacity-70 `}
      />

      {/* Card */}
   <div className="flex w-full">

  {/* Left side */}
  <div className="flex-1 flex justify-center px-4 py-4 bg-black relative rounded-tr-none left-0.5 z-10 rounded-br-[28px]">
    <PrimaryButton text="Mainland" url="/" />
  </div>

  <div
    className="
      relative flex-1 -bottom-1 z-20 
      rounded-tl-[28px] rounded-tr-[28px] p-[4px] 
      bg-[linear-gradient(90deg,rgba(120,3,67,1)_0%,rgba(0,51,90,1)_100%)]
      bg-center
    "
  >
    <div className="relative  bg-black py-12  rounded-tl-[26px] rounded-tr-[26px]"></div>
  </div>

</div>


    <div
  className="
    relative z-0 rounded-[28px] rounded-tr-none p-[4px]
    bg-[linear-gradient(90deg,rgba(120,3,67,1)_0%,rgba(0,51,90,1)_100%)]
    bg-center
    shadow-[0_0_40px_rgba(0,0,0,0.8)]
  "
>
  {/* Inner Card */}
  <div
    className="
      relative z-0 rounded-[28px] rounded-tr-none
      bg-gradient-to-br from-[#08152b]/90 to-[#02050b]/95
      backdrop-blur-2xl
      flex flex-col justify-between
      transition-all duration-500
    "
  >
    <div className="py-10 px-4">
      <p className="pb-3 text-sm leading-relaxed text-slate-300">
        Start your UAE mainland company setup,
        trade freely, partner with government
        entities, and enjoy full operational
        flexibility.
      </p>

      <h3 className="text-2xl font-semibold tracking-wide text-white">
        Mainland
      </h3>
    </div>
  </div>
</div>

    </div>



{/* 
         <div className="relative group rounded-[24px] bg-[linear-gradient(90deg,rgba(120,3,67,1)_0%,rgba(0,51,90,1)_100%)]
      bg-center">



     <div className="flex w-full ">
  <div className="flex px-4  py-4 bg-black relative  rounded-tr-none   z-10 rounded-br-[28px]">
<PrimaryButton text="Mainland" url="/"/>
  </div>

  <div className="relative flex-1  py-8 border-b-0 -bottom-0.5 bg-black rounded-tl-[28px] rounded-tr-[28px] z-20"></div>
</div>

      <div
        className={`z-0 relative  rounded-[28px] py-
        bg-gradient-to-br from-[#08152b]/90 to-[#02050b]/95 rounded-tr-none
        backdrop-blur-2xl  flex flex-col justify-between
        transition-all duration-500 
        shadow-[0_0_40px_rgba(0,0,0,0.8)]`}
      >
            
        <div className="py-10 px-4">

          <p className=" pb-3 text-sm leading-relaxed text-slate-300">
            Start your UAE mainland company setup, 
trade freely, partner with government 
entities, and enjoy full operational 
flexibility.
          </p>
          <h3
            className={`text-2xl font-semibold tracking-wide ${
              "text-white"
            }`}
          >
            Mainland
          </h3>
        </div>

   
      </div>
    </div> */}

       
      </div>
    </Container>
    </section>
  );
}
