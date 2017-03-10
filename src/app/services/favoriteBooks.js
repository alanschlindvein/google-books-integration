import localStorage from '../util/localStorage';
import {FAVORITE_LOCAL_STORAGE_KEY} from '../constants';

const favoriteBooks = {
  getFavoriteBooks() {
    return localStorage.get(FAVORITE_LOCAL_STORAGE_KEY);
  },
  toggleFavorite(id) {
    const favoriteBooks = this.getFavoriteBooks() || [];
    let newFavoriteBooks = [];

    const bookIndex = favoriteBooks.findIndex(favoriteBookId => favoriteBookId === id);
    const alreadyIsFavorite = bookIndex > -1;

    if (!alreadyIsFavorite) {
      newFavoriteBooks = [...favoriteBooks, id];
    }

    if (alreadyIsFavorite) {
      newFavoriteBooks = [...favoriteBooks];
      newFavoriteBooks.splice(bookIndex, 1);
    }

    localStorage.set(FAVORITE_LOCAL_STORAGE_KEY, newFavoriteBooks);

    return newFavoriteBooks;
  }
};

export default favoriteBooks;
