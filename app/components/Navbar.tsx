import Image from "next/image";
import Logo from "../assets/shared/desktop/logo.svg";
import Menu from "./Menu";
import Link from "next/link";
export default function Navbar() {
  const links = [
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
    <header className="px-6">
      <nav className="flex justify-between items-center max-w-277.5 mx-auto h-18">
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="logo"
            loading="eager"
            className="h-full w-full"
          />
        </Link>

        <ul className="hidden sm:flex gap-5 md:gap-10">
          {links.map((link, id) => (
            <li key={id}>
              <Link
                href={link.path}
                className="uppercase text-xs font-bold tracking-[2px]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex justify-center py-3 px-6 text-white bg-black uppercase text-xs font-bold tracking-[2px] cursor-not-allowed">
          Get an invite
        </div>

        <Menu links={links} />
      </nav>
    </header>
  );
}
