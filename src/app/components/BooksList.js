import React, {PropTypes} from 'react';
import BookCard from './BookCard';

function BooksList({booksList, showBookDetails}) {
  return (
    <div>
      <ul className="list-books">
        {booksList.map(book =>
          <BookCard
            key={book.id}
            book={book}
            showBook={showBookDetails}
            />
        )}
      </ul>
    </div>
  );
}

BooksList.propTypes = {
  booksList: PropTypes.array.isRequired,
  showBookDetails: PropTypes.func.isRequired
};

export default BooksList;
