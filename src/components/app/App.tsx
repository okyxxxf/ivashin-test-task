import React from 'react';
import './App.css';
import AddNotesPanel from '../addNotesPanel/addNotesPanel';
import Notes from '../notes/notes';
import Tags from '../tags/tags';
import { useAppDispatch } from '../../hooks/hooks';
import { checkTags } from '../../features/notes/notesSlice';

function App() {
  const dispatch = useAppDispatch();
  dispatch(checkTags());
  return (
    <div className="app">
      <AddNotesPanel/>
      <Tags/>
      <Notes/>
    </div>
  );
}

export default App;
