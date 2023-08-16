import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../product/product.types";

const initialState: IProduct[] = [];

const basketSlice = createSlice({
  name: "BasketSlice",
  initialState,
  reducers: {
    addToBasket: (state, { payload }) => {
      state.push(payload);
    },
    removeFromBasket: (state, { payload }) =>
      state.filter((x) => x.id === payload),
    clearBasket: (state) => [],
  },
});

export const { addToBasket, clearBasket, removeFromBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
