import { FC, MouseEventHandler } from "react";

interface IShopButonProps {
  text: string;
  event?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const ShopButton: FC<IShopButonProps> = ({ text, event }) => {
  return (
    <button
      onClick={event}
      className="bg-black text-white text-xl font-medium rounded-xl p-[1vmin] mt-[1vmin] duration-200 hover:scale-110"
    >
      {text}
    </button>
  );
};

export default ShopButton;
