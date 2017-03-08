import * as ActionTypes from '../actions';

const initialState = {
  searchResult: {items: []},
  selectedBook: null
};

export default function books(state = initialState, action) {
  const actionType = action.type;

  if (actionType === ActionTypes.BOOKS.SUCCESS) {
    return {...state, searchResult: action.books};
  }

  if (actionType === ActionTypes.OPEN_BOOK_DETAILS) {
    return {...state, selectedBook: action.book};
  }

  if (actionType === ActionTypes.CLOSE_BOOK_DETAILS) {
    return {...state, selectedBook: null};
  }

  return state;
}
