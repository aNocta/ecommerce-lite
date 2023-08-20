import { FC, MouseEventHandler } from "react";

interface IShopButonProps {
  text: string;
  event?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const ShopButton: FC<IShopButonProps> = ({ text, event }) => {
  return (
    <button
      onClick={event}
      className="bg-black text-white font-medium rounded-xl text-2xl p-[2vmin] md:text-xl md:p-[1vmin] mt-[1vmin] duration-200 hover:scale-110"
    >
      {text}
    </button>
  );
};

export default ShopButton;
