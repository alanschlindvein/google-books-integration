import React, {PropTypes} from 'react';

const IMAGE_NOT_FOUND_PATH = 'https://www.hachettebookgroup.com/_b2c/static/site_theme/img/missingbook.png';

class BookCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleBookCardClick = this.handleBookCardClick.bind(this);
  }

  handleBookCardClick() {
    this.props.showBook(this.props.book.id);
  }

  render() {
    const {book} = this.props;
    const {title, publisher, publishedDate, imageLinks} = book.volumeInfo;

    const bookCardSubtitle = (publisher || '') + (publishedDate ? ' (' + publishedDate + ')' : '');
    const cardHeader = {title, subtitle: bookCardSubtitle};

    const bookImageUrl = imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : IMAGE_NOT_FOUND_PATH;

    return (
      <div className="book-card" onClick={this.handleBookCardClick}>
        <div className="image-container">
          <img src={bookImageUrl} alt={cardHeader.title}/>
        </div>
        <div className="info-container">
          <h4>{cardHeader.title}</h4>
          <h5>{cardHeader.subtitle}</h5>
          {book.searchInfo && <span>{book.searchInfo.textSnippet}</span>}
        </div>
        <div className="clearfix"/>
      </div>
    );
  }
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  showBook: PropTypes.func.isRequired
};

export default BookCard;
