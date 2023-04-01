import {createSlice} from '@reduxjs/toolkit';


interface SidoAPIState {
  items: any[];
}

const initialState: SidoAPIState = {
  items: [],
};

const apiSidoSlice = createSlice({
  name: 'sidoAPI',
  initialState,
  reducers: {
    setSidoAPI: (state, action) => {
      state.items = action.payload;
      console.log('state.items: ', state.items);
    },
  },
});

export const {setSidoAPI} = apiSidoSlice.actions;

export default apiSidoSlice.reducer;
