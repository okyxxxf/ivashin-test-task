import React from 'react';
import './App.css';
import AddNotesPanel from '../addNotesPanel/addNotesPanel';
import Notes from '../notes/notes';
import Tags from '../tags/tags';

function App() {
  return (
    <div className="app">
      <AddNotesPanel/>
      <Tags/>
      <Notes/>
    </div>
  );
}

export default App;
