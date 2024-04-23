import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slice/app'

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch