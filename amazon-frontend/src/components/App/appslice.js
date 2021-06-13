import { createSlice } from "@reduxjs/toolkit";

export const appslice = createSlice({
  name: "app",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
  },
});

export const { increment } = appslice.actions;

export default appslice.reducer;
