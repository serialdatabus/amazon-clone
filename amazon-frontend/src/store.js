import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./redux-slices/appslice";

export default configureStore({
  reducer: {
    app: appReducer,
  },
});
