import {call, put, takeEvery} from 'redux-saga/effects';
import {SEARCH_BOOK} from '../constants/ActionTypes';
import Api from '../services';

function * fetchBooks(action) {
  try {
    const books = yield call(Api.getBooks, action.text);
    yield put({type: SEARCH_BOOK, books});
  } catch (e) {
    yield put({type: 'USER_FETCH_FAILED', message: e.message});
  }
}

function * mySaga() {
  yield takeEvery(SEARCH_BOOK + '_REQUEST', fetchBooks);
}

export default mySaga;
