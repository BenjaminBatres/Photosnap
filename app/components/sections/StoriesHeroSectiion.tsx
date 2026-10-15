import Image from "next/image";
import HeroImgDesktop from "../../assets/stories/desktop/moon-of-appalacia.jpg";
import HeroImgTablet from "../../assets/stories/tablet/moon-of-appalacia.jpg";
import HeroImgMobile from "../../assets/stories/mobile/moon-of-appalacia.jpg";
import Arrow from "../../assets/shared/desktop/arrow.svg";
import * as motion from "motion/react-client";
export default function StoriesHeroSectiion() {
  return (
    <section>
      <div className="max-w-360 mx-auto relative">
        <Image
          src={HeroImgDesktop}
          alt="hero img"
          className="hidden md:block w-full h-162.5 object-cover"
        />
        <Image
          src={HeroImgTablet}
          alt="hero img"
          className="hidden sm:block md:hidden"
        />
        <Image
          src={HeroImgMobile}
          alt="hero img"
          className="sm:hidden w-full min-h-79.25 object-cover"
        />
        <div className="bg-black sm:bg-transparent py-15 px-6 relative sm:absolute top-0 md:top-[10%] sm:left-6 xl:left-[5%] 2xl:left-[8%] space-y-14 sm:space-y-16 ease-in-out transition-[left,top] sm:duration-300">
          {/* Gradient bar */}
          <div className="w-32 h-1.5 bg-Gradient-6 absolute top-0 sm:hidden" />
          <div className="space-y-4 sm:space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-white text-xs leading-[125%] font-bold tracking-[2px] uppercase"
            >
              Last month's featured story
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-white text-[32px] leading-[125%] sm:text-[40px]/12 font-bold tracking-[2.5px] uppercase "
            >
              Hazy full moon <br /> of appalachiia
            </motion.h2>
          </div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex gap-2 text-white/75 text-[13px] leading-[130%]"
            >
              March 2nd 2020{" "}
              <span className="text-white">by John Appleseed</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-white/60 text-[15px] leading-[165%] max-w-98"
            >
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-4 text-white text-xs uppercase font-bold tracking-[2px] leading-[135%] cursor-not-allowed w-fit"
            >
              Read the story <Image src={Arrow} alt="" className="invert-100" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
