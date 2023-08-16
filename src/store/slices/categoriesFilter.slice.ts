import { createSlice } from "@reduxjs/toolkit";

interface CategoriesFilterType {
  categories: string[];
}

const initialState: CategoriesFilterType = {
  categories: [],
};

const categoriesFilterSlice = createSlice({
  name: "CategoriesFilter",
  initialState,
  reducers: {
    addFilterCategory: (state, { payload }) => {
      state.categories.push(payload);
    },
    removeFilterCategory: (state, { payload }) => {
      state.categories = state.categories.filter((x) => x !== payload);
    },
    resetFilterCategory: (state) => ({
      categories: [],
    }),
  },
});

export const { addFilterCategory, removeFilterCategory, resetFilterCategory } =
  categoriesFilterSlice.actions;
export default categoriesFilterSlice.reducer;
