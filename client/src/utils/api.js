import fetch from 'cross-fetch';
export const apiUrl = `http://localhost:8081/`;

export const NYTRequest = async (url, newsSource) => {
  let data;
  try {
    const response = await fetch(
      `${apiUrl}?url=${url}&newsSource=${newsSource}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
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
