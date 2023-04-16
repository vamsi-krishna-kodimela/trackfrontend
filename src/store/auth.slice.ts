import { createSlice } from "@reduxjs/toolkit";
const setIntialValue = () => {
  const userValue = localStorage.getItem("user");
  return { user: userValue ? JSON.parse(userValue) : null };
};

const authReducers = {
  login: (state: any) => {
    
  },
  logout: (state: any) => {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState: setIntialValue(),
  reducers: authReducers,
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
