"use client";
import { TypeRootState, setPriceFilterMax, setPriceFilterMin } from "@/store";
import { priceFilterType } from "@/store/slices/priceFilter.type";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

const PriceFilter: FC = () => {
  const priceFilter = useSelector<TypeRootState>(
    (state) => state.priceFilterSlice
  ) as priceFilterType;
  const dp = useDispatch();

  return (
    <div className="mt-[1vmin] p-[1vmin] shadow-xl rounded-xl">
      <span className="text-xl font-medium ml-[1vmin]">Price ($): </span>
      <div className="flex">
        <div className="flex flex-col m-[1vmin]">
          <label htmlFor="min">Min:</label>
          <input
            className="w-[75px] border-2 border-gray-200 rounded-xl p-[1vmin]"
            type="number"
            min="0"
            placeholder="min"
            name="min"
            value={priceFilter.min}
            onChange={(e) => dp(setPriceFilterMin(+e.currentTarget.value))}
          />
        </div>
        <div className="flex flex-col m-[1vmin]">
          <label htmlFor="max">Max:</label>
          <input
            className="w-[75px] border-2 border-gray-200 rounded-xl p-[1vmin]"
            type="number"
            min="0"
            placeholder="min"
            name="max"
            value={priceFilter.max}
            onChange={(e) => dp(setPriceFilterMax(+e.currentTarget.value))}
          />
        </div>
      </div>
    </div>
  );
};

export { PriceFilter };
