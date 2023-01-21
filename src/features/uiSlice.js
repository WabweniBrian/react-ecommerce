import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMainMenuOpen: false,
  isCategoriesMenuopen: false,
  routes: [],
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openMainMenu: (state) => {
      state.isMainMenuOpen = true;
    },
    closeMainMenu: (state) => {
      state.isMainMenuOpen = false;
    },
    toggleMainMenu: (state) => {
      state.isMainMenuOpen = !state.isMainMenuOpen;
    },
    openCategoriesMenu: (state) => {
      state.isCategoriesMenuopen = true;
    },
    closeCategoriesMenu: (state) => {
      state.isCategoriesMenuopen = false;
    },
    toggleCategoriesMenu: (state) => {
      state.isCategoriesMenuopen = !state.isCategoriesMenuopen;
    },
    getRoutes: (state, action) => {
      state.routes = action.payload;
    },
  },
});

export default uiSlice.reducer;

export const uiStore = (state) => state.ui;

export const {
  openMainMenu,
  openCategoriesMenu,
  closeMainMenu,
  closeCategoriesMenu,
  toggleMainMenu,
  toggleCategoriesMenu,
  getRoutes,
} = uiSlice.actions;
