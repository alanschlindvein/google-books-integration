import React, {PropTypes, Component} from 'react';
import BookSearchInput from './BookSearchInput';

class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(filter) {
    if (filter && filter.text) {
      this.props.requestBooks(filter);
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
  requestBooks: PropTypes.func.isRequired
};

export default SearchHeader;
