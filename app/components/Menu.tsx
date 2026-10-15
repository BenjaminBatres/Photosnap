"use client";
import Image from "next/image";
import MenuIcon from "../assets/shared/mobile/menu.svg";
import CloseIcon from "../assets/shared/mobile/close.svg";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Links {
  path: string;
  name: string;
}
interface IProps {
  links: Links[];
}
export default function Menu({ links }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div className="sm:hidden">
      {isOpen ? (
        <Image
          src={CloseIcon}
          alt="menu"
          onClick={() => setIsOpen(false)}
          className="cursor-pointer w-6 select-none"
        />
      ) : (
        <Image
          src={MenuIcon}
          alt="menu"
          onClick={() => setIsOpen(true)}
          className="cursor-pointer w-7 h-2.5 select-none"
        />
      )}

      {/* Overlay */}
      <div
        className={`${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} top-83 fixed inset-0 bg-black/50 z-55 duration-350`}
      />
      {/* Menu */}
      <div
        className={`${isOpen ? "opacity-100 translate-y-0" : "-translate-y-full opacity-0 pointer-events-none"} absolute left-0 w-full top-18 py-8 px-5 space-y-5 z-60 bg-white duration-350`}
      >
        <ul className="flex flex-col items-center gap-5 pb-5 border-b border-black/25">
          {links.map((link, id) => (
            <li key={id}>
              <Link
                onClick={() => setIsOpen(false)}
                href={link.path}
                className="uppercase text-[15px] font-bold tracking-[2.5px]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-white bg-black flex justify-center py-3 uppercase text-[15px] font-bold tracking-[2.5px] cursor-not-allowed">
          Get an invite
        </div>
      </div>
    </div>
  );
}
