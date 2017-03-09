import React, {PropTypes, Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ActionOpenInNew from 'material-ui/svg-icons/action/open-in-new';

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.handleOnCloseDetails = this.handleOnCloseDetails.bind(this);
  }

  handleOnCloseDetails() {
    this.props.closeBookDetails();
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

  renderButtonOpenBook(link) {
    return (
      <div className="book-details__open-content-container">
        <RaisedButton
          label="Ver conteúdo"
          labelPosition="before"
          icon={<ActionOpenInNew/>}
          href={link}
          target="_blank"
          />
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
    const {volumeInfo, accessInfo} = this.props.book;
    return (
      <div className="book-details">
        <h1 className="book-details__title">{volumeInfo.title}</h1>

        <div className="book-details__general">
          <div className="book-details__general-photo">
            <img src={volumeInfo.imageLinks.thumbnail} alt="Book"/>
          </div>
          <div className="book-details__general-info">
            {volumeInfo.authors && this.renderBookAuthors(volumeInfo.authors)}

            {volumeInfo.publisher && this.renderDeatail('Editora', volumeInfo.publisher)}

            {volumeInfo.publishedDate && this.renderDeatail('Publicado em', volumeInfo.publishedDate)}

            {volumeInfo.pageCount && this.renderDeatail('Páginas', volumeInfo.pageCount)}
          </div>
        </div>

        {volumeInfo.description && this.renderDeatail('Descrição', volumeInfo.description)}

        {accessInfo.webReaderLink && this.renderButtonOpenBook(accessInfo.webReaderLink)}

        {this.renderButtonCloseDetails()}
      </div>
    );
  }
}

BookDetails.propTypes = {
  book: PropTypes.object.isRequired,
  closeBookDetails: PropTypes.func.isRequired
};

export default BookDetails;
