import React, { useEffect } from 'react';
import { bibliography } from '../data/sampleNotes';
import GraphDisplay from './GraphDisplay';

function NoteDisplay({ note, onNoteClick }) {
  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, [note]);

  if (!note) {
    return (
      <div className="note-display">
        <div className="welcome-message">
          <h1 className="gradient-heading">Welcome to Your Math Journal</h1>
          <p>Select a note from the sidebar to begin exploring your mathematical journey.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="note-display">
      {note.aiWarning && (
        <div className="ai-warning">
          <strong>⚠️ Prototype Note:</strong> This is a sample note with placeholder content for demonstration purposes. 
          Replace with your own mathematical insights and discoveries.
        </div>
      )}
      
      <div className="note-header">
        <div className="note-metadata">
          <span className="note-id-badge">{note.id}</span>
          <div className="note-tags-display">
            {note.tags.map(tag => (
              <span key={tag} className="tag-badge">#{tag}</span>
            ))}
          </div>
        </div>
        <h1 className="note-title-main">{note.title}</h1>
      </div>

      <div className="note-content">
        <div className="abstract">
          <h3>Abstract</h3>
          <p>{note.content.abstract}</p>
        </div>

        {note.content.sections.map((section, idx) => (
          <div key={idx} className="note-section">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
            {section.math && (
              <div className="math-content">
                {`\\[${section.math}\\]`}
              </div>
            )}
          </div>
        ))}

        {note.hasGraph && (
          <div className="graph-section">
            <h2>Visualization</h2>
            <GraphDisplay graphType={note.graphType} />
          </div>
        )}

        <div className="linked-notes">
          <h3>Linked Notes</h3>
          <div className="links-container">
            {note.linkedNotes.map(linkedId => (
              <button
                key={linkedId}
                className="linked-note-btn"
                onClick={() => onNoteClick(linkedId)}
              >
                → Note {linkedId}
              </button>
            ))}
          </div>
        </div>

        {note.citations && note.citations.length > 0 && (
          <div className="citations">
            <h3>References</h3>
            {note.citations.map(citationKey => {
              const citation = bibliography[citationKey];
              return citation ? (
                <div key={citationKey} className="citation-item">
                  <div className="citation-formatted">
                    <strong>{citation.author}</strong> ({citation.year}). <em>{citation.title}</em>.
                    {citation.edition && ` ${citation.edition} edition.`}
                    {citation.publisher && ` ${citation.publisher}.`}
                  </div>
                  <details className="bibtex-details">
                    <summary>BibTeX</summary>
                    <pre className="bibtex-code">{citation.bibtex}</pre>
                  </details>
                </div>
              ) : null;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default NoteDisplay;
