import React from 'react';
import './App.css';
import AddNotesPanel from '../addNotesPanel/addNotesPanel';
import Notes from '../notes/notes';

function App() {
  return (
    <div className="app">
      <AddNotesPanel/>
      <Notes/>
    </div>
  );
}

export default App;
