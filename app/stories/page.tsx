import StoriesHeroSectiion from "../components/sections/StoriesHeroSectiion";
import StoriesSection from "../components/sections/StoriesSection";
import stories from "../data/stories";
export default function page() {
  return (
    <>
      <StoriesHeroSectiion />
      <StoriesSection stories={stories} />
    </>
  );
}
