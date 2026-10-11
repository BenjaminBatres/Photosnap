import React from 'react'
import SecondaryHeroSection from '../components/sections/SecondaryHeroSection'
import HeroImgDesktop from "../assets/features/desktop/hero.jpg"
import HeroImgTablet from "../assets/features/tablet/hero.jpg"
import HeroImgMobile from "../assets/features/mobile/hero.jpg"
import FeaturesHighlights from '../components/sections/FeaturesHighlights'
import highlights from '../data/highlights'
import CTASection from '../components/sections/CTASection'
export default function page() {
  return (
    <>
    <SecondaryHeroSection title='Features' desc='We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.' imageDesktop={HeroImgDesktop} imageTablet={HeroImgTablet} imageMobile={HeroImgMobile}/>
    <FeaturesHighlights highlights={highlights} />
    <CTASection />
    </>
  )
}
