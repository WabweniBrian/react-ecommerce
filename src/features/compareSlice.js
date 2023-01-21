import { createSlice } from "@reduxjs/toolkit";

const compareItemsFromLS =
  JSON.parse(localStorage.getItem("shop-mart-compare")) || [];
const initialState = {
  compareItems: compareItemsFromLS,
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    // Add items to compare list
    addToCompare: (state, action) => {
      const itemInCompare = state.compareItems.find(
        (product) => product.id === action.payload.id
      );
      if (itemInCompare) {
        state.compareItems = state.compareItems.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.compareItems = [...state.compareItems, { ...action.payload }];
      }
    },
    // Remove Item from compare list
    removeItem: (state, action) => {
      const newItems = state.compareItems.filter(
        (item) => item.id !== action.payload
      );
      state.compareItems = newItems;
    },
  },
});

export default compareSlice.reducer;

export const compareStore = (state) => state.compare;

export const { addToCompare, removeItem } = compareSlice.actions;
