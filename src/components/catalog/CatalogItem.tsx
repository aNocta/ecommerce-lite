import { IProduct } from "@/store/product/product.types";
import { FC } from "react";
import Image from "next/image";
import ShopButton from "../ShopButton";
import Link from "next/link";

const CatalogItem: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <article className="flex flex-col shadow-xl ml-[1vmin] overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={350}
          height={350}
          className="object-cover max-h-[350px] min-h-[350px] w-full"
        ></Image>
      </Link>
      <div className="p-[1vmin] h-full flex justify-between flex-col">
        <div className="flex flex-col">
          <Link
            href={`/products/${product.id}`}
            className="text-2xl font-semibold"
          >
            {product.title}
          </Link>
          <Link className="underline" href={`/category/${product.category}`}>
            {product.category}
          </Link>
          <p className="mt-[1vmin] text-lg">
            {product.description.substring(0, 100)}...
          </p>
        </div>
        <div className="mt-[1vmin]">
          <span className="font-semibold text-2xl">${product.price}</span>
          <div className="flex items-end justify-between">
            <ShopButton text="Buy" />
            <span className="flex items-center text-2xl">
              {product.rating.rate}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
                fill="black"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CatalogItem;
