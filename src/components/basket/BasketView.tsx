import { IProduct } from "@/store/product/product.types";
import { FC } from "react";
import BasketItem from "./BasketItem";
import { arrayToSet, countOfItem } from "@/tools/catalogTools";

const BasketView: FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <div className="mt-[2vmin] max-h-[800px] overflow-y-auto">
      {arrayToSet<IProduct>(products).map((x) => (
        <BasketItem
          product={x}
          key={`bskview${x.id}`}
          count={countOfItem<IProduct>(products, x.id)}
        />
      ))}
    </div>
  );
};

export default BasketView;
