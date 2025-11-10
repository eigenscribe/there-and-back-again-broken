import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import NoteDisplay from './components/NoteDisplay';
import { sampleNotes } from './data/sampleNotes';

function App() {
  const [currentNoteId, setCurrentNoteId] = useState(null);
  
  const currentNote = sampleNotes.find(note => note.id === currentNoteId);

  const handleNoteSelect = (noteId) => {
    setCurrentNoteId(noteId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <div className="header-branding">
            <img 
              src="/assets/logo1_1757552304373.png" 
              alt="Logo" 
              className="header-logo"
            />
            <div className="header-text">
              <h1 className="header-title">Math Journal</h1>
              <p className="header-subtitle">A Zettelkasten Approach</p>
            </div>
          </div>
        </div>
      </header>

      <div className="main-layout">
        <Sidebar 
          notes={sampleNotes} 
          currentNoteId={currentNoteId}
          onNoteSelect={handleNoteSelect}
        />
        <main className="main-content">
          <NoteDisplay 
            note={currentNote} 
            onNoteClick={handleNoteSelect}
          />
        </main>
      </div>

      <footer className="footer">
        <p>
          Built with PreTeXt principles, MathJax, and the Zettelkasten method for networked mathematical thinking.
        </p>
      </footer>
    </div>
  );
}

export default App;
