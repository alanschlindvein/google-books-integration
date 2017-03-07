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
    return (
      <li className="list-books__book-card">
        <Card onClick={this.handleBookCardClick}>
          <CardHeader
            title={book.volumeInfo.title}
            subtitle={book.volumeInfo.publisher + ' (' + book.volumeInfo.publishedDate + ')'}
            avatar={book.volumeInfo.imageLinks.thumbnail}
            />
          <CardText>
            {book.volumeInfo.description}
          </CardText>
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
