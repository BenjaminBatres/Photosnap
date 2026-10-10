import HeroSection from "./components/sections/HeroSection";
import DesignedDesktop from "./assets/home/desktop/designed-for-everyone.jpg";
import DesignedTablet from "./assets/home/tablet/designed-for-everyone.jpg";
import DesignedMobile from "./assets/home/mobile/designed-for-everyone.jpg";
import BeautifulDesktop from "./assets/home/desktop/beautiful-stories.jpg";
import BeautifulTablet from "./assets/home/tablet/beautiful-stories.jpg";
import BeautifulMobile from "./assets/home/mobile/beautiful-stories.jpg";
import SplitFeatureSection from "./components/sections/SplitFeatureSection";
import StoriesSection from "./components/sections/StoriesSection";
import FeaturesHighlights from "./components/sections/FeaturesHighlights";
import stories from "./data/stories";
export default function Home() {
  const features = [
    {
      title: "Beautiful stories every time",
      desc: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
      imageDesktop: BeautifulDesktop,
      imageTablet: BeautifulTablet,
      imageMobile: BeautifulMobile,
      positionLeft: true,
    },
    {
      title: "Designed for everyone",
      desc: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
      imageDesktop: DesignedDesktop,
      imageTablet: DesignedTablet,
      imageMobile: DesignedMobile,
      positionLeft: false,
    },
  ];
  return (
    <>
      <HeroSection />
      {features.map((feat, id) => (
        <SplitFeatureSection
          key={id}
          title={feat.title}
          desc={feat.desc}
          imageMobile={feat.imageMobile}
          imageDesktop={feat.imageDesktop}
          imageTablet={feat.imageTablet}
          positionLeft={feat.positionLeft}
        />
      ))}
      <StoriesSection stories={stories} limit={4} className="sm:grid-cols-2 lg:grid-cols-4"/>
      <FeaturesHighlights />
    </>
  );
}
