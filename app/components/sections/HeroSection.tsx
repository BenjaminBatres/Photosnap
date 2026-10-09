import Image from "next/image";
import HeroImgMobile from "../../assets/home/desktop/create-and-share.jpg";
import HeroImgTablet from "../../assets/home/tablet/create-and-share.jpg";
import HeroImgDesktop from "../../assets/home/desktop/create-and-share.jpg";
import Arrow from "../../assets/shared/desktop/arrow.svg";
export default function HeroSection() {
  return (
    <section>
      <div className="max-w-360 mx-auto flex flex-col-reverse sm:flex-row">
        <div className="bg-black pt-18 pb-20 px-6 md:py-30 sm:pr-10 xl:px-30 relative flex flex-col gap-6 sm:gap-12 justify-center sm:w-[70%] lg:w-[45%]">
          {/* Gradient bar */}
          <div className="sm:hidden absolute w-32 h-1.5 bg-Gradient-6 top-0" />
          <div className="space-y-4 sm:space-y-5 relative">
            {/* Gradient bar */}
            <div className="hidden sm:block absolute w-1.5 h-76 bg-Gradient-6 -left-6.5 xl:-left-30 " />
            <h2 className="text-[32px] sm:text-[40px] leading-[125%] sm:leading-12 text-white uppercase font-bold tracking-[3.5px] sm:tracking-[4.17px]">
              Create and share your photo stories.
            </h2>
            <p className="text-[15px] leading-[165%] text-white/60">
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
          </div>
          <div className="flex gap-4 cursor-not-allowed w-fit">
            <span className="text-xs leading-[135%] text-white uppercase font-bold tracking-[2px]">
              Get an invite
            </span>{" "}
            <Image src={Arrow} alt="arrow" className="invert-100" />
          </div>
        </div>
        <div className="sm:w-[30%] lg:w-[60%]">
          <Image
            src={HeroImgMobile}
            alt="hero img"
            loading="eager"
            className="sm:hidden"
          />
          <Image
            src={HeroImgTablet}
            alt="hero img"
            loading="eager"
            className="hidden sm:block lg:hidden md:h-full md:w-full object-cover"
          />
          <Image
            src={HeroImgDesktop}
            alt="hero img"
            loading="eager"
            className="hidden lg:block w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
