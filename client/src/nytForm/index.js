import React from 'react';

export default function NytForm(props) {
  const handleChange = event => {
    props.onUrlChange(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="url">Url of NYT article</label>
        <input
          type="text"
          className="form-control"
          id="url"
          value={props.url}
          onChange={e => handleChange(e)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
