import fetch from 'cross-fetch';
export const url = `http://localhost:8081/`;

export const NYTRequest = async params => {
  let data;
  try {
    const response = await fetch(`${url}?url=${params}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    if (!response.ok) {
      data = {
        title: 'Problem Loading Article',
        data: `<p>${response.statusText}</p>`,
      };
      return data;
    }
    data = await response.json();
    return data;
  } catch (err) {
    data = {
      title: 'Problem Loading Article',
      data: `<p>${err.message}</p>`,
    };
    return data;
  }
};
