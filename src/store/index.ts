import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./product/product.api";
import priceFilterSlice from "./slices/priceFilter.slice";
import categoriesFilterSlice from "./slices/categoriesFilter.slice";
import miniBasketSlice from "./slices/miniBasket.slice";
import basketSlice from "./slices/basket.slice";

export * from "./slices/priceFilter.slice";
export * from "./slices/categoriesFilter.slice";
export * from "./slices/miniBasket.slice";
export * from "./slices/basket.slice";

const store = configureStore({
  reducer: {
    priceFilterSlice,
    categoriesFilterSlice,
    miniBasketSlice,
    basketSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
export default store;
