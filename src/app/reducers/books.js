import * as ActionTypes from '../actions';

const initialState = {
  searchResult: {items: []},
  selectedBook: null,
  filter: {text: '', startIndex: 0, maxResults: 10}
};

export default function books(state = initialState, action) {
  const actionType = action.type;

  if (actionType === ActionTypes.BOOKS.SUCCESS) {
    // TODO - refatorar depois
    const filter = {
      maxResults: state.filter.maxResults,
      text: action.filter.text,
      startIndex: action.filter.startIndex
    };
    const oldItems = state.filter.text === action.filter.text ? state.searchResult.items : [];
    const searchResult = action.books;
    searchResult.items = oldItems.concat(action.books.items);

    return {...state, searchResult, filter};
  }

  if (actionType === ActionTypes.BOOK_DETAILS.SUCCESS) {
    return {...state, selectedBook: action.book};
  }

  if (actionType === ActionTypes.CLOSE_BOOK_DETAILS) {
    return {...state, selectedBook: null};
  }

  return state;
}
