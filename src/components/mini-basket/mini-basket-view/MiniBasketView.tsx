import { FC } from "react";
import styles from "./MiniBasketView.module.scss";
import ShopButton from "@/components/ShopButton";
import { useDispatch, useSelector } from "react-redux";
import { TypeRootState, setMiniBasketState } from "@/store";
import { IProduct } from "@/store/product/product.types";
import MiniBasketItem from "../MiniBasketItem";
import Link from "next/link";

const MiniBasketView: FC<{ visibility: boolean }> = ({ visibility }) => {
  const dp = useDispatch();
  const basketItems = useSelector<TypeRootState>(
    (state) => state.basketSlice
  ) as IProduct[];

  if (visibility)
    return (
      <div className={`${styles.basket} shadow-xl rounded-xl`}>
        <div className="font-medium border-b-2 border-gray-400 flex justify-between p-[1vmin] text-3xl md:text-2xl">
          <span>Basket</span>
          <button onClick={() => dp(setMiniBasketState(false))}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
              className="w-[40px] h-[40px] md:w-[25px] md:h-[25px]"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
        </div>
        <div className="p-[1vmin]">
          <div className="max-h-[400px] overflow-y-auto">
            {basketItems.map((x) => (
              <MiniBasketItem product={x} key={x.id} />
            ))}
          </div>
          <Link href="/basket">
            <ShopButton text="Basket"></ShopButton>
          </Link>
        </div>
      </div>
    );
  return <></>;
};

export default MiniBasketView;
