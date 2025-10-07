let books = [];
let idCounter = 1;

function addBook(title, author) {
  const book = { id: idCounter++, title, author, available: true };
  books.push(book);
  return book;
}

function getAllBooks() {
  return books;
}

function getAvailableBooks() {
  return books.filter(b => b.available);
}

function borrowBook(id) {
  const book = books.find(b => b.id === parseInt(id));
  if (!book) return { error: 'Book not found' };
  if (!book.available) return { error: 'Book already borrowed' };
  book.available = false;
  return book;
}


function returnBook(id) {
  const book = books.find(b => b.id === parseInt(id));
  if (!book) return { error: 'Book not found' };
  book.available = true;
  return book;
}

module.exports = { 
  addBook, 
  getAllBooks, 
  getAvailableBooks, 
  borrowBook, 
  returnBook 
};