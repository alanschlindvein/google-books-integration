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
export const BOOK_DETAILS = createRequestTypes('BOOK_DETAILS');
export const TOGGLE_FAVORITE_BOOK = createRequestTypes('TOGGLE_FAVORITE_BOOK');

export const CLOSE_BOOK_DETAILS = 'CLOSE_BOOK_DETAILS';
export const CLEAR_BOOKS = 'CLEAR_BOOKS';

function action(type, payload = {}) {
  return {type, ...payload};
}

export const books = {
  request: filter => action(BOOKS.REQUEST, filter),
  success: (filter, books) => action(BOOKS.SUCCESS, {filter, books}),
  failure: (text, error) => action(BOOKS.FAILURE, {text, error})
};

export const bookDetails = {
  request: id => action(BOOK_DETAILS.REQUEST, {id}),
  success: (id, book) => action(BOOK_DETAILS.SUCCESS, {id, book}),
  failure: (id, error) => action(BOOK_DETAILS.FAILURE, {id, error})
};

export const toggleFavoriteBook = {
  request: filter => action(TOGGLE_FAVORITE_BOOK.REQUEST, filter),
  success: filter => action(TOGGLE_FAVORITE_BOOK.SUCCESS, filter)
};

export const toggleFavorite = toggleFavoriteBook.request;

export const requestBooks = books.request;
export const clearBooks = () => action(CLEAR_BOOKS);

export const showBookDetails = bookDetails.request;
export const closeBookDetails = () => action(CLOSE_BOOK_DETAILS);

