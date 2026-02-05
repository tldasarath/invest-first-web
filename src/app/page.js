
import Footer from "@/Components/Common/Footer/Footer";
import HomeHeroSection from "@/Components/HeroSection/HomeHeroSection";
import AboutUsection from "@/Components/HomePage/AboutUsection";
import FormationandMeeting from "@/Components/HomePage/FormationandMeeting";

import LicenseCategorySection from "@/Components/HomePage/LicenseCategorySection";
import ProjectileCarousel from "@/Components/HomePage/ProjectileCarousel";
import VisaServices from "@/Components/HomePage/VisaServices";
import FAQSection from "@/Components/HomePage/FAQSection";
import { logos } from "@/data/CarouselData";



export default function Home() {
  return (
    <>
      <div>
        <HomeHeroSection />
        <FormationandMeeting />
        <AboutUsection />
        <LicenseCategorySection />
        <ProjectileCarousel logos={logos} speed={0.8} />
        <VisaServices />
        <FAQSection />
        <Footer />
      </div>
      {/* <div>
        <HomeHeroSection />
        <FormationandMeeting />
        <ProjectileCarousel logos={logos} speed={0.8} />
        <LicenseCategorySection />
        <VisaServices />
      </div> */}
    </>
  );
}
