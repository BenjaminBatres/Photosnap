"use client";

import { useState } from "react";

export default function ToggleSwitch() {
  const [isToggle, setIsToggle] = useState(true);
  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-4">
        <p
          className={`text-lg leading-[140%] font-bold ${isToggle ? "text-black" : "text-black/50"}`}
        >
          Monthly
        </p>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            onClick={() => setIsToggle(!isToggle)}
            className="sr-only peer"
            value=""
          />
          <div className="group peer bg-Neutral-300 rounded-full duration-300 w-16 h-8  after:duration-300 after:bg-black peer-checked:after:bg-black peer-checked:ring-green-500 after:rounded-full after:absolute after:h-6 after:w-6 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95"></div>
        </label>

        <p
          className={`text-lg leading-[140%] font-bold ${!isToggle ? "text-black" : "text-black/50"}`}
        >
          Yearly
        </p>
      </div>
    </div>
  );
}
