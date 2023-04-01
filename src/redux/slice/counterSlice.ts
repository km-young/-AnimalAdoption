import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/index';

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // action의 타입은 PayloadAction<제네릭> 으로 지정해준다.
    plusCounter: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    minusCounter: (state: CounterState, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const {plusCounter, minusCounter} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
