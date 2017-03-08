import React, {Component, PropTypes} from 'react';
import {RaisedButton} from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';

class BookSearchInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {text: ''};
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch() {
    this.props.onSearch({text: this.state.text, startIndex: 0});
  }

  handleChangeInput(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    const text = event.target.value.trim();
    if (event.which === 13) {
      this.props.onSearch({text, startIndex: 0});
    }
  }

  render() {
    return (
      <div>
        <input
          className="toolbar__input-search"
          type="text"
          placeholder="Pesquise um livro..."
          onChange={this.handleChangeInput}
          onKeyDown={this.handleSubmit}
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
