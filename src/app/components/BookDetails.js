import React, {PropTypes} from 'react';

const BookDetails = ({book}) => (
  <div>
    {book.id}
  </div>
);

BookDetails.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookDetails;
