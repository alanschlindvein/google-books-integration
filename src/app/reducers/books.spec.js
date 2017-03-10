import books from './books';
import {BOOKS, BOOK_DETAILS, CLOSE_BOOK_DETAILS, CLEAR_BOOKS} from '../actions';

describe('favorites reducer', () => {
  it('should handle BOOKS.SUCCESS', () => {
    expect(books(undefined, {
      type: BOOKS.SUCCESS,
      filter: {
        text: 'Número', startIndex: 10
      },
      books: {items: ['1', '2', '3']}
    })).toEqual({
      filter: {text: 'Número', startIndex: 10, maxResults: 10},
      searchResult: {items: ['1', '2', '3']},
      selectedBook: null
    });

    expect(books({
      filter: {text: 'Número', startIndex: 10, maxResults: 10},
      searchResult: {items: ['1', '2', '3']},
      selectedBook: null
    }, {
      type: BOOKS.SUCCESS,
      filter: {
        text: 'Número', startIndex: 20
      },
      books: {items: ['4', '5', '6']}
    })).toEqual({
      filter: {text: 'Número', startIndex: 20, maxResults: 10},
      searchResult: {items: ['1', '2', '3', '4', '5', '6']},
      selectedBook: null
    });

    expect(books({
      filter: {text: 'Número', startIndex: 10, maxResults: 10},
      searchResult: {items: ['1', '2', '3']},
      selectedBook: {id: '2'}
    }, {
      type: BOOKS.SUCCESS,
      filter: {
        text: 'Número', startIndex: 20
      },
      books: {items: ['4', '5', '6']}
    })).toEqual({
      filter: {text: 'Número', startIndex: 20, maxResults: 10},
      searchResult: {items: ['1', '2', '3', '4', '5', '6']},
      selectedBook: {id: '2'}
    });

    expect(books({
      filter: {text: 'Número', startIndex: 10, maxResults: 10},
      searchResult: {items: ['1', '2', '3']},
      selectedBook: null
    }, {
      type: BOOKS.SUCCESS,
      filter: {
        text: 'Outro Número', startIndex: 10
      },
      books: {items: ['11', '12', '13']}
    })).toEqual({
      filter: {text: 'Outro Número', startIndex: 10, maxResults: 10},
      searchResult: {items: ['11', '12', '13']},
      selectedBook: null
    });

    expect(books({
      filter: {text: 'Número', startIndex: 10, maxResults: 10},
      searchResult: {items: ['1', '2', '3']},
      selectedBook: {id: '3'}
    }, {
      type: BOOKS.SUCCESS,
      filter: {
        text: 'Outro Número', startIndex: 10
      },
      books: {items: ['11', '12', '13']}
    })).toEqual({
      filter: {text: 'Outro Número', startIndex: 10, maxResults: 10},
      searchResult: {items: ['11', '12', '13']},
      selectedBook: null
    });
  });

  it('should handle initial state', () => {
    expect(books(undefined, {})).toEqual({
      searchResult: {items: []},
      selectedBook: null,
      filter: {text: '', startIndex: 0, maxResults: 10}
    });
  });

  it('should handle BOOK_DETAILS.SUCCESS', () => {
    expect(books({}, {
      type: BOOK_DETAILS.SUCCESS,
      book: {id: '2'}
    })).toEqual({
      selectedBook: {id: '2'}
    });
  });

  it('should handle BOOK_DETAILS.SUCCESS', () => {
    expect(books({}, {
      type: CLOSE_BOOK_DETAILS
    })).toEqual({
      selectedBook: null
    });
  });

  it('should handle CLEAR_BOOKS', () => {
    expect(books({
      searchResult: {items: ['1', '2', '3']},
      selectedBook: {id: '3'},
      filter: {text: 'Java', startIndex: 20, maxResults: 10}
    }, {
      type: CLEAR_BOOKS
    })).toEqual({
      searchResult: {items: []},
      selectedBook: null,
      filter: {text: '', startIndex: 0, maxResults: 10}
    });
  });
});
