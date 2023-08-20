import { IProduct } from "@/store/product/product.types";
import Link from "next/link";
import Image from "next/image";
import { FC, useState } from "react";
import ShopButton from "./ShopButton";
import useAddToBasket from "@/hooks/useAddToBasket";

const LoadedProductPage: FC<{ data: IProduct }> = ({ data }) => {
  const [count, setCount] = useState<number>(1);
  const addToBasketEvent = useAddToBasket(data);

  const add = () => {
    for (let i = 0; i < count; i++) addToBasketEvent();
  };
  return (
    <div className="flex justify-center mt-[10vh] md:mt-[20vh]">
      <div className="grid w-[95vw] md:w-[80vw] md:grid-cols-2">
        <div>
          <Image
            className="object-contain  max-h-[600px]"
            src={data.image}
            alt={data.title}
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col">
          <div>
            <h1 className="text-4xl font-semibold">{data?.title}</h1>
            <Link className="underline" href={`/category/${data?.category}`}>
              {data.category}
            </Link>
          </div>
          <div className="mt-[5vh]">
            <span className="text-3xl font-medium">${data?.price}</span>
            <form onSubmit={(e) => e.preventDefault()}>
              <ShopButton text="Buy" event={add} />
              <input
                type="number"
                className="ml-[1vmin] border border-gray-300 w-[50px] rounded-xl p-[1vmin]"
                value={count}
                min={0}
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
            <p className="mt-[1vh] text-xl">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadedProductPage;
