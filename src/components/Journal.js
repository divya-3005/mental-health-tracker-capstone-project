import React, { useState, useEffect } from 'react';
import './Journal.css';

function Journal() {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('journalEntries');
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(entries));
  }, [entries]);

  const handleAdd = () => {
    if (entry.trim() === '') return;
    setEntries([{ text: entry, date: new Date().toLocaleString() }, ...entries]);
    setEntry('');
  };

  const handleDelete = (idx) => {
    setEntries(entries.filter((_, i) => i !== idx));
  };

  return (
    <div className="journal-container">
      <div className="journal-hero">
        <h1 className="journal-title">My Journal</h1>
      </div>
      <textarea
        className="journal-textarea"
        value={entry}
        onChange={e => setEntry(e.target.value)}
        placeholder="Write your thoughts here..."
        rows={5}
      />
      <button className="journal-add-btn" onClick={handleAdd}>Save Entry</button>
      <div className="journal-entries">
        {entries.length === 0 ? (
          <p className="journal-empty">No entries yet. Start writing!</p>
        ) : (
          entries.map((e, idx) => (
            <div className="journal-entry" key={idx}>
              <div className="journal-entry-header">
                <span className="journal-entry-date">{e.date}</span>
                <button className="journal-delete-btn" onClick={() => handleDelete(idx)}>Delete</button>
              </div>
              <div className="journal-entry-text">{e.text}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Journal; 
