"use client";
import { FC } from "react";
import { Filter } from "./filter";
import Catalog from "./catalog/Catalog";
import { priceFilterType } from "@/store/slices/priceFilter.type";
import { useSelector } from "react-redux";
import { TypeRootState } from "@/store";

const MainPage: FC = () => {
  const priceFilter = useSelector<TypeRootState>(
    (state) => state.priceFilterSlice
  ) as priceFilterType;
  const categoryFilter = useSelector<TypeRootState>(
    (state) => state.categoriesFilterSlice.categories
  ) as string[];
  return (
    <div className="flex justify-center mt-[1vmin] overflow-x-hidden">
      <div className="flex flex-col w-[95vw] md:w-[80vw] md:flex-row">
        <Filter />
        <Catalog
          min={priceFilter.min}
          max={priceFilter.max}
          categories={categoryFilter}
        />
      </div>
    </div>
  );
};

export default MainPage;
