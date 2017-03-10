import {TOGGLE_FAVORITE_BOOK} from '../actions';

const initialState = getInitialState();

export default function books(state = initialState, action) {
  const actionType = action.type;

  if (actionType === TOGGLE_FAVORITE_BOOK.SUCCESS) {
    return action.favorites;
  }

  return state;
}

function getInitialState() {
  return [];
}
