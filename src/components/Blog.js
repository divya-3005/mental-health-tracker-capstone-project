import React from 'react';
import './Blog.css';

const BLOGS = [
  {
    title: 'The Power of Journaling',
    summary: 'Discover how daily journaling can improve your mental clarity and emotional well-being.',
    link: '#',
  },
  {
    title: 'Understanding Your Mood Patterns',
    summary: 'Learn to recognize and track your mood for better self-awareness.',
    link: '#',
  },
  {
    title: 'Guided Meditation for Beginners',
    summary: 'A simple guide to starting meditation and finding calm in your day.',
    link: '#',
  },
  {
    title: 'Tips for Emotional Resilience',
    summary: 'Build your emotional strength with these expert-backed strategies.',
    link: '#',
  },
  {
    title: 'How to Reflect on Your Day',
    summary: 'Reflection techniques to help you process your experiences and grow.',
    link: '#',
  },
  {
    title: 'The Science of Gratitude',
    summary: 'Explore how gratitude can transform your mindset and relationships.',
    link: '#',
  },
  {
    title: 'Dealing with Stress in a Healthy Way',
    summary: 'Practical advice for managing stress and staying balanced.',
    link: '#',
  },
  {
    title: 'Why Sleep Matters for Mental Health',
    summary: 'Understand the connection between sleep and emotional well-being.',
    link: '#',
  },
  {
    title: 'Mindful Breathing Exercises',
    summary: 'Quick breathing techniques to help you relax and refocus.',
    link: '#',
  },
  {
    title: 'Building Healthy Habits',
    summary: 'Simple steps to create habits that support your mental health.',
    link: '#',
  },
];

function getRandomBlogs(arr, n) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

function Blog() {
  const blogs = getRandomBlogs(BLOGS, 6);
  return (
    <>
      <div className="blog-hero">
        <div className="blog-hero-content">
          <h1>OUR BLOG</h1>
          <p>Explore expert-curated content to support your emotional growth.</p>
        </div>
      </div>
      <div className="blog-list-section">
        <h2 className="blog-list-title">Latest Articles</h2>
        <div className="blog-list">
          {blogs.map((blog, idx) => (
            <div className="blog-card" key={idx}>
              <h3>{blog.title}</h3>
              <p>{blog.summary}</p>
              <a href={blog.link} className="blog-read-link">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog; 