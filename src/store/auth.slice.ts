import { createSlice } from "@reduxjs/toolkit";

const setIntialValue = () => {
  const userValue = localStorage.getItem("user");

  return { user: userValue ? JSON.parse(userValue) : null };
};

const authReducers = {
  login: (state: any, actions: any) => {
    const payload = actions.payload;
    localStorage.setItem("user", JSON.stringify(payload));
    state = payload;
  },
  logout: (state: any) => {
    localStorage.removeItem("user");
    state = null;
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState: setIntialValue(),
  reducers: authReducers,
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
