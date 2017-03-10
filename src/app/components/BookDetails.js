/* eslint-disable react/forbid-component-props */

import React, {PropTypes, Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';
import FlatButton from 'material-ui/FlatButton';
import {IMAGE_NOT_FOUND_PATH} from '../constants';

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.handleOnCloseDetails = this.handleOnCloseDetails.bind(this);
    this.handleToggleFavorite = this.handleToggleFavorite.bind(this);
  }

  handleOnCloseDetails() {
    this.props.closeBookDetails();
  }

  handleToggleFavorite() {
    const addTo = this.isBookFavorited();
    this.props.toggleFavorite({id: this.props.book.id, addTo});
  }

  isBookFavorited() {
    return (this.props.favorites || []).filter(favoriteId => favoriteId === this.props.book.id).length;
  }

  renderFavoriteToggleAction() {
    const isFavorited = this.isBookFavorited();
    return (
      <FlatButton
        label={isFavorited ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        secondary
        icon={<FontIcon className="material-icons">{isFavorited ? 'star' : 'star_border'}</FontIcon>}
        onTouchTap={this.handleToggleFavorite}
        />
    );
  }

  renderBookAuthors(authors) {
    return (
      <div className="book-details__item book-details__authors">
        <label>{'Autor' + (authors.length > 1 ? 'es' : '')}</label>
        <ul>
          {authors.map(author =>
            <li key={author}>{author}</li>
          )}
        </ul>
      </div>
    );
  }

  renderDeatail(label, value) {
    return (
      <div className="book-details__item">
        <label>{label}</label>
        <span>{value}</span>
      </div>
    );
  }

  renderButtonCloseDetails() {
    return (
      <div className="book-details__close-button">
        <IconButton
          tooltip="Fechar detalhes"
          tooltipPosition={'bottom-left'}
          onTouchTap={this.handleOnCloseDetails}
          >
          <ContentClear/>
        </IconButton>
      </div>
    );
  }

  render() {
    const {volumeInfo} = this.props.book;
    const {imageLinks} = volumeInfo;
    const bookImageUrl = imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : IMAGE_NOT_FOUND_PATH;

    return (
      <div className="book-details">
        <h1 className="book-details__title">{volumeInfo.title}</h1>

        <div className="book-details__favorite">
          {this.renderFavoriteToggleAction()}
        </div>

        <div className="book-details__general">
          <div className="book-details__general-photo">
            <img src={bookImageUrl} alt={volumeInfo.title}/>
          </div>
          <div className="book-details__general-info">
            {volumeInfo.authors && this.renderBookAuthors(volumeInfo.authors)}

            {volumeInfo.publisher && this.renderDeatail('Editora', volumeInfo.publisher)}

            {volumeInfo.publishedDate && this.renderDeatail('Publicado em', volumeInfo.publishedDate)}

            {volumeInfo.pageCount && this.renderDeatail('Páginas', volumeInfo.pageCount)}
          </div>
        </div>

        {volumeInfo.description && this.renderDeatail('Descrição', volumeInfo.description)}

        {this.renderButtonCloseDetails()}
      </div>
    );
  }
}

BookDetails.propTypes = {
  book: PropTypes.object.isRequired,
  closeBookDetails: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array
};

export default BookDetails;
