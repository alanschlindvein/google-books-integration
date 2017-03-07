import React, {Component, PropTypes} from 'react';
import {RaisedButton} from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';

class BookSearchInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {text: ''};
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleSearch() {
    this.props.onSearch(this.state.text);
  }

  handleChangeInput(event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div>
        <input
          className="toolbar__input-search"
          type="text"
          placeholder="Pesquise um livro..."
          onChange={this.handleChangeInput}
          autoFocus="true"
          />
        <RaisedButton
          primary
          icon={<ActionSearch/>}
          onTouchTap={this.handleSearch}
          />
      </div>
    );
  }
}

BookSearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default BookSearchInput;
