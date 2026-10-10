import Image from "next/image";
import MountainsDesktop from "../../assets/stories/desktop/mountains.jpg";
import CityScapeDesktop from "../../assets/stories/desktop/cityscapes.jpg";
import VoyageDesktop from "../../assets/stories/desktop/18-days-voyage.jpg";
import ArchitecturalsDesktop from "../../assets/stories/desktop/architecturals.jpg";
import MountainsMobile from "../../assets/stories/mobile/mountains.jpg";
import CityScapeMobile from "../../assets/stories/mobile/cityscapes.jpg";
import VoyageMobile from "../../assets/stories/mobile/18-days-voyage.jpg";
import ArchitecturalsMobile from "../../assets/stories/mobile/architecturals.jpg";
import Stories from "../ui/Stories";
export default function StoriesSection() {
  const stories = [
    {
      imageMobile: MountainsMobile,
      imageDesktop: MountainsDesktop,
      title: "The Mountains",
      author: "John Apppleseed",
    },
    {
      imageMobile: CityScapeMobile,
      imageDesktop: CityScapeDesktop,
      title: "Sunset Cityscapes",
      author: "Benjamin Cruz",
    },
    {
      imageMobile: VoyageMobile,
      imageDesktop: VoyageDesktop,
      title: "18 Days Voyage",
      author: "Alexei Borodin",
    },
    {
      imageMobile: ArchitecturalsMobile,
      imageDesktop: ArchitecturalsDesktop,
      title: "Architecturals",
      author: "Samantha Brooke",
    },
  ];
  return (
    <section>
      <div className="max-w-360 mx-auto grid sm:grid-cols-2 lg:grid-cols-4">
        {stories.map((story, id) => (
          <Stories key={id} author={story.author} image={story.imageDesktop} title={story.title}/>
        ))}
      </div>
    </section>
  );
}
