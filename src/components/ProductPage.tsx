"use client";
import { useGetProductQuery } from "@/store/product/product.api";
import { FC } from "react";
import LoadedProductPage from "./LoadedProductPage";

const ProductPage: FC<{ productId: number }> = ({ productId }) => {
  const { data, isLoading } = useGetProductQuery(productId);

  if (isLoading) return <h1>Loading</h1>;
  return data && <LoadedProductPage data={data}></LoadedProductPage>;
};

export default ProductPage;
