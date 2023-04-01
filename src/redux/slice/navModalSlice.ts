import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/index';

interface NavModalState {
  isOpen: boolean;
}

const navModalSlice = createSlice({
  name: 'navModal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    isNavModal: (state: NavModalState) => {
      state.isOpen = !state.isOpen;      
    },

  },
});

export const {isNavModal} = navModalSlice.actions;

export default navModalSlice.reducer;
