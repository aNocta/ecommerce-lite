import { createSlice } from "@reduxjs/toolkit";

const miniBasketSlice = createSlice({
  name: "MiniBasket",
  initialState: false,
  reducers: {
    setMiniBasketState: (state, { payload }) => payload,
  },
});

export const { setMiniBasketState } = miniBasketSlice.actions;
export default miniBasketSlice.reducer;
