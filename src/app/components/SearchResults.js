import React, {PropTypes} from 'react';
import BooksList from './BooksList';

function SearchResults({books, actions}) {
  return (
    <BooksList
      booksList={books.searchResult.items}
      {...actions}
      />
  );
}

SearchResults.propTypes = {
  actions: PropTypes.object.isRequired,
  books: PropTypes.object.isRequired
};

export default SearchResults;
