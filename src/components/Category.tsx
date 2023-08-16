"use client";
import { FC } from "react";
import Catalog from "./catalog/Catalog";

const Category: FC<{ category: string }> = ({ category }) => {
  return (
    <div className="flex justify-center">
      <div className="w-[80vw]">
        <Catalog categories={[category.replaceAll("%20", " ")]} />
      </div>
    </div>
  );
};

export default Category;
