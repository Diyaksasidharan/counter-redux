import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

  
export const store = configureStore({
    reducer : {
        //reducer must be in key-value pair
        counter : counterSlice
    }
  })