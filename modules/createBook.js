import localStorage from './localStorage.js';

const list = document.querySelector('.list');

export default class CreateBookElement {
    static createBookElement = () => {
      const bookData = localStorage.getBooks();
      bookData.forEach((book) => {
        const bookContainer = document.createElement('div');
        bookContainer.className = 'books';
        bookContainer.innerHTML = `<h2 id="title-name">${book.title}</h2><p id="author-name">${book.author}</p> <button class="remove-btn">Remove</button>`;
        list.appendChild(bookContainer);
      });
    };
}