import React, { FC } from "react";
import ShopButton from "../ShopButton";
import { numberToArray } from "@/tools/catalogTools";

interface ICatalogPaginationProps {
  pages: number;
  setPageCallback: React.Dispatch<React.SetStateAction<number>>;
}

const CatalogPagination: FC<ICatalogPaginationProps> = ({
  pages,
  setPageCallback,
}) => {
  return (
    <div className="flex my-[1vmin]">
      {pages > 1
        ? numberToArray(pages).map((x) => (
            <div className="ml-[1vmin]" key={`pbtn${x}`}>
              <ShopButton
                text={(x + 1).toString()}
                event={() => setPageCallback(x)}
              />
            </div>
          ))
        : ""}
    </div>
  );
};

export default CatalogPagination;
