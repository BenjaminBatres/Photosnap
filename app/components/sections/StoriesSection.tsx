import { StaticImageData } from "next/image";
import Stories from "../ui/Stories";

interface TStories {
  imageDesktop: StaticImageData;
  title: string;
  author: string;
  date: string;
}
interface TProps {
  limit?: number;
  stories: TStories[];
}
export default function StoriesSection({ stories, limit }: TProps) {
  const displayedStories = limit ? stories.slice(0, limit) : stories;
  return (
    <section>
      <div className="max-w-360 mx-auto grid sm:grid-cols-2 lg:grid-cols-4">
        {displayedStories.map((story, id) => (
          <Stories
            id={id}
            key={story.title}
            author={story.author}
            image={story.imageDesktop}
            title={story.title}
            date={story.date}
          />
        ))}
      </div>
    </section>
  );
}
