"use client";
import { FC } from "react";
import CategoryFilterItem from "./CategoryFIlterItem/CategoryFilterItem";
import { useGetCategotiesQuery } from "@/store/product/product.api";
import { useSelector } from "react-redux";
import { TypeRootState } from "@/store";

const CategoryFilter: FC = () => {
  const { data, isLoading } = useGetCategotiesQuery(0);
  const categoryFilter = useSelector<TypeRootState>(
    (state) => state.categoriesFilterSlice.categories
  ) as string[];
  if (isLoading) return <span>Loading</span>;
  return (
    <div className="mt-[1vmin] p-[1vmin] shadow-xl rounded-xl">
      <span className="block text-xl font-medium ml-[1vmin]">Categories: </span>
      <div className="flex flex-col mt-[1vmin] overflow-y-auto h-[350px] shadow-inner">
        {data?.map((x, k) => (
          <CategoryFilterItem
            isActive={categoryFilter.some((v) => v === x)}
            name={x}
            key={k}
          />
        ))}
      </div>
    </div>
  );
};

export { CategoryFilter };
