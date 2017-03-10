/* eslint-disable react/forbid-component-props */

import React, {PropTypes, Component} from 'react';
import BookSearchInput from './BookSearchInput';
import FontIcon from 'material-ui/FontIcon';

class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(filter) {
    if (filter && filter.text) {
      this.props.requestBooks(filter);
      return;
    }

    this.props.clearBooks();
  }

  render() {
    return (
      <header className="toolbar">
        <div className="toolbar__icon">
          <FontIcon className="material-icons">
            book
          </FontIcon>
          <span>Books</span>
        </div>
        <BookSearchInput
          onSearch={this.handleSearch}
          />
      </header>
    );
  }
}

SearchHeader.propTypes = {
  requestBooks: PropTypes.func.isRequired,
  clearBooks: PropTypes.func.isRequired
};

export default SearchHeader;
