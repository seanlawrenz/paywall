import fetch from 'cross-fetch';
export const url = `http://localhost:8081/`;

export const NYTRequest = async params => {
  try {
    const response = await fetch(`${url}?url=${params}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
