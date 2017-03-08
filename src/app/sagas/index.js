import {call, put, takeEvery} from 'redux-saga/effects';
import {BOOKS, books} from '../actions';
import api from '../services';

function * fetchBooks(action) {
  const text = action.text;
  try {
    const booksResponse = yield call(api.getBooks, text);
    yield put(books.success(text, booksResponse));
  } catch (error) {
    yield put(books.failure(text, error));
  }
}

function * mySaga() {
  yield takeEvery(BOOKS.REQUEST, fetchBooks);
}

export default mySaga;
