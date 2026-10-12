import React from "react";
interface IPlan {
  id: number;
  title: string;
  desc: string;
  price: number;
}
export default function PricingPlan({ title, desc, price, id }: IPlan) {
  return (
    <div className="bg-neutral-100 even:bg-black nth-[2]:lg:h-110 flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center py-15 sm:py-10 even:py-15 px-10 lg:px-9 gap-10 relative">
      {id === 1 && (
        <div className="absolute h-1.5 w-full sm:h-full sm:w-1.5 left-0 lg:w-full lg:h-1.5 bg-Gradient-6 top-0" />
      )}
      <div className="flex flex-col items-center sm:items-start lg:items-center gap-5 sm:w-1/2 lg:w-auto">
        <h2
          className={`font-bold text-2xl ${id !== 1 ? "text-black" : "text-white"}`}
        >
          {title}
        </h2>
        <p
          className={`text-center sm:text-left lg:text-center text-[15px] leading-[165%] ${id !== 1 ? "text-black/60" : "text-white/60"}`}
        >
          {desc}
        </p>
        <div
          className={`hidden sm:block lg:hidden cursor-not-allowed w-full text-center py-3 uppercase tracking-[2px] text-xs font-bold ${id !== 1 ? "bg-black text-white" : "bg-white "}`}
        >
          Pick Plan
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-end lg:items-center sm:w-1/2 lg:w-auto">
        <p
          className={`text-[40px]/12 font-bold ${id !== 1 ? "text-black" : "text-white"}`}
        >
          ${price.toFixed(2)}
        </p>
        <p
          className={`text-center text-[15px] leading-[165%] ${id !== 1 ? "text-black/60" : "text-white/60"}`}
        >
          per month
        </p>
      </div>
      <div
        className={`block sm:hidden lg:block cursor-not-allowed w-full text-center py-3 uppercase tracking-[2px] text-xs font-bold ${id !== 1 ? "bg-black text-white" : "bg-white "}`}
      >
        Pick Plan
      </div>
    </div>
  );
}
