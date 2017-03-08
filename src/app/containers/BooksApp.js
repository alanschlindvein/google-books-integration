import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SearchHeader from '../components/SearchHeader';
import SearchResults from '../components/SearchResults';
import * as Actions from '../actions/index';

import '../../index.scss';

class BooksApp extends Component {
  render() {
    const {books, actions} = this.props;
    return (
      <div>
        <SearchHeader
          searchBook={actions.requestBooks}
          />
        <SearchResults
          books={books}
          actions={actions}
          />
      </div>
    );
  }
}

BooksApp.propTypes = {
  actions: PropTypes.object.isRequired,
  books: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksApp);
