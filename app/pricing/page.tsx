import SecondaryHeroSection from '../components/sections/SecondaryHeroSection'
import HeroImgDesktop from "../assets/pricing/desktop/hero.jpg"
import HeroImgTablet from "../assets/pricing/tablet/hero.jpg"
import HeroImgMobile from "../assets/pricing/mobile/hero.jpg"
import PricingPlanSection from '../components/sections/PricingPlanSection'
import CTASection from '../components/sections/CTASection'
import CompareSection from '../components/sections/CompareSection'
export default function page() {
  return (
    <>
    <SecondaryHeroSection imageDesktop={HeroImgDesktop} title='Pricing' desc='Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.' imageMobile={HeroImgMobile} imageTablet={HeroImgTablet}/>
    <PricingPlanSection />
    {/* <CompareSection /> */}
    <CTASection />
    </>
  )
}
