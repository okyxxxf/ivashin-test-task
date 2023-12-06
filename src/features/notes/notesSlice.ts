import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import notePayload from '../../types/notePayload';
import note from '../../types/note';
import findTags from './findTags';
import updateLocalStorage from './updateLocalStorage';

interface NotesState {
  notes : Array<note>,
  tags : Array<string>,
  filters : Array<string>,
}

const startNotes = localStorage.getItem('notes') ? localStorage['notes'] : [];

const initialState: NotesState = {
  notes : startNotes[0]  ? JSON.parse(startNotes) : [],
  tags : [],
  filters : []
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote : (state, action : PayloadAction<string>) => {
			state.notes = [...state.notes, {text : action.payload, is_edit : false}];
      updateLocalStorage(state.notes);
    },
		deleteNote : (state, action : PayloadAction<notePayload>) => {
			const index = action.payload.index;
			state.notes = [...state.notes.slice(0, index), ...state.notes.slice(index + 1)];
      updateLocalStorage(state.notes);
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
      updateLocalStorage(state.notes);
    },
    checkTags : (state) => {
      state.tags = findTags(state.notes);
      state.filters.forEach((filter) => {
        if (!state.tags.includes(filter)) {
          const index = state.filters.findIndex((searchFilter) => searchFilter === filter);
          state.filters = [...state.filters.slice(0, index), ...state.filters.slice(index + 1)];
        }
      })
    },
    addFilter : (state, action : PayloadAction<string>) => {
      state.filters = [...state.filters, action.payload];
    },
    deleteFilter : (state, action : PayloadAction<string>) => {
      const tagArray = action.payload.match(/#[a-zA-Zа-яА-Я0-9]{1,}/g) || [];

      tagArray.forEach((tag) => {
          const index = state.filters.findIndex((filter) => filter === tag);
          state.filters = [...state.filters.slice(0, index), ...state.filters.slice(index + 1)];
      });
    },
  },
});

export const {
  addNote, 
  deleteNote, 
  enableEditMode, 
  disableEditMode, 
  checkTags, 
  addFilter, 
  deleteFilter
} = notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes.notes;

export default notesSlice.reducer;