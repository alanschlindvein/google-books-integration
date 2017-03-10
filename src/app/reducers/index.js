import {combineReducers} from 'redux';
import books from './books';
import favorites from './favorites';

const rootReducer = combineReducers({
  books,
  favorites
});

export default rootReducer;
