import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import notePayload from '../../types/notePayload';
import note from '../../types/note';
import findTags from './findTags';

interface NotesState {
  notes : Array<note>
  tags : Array<string>
}

const initialState: NotesState = {
  notes : [],
  tags : [],
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote : (state, action : PayloadAction<string>) => {
			state.notes = [...state.notes, {text : action.payload, is_edit : false}];
    },
		deleteNote : (state, action : PayloadAction<notePayload>) => {
			const index = action.payload.index;
			state.notes = [...state.notes.slice(0, index), ...state.notes.slice(index + 1)];
		},
		enableEditMode : (state, action : PayloadAction<notePayload>) => {
      const index = action.payload.index;
      const newNote : note = {text : action.payload.note, is_edit : true};
			state.notes = [...state.notes.slice(0, index), newNote, ...state.notes.slice(index + 1)]
		},
    disableEditMode : (state, action : PayloadAction<notePayload>) => {
      const index = action.payload.index;
      const newNote : note = {text : action.payload.note, is_edit : false};
			state.notes = [...state.notes.slice(0, index), newNote, ...state.notes.slice(index + 1)];
    },
    checkTags : (state) => {
      state.tags = findTags(state.notes);
    },
  },
});

export const {addNote, deleteNote, enableEditMode, disableEditMode, checkTags} = notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes.notes;

export default notesSlice.reducer;