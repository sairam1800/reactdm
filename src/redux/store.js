// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice"; // Adjust the path if needed

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
