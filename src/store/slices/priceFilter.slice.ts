import { createSlice } from "@reduxjs/toolkit";
import { priceFilterType } from "./priceFilter.type";

const initialState: priceFilterType = {
  min: 0,
  max: 0,
};

const priceFilterSlice = createSlice({
  name: "PriceSlice",
  initialState,
  reducers: {
    setPriceFilterMin: (state, { payload }) => {
      state.min = payload;
    },
    setPriceFilterMax: (state, { payload }) => {
      state.max = payload;
    },
  },
});

export const { setPriceFilterMax, setPriceFilterMin } =
  priceFilterSlice.actions;
export default priceFilterSlice.reducer;
