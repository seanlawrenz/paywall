import React, { useState } from 'react';

export default function NytForm() {
  const [url, setUrl] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    alert(`Submitting for ${url}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="url">Url of NYT article</label>
        <input
          type="text"
          className="form-control"
          id="url"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
