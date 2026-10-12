import PricingPlan from "../ui/PricingPlan";
import ToggleSwitch from "../ui/ToggleSwitch";

export default function PricingPlanSection() {
  const plans = [
    {
      title: "Basic",
      desc: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
      price: 19.0,
    },
    {
      title: "Pro",
      desc: "More advanced features available. Recommended for photography veterans and professionals.",
      price: 39.0,
    },
    {
      title: "Business",
      desc: "Additional features available such as more detailed metrics. Recommended for business owners.",
      price: 99.0,
    },
  ];
  return (
    <section className="py-25 px-6">
      <div className="max-w-277.5 mx-auto space-y-10">
        <ToggleSwitch />
        <div className="grid lg:grid-cols-3 items-center gap-7.5">
          {plans.map((plan, id) => (
            <PricingPlan
              key={id}
              desc={plan.desc}
              title={plan.title}
              price={plan.price}
              id={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
