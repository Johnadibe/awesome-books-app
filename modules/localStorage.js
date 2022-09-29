export default class ClassLocalStorage {
    static storageAvailable = (type) => {
      let storage;
      try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
      } catch (e) {
        const { code, name } = e;
        return (
          e instanceof DOMException
                && (code === 22
                    || code === 1014
                    || name === 'QuotaExceededError'
                    || name === 'NS_ERROR_DOM_QUOTA_REACHED')
                && storage.length !== 0
        );
      }
    }

    static getBooks = () => {
      let book;
      if (this.storageAvailable('localStorage')) {
        if (localStorage.getItem('booksData') == null) {
          book = [];
        } else {
          book = JSON.parse(localStorage.getItem('booksData'));
        }
      }
      return book;
    }

    static addBooks = (book) => {
      const booksList = this.getBooks();
      booksList.push(book);
      localStorage.setItem('booksData', JSON.stringify(booksList));
    }
}