import {call, put, takeEvery} from 'redux-saga/effects';
import {BOOKS, BOOK_DETAILS, TOGGLE_FAVORITE_BOOK, books, bookDetails, toggleFavoriteBook} from '../actions';
import {googleBooksApi, favoriteBooks} from '../services';

function * apiSaga(fn, parameter, successAction, errorAction) {
  try {
    const response = yield call(fn, parameter);
    yield put(successAction(parameter, response));
  } catch ({error}) {
    yield put(errorAction(error));
  }
}

function * fetchBooks(action) {
  const {text, startIndex} = action;
  yield * apiSaga(googleBooksApi.getBooks, {text, startIndex}, books.success, books.failure);
}

function * fetchBooksDetails(action) {
  const {id} = action;
  yield * apiSaga(googleBooksApi.getBookDetails, id, bookDetails.success, bookDetails.failure);
}

function * toggleFavorite(action) {
  const favoritesArray = favoriteBooks.toggleFavorite(action.id);
  yield put(toggleFavoriteBook.success({id: action.id, favorites: favoritesArray}));
}

function * watchMany() {
  yield [
    takeEvery(BOOKS.REQUEST, fetchBooks),
    takeEvery(BOOK_DETAILS.REQUEST, fetchBooksDetails),
    takeEvery(TOGGLE_FAVORITE_BOOK.REQUEST, toggleFavorite)
  ];
}

export default watchMany;
