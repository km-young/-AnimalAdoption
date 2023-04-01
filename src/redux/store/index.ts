import {configureStore} from '@reduxjs/toolkit';
import apiSidoSlice from '../slice/apiSidoSlice';
import counterSlice from '../slice/counterSlice';
import navModalSlice from '../slice/navModalSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    navModal: navModalSlice,
    sido:apiSidoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
