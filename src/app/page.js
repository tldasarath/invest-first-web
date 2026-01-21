
import HomeHeroSection from "@/Components/HeroSection/HomeHeroSection";
import AboutUsection from "@/Components/HomePage/AboutUsection";
import FormationandMeeting from "@/Components/HomePage/FormationandMeeting";

import LicenseCategorySection from "@/Components/HomePage/LicenseCategorySection";



export default function Home() {
  return (
     <>
            <div>
              <HomeHeroSection  />
              <FormationandMeeting  />

        <AboutUsection/>
        <LicenseCategorySection />
            </div>
     </>
  );
}
