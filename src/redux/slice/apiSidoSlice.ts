import {createSlice} from '@reduxjs/toolkit';


interface SidoState {
  items: any[];
}

const initialState: SidoState = {
  items: [],
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setSido: (state, action) => {
      state.items = action.payload;
      console.log( 'state.items: ' ,state.items);
      
    },
  },
});

export const {setSido} = apiSlice.actions;

export default apiSlice.reducer;
