import Image from "next/image";
import ResponsiveIcon from "../../assets/features/desktop/responsive.svg";
import NoLimitIcon from "../../assets/features/desktop/no-limit.svg";
import EmbedIcon from "../../assets/features/desktop/embed.svg";
export default function FeaturesHighlights() {
  const highlights = [
    {
      icon: ResponsiveIcon,
      title: "100% Responsive",
      desc: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    },
    {
      icon: NoLimitIcon,
      title: "No Photo Upload Limit",
      desc: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    },
    {
      icon: EmbedIcon,
      title: "Available to Embed",
      desc: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    },
  ];
  return (
    <section className="py-25 sm:py-30 lg:py-35 px-6">
      <div className="max-w-360 mx-auto grid lg:grid-cols-3 gap-20 lg:gap-7.5">
        {highlights.map((highlight, id) => (
          <div
            key={id}
            className="flex flex-col items-center justify-between gap-10 lg:odd:gap-10"
          >
            <Image src={highlight.icon} alt="" />
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-lg font-bold leading-[140%] ">
                {highlight.title}
              </h2>
              <p className="text-center text-[15px] leading-[165%] text-black/60 max-w-md">
                {highlight.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
