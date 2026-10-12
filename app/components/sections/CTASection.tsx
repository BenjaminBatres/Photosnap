import Image from "next/image";
import CTAImgDesktop from "../../assets/shared/desktop/bg-beta.jpg";
import CTAImgTablet from "../../assets/shared/tablet/bg-beta.jpg";
import CTAImgMobileMobile from "../../assets/shared/mobile/bg-beta.jpg";
import Arrow from "../../assets/shared/desktop/arrow.svg";
export default function CTASection() {
  return (
    <section>
      <div className="max-w-360 mx-auto relative">
        <div className="absolute bg-Gradient-6 left-6 sm:left-0 h-1.5 w-32 sm:h-full sm:w-1.5" />
        <Image
          src={CTAImgDesktop}
          alt=""
          className="hidden md:block h-70 object-cover"
        />
        <Image
          src={CTAImgTablet}
          alt=""
          className="hidden sm:block md:hidden h-70 object-cover"
        />
        <Image
          src={CTAImgMobileMobile}
          alt=""
          className="sm:hidden w-full h-70 object-cover"
        />
        <div className="absolute top-1/4 2xl:left-[11%] flex flex-col sm:flex-row gap-y-6 justify-between max-w-277.5 mx-auto w-full  px-6 lg:pl-20 2xl:pl-0 lg:pr-20">
          <h2 className="text-white uppercase text-[32px] leading-[125%] sm:text-[40px]/12 font-bold max-w-90">
            We're in beta. Get your invite today!
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-white text-xs uppercase font-bold tracking-[2px]">
              Get an invite
            </span>
            <Image src={Arrow} alt="" className="invert-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
