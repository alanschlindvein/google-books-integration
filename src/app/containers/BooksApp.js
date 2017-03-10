import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SearchHeader from '../components/SearchHeader';
import SearchResults from '../components/SearchResults';
import * as Actions from '../actions/index';

class BooksApp extends Component {
  render() {
    const {books, actions, favorites} = this.props;
    return (
      <div>
        <SearchHeader {...actions}/>
        <SearchResults
          books={books}
          actions={actions}
          favorites={favorites}
          />
      </div>
    );
  }
}

BooksApp.propTypes = {
  actions: PropTypes.object.isRequired,
  books: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {...state};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksApp);
