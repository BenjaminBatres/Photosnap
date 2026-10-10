"use client";
import Image, { StaticImageData } from "next/image";
import Arrow from "../../assets/shared/desktop/arrow.svg";
import { usePathname } from "next/navigation";
interface IStories {
  image: StaticImageData;
  title: string;
  author: string;
  date: string;
}

export default function Stories({ author, image, title, date }: IStories) {
  const pathname = usePathname();
  return (
    <div className="relative group hover:-translate-y-6 duration-350">
      <div className="absolute bottom-0 w-full h-2 bg-Gradient-7 z-10 opacity-0 group-hover:opacity-100 duration-350" />
      <Image
        src={image}
        loading="eager"
        alt=""
        className="h-93.75 sm:h-auto w-full object-cover"
      />
      <div className="absolute bg-Gradient-1 inset-0" />
      <div className="absolute bottom-8 px-6 w-full space-y-5">
        <div className="border-b border-white/50 w-full space-y-1 pb-4">
          {pathname !== "/" && (
            <h3 className="text-white text-[13px] leading-[130%]">{date}</h3>
          )}
          <h2 className="text-white text-lg leading-[140%] font-bold">
            {title}
          </h2>
          <p className="text-white/90 text-[13px] leading-[130%]">
            by {author}
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
  );
}
