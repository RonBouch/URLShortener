import { configureStore } from '@reduxjs/toolkit'
import urlStore from './urlStore';

export const store = configureStore({
    reducer: {
        urlStore: urlStore,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch