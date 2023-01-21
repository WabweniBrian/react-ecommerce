import { createSlice } from "@reduxjs/toolkit";

const whilistItemsFromLS =
  JSON.parse(localStorage.getItem("shop-mart-whilist")) || [];
const initialState = {
  whilistItems: whilistItemsFromLS,
};

const whilistSlice = createSlice({
  name: "whilist",
  initialState,
  reducers: {
    // Add items to cart list
    addToWhilist: (state, action) => {
      const itemInWhilist = state.whilistItems.find(
        (product) => product.id === action.payload.id
      );
      if (itemInWhilist) {
        state.whilistItems = state.whilistItems.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.whilistItems = [...state.whilistItems, { ...action.payload }];
      }
    },
    // Remove Item from whilist
    removeItem: (state, action) => {
      const newsItems = state.whilistItems.filter(
        (item) => item.id !== action.payload
      );
      state.whilistItems = newsItems;
    },

    rateProduct: (state, action) => {
      state.whilistItems = state.whilistItems.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, rating: action.payload.rating };
        }
        return product;
      });
    },
  },
});

export default whilistSlice.reducer;

export const whilistStore = (state) => state.whilist;

export const { addToWhilist, removeItem, clearWhilist, rateProduct } =
  whilistSlice.actions;
