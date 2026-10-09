import Image from "next/image";
import MountainsDesktop from "../../assets/stories/desktop/mountains.jpg";
import CityScapeDesktop from "../../assets/stories/desktop/cityscapes.jpg";
import VoyageDesktop from "../../assets/stories/desktop/18-days-voyage.jpg";
import ArchitecturalsDesktop from "../../assets/stories/desktop/architecturals.jpg";
import MountainsMobile from "../../assets/stories/mobile/mountains.jpg";
import CityScapeMobile from "../../assets/stories/mobile/cityscapes.jpg";
import VoyageMobile from "../../assets/stories/mobile/18-days-voyage.jpg";
import ArchitecturalsMobile from "../../assets/stories/mobile/architecturals.jpg";

import Arrow from "../../assets/shared/desktop/arrow.svg";
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
          <div key={id} className="relative group hover:-translate-y-6 duration-350">
            <div className="absolute bottom-0 w-full h-2 bg-Gradient-7 z-10 opacity-0 group-hover:opacity-100 duration-350"/>
            <Image
              src={story.imageDesktop}
              loading="eager"
              alt=""
              className="h-93.75 sm:h-auto w-full object-cover"
            />
            <div className="absolute bg-Gradient-1 inset-0" />
            <div className="absolute bottom-8 px-6 w-full space-y-5">
              <div className="border-b border-white/50 w-full space-y-1 pb-4">
                <h2 className="text-white text-lg leading-[140%] font-bold">
                  {story.title}
                </h2>
                <p className="text-white/90 text-[13px] leading-[130%]">
                  by {story.author}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-white text-xs leading-[135%] font-bold uppercase tracking-[2px]">
                  Read story
                </p>
                <Image src={Arrow} alt="arrow" className="invert-100" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
