import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  count: number
}

// Define the initial state using that type
const initialState: CounterState = {
  count: 0,
}
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByValue : (state,action :  PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement ,incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
