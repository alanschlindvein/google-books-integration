import React, {PropTypes} from 'react';
import classnames from 'classnames';
import BookCard from './BookCard';

const isBookSelected = (selectedBook, book) => (
  selectedBook && selectedBook.id && book && book.id && selectedBook.id === book.id
);

const isBookFavorited = (favorites, bookId) => (
  (favorites || []).filter(favoriteId => favoriteId === bookId).length > 0
);

function BooksList({booksList, showBookDetails, selectedBook, favorites}) {
  return (
    <div>
      <ul className="list-books">
        {booksList.map(book =>
          <li
            key={book.etag}
            className={classnames(
              'list-books__item',
              {selected: isBookSelected(selectedBook, book)}
            )}
            >
            <BookCard
              book={book}
              showBook={showBookDetails}
              favorited={isBookFavorited(favorites, book.id)}
              />
          </li>
        )}
      </ul>
    </div>
  );
}

BooksList.propTypes = {
  booksList: PropTypes.array.isRequired,
  showBookDetails: PropTypes.func.isRequired,
  selectedBook: PropTypes.object,
  favorites: PropTypes.array
};

export default BooksList;
