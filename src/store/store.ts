import { configureStore } from '@reduxjs/toolkit'
import videoReducer from './Reducers'

const store = configureStore({
  reducer: {
    youtube: videoReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store