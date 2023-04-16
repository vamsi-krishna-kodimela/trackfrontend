import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { toggle: true },
  reducers: {
    toggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export default sidebarSlice.reducer;

export const { toggle } = sidebarSlice.actions;
