import {configureStore} from '@reduxjs/toolkit';
import apiSidoSlice from '../slice/apiSidoSlice';
import counterSlice from '../slice/counterSlice';
import kindSlice from '../slice/kindSlice';
import navModalSlice from '../slice/navModalSlice';
import neuterYnSlice from '../slice/neuterYnSlice';
import sidoSlice from '../slice/sidoSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    navModal: navModalSlice,
    sidoAPI: apiSidoSlice,
    neuterYn: neuterYnSlice,
    kind: kindSlice,
    sido: sidoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
