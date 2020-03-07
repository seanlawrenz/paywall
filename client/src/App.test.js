import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import App from './App';
import { NYTRequest as mockResponse } from './utils/api';

jest.mock('./utils/api', () => ({
  NYTRequest: jest.fn(),
}));

test('renders', () => {
  const { getByText, getByLabelText } = render(<App />);
  getByLabelText(/url of NYT article/i);
  getByText(/Read your favorite Newspaper while being cheap/i);
});

test('getting an article', async () => {
  const { getByText, getByLabelText, getByTestId } = render(<App />);
  const testUrl = 'http://anything.com';
  const testSource = 'nyt';
  mockResponse.mockImplementationOnce(
    jest.fn(() => Promise.resolve({ data: '<p>Article</p>', title: 'Testing' }))
  );

  getByText(/Read your favorite Newspaper while being cheap/i);
  fireEvent.change(getByLabelText(/url of NYT article/i, { id: 'url' }), {
    target: { value: testUrl },
  });
  fireEvent.change(
    getByLabelText(/select a news source/i, { id: 'news-source' }),
    {
      target: { value: testSource },
    }
  );
  fireEvent.click(getByText(/submit/i));
  getByTestId('progress-bar');
  expect(mockResponse).toHaveBeenCalledWith(testUrl, testSource);
  await wait(() => {
    getByText(/testing/i);
  });
});

test('error on getting an article', async () => {
  const { getByText, getByLabelText } = render(<App />);
  const testUrl = 'http://doesnotexist';
  mockResponse.mockImplementationOnce(
    jest.fn(() => Promise.reject({ message: 'Server down' }))
  );
  fireEvent.change(getByLabelText(/url of NYT article/i, { id: 'url' }), {
    target: { value: testUrl },
  });
  fireEvent.click(getByText(/submit/i));
  await wait(() => {
    getByText(/problem finding article/i);
    getByText(/server down/i);
  });
});
