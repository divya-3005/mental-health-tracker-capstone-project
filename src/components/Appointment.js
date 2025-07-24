import React, { useState } from 'react';

function Appointment() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div style={{ maxWidth: 400, margin: '100px auto 0 auto', padding: '32px 24px', background: '#f7faf7', borderRadius: 12, boxShadow: '0 2px 12px rgba(44, 62, 80, 0.10)', textAlign: 'center' }}>
      <h2 style={{ color: '#2e7d32', marginBottom: 24 }}>Book Appointment</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: 22 }} onSubmit={handleSubmit}>
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: 12, top: 13, color: '#2e7d32', fontSize: 18 }}>👤</span>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            style={{ padding: '12px 12px 12px 38px', borderRadius: 7, border: '1.5px solid #bdbdbd', fontSize: '1.08rem', outline: 'none', width: '100%', boxSizing: 'border-box', marginBottom: 0, transition: 'border 0.2s' }}
            onFocus={e => e.target.style.border = '1.5px solid #2e7d32'}
            onBlur={e => e.target.style.border = '1.5px solid #bdbdbd'}
          />
        </div>
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: 12, top: 13, color: '#2e7d32', fontSize: 18 }}>✉️</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ padding: '12px 12px 12px 38px', borderRadius: 7, border: '1.5px solid #bdbdbd', fontSize: '1.08rem', outline: 'none', width: '100%', boxSizing: 'border-box', marginBottom: 0, transition: 'border 0.2s' }}
            onFocus={e => e.target.style.border = '1.5px solid #2e7d32'}
            onBlur={e => e.target.style.border = '1.5px solid #bdbdbd'}
          />
        </div>
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: 12, top: 13, color: '#2e7d32', fontSize: 18 }}>📅</span>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
            style={{ padding: '12px 12px 12px 38px', borderRadius: 7, border: '1.5px solid #bdbdbd', fontSize: '1.08rem', outline: 'none', width: '100%', boxSizing: 'border-box', marginBottom: 0, transition: 'border 0.2s' }}
            onFocus={e => e.target.style.border = '1.5px solid #2e7d32'}
            onBlur={e => e.target.style.border = '1.5px solid #bdbdbd'}
          />
        </div>
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: 12, top: 13, color: '#2e7d32', fontSize: 18 }}>⏰</span>
          <input
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
            required
            style={{ padding: '12px 12px 12px 38px', borderRadius: 7, border: '1.5px solid #bdbdbd', fontSize: '1.08rem', outline: 'none', width: '100%', boxSizing: 'border-box', marginBottom: 0, transition: 'border 0.2s' }}
            onFocus={e => e.target.style.border = '1.5px solid #2e7d32'}
            onBlur={e => e.target.style.border = '1.5px solid #bdbdbd'}
          />
        </div>
        <button type="submit" style={{ background: '#2e7d32', color: '#fff', border: 'none', borderRadius: 7, padding: '14px 0', fontSize: '1.13rem', cursor: 'pointer', marginTop: 8, fontWeight: 500, letterSpacing: 1 }}>Book</button>
      </form>
      {success && <div style={{ color: '#2e7d32', marginTop: 18, fontSize: '1.1rem', fontWeight: 500 }}>Appointment booked! (Demo only)</div>}
    </div>
  );
}

export default Appointment; 