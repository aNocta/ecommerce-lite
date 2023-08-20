import { removeFromBasket } from "@/store";
import { IProduct } from "@/store/product/product.types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useDispatch } from "react-redux";

const MiniBasketItem: FC<{ product: IProduct }> = ({ product }) => {
  const dp = useDispatch();
  return (
    <Link
      href={`/products/${product.id}`}
      className="flex justify-between items-center p-[vmin]"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={25}
        height={25}
        className="hidden md:block"
      ></Image>
      <span className="text-lg md:ml-[1vmin] md:text-md">
        {product.title.substring(0, 35)}...
      </span>
      <button onClick={() => dp(removeFromBasket(product.id))}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
          className="w-[25px] h-[25px] md:w-[20px] md:h-[20px]"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </button>
    </Link>
  );
};

export default MiniBasketItem;
