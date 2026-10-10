import { StaticImageData } from "next/image";
import Stories from "../ui/Stories";

interface TStories {
  imageDesktop: StaticImageData;
  title: string;
  author: string;
  date: string;
}
interface TProps {
  className: string;
  limit: number;
  stories: TStories[];
}
export default function StoriesSection({ className, stories, limit }: TProps) {
  const displayedStories = limit ? stories.slice(0, limit) : stories;
  return (
    <section>
      <div className={`max-w-360 mx-auto grid ${className}`}>
        {displayedStories.map((story) => (
          <Stories
            key={story.title}
            author={story.author}
            image={story.imageDesktop}
            title={story.title}
          />
        ))}
      </div>
    </section>
  );
}
