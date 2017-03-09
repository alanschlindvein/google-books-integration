import React, {PropTypes, Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import BooksList from './BooksList';
import BookDetails from './BookDetails';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  handleLoadMore() {
    const {text, startIndex, maxResults} = this.props.books.filter;
    const filter = {text, startIndex: startIndex + maxResults};
    this.props.actions.requestBooks(filter);
  }

  renderTotalResultMessage(totalItems) {
    return <div className="search-results__total-itens">{`Foram encontrados ${totalItems} livros`}</div>;
  }

  renderBookList(books, actions) {
    const PAGE_SIZE = books.filter.maxResults;
    return (
      <div className="search-results__results-container">
        {books.searchResult.totalItems && this.renderTotalResultMessage(books.searchResult.totalItems)}

        <BooksList booksList={books.searchResult.items} {...actions}/>

        {books.searchResult.totalItems > PAGE_SIZE &&
        <div className="search-results__load-more">
          <RaisedButton
            label="Carregar mais"
            secondary
            onTouchTap={this.handleLoadMore}
            />
        </div>
        }
      </div>
    );
  }

  renderBookDetails(books, actions) {
    return (
      <div>
        {this.renderBookList(books, actions)}
        <BookDetails book={books.selectedBook} {...actions}/>
      </div>
    );
  }

  render() {
    const {books, actions} = this.props;
    return (
      <div className="search-results">
        {books && books.selectedBook ? this.renderBookDetails(books, actions) : this.renderBookList(books, actions)}
      </div>
    );
  }
}

SearchResults.propTypes = {
  actions: PropTypes.object.isRequired,
  books: PropTypes.object.isRequired
};

export default SearchResults;
