import React, {PropTypes} from 'react';
import BookCard from './BookCard';

function BooksList({booksList, showBook}) {
  return (
    <div>
      <ul className="list-books">
        {booksList.map(book =>
          <BookCard
            key={book.id}
            book={book}
            showBook={showBook}
            />
        )}
      </ul>
    </div>
  );
}

BooksList.propTypes = {
  booksList: PropTypes.array.isRequired,
  showBook: PropTypes.func.isRequired
};

export default BooksList;
