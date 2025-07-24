import React from 'react';

const founders = [
  {
    name: 'Ananya Patel',
    role: 'Co-Founder & Product Lead',
    desc: 'Passionate about mental health and building accessible digital tools for well-being.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Rohan Gupta',
    role: 'Co-Founder & Tech Lead',
    desc: 'Focused on creating user-friendly, secure, and scalable mental health platforms.',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    name: 'Meera Joshi',
    role: 'Co-Founder & Community Lead',
    desc: 'Dedicated to building supportive communities and spreading mental health awareness.',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Arjun Desai',
    role: 'Co-Founder & Operations',
    desc: 'Ensures smooth operations and a seamless experience for all MindCare users.',
    img: 'https://randomuser.me/api/portraits/men/66.jpg',
  },
];

function About() {
  return (
    <div style={{ maxWidth: 700, margin: '80px auto 0 auto', padding: '30px 20px', background: '#f7faf7', borderRadius: 12, boxShadow: '0 2px 12px rgba(44, 62, 80, 0.10)' }}>
      <h2 style={{ color: '#2e7d32', textAlign: 'center', marginBottom: 24 }}>About MindCare</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#222' }}>
        MindCare is your personal space to understand, reflect, and heal emotionally. Our platform helps you stay in touch with your mental well-being through simple yet powerful tools like journaling, mood tracking, and expert-curated content. We believe in making mental health support accessible, friendly, and stigma-free for everyone.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#222' }}>
        Whether you want to track your mood, write your thoughts, or explore helpful resources, MindCare is here to support your journey to better mental health.
      </p>
      <div style={{ marginTop: 40 }}>
        <h3 style={{ color: '#2e7d32', textAlign: 'center', marginBottom: 18 }}>Founders</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          {founders.map((f, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px rgba(44, 62, 80, 0.07)', padding: 18, minWidth: 180, maxWidth: 220, textAlign: 'center' }}>
              <img src={f.img} alt={f.name} style={{ width: 70, height: 70, borderRadius: '50%', objectFit: 'cover', marginBottom: 10, border: '2px solid #2e7d32' }} />
              <div style={{ fontWeight: 600, fontSize: '1.1rem', color: '#2e7d32' }}>{f.name}</div>
              <div style={{ color: '#555', fontSize: '0.98rem', marginBottom: 6 }}>{f.role}</div>
              <div style={{ fontSize: '0.97rem', color: '#333' }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About; 