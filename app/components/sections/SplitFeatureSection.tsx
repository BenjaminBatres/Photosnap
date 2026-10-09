import Image, { StaticImageData } from "next/image";
import Arrow from "../../assets/shared/desktop/arrow.svg";
interface TProps {
  title: string;
  desc: string;
  imageDesktop: StaticImageData;
  imageTablet: StaticImageData;
  imageMobile: StaticImageData;
  positionLeft: boolean;
}

export default function SplitFeatureSection({
  title,
  desc,
  imageMobile,
  imageDesktop,
  imageTablet,
  positionLeft,
}: TProps) {
  return (
    <section>
      <div
        className={`max-w-360 mx-auto flex flex-col ${positionLeft ? "flex-col-reverse sm:flex-row-reverse" : "flex-col-reverse sm:flex-row"}`}
      >
        <div
          className={`flex flex-col justify-center gap-6 sm:gap-12 px-6 sm:px-15 py-25 lg:py-0 lg:px-20 sm:w-[70%] lg:w-[45%]`}
        >
          <div className="space-y-4 sm:space-y-5">
            <h2 className="text-[32px] sm:text-[40px] leading-[125%] sm:leading-12 uppercase font-bold tracking-[3.5px] sm:tracking-[4.17px] max-w-70  sm:max-w-85">
              {title}
            </h2>
            <p className="text-[15px] leading-[165%] text-black/60">{desc}</p>
          </div>

          <div className="flex gap-4 cursor-not-allowed w-fit">
            <span className="text-xs leading-[135%] uppercase font-bold tracking-[2px]">
              View the stories
            </span>{" "}
            <Image src={Arrow} alt="arrow" />
          </div>
        </div>
        <div
          className={`${positionLeft ? "sm:w-[45%] lg:w-[70%] " : "sm:w-[35%] lg:w-[70%]"}`}
        >
          <Image src={imageMobile} alt="" className="w-full sm:hidden" />
          <Image
            src={imageTablet}
            alt=""
            className="w-full hidden sm:block lg:hidden"
          />
          <Image src={imageDesktop} alt="" className="w-full hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
