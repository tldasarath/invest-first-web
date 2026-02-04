
import HomeHeroSection from "@/Components/HeroSection/HomeHeroSection";
import FormationandMeeting from "@/Components/HomePage/FormationandMeeting";
import LicenseCategorySection from "@/Components/HomePage/LicenseCategorySection";
import ProjectileCarousel from "@/Components/HomePage/ProjectileCarousel";
import VisaServices from "@/Components/HomePage/VisaServices";
import { logos } from "@/data/CarouselData";


export default function Home() {
  return (
    <>
      <div>
        <HomeHeroSection />
        <FormationandMeeting />
        <ProjectileCarousel logos={logos} speed={0.8} />
        <LicenseCategorySection />
        <VisaServices />
      </div>
    </>
  );
}
