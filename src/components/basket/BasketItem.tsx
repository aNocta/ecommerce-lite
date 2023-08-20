"use client";
import { IProduct } from "@/store/product/product.types";
import { FC } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "@/store";
import Link from "next/link";

const BasketItem: FC<{ product: IProduct; count?: number }> = ({
  product,
  count = 1,
}) => {
  const dp = useDispatch();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src={product.image}
          alt={product.title}
          width={50}
          height={50}
        ></Image>
        <Link href={`/products/${product.id}`} className="ml-[1vmin]">
          {product.title}
        </Link>
      </div>
      <div className="flex items-center">
        <span className="text-xl font-medium ml-[1vmin]">
          {count > 1 ? `${count} x ` : ""}${product.price}
        </span>
        <button
          className="ml-[1vmin] p-[1vmin] hover:shadow-inner"
          onClick={() => dp(removeFromBasket(product.id))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
            className="w-[25px] h-[25px]"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
