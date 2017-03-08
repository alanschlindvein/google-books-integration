import {call, put, takeEvery} from 'redux-saga/effects';
import {BOOKS, books} from '../actions';
import api from '../services';

function * fetchBooks(action) {
  const {text, startIndex} = action;
  try {
    const booksResponse = yield call(api.getBooks, {text, startIndex});
    yield put(books.success({text, startIndex}, booksResponse));
  } catch (error) {
    yield put(books.failure({text, startIndex}, error));
  }
}

function * mySaga() {
  yield takeEvery(BOOKS.REQUEST, fetchBooks);
}

export default mySaga;
