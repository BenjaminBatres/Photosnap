import Image from "next/image";
import Logo from "../assets/shared/desktop/logo.svg";
import facebookIcon from "../assets/shared/desktop/facebook.svg";
import youtubeIcon from "../assets/shared/desktop/youtube.svg";
import twitterIcon from "../assets/shared/desktop/twitter.svg";
import pinterestIcon from "../assets/shared/desktop/pinterest.svg";
import instagramIcon from "../assets/shared/desktop/instagram.svg";
import Link from "next/link";
import Arrow from "../assets/shared/desktop/arrow.svg";
export default function Footer() {
  const socials = [
    facebookIcon,
    youtubeIcon,
    twitterIcon,
    pinterestIcon,
    instagramIcon,
  ];
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/stories",
      name: "Stories",
    },
    {
      path: "/features",
      name: "Features",
    },
    {
      path: "/pricing",
      name: "Pricing",
    },
  ];
  return (
    <footer className="py-14 sm:py-20 px-6 bg-black">
      <div className="max-w-277.5 mx-auto">
        <div className="h-107.5 sm:h-full flex flex-col justify-between sm:flex-row">
          <div className="flex flex-col items-center sm:items-start">
            <Image src={Logo} alt="logo" className="invert-100 mb-8" />
            <div className="flex gap-2.5 mb-12 sm:mb-0 sm:order-3">
              {socials.map((social, id) => (
                <Image key={id} src={social} alt="" />
              ))}
            </div>

            <ul className="flex flex-col sm:flex-row items-center gap-5 mb-13">
              {links.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.path}
                    className="uppercase text-xs font-bold tracking-[2px] text-white text-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-end gap-8 justify-between">
            <div className="flex justify-between items-center gap-2.5">
              <span className="text-white text-xs uppercase font-bold tracking-[2px]">
                Get an invite
              </span>
              <Image src={Arrow} alt="" className="invert-100" />
            </div>
            <p className="text-white/50 text-[15px] leading-[165%]">
              Copyright 2019. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
