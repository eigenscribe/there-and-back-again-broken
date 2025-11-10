import React from 'react';

function Sidebar({ notes, currentNoteId, onNoteSelect }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Zettelkasten</h2>
        <p className="sidebar-subtitle">Math Study Notes</p>
      </div>
      
      <div className="notes-list">
        {notes.map(note => (
          <div
            key={note.id}
            className={`note-item ${currentNoteId === note.id ? 'active' : ''}`}
            onClick={() => onNoteSelect(note.id)}
          >
            <div className="note-id">{note.id}</div>
            <div className="note-title">{note.title}</div>
            <div className="note-tags">
              {note.tags.slice(0, 2).map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="sidebar-footer">
        <p className="note-count">{notes.length} notes</p>
      </div>
    </div>
  );
}

export default Sidebar;
