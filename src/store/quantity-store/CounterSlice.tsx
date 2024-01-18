// counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 1,  // Initial state set to 1
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.value += 1;
    },
    decrementCounter: (state) => {
      state.value = Math.max(state.value - 1, 1);
    },
    setCounter: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { incrementCounter, decrementCounter, setCounter } = counterSlice.actions;
export const selectCounter = (state: { counter: CounterState }) => state.counter.value;

export default counterSlice.reducer;
