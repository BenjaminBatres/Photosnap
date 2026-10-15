import Image, { StaticImageData } from "next/image";
import Arrow from "../../assets/shared/desktop/arrow.svg";
import * as motion from "motion/react-client";
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
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-[32px] sm:text-[40px] leading-[125%] sm:leading-12 uppercase font-bold tracking-[3.5px] sm:tracking-[4.17px] max-w-70  sm:max-w-85"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-[15px] leading-[165%] text-black/60"
            >
              {desc}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex gap-4 cursor-not-allowed w-fit"
          >
            <span className="text-xs leading-[135%] uppercase font-bold tracking-[2px]">
              View the stories
            </span>{" "}
            <Image src={Arrow} alt="arrow" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`${positionLeft ? "sm:w-[45%] lg:w-[70%] " : "sm:w-[35%] lg:w-[70%]"}`}
        >
          <Image src={imageMobile} alt="" className="w-full sm:hidden" />
          <Image
            src={imageTablet}
            alt=""
            className="w-full hidden sm:block lg:hidden"
          />
          <Image src={imageDesktop} alt="" className="w-full hidden lg:block" />
        </motion.div>
      </div>
    </section>
  );
}
