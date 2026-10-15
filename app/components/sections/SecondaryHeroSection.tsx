import Image, { StaticImageData } from "next/image";
import * as motion from "motion/react-client";
interface TProps {
  imageDesktop: StaticImageData;
  imageTablet: StaticImageData;
  imageMobile: StaticImageData;
  title: string;
  desc: string;
}

export default function SecondaryHeroSection({
  imageDesktop,
  desc,
  title,
  imageTablet,
  imageMobile,
}: TProps) {
  return (
    <section>
      <div className="max-w-360 mx-auto flex flex-col-reverse sm:flex-row">
        <div className="bg-black flex flex-col justify-center py-20 px-6 sm:px-10 md:pl-20 2xl:pl-30 md:pr-20 lg:pr-10 relative">
          {/* Gradient bar mobile screens */}
          <div className="w-32 h-1.5 bg-Gradient-6 absolute top-0 sm:hidden" />
          <div className="relative space-y-5">
            {/* Gradient bar */}
            <div className="h-full w-1.5 bg-Gradient-6 absolute hidden sm:block -left-10 md:-left-20 2xl:-left-30" />
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-[32px] leading-[125%] sm:text-[40px]/12 font-bold text-white uppercase tracking-[4.17px]"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-white/60 text-[15px] leading-[165%] max-w-sm"
            >
              {desc}
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="sm:h-122.5"
        >
          <Image
            src={imageDesktop}
            alt=""
            className="hidden md:block object-cover h-full"
          />
          <Image
            src={imageTablet}
            alt=""
            className="w-full h-full hidden sm:block md:hidden object-cover"
          />
          <Image
            src={imageMobile}
            alt=""
            className="w-full h-full  sm:hidden object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
