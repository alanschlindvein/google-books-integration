import React, {PropTypes} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class BookCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleBookCardClick = this.handleBookCardClick.bind(this);
  }

  handleBookCardClick() {
    this.props.showBook(this.props.book);
  }

  render() {
    const {book} = this.props;
    const {title, publisher, publishedDate, imageLinks} = book.volumeInfo;
    const bookCardSubtitle = (publisher || '') + (publishedDate ? ' (' + publishedDate + ')' : '');
    const cardHeader = {title, subtitle: bookCardSubtitle};
    if (imageLinks) {
      cardHeader.avatar = imageLinks.thumbnail;
    }

    return (
      <li className="list-books__book-card">
        <Card onClick={this.handleBookCardClick}>
          <CardHeader
            {...cardHeader}
            />
          {book.searchInfo &&
            <CardText>{book.searchInfo.textSnippet}</CardText>
          }
        </Card>
      </li>
    );
  }
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  showBook: PropTypes.func.isRequired
};

export default BookCard;
