import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "./product.types";

export const productApi = createApi({
  reducerPath: "api/products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (build) => ({
    getProduct: build.query<IProduct, number>({
      query: (id: number) => `products/${id}`,
    }),
    getProducts: build.query<IProduct[], number>({
      query: (limit?: number) => `products/?limit=${limit}`,
    }),
    getAllProducts: build.query<IProduct[], any>({
      query: () => `products/`,
    }),
    getCategoties: build.query<string[], any>({
      query: () => "products/categories/",
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetAllProductsQuery,
  useGetCategotiesQuery,
  useGetProductQuery,
} = productApi;
