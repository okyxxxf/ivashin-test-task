import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import notePayload from '../../types/notePayload';

interface NotesState {
  notes : Array<string>
}

const initialState: NotesState = {
  notes : []
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote : (state, action : PayloadAction<string>) => {
			state.notes = [...state.notes, action.payload];
    },
		deleteNote : (state, action : PayloadAction<notePayload>) => {
			const index = action.payload.index;
			state.notes = [...state.notes.slice(0, index), ...state.notes.slice(index + 1)];
		},
		editNode : (state, action : PayloadAction<notePayload>) => {
			const index = action.payload.index;
      const newNote = action.payload.note;
      state.notes = [...state.notes.slice(0, index), newNote, ...state.notes.slice(index + 1)];
		}
  },
});

export const {addNote, deleteNote, editNode} = notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes.notes;

export default notesSlice.reducer;