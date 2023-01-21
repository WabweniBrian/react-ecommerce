import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import compareReducer from "../features/compareSlice";
import uiReducer from "../features/uiSlice";
import whilistReducer from "../features/whilistSlice";

export default configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    whilist: whilistReducer,
    compare: compareReducer,
  },
});
