import { configureStore } from '@reduxjs/toolkit';
import notesSlice from '../features/notes/notesSlice';

const store = configureStore({
  reducer: {
    notes : notesSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;