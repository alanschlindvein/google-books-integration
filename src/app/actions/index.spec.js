import * as actions from './index';

describe('books actions', () => {
  it('BOOKS should create BOOKS group action', () => {
    expect(actions.BOOKS).toEqual({
      REQUEST: 'BOOKS_REQUEST',
      SUCCESS: 'BOOKS_SUCCESS',
      FAILURE: 'BOOKS_FAILURE'
    });
  });

  it('BOOKS should create BOOK_DETAILS group action', () => {
    expect(actions.BOOK_DETAILS).toEqual({
      REQUEST: 'BOOK_DETAILS_REQUEST',
      SUCCESS: 'BOOK_DETAILS_SUCCESS',
      FAILURE: 'BOOK_DETAILS_FAILURE'
    });
  });

  it('BOOKS should create TOGGLE_FAVORITE_BOOK group action', () => {
    expect(actions.TOGGLE_FAVORITE_BOOK).toEqual({
      REQUEST: 'TOGGLE_FAVORITE_BOOK_REQUEST',
      SUCCESS: 'TOGGLE_FAVORITE_BOOK_SUCCESS',
      FAILURE: 'TOGGLE_FAVORITE_BOOK_FAILURE'
    });
  });

  it('books should create BOOKS equivalent requestType action', () => {
    expect(actions.books.request({text: 'harry potter'})).toEqual({
      type: actions.BOOKS.REQUEST,
      text: 'harry potter'
    });

    expect(actions.books.success({text: 'harry potter'}, {items: ['XPTO']})).toEqual({
      type: actions.BOOKS.SUCCESS,
      filter: {text: 'harry potter'},
      books: {items: ['XPTO']}
    });
  });

  it('bookDetails should create BOOK_DETAILS equivalent requestType action', () => {
    expect(actions.bookDetails.request(1)).toEqual({
      type: actions.BOOK_DETAILS.REQUEST,
      id: 1
    });

    expect(actions.bookDetails.success('1', {id: '1'})).toEqual({
      type: actions.BOOK_DETAILS.SUCCESS,
      id: '1',
      book: {id: '1'}
    });
  });

  it('toggleFavoriteBook should create TOGGLE_FAVORITE_BOOK equivalent requestType action', () => {
    expect(actions.toggleFavoriteBook.request({addTo: true, id: '1'})).toEqual({
      type: actions.TOGGLE_FAVORITE_BOOK.REQUEST,
      addTo: true,
      id: '1'
    });

    expect(actions.toggleFavoriteBook.success({id: '2', favorites: ['2']})).toEqual({
      type: actions.TOGGLE_FAVORITE_BOOK.SUCCESS,
      id: '2',
      favorites: ['2']
    });
  });

  it('toggleFavorite should be equal toggleFavoriteBook.request action', () => {
    expect(actions.toggleFavorite).toBe(actions.toggleFavoriteBook.request);
  });

  it('requestBooks should be equal books.request action', () => {
    expect(actions.requestBooks).toBe(actions.books.request);
  });

  it('clearBooks should create CLEAR_BOOKS action', () => {
    expect(actions.clearBooks()).toEqual({
      type: actions.CLEAR_BOOKS
    });
  });

  it('showBookDetails should be equal bookDetails.request action', () => {
    expect(actions.showBookDetails).toBe(actions.bookDetails.request);
  });

  it('closeBookDetails should create CLOSE_BOOK_DETAILS action', () => {
    expect(actions.closeBookDetails()).toEqual({
      type: actions.CLOSE_BOOK_DETAILS
    });
  });
});
