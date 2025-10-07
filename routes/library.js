const express = require('express');
const router = express.Router();
const library = require('../library');

router.post('/', (req, res) => {
  const { title, author } = req.body;
  const book = library.addBook(title, author);
  res.json(book);
});

router.get('/', (req, res) => {
  res.json(library.getAllBooks());
});


router.get('/available', (req, res) => {
  res.json(library.getAvailableBooks());
});

router.put('/borrow/:id', (req, res) => {
  const result = library.borrowBook(req.params.id);
  res.json(result);
});

router.put('/return/:id', (req, res) => {
  const result = library.returnBook(req.params.id);
  res.json(result);
});

module.exports = router;
