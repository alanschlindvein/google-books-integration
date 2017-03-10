import React, {PropTypes} from 'react';
import classnames from 'classnames';
import BookCard from './BookCard';

const isBookSelected = (selectedBook, book) => (
  selectedBook && selectedBook.id && book && book.id && selectedBook.id === book.id
);

function BooksList({booksList, showBookDetails, selectedBook}) {
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
  selectedBook: PropTypes.object
};

export default BooksList;
