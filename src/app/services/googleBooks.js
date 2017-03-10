import 'isomorphic-fetch';

const API_ROOT = 'https://www.googleapis.com/books/v1/volumes';

function fetchUrl(url) {
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

const googleApi = {
  getBooks({text, startIndex}) {
    return fetchUrl(API_ROOT + '?q=' + encodeURI(text) + '&startIndex=' + startIndex);
  },
  getBookDetails(id) {
    return fetchUrl(API_ROOT + `/${id}`);
  }
};

export default googleApi;
