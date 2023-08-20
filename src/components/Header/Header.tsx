import { IImage } from "@/types/image.type";
import { ILink } from "@/types/link.type";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import MiniBasket from "../mini-basket/MiniBasket";

interface IHeaderProps {
  logo: IImage;
  links: ILink[];
  altAttr?: string;
}

const Header: FC<IHeaderProps> = ({ links, logo, altAttr = "" }) => {
  return (
    <header className="flex justify-center shadow-xl relative z-[999]">
      <div className="flex justify-between w-[95vw] md:w-[80vw]">
        <Image
          src={logo.imageSrc}
          width={logo.width}
          height={logo.height}
          alt={altAttr}
          className="w-[125px]"
        ></Image>
        <nav className="flex items-center">
          {links.map((link, k) => (
            <Link
              className="block p-[1vmin] font-medium text-2xl md:text-xl"
              href={link.href}
              key={k}
            >
              {link.title}
            </Link>
          ))}
          <MiniBasket></MiniBasket>
        </nav>
      </div>
    </header>
  );
};

export default Header;
