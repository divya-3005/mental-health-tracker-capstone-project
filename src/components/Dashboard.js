import React, { useEffect, useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [journalEntries, setJournalEntries] = useState([]);
  const [moodData, setMoodData] = useState([]);

  useEffect(() => {
    const savedJournal = localStorage.getItem('journalEntries');
    if (savedJournal) setJournalEntries(JSON.parse(savedJournal));
    const savedMood = localStorage.getItem('moodData');
    if (savedMood) setMoodData(JSON.parse(savedMood));
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h2>Journal Entries</h2>
          <p>Total: {journalEntries.length}</p>
          {journalEntries.length > 0 ? (
            <div className="dashboard-journal-preview">
              <strong>Latest Entry:</strong>
              <div className="dashboard-journal-date">{journalEntries[0].date}</div>
              <div className="dashboard-journal-text">{journalEntries[0].text}</div>
            </div>
          ) : (
            <p>No journal entries yet.</p>
          )}
        </div>
        <div className="dashboard-card">
          <h2>Mood Trends</h2>
          {moodData.length === 7 ? (
            <svg className="dashboard-mood-graph" width="100%" height="120" viewBox="0 0 300 120">
              <polyline
                fill="none"
                stroke="#2e7d32"
                strokeWidth="3"
                points={moodData.map((v, i) => `${i * 40 + 20},${120 - v * 18}`).join(' ')}
              />
              {moodData.map((v, i) => (
                <circle key={i} cx={i * 40 + 20} cy={120 - v * 18} r="4" fill="#2e7d32" />
              ))}
            </svg>
          ) : (
            <p>No mood data yet.</p>
          )}
          <div className="dashboard-mood-labels">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 
