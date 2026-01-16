
import HomeHeroSection from "@/Components/HeroSection/HomeHeroSection";
import FormationandMeeting from "@/Components/HomePage/FormationandMeeting";
import ProjectileCarousel from "@/Components/HomePage/ProjectileCarousel";
import { logos } from "@/data/CarouselData";


export default function Home() {
  return (
   <>
<div>
  <HomeHeroSection/>
  <FormationandMeeting/>
      <ProjectileCarousel logos={logos} speed={0.8} />
</div>
   </>
  );
}
