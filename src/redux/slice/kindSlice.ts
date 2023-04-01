import {createSlice} from '@reduxjs/toolkit';

interface KindState {
  kind: string;
}

const initialState: KindState = {
  kind: '',
};

const kindSlice = createSlice({
  name: 'kind',
  initialState,
  reducers: {
    setKind: (state, action) => {
      state.kind = action.payload;
      console.log('state.kind: ', state.kind);
    },
  },
});

export const {setKind} = kindSlice.actions;

export default kindSlice.reducer;
