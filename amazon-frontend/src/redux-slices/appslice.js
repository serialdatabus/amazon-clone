import { createSlice } from "@reduxjs/toolkit";

export const appslice = createSlice({
  name: "app",
  initialState: {
    transparentBgIsVisible: false,
  },
  reducers: {
    showTransparentBg: (state, action) => {
      state.transparentBgIsVisible = true;
    },

    hideTransparentBg: (state, action) => {
      state.transparentBgIsVisible = false;
    },
  },
});

export const { showTransparentBg, hideTransparentBg } = appslice.actions;

export default appslice.reducer;
