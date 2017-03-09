import React, {PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';

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
    if (imageLinks) {
      // TODO - ver quando nao tiver imagem
      cardHeader.avatar = <Avatar src={imageLinks.thumbnail} size={60}/>;
    }

    // TODO - Colocar classe de selected quando for o selecionado
    const bookCardClassName = 'list-books__book-card selected';
    return (
      <li className={bookCardClassName} onClick={this.handleBookCardClick}>
        <div className="image-container">
          <img src={imageLinks.thumbnail} alt=""/>
        </div>
        <div className="info-container">
          <h4>{cardHeader.title}</h4>
          <h5>{cardHeader.subtitle}</h5>
          {book.searchInfo && <span>{book.searchInfo.textSnippet}</span>}
        </div>
        <div className="clearfix"/>
      </li>
    );
  }
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  showBook: PropTypes.func.isRequired
};

export default BookCard;
