import 'isomorphic-fetch';

const API_ROOT = 'https://www.googleapis.com/books/v1/volumes';

const api = {
  getBooks(text) {
    const url = API_ROOT + '?q=' + encodeURI(text);
    return fetch(url)
      .then(response =>
        response.json().then(json => (
          {json, response})
        )
      ).then(({json, response}) => {
        if (!response.ok) {
          return Promise.reject(json);
        }

        return json;
      });
  }
};

export default api;
