import {createSlice} from '@reduxjs/toolkit';

interface SidoState {
  sido: string;
}

const initialState: SidoState = {
  sido: '',
};

const sidoSlice = createSlice({
  name: 'sido',
  initialState,
  reducers: {
    setSido: (state, action) => {
      state.sido = action.payload;
      console.log('state.sido: ', state.sido);
    },
  },
});

export const {setSido} = sidoSlice.actions;

export default sidoSlice.reducer;
