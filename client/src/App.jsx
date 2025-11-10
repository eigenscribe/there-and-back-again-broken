import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import NoteDisplay from './components/NoteDisplay';
import GraphView from './components/GraphView';
import { sampleNotes } from './data/sampleNotes';

function AppContent() {
  const [currentNoteId, setCurrentNoteId] = useState(sampleNotes[0]?.id || null);
  const navigate = useNavigate();
  
  const currentNote = sampleNotes.find(note => note.id === currentNoteId);

  const handleNoteSelect = (noteId) => {
    setCurrentNoteId(noteId);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <div className="header-branding">
            <img 
              src="/assets/logo.png" 
              alt="Logo" 
              className="header-logo"
            />
            <div className="header-text">
              <h1 className="header-title">Math Journal</h1>
              <p className="header-subtitle">A Zettelkasten Approach</p>
            </div>
          </div>
          <nav className="header-nav">
            <Link to="/" className="nav-link">Notes</Link>
            <Link to="/graph" className="nav-link">Graph</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={
          <div className="main-layout">
            <Sidebar 
              notes={sampleNotes} 
              currentNoteId={currentNoteId}
              onNoteSelect={handleNoteSelect}
            />
            <main className="main-content">
              <NoteDisplay 
                note={currentNote} 
                allNotes={sampleNotes}
                onNoteClick={handleNoteSelect}
              />
            </main>
          </div>
        } />
        <Route path="/graph" element={
          <GraphView 
            notes={sampleNotes}
            onNoteSelect={handleNoteSelect}
          />
        } />
      </Routes>

      <footer className="footer">
        <div className="footer-content">
          <img src="/assets/orb.png" alt="" className="footer-orb" />
          <p>
            Built with PreTeXt principles, MathJax, and the Zettelkasten method for networked mathematical thinking.
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
