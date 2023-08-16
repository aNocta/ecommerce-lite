"use client";
import { useGetProductQuery } from "@/store/product/product.api";
import Image from "next/image";
import { FC, useState } from "react";
import ShopButton from "./ShopButton";
import Link from "next/link";

const ProductPage: FC<{ productId: number }> = ({ productId }) => {
  const { data, isLoading } = useGetProductQuery(productId);
  const [count, setCount] = useState<number>(0);

  if (isLoading) return <h1>Loading</h1>;
  return (
    <div className="flex justify-center mt-[20vh]">
      <div className="w-[80vw] grid grid-cols-2">
        <div>
          {data && (
            <Image
              className="object-contain  max-h-[600px]"
              src={data.image}
              alt={data.title}
              width={500}
              height={500}
            />
          )}
        </div>
        <div className="flex flex-col">
          <div>
            <h1 className="text-4xl font-semibold">{data?.title}</h1>
            <Link className="underline" href={`/category/${data?.category}`}>
              {data?.category}
            </Link>
          </div>
          <div className="mt-[5vh]">
            <span className="text-3xl font-medium">${data?.price}</span>
            <form>
              <ShopButton text="Buy" />
              <input
                type="number"
                className="ml-[1vmin] border border-gray-300 w-[50px] rounded-xl p-[1vmin]"
                value={count}
                onChange={(e) =>
                  setCount(
                    +e.currentTarget.value >= 0 ? +e.currentTarget.value : 0
                  )
                }
              />
            </form>
          </div>
          <div className="mt-[5vh]">
            <h2 className="font-medium text-3xl">Description</h2>
            <p className="mt-[1vh] text-xl">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
