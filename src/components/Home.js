import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-hero">
        <div className="home-hero-content">
          <h1>Welcome to MindCare</h1>
          <p>Your personal space to understand, reflect, and heal emotionally. Start your journey to better mental health today.</p>
          <button className="journal-btn" onClick={() => navigate('/journal')}>
            Start Journaling
          </button>
        </div>
      </div>
      <div className="home-description">
        <h2>Track Your Mind. Heal Your Soul.</h2>
        <p>Welcome to MindCare — your personal space to understand, reflect, and heal emotionally. In the chaos of daily life, it’s easy to ignore how we truly feel.</p>
        <p>That’s why we’ve built a platform that helps you stay in touch with your mental well-being through simple yet powerful tools.</p>
        <p>With MindCare, you can journal your thoughts privately, track your mood patterns, and explore expert-curated content that supports your emotional growth.</p>
      </div>
    </>
  );
}

export default Home;
