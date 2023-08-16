import { IImage } from "@/types/image.type";
import { ILink } from "@/types/link.type";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IStaticBannerProps {
  image: IImage;
  link?: ILink;
  className?: string;
}

const StaticBanner: FC<IStaticBannerProps> = ({ image, className, link }) => {
  if (link)
    return (
      <Link href={link.href} title={link.title}>
        <Image
          alt={image.alt ? image.alt : ""}
          src={image.imageSrc}
          width={image.width}
          height={image.height}
          className={className}
        />
      </Link>
    );
  return (
    <Image
      alt={image.alt ? image.alt : ""}
      src={image.imageSrc}
      width={image.width}
      height={image.height}
      className={className}
    />
  );
};

export default StaticBanner;
