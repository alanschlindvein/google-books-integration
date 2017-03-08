import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionOpenInNew from 'material-ui/svg-icons/action/open-in-new';

const BookDetails = ({book}) => (
  <div className="book-details">
    <h1>{book.volumeInfo.title}</h1>

    <div>
      <label>Autores</label>
      {book.volumeInfo.authors.map(author =>
        <span key={author}>
          {author}
        </span>
      )}
    </div>

    <div>
      <label>Editora</label>
      <span>{book.volumeInfo.publisher}</span>
    </div>

    <div>
      <label>Publicado em</label>
      <span>{book.volumeInfo.publishedDate}</span>
    </div>

    <div>
      <label>Descrição</label>
      <p>{book.volumeInfo.description}</p>
    </div>

    <div className="book-details__open-content-container">
      <RaisedButton
        label="Ver conteúdo"
        labelPosition="before"
        icon={<ActionOpenInNew/>}
        href={book.selfLink}
        target="_blank"
        />
    </div>
  </div>
);

BookDetails.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookDetails;
