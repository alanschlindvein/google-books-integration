import * as types from '../constants/ActionTypes';

export function searchBook(text) {
  return {type: types.SEARCH_BOOK, text};
}

export function showBook(book) {
  return {type: types.SHOW_BOOK, book};
}
