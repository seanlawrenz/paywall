import React, { useState } from 'react';
import './App.css';
import NytForm from './nytForm';
import Progress from './progress';

function App() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const handleChange = value => {
    setUrl(value);
  };
  const handleSubmit = () => {
    alert(`getting ${url}`);
  };
  return (
    <div className="container">
      <NytForm url={url} onUrlChange={handleChange} onSubmit={handleSubmit} />
      {loading && <Progress />}
    </div>
  );
}

export default App;
