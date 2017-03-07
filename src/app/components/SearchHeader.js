import React, {PropTypes, Component} from 'react';
import BookSearchInput from './BookSearchInput';

class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(text) {
    if (text) {
      this.props.searchBook(text);
    }
  }

  render() {
    return (
      <header className="toolbar">
        <BookSearchInput
          onSearch={this.handleSearch}
          />
      </header>
    );
  }
}

SearchHeader.propTypes = {
  searchBook: PropTypes.func.isRequired
};

export default SearchHeader;
