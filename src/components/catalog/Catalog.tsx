"use client";
import { FC, useEffect, useState } from "react";
import CatalogItem from "./CatalogItem";
import { useGetAllProductsQuery } from "@/store/product/product.api";
import CatalogPagination from "./CatalogPagination";
import { sliceArray } from "@/tools/catalogTools";
import { IProduct } from "@/store/product/product.types";

interface ICatalogProps {
  min?: number;
  max?: number;
  categories?: string[];
}

const Catalog: FC<ICatalogProps> = ({ min, max, categories }) => {
  const { data, isLoading } = useGetAllProductsQuery(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentProducts, setCurrentProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    data && setCurrentProducts(data);
  }, [isLoading]);

  useEffect(() => {
    if (data) {
      let willProducts = data;
      const minimalPrice = min ?? 0;
      const maximalPrice = max ?? 0;
      willProducts = willProducts.filter(
        (x: IProduct) =>
          x.price >= minimalPrice && (x.price <= maximalPrice || !maximalPrice)
      );
      if (categories)
        categories[0] &&
          (willProducts = willProducts.filter((x: IProduct) =>
            categories.some((v) => v === x.category)
          ));
      setCurrentProducts(willProducts);
    }
  }, [min, max, categories]);

  if (isLoading) return <h2>Loading</h2>;

  return (
    <div className="w-full ml-[2vmin]">
      <CatalogPagination
        pages={currentProducts.length / 8}
        setPageCallback={setCurrentPage}
        key="tcatpgn"
      />
      <div className="grid gap-[1vmin] sm:grid-cols-2 md:grid-cols-3">
        {sliceArray(
          currentProducts,
          7 * currentPage + (currentPage ? 1 : 0),
          7 * (currentPage + 1)
        ).map((product, k) => (
          <CatalogItem product={product} key={`product${k}`} />
        ))}
      </div>
      <CatalogPagination
        pages={currentProducts.length / 8}
        setPageCallback={setCurrentPage}
        key="bcatpgn"
      />
    </div>
  );
};

export default Catalog;
