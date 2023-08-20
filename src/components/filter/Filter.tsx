"use client";
import { FC, useState } from "react";
import { PriceFilter } from "./PriceFilter";
import { CategoryFilter } from "./CategoryFilter/CategoryFilter";
import ShopButton from "../ShopButton";
import { useDispatch } from "react-redux";
import {
  resetFilterCategory,
  setPriceFilterMax,
  setPriceFilterMin,
} from "@/store";

export const Filter: FC = () => {
  const [show, setShow] = useState<boolean>(true);
  const dp = useDispatch();
  const resetAll = () => {
    dp(setPriceFilterMin(0));
    dp(setPriceFilterMax(0));
    dp(resetFilterCategory());
  };
  return (
    <aside className="lg:w-[20vw]">
      <div className="flex flex-col md:hidden">
        <ShopButton
          text={show ? "hide" : "show filter"}
          event={() => setShow(!show)}
        />
      </div>
      <div className={show ? "flex flex-col" : "hidden"}>
        <PriceFilter />
        <CategoryFilter />
        <ShopButton event={resetAll} text="reset" />
      </div>
    </aside>
  );
};
