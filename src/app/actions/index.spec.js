import * as actions from './index';

describe('books actions', () => {
  it('closeBookDetails should create CLOSE_BOOK_DETAILS action', () => {
    expect(actions.closeBookDetails()).toEqual({
      type: actions.CLOSE_BOOK_DETAILS
    });
  });

  it('bookDetails.request should create BOOK_DETAILS.REQUEST action', () => {
    expect(actions.bookDetails.request(1)).toEqual({
      type: actions.BOOK_DETAILS.REQUEST,
      id: 1
    });
  });
});
