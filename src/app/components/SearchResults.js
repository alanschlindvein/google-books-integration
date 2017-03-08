import React, {PropTypes} from 'react';
import BooksList from './BooksList';
import BookDetails from './BookDetails';

const renderBookList = (books, actions) => (
  <div>
    {books.searchResult.totalItems &&
    <div className="search-results__total-itens">
      {`Foram encontrados ${books.searchResult.totalItems} livros`}
    </div>
    }
    <BooksList booksList={books.searchResult.items} {...actions}/>
  </div>
);

const renderBookDetails = (books, actions) => (
  <div>
    {renderBookList(books, actions)}
    <BookDetails book={books.selectedBook} {...actions}/>
  </div>
);

const SearchResults = ({books, actions}) => (
  <div className="search-results">
    {books && books.selectedBook ? renderBookDetails(books, actions) : renderBookList(books, actions)}
  </div>
);

SearchResults.propTypes = {
  actions: PropTypes.object.isRequired,
  books: PropTypes.object.isRequired
};

export default SearchResults;
