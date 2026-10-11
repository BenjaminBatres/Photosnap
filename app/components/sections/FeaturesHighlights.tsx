import Image from "next/image";
interface IHighlights {
  icon: string;
  title: string;
  desc: string;
}
interface IProps {
  limit?: number;
  highlights: IHighlights[];
}
export default function FeaturesHighlights({ limit, highlights }: IProps) {
  const displayHighlights = limit ? highlights.slice(0, limit) : highlights;
  return (
    <section className="py-25 sm:py-30 lg:py-35 px-6">
      <div className="max-w-277.5 mx-auto grid lg:grid-cols-3 items-center gap-20 lg:gap-y-40 lg:gap-x-7.5">
        {displayHighlights.map((highlight, id) => (
          <div key={id} className="flex h-full flex-col items-center gap-10">
            <div className="flex h-20 items-center justify-center">
              <Image src={highlight.icon} alt="" />
            </div>

            <div className="flex flex-col items-center gap-4">
              <h2 className="text-center text-lg font-bold leading-[140%]">
                {highlight.title}
              </h2>

              <p className="max-w-md text-center text-[15px] leading-[165%] text-black/60">
                {highlight.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
