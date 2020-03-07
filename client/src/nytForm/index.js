import React from 'react';

export default function NytForm(props) {
  const { url, newsSource, onUrlChange, onNewsSourceChange, onSubmit } = props;
  const handleUrl = event => {
    onUrlChange(event.target.value);
  };

  const handleNewsSource = event => {
    onNewsSourceChange(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group">
        <label htmlFor="news-source">Select a news source</label>
        <select
          id="news-source"
          value={newsSource}
          onChange={e => handleNewsSource(e)}
          className="custom-select custom-select-lg mb-3"
        >
          <option defaultValue></option>
          <option value="nyt">New York Times</option>
          <option value="columbusDispatch">Columbus Dispatch</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="url">Url of NYT article</label>
        <input
          type="text"
          className="form-control"
          id="url"
          value={url}
          onChange={e => handleUrl(e)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
