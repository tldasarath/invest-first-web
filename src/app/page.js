import Navbar from "@/Components/Common/Navbar/Navbar";
import HomeHeroSection from "@/Components/HeroSection/HomeHeroSection";
import CompanyFormation from "@/Components/HomePage/CompanyFormation";
import FormationandMeeting from "@/Components/HomePage/FormationandMeeting";
import Image from "next/image";

export default function Home() {
  return (
   <>
<div>
  <HomeHeroSection/>
  <FormationandMeeting/>
</div>
   </>
  );
}
