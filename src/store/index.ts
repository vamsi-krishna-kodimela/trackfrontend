import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice";
import sidebarReducer from "./sidebar.slice";

export default configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
  },
});
