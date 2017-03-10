import favorites from './favorites';
import {TOGGLE_FAVORITE_BOOK} from '../actions';

describe('favorites reducer', () => {
  it('should handle initial state', () => {
    expect(favorites(undefined, {})).toEqual([]);
  });

  it('should handle TOGGLE_FAVORITE_BOOK.SUCCESS', () => {
    expect(favorites(['1'], {
      type: TOGGLE_FAVORITE_BOOK.SUCCESS,
      favorites: []
    })).toEqual([]);

    expect(favorites([], {
      type: TOGGLE_FAVORITE_BOOK.SUCCESS,
      favorites: ['1']
    })).toEqual(['1']);

    expect(favorites(['1'], {
      type: TOGGLE_FAVORITE_BOOK.SUCCESS,
      favorites: ['1', '2']
    })).toEqual(['1', '2']);

    expect(favorites(['1', '2'], {
      type: TOGGLE_FAVORITE_BOOK.SUCCESS,
      favorites: ['2']
    })).toEqual(['2']);
  });
});
