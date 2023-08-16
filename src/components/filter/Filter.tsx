"use client";
import { FC } from "react";
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
  const dp = useDispatch();
  const resetAll = () => {
    dp(setPriceFilterMin(0));
    dp(setPriceFilterMax(0));
    dp(resetFilterCategory());
  };
  return (
    <aside className="w-[20vw]">
      <PriceFilter />
      <CategoryFilter />
      <ShopButton event={resetAll} text="reset" />
    </aside>
  );
};
