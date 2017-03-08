import React, {PropTypes} from 'react';
import BooksList from './BooksList';
import BookDetails from './BookDetails';

const renderBookList = (books, actions) => (
  <BooksList booksList={books.searchResult.items} {...actions}/>
);

const renderBookDetails = (books, actions) => (
  <div>
    {renderBookList(books, actions)}
    <BookDetails book={books.selectedBook}/>
  </div>
);

const SearchResults = ({books, actions}) => (
  <div>
    {books && books.selectedBook ? renderBookDetails(books, actions) : renderBookList(books, actions)}
  </div>
);

SearchResults.propTypes = {
  actions: PropTypes.object.isRequired,
  books: PropTypes.object.isRequired
};

export default SearchResults;
