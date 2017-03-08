const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const BOOKS = createRequestTypes('BOOKS');

export const OPEN_BOOK_DETAILS = 'OPEN_BOOK_DETAILS';
export const CLOSE_BOOK_DETAILS = 'CLOSE_BOOK_DETAILS';

function action(type, payload = {}) {
  return {type, ...payload};
}

export const books = {
  request: text => action(BOOKS.REQUEST, {text}),
  success: (text, books) => action(BOOKS.SUCCESS, {text, books}),
  failure: (text, error) => action(BOOKS.FAILURE, {text, error})
};

export const requestBooks = books.request;
export const showBookDetails = book => action(OPEN_BOOK_DETAILS, {book});
export const closeBookDetails = () => action(CLOSE_BOOK_DETAILS);
