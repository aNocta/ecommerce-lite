"use client";
import { TypeRootState } from "@/store";
import { IProduct } from "@/store/product/product.types";
import { FC } from "react";
import { useSelector } from "react-redux";
import BasketView from "./BasketView";
import ContactForm from "./ContactForm";

const Basket: FC = () => {
  const products = useSelector<TypeRootState>(
    (store) => store.basketSlice
  ) as IProduct[];

  return (
    <div className="flex justify-center mt-[1vmin]">
      <div className="grid w-[95vw] md:grid-cols-2 md:w-[80vw]">
        <div>
          <h1 className="bg-gray-200 shadow-xl text-4xl font-bold flex justify-center p-[2vmin]">
            Basket
          </h1>
          <BasketView products={products} />
          <div className="bg-gray-200 shadow-xl text-2xl flex justify-center p-[1vmin] mt-[2vmin]">
            Price:&nbsp;
            <b>
              $
              {Math.floor(
                products.reduce((prev, curr) => prev + curr.price, 0)
              )}
            </b>
          </div>
        </div>
        <div className="mt-[10vh] md:mt-0">
          <ContactForm products={products} />
        </div>
      </div>
    </div>
  );
};

export default Basket;
