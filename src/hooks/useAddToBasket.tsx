import { addToBasket, setMiniBasketState } from "@/store";
import { IProduct } from "@/store/product/product.types";
import { useDispatch } from "react-redux";

const useAddToBasket = (product: IProduct) => {
  const dp = useDispatch();

  return () => {
    dp(setMiniBasketState(true));
    dp(addToBasket(product));
  };
};

export default useAddToBasket;
