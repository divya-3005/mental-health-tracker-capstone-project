import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

function Services() {
  const navigate = useNavigate();
  const [showMeditation, setShowMeditation] = useState(false);
  const [showGoals, setShowGoals] = useState(false);
  const [showFocus, setShowFocus] = useState(false);
  const [shortTerm, setShortTerm] = useState([]);
  const [longTerm, setLongTerm] = useState([]);
  const [goalInput, setGoalInput] = useState('');
  const [goalType, setGoalType] = useState('short');
  // Focus timer state
  const [timer, setTimer] = useState(1500); // 25 min default
  const [isRunning, setIsRunning] = useState(false);
  const [customMinutes, setCustomMinutes] = useState(25);
  const [showTimesUp, setShowTimesUp] = useState(false);
  const timerRef = useRef(null);
  // Remove beepRef and audio logic

  // Timer logic
  React.useEffect(() => {
    if (isRunning) {
      setShowTimesUp(false);
      timerRef.current = setInterval(() => {
        setTimer(t => {
          if (t > 1) return t - 1;
          if (t === 1) {
            setIsRunning(false);
            setShowTimesUp(true);
            return 0;
          }
          return 0;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStart = () => { setIsRunning(true); setShowTimesUp(false); };
  const handleStop = () => setIsRunning(false);
  const handleReset = () => { setIsRunning(false); setTimer(1500); setShowTimesUp(false); };
  const formatTime = t => `${String(Math.floor(t/60)).padStart(2, '0')}:${String(t%60).padStart(2, '0')}`;

  const handleAddGoal = () => {
    if (!goalInput.trim()) return;
    if (goalType === 'short') setShortTerm([{ text: goalInput }, ...shortTerm]);
    else setLongTerm([{ text: goalInput }, ...longTerm]);
    setGoalInput('');
  };
  const handleDeleteGoal = (type, idx) => {
    if (type === 'short') setShortTerm(shortTerm.filter((_, i) => i !== idx));
    else setLongTerm(longTerm.filter((_, i) => i !== idx));
  };

  const handleSetCustom = () => {
    setTimer(Math.max(1, Math.floor(customMinutes)) * 60);
  };

  return (
    <div className="services-container">
      <h1 className="services-title">OUR SERVICES</h1>
      <div className="services-grid">
        <div className="service-card clickable" onClick={() => navigate('/mood')}>
          <h2>Mood Tracking</h2>
          <p>Track your mood daily and see your trends.</p>
        </div>
        <div className="service-card clickable" onClick={() => navigate('/journal')}>
          <h2>Daily Journal</h2>
          <p>Write your thoughts and reflect everyday.</p>
        </div>
        <div className="service-card clickable" onClick={() => setShowFocus(true)}>
          <h2>Focus</h2>
          <p>Set a timer and boost your productivity with focus tips.</p>
        </div>
        <div className="service-card clickable" onClick={() => setShowMeditation(true)}>
          <h2>Guided Meditation</h2>
          <p>Relax with guided meditation sessions.</p>
        </div>
        <div className="service-card clickable" onClick={() => setShowGoals(true)}>
          <h2>Set Goals</h2>
          <p>Set and track your long-term and short-term goals.</p>
        </div>
        <div className="service-card clickable" onClick={() => navigate('/blog')}>
          <h2>Expert Advice</h2>
          <p>Get tips and advice from mental health experts.</p>
        </div>
        <div className="service-card clickable" onClick={() => navigate('/appointment')}>
          <h2>Book Appointment</h2>
          <p>Schedule a session with a mental health professional.</p>
        </div>
      </div>
      {showMeditation && (
        <div className="meditation-modal">
          <div className="meditation-content">
            <h3>Guided Meditation</h3>
            <iframe width="300" height="170" src="https://www.youtube.com/embed/inpok4MKVLM" title="Guided Meditation" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <br />
            <button className="meditation-close" onClick={() => setShowMeditation(false)}>Close</button>
          </div>
        </div>
      )}
      {showGoals && (
        <div className="goals-modal">
          <div className="goals-content">
            <h3>Set Your Goals</h3>
            <div style={{ marginBottom: 12 }}>
              <select value={goalType} onChange={e => setGoalType(e.target.value)} style={{ marginRight: 8, padding: '6px 10px', borderRadius: 5, border: '1px solid #bdbdbd' }}>
                <option value="short">Short Term</option>
                <option value="long">Long Term</option>
              </select>
              <input
                type="text"
                value={goalInput}
                onChange={e => setGoalInput(e.target.value)}
                placeholder={goalType === 'short' ? 'Add a short-term goal...' : 'Add a long-term goal...'}
                style={{ padding: '7px 12px', borderRadius: 5, border: '1px solid #bdbdbd', width: 180 }}
              />
              <button onClick={handleAddGoal} style={{ marginLeft: 8, background: '#2e7d32', color: '#fff', border: 'none', borderRadius: 5, padding: '7px 16px', cursor: 'pointer' }}>Add</button>
            </div>
            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
              <div>
                <h4 style={{ color: '#2e7d32', marginBottom: 8 }}>Short Term Goals</h4>
                <ul style={{ padding: 0, listStyle: 'none', minWidth: 180 }}>
                  {shortTerm.length === 0 && <li style={{ color: '#888' }}>No short-term goals yet.</li>}
                  {shortTerm.map((g, i) => (
                    <li key={i} style={{ background: '#e8f5e9', borderRadius: 5, marginBottom: 6, padding: '7px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>{g.text}</span>
                      <button onClick={() => handleDeleteGoal('short', i)} style={{ background: 'none', border: 'none', color: '#e53935', fontWeight: 700, cursor: 'pointer', fontSize: 16 }}>×</button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#2e7d32', marginBottom: 8 }}>Long Term Goals</h4>
                <ul style={{ padding: 0, listStyle: 'none', minWidth: 180 }}>
                  {longTerm.length === 0 && <li style={{ color: '#888' }}>No long-term goals yet.</li>}
                  {longTerm.map((g, i) => (
                    <li key={i} style={{ background: '#e3f2fd', borderRadius: 5, marginBottom: 6, padding: '7px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>{g.text}</span>
                      <button onClick={() => handleDeleteGoal('long', i)} style={{ background: 'none', border: 'none', color: '#e53935', fontWeight: 700, cursor: 'pointer', fontSize: 16 }}>×</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button className="goals-close" onClick={() => setShowGoals(false)} style={{ marginTop: 18 }}>Close</button>
          </div>
        </div>
      )}
      {showFocus && (
        <div className="focus-modal">
          <div className="focus-content">
            <h3>Focus Timer</h3>
            <div style={{ marginBottom: 12 }}>
              <input
                type="number"
                min="1"
                max="120"
                value={customMinutes}
                onChange={e => setCustomMinutes(e.target.value)}
                style={{ width: 60, padding: '7px 8px', borderRadius: 5, border: '1px solid #bdbdbd', marginRight: 8 }}
              />
              <button onClick={handleSetCustom} style={{ background: '#2e7d32', color: '#fff', border: 'none', borderRadius: 5, padding: '7px 14px', cursor: 'pointer', fontWeight: 500 }}>Set Minutes</button>
            </div>
            <div style={{ fontSize: 38, fontWeight: 600, color: '#2e7d32', margin: '18px 0' }}>{formatTime(timer)}</div>
            {showTimesUp && (
              <div style={{ color: '#e53935', fontWeight: 600, fontSize: 18, marginBottom: 10 }}>Time's up! Take a short break.</div>
            )}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 18 }}>
              <button onClick={handleStart} style={{ background: '#2e7d32', color: '#fff', border: 'none', borderRadius: 5, padding: '8px 18px', fontSize: 16, cursor: 'pointer', fontWeight: 500 }}>Start</button>
              <button onClick={handleStop} style={{ background: '#bdbdbd', color: '#222', border: 'none', borderRadius: 5, padding: '8px 18px', fontSize: 16, cursor: 'pointer', fontWeight: 500 }}>Stop</button>
              <button onClick={handleReset} style={{ background: '#e53935', color: '#fff', border: 'none', borderRadius: 5, padding: '8px 18px', fontSize: 16, cursor: 'pointer', fontWeight: 500 }}>Reset</button>
            </div>
            <div style={{ marginTop: 18, textAlign: 'left' }}>
              <h4 style={{ color: '#2e7d32', marginBottom: 8 }}>Focus Tips</h4>
              <ul style={{ color: '#333', fontSize: '1.05rem', paddingLeft: 18, margin: 0 }}>
                <li>Eliminate distractions: silence your phone and close unused tabs.</li>
                <li>Set a clear, specific goal for your focus session.</li>
                <li>Take a short break after each session to recharge.</li>
              </ul>
            </div>
            <button className="focus-close" onClick={() => setShowFocus(false)} style={{ marginTop: 18 }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services; 