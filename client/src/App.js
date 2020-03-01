import React, { useState } from 'react';
import './App.css';
import NytForm from './nytForm';

function App() {
  const [url, setUrl] = useState('');
  const handleChange = value => {
    setUrl(value);
  };
  const handleSubmit = () => {
    alert(`getting ${url}`);
  };
  return (
    <div className="container">
      <NytForm url={url} onUrlChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
