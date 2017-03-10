/* eslint-disable react/forbid-component-props, react/no-danger */

import React, {PropTypes} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {IMAGE_NOT_FOUND_PATH} from '../constants';
import Moment from 'react-moment';

class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleBookCardClick = this.handleBookCardClick.bind(this);
  }

  handleBookCardClick() {
    this.props.showBook(this.props.book.id);
  }

  renderFavoriteIcon() {
    return (
      <span className="book-card__favorite">
        <FontIcon className="material-icons">star</FontIcon>
      </span>
    );
  }

  render() {
    const {book, favorited} = this.props;
    const {title, publisher, publishedDate, imageLinks} = book.volumeInfo;

    const bookImageUrl = imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : IMAGE_NOT_FOUND_PATH;

    return (
      <div className="book-card" onClick={this.handleBookCardClick}>
        <div className="image-container">
          <img src={bookImageUrl} alt={title}/>
        </div>
        <div className="info-container">
          <h4>
            {title}
            {favorited && this.renderFavoriteIcon()}
          </h4>
          <h5>
            {publisher || ''}
            {publisher && publishedDate && ' - '}
            {publishedDate && <Moment format="YYYY">{publishedDate}</Moment>}
          </h5>
          {book.searchInfo && <span dangerouslySetInnerHTML={{__html: book.searchInfo.textSnippet}}/>}
        </div>
        <div className="clearfix"/>
      </div>
    );
  }
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  showBook: PropTypes.func.isRequired,
  favorited: PropTypes.bool
};

export default BookCard;
