import {SEARCH_BOOK, SHOW_BOOK} from '../constants/ActionTypes';

const initialState = {
  searchResult: {items: []},
  selectedBook: {}
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BOOK:
      return {
        searchResult: {
          items: [
            {
              kind: 'books#volume',
              id: 'K_yxDAAAQBAJ',
              etag: 'BB4Do11k5NU',
              selfLink: 'https://www.googleapis.com/books/v1/volumes/K_yxDAAAQBAJ',
              volumeInfo: {
                title: 'Harry Potter E A Pedra Filosofal',
                authors: [
                  'Plínio Maurício'
                ],
                publisher: 'Clube de Autores',
                publishedDate: '2016-07-19',
                description: 'Harry Potter e a Pedra Filosofal',
                pageCount: 178,
                categories: [
                  'Literary Collections'
                ],
                contentVersion: '0.5.0.0.preview.1',
                imageLinks: {
                  smallThumbnail: 'http://books.google.com/books/content?id=K_yxDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                  thumbnail: 'http://books.google.com/books/content?id=K_yxDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
                },
                language: 'pt'
              }
            },
            {
              kind: 'books#volume',
              id: 'abYKXvCwEToC',
              etag: 'hnhxGMyBUdQ',
              selfLink: 'https://www.googleapis.com/books/v1/volumes/abYKXvCwEToC',
              volumeInfo: {
                title: 'Harry Potter',
                subtitle: 'The Story of a Global Business Phenomenon',
                authors: [
                  'S. Gunelius'
                ],
                publisher: 'Springer',
                publishedDate: '2008-06-03',
                description: 'The Harry Potter books are the bestselling books of all time. In this fascinating study, Susan Gunelius analyzes every aspect of the brand phenomenon that is Harry Potter. Delving into price wars, box office revenue, and brand values, amongst other things, this is the story of the most incredible brand success there has ever been.',
                imageLinks: {
                  smallThumbnail: 'http://books.google.com/books/content?id=C63mayArNqoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                  thumbnail: 'http://books.google.com/books/content?id=C63mayArNqoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
                }
              }
            }]
        }
      };

    case SHOW_BOOK:
      return Object.assign({}, state, {selectedBook: action.book});

    default:
      return state;
  }
}
