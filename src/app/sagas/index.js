import {call, put, takeEvery} from 'redux-saga/effects';
import {BOOKS, books, BOOK_DETAILS, bookDetails} from '../actions';
import api from '../services';

function * apiSaga(fn, args, successAction, errorAction) {
  try {
    const response = yield call(fn, ...args);
    yield put(successAction({...args}, response));
  } catch ({error}) {
    yield put(errorAction(error));
  }
}

function * fetchBooks(action) {
  const {text, startIndex} = action;
  yield * apiSaga(api.getBooks, [{text, startIndex}], books.success, books.failure);
}

function * fetchBooksDetails(action) {
  const {id} = action;
  yield * apiSaga(api.getBookDetails, [id], bookDetails.success, bookDetails.failure);
}

function * watchMany() {
  yield [
    takeEvery(BOOKS.REQUEST, fetchBooks),
    takeEvery(BOOK_DETAILS.REQUEST, fetchBooksDetails)
  ];
}

export default watchMany;
