import { IImage } from "@/types/image.type";
import { ILink } from "@/types/link.type";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IHeaderProps {
  logo: IImage;
  links: ILink[];
  altAttr?: string;
}

const Header: FC<IHeaderProps> = ({ links, logo, altAttr = "" }) => {
  return (
    <header className="flex justify-center shadow-xl relative z-[999]">
      <div className="w-[80vw] flex justify-between">
        <Image
          src={logo.imageSrc}
          width={logo.width}
          height={logo.height}
          alt={altAttr}
          className="w-[125px]"
        ></Image>
        <nav>
          {links.map((link, k) => (
            <Link
              className="block p-[1vmin] text-xl font-medium"
              href={link.href}
              key={k}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
