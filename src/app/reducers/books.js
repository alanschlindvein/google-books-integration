import {SEARCH_BOOK, SHOW_BOOK} from '../constants/ActionTypes';

const initialState = {
  searchResult: {items: []},
  selectedBook: null
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BOOK:
      return Object.assign({}, state, {searchResult: action.books});

    case SHOW_BOOK:
      return Object.assign({}, state, {selectedBook: action.book});

    default:
      return state;
  }
}
