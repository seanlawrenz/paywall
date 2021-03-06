import React from 'react';
import './styles.css';

export default function Progress() {
  return (
    <div className="progress mt-4" data-testid="progress-bar">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated progress-width"
        role="progressbar"
      />
    </div>
  );
}
