import Image from "next/image";
import CheckIcon from "../../assets/pricing/desktop/check.svg";

export default function CompareSection() {
  const featureTitles = ["Basic", "Pro", "Business"];
  const features = [
    {
      name: "Unlimited story posting",
      plan: 3,
    },
    {
      name: "Unlimited photo upload",
      plan: 3,
    },
    {
      name: "Embedding custom content",
      plan: 2,
    },
    {
      name: "Customize metadata",
      plan: 2,
    },
    {
      name: "Advanced metrics",
      plan: 1,
    },
    {
      name: "Photo downloads",
      plan: 1,
    },
    {
      name: "Search engine indexing",
      plan: 1,
    },
    {
      name: "Custom analytics",
      plan: 1,
    },
  ];
  return (
    <section className="sm:pt-20 pb-20 sm:pb-30 px-6">
      <div className="max-w-182.75 mx-auto">
        <div className="space-y-14">
          <h2 className="hidden sm:block text-center text-[40px]/12 font-bold uppercase">
            Compare
          </h2>
          <div className="grid grid-cols-2 justify-between sm:px-6 pb-6 border-b">
            <div>
              <p className="uppercase text-xs font-bold tracking-[2px]">
                The features
              </p>
            </div>
            <div className="hidden sm:flex justify-between">
              {featureTitles.map((feat, id) => (
                <p
                  key={id}
                  className="uppercase text-xs font-bold tracking-[2px]"
                >
                  {feat}
                </p>
              ))}
            </div>
          </div>
        </div>
        {features.map((feat, id) => (
          <div
            key={id}
            className="grid sm:grid-cols-2 py-6 sm:p-6 border-b border-Neutral-300 gap-y-4"
          >
            <div>
              <p className="uppercase text-xs font-bold tracking-[2px]">
                {feat.name}
              </p>
            </div>
            <div className="flex sm:hidden">
              {featureTitles.map((feat, id) => (
                <p
                  key={id}
                  className="flex-1 uppercase text-[10px] font-bold tracking-[2px] "
                >
                  {feat}
                </p>
              ))}
            </div>
            <div className="flex flex-row-reverse sm:justify-between">
              {new Array(feat.plan).fill(0).map((_, id) => (
                <div
                  key={id}
                  className={`${feat.plan > 2 ? "flex-1" : "w-[33%]"} sm:hidden`}
                >
                  <Image src={CheckIcon} alt="check" />
                </div>
              ))}
              {new Array(feat.plan).fill(0).map((_, id) => (
                <Image
                  key={id}
                  src={CheckIcon}
                  alt="check"
                  width={20}
                  height={20}
                  className={`hidden sm:block sm:mr-6 nth-[3]:sm:ml-4 ${feat.plan < 3 ? "nth-[2]:ml-4" : "nth-[2]:mr-10"}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
