import React from 'react';

const About = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>About This App</h1>
      <p>This is a simple loan calculator app with real-time exchange rates.</p>
      <p>
        <strong>Live Deployment:</strong>{' '}
        <a href="https://your-live-url.vercel.app" target="_blank" rel="noopener noreferrer">
          Click here to view
        </a>
      </p>
    </div>
  );
};

export default About;
