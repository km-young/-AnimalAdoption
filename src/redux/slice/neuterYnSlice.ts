import {createSlice} from '@reduxjs/toolkit';

interface NeuterYnState {
  neuterYn: string;
}

const initialState: NeuterYnState = {
  neuterYn: '',
};

const neuterYnSlice = createSlice({
  name: 'neuterYn',
  initialState,
  reducers: {
    setNeuterYn: (state, action) => {
      state.neuterYn = action.payload;
      console.log('state.neuterYn: ', state.neuterYn);
    },
  },
});

export const {setNeuterYn} = neuterYnSlice.actions;

export default neuterYnSlice.reducer;
