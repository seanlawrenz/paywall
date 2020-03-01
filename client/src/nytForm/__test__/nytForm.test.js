import React from 'react';
import { render } from '@testing-library/react';
import NytForm from '../';

test('renders the input', () => {
  const { getByLabelText } = render(<NytForm url="" />);
  getByLabelText(/url of NYT article/i);
});
