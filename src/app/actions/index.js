import * as types from '../constants/ActionTypes';

export function searchBook(text) {
  return {type: types.SEARCH_BOOK, text};
}

export function getAllBooks(text) {
  return {type: types.SEARCH_BOOK + '_REQUEST', text};
}

export function showBook(book) {
  return {type: types.SHOW_BOOK, book};
}
