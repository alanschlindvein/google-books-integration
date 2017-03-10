import * as ActionTypes from '../actions';

const initialState = {
  searchResult: {items: []},
  selectedBook: null,
  filter: {text: '', startIndex: 0, maxResults: 10}
};

export default function books(state = initialState, action) {
  const actionType = action.type;

  if (actionType === ActionTypes.BOOKS.SUCCESS) {
    return handleBookSuccess(state, action);
  }

  if (actionType === ActionTypes.BOOK_DETAILS.SUCCESS) {
    return {...state, selectedBook: action.book};
  }

  if (actionType === ActionTypes.CLOSE_BOOK_DETAILS) {
    return {...state, selectedBook: null};
  }

  if (actionType === ActionTypes.CLEAR_BOOKS) {
    return initialState;
  }

  return state;
}

const handleStateFilter = (stateFilter, actionFilter) => ({
  maxResults: stateFilter.maxResults,
  text: actionFilter.text,
  startIndex: actionFilter.startIndex
});

function handleBookSuccess(state, action) {
  const filter = handleStateFilter(state.filter, action.filter);
  const oldItems = state.filter.text === action.filter.text ? state.searchResult.items : [];
  const searchResult = action.books;
  searchResult.items = [...oldItems, ...action.books.items];

  const selectedBook = oldItems.length ? state.selectedBook : null;

  return {...state, searchResult, filter, selectedBook};
}

