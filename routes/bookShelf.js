var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const books = [
    { name: "Car hacker's handbook", author: "Smith Craig", page: 65, totalPages: 306 },
    { name: "Ascent of Money", author: "Niall Ferguson", page: 297, totalPages: 447 },
    { name: "Functional-Light JavaScript", author: "Kyle Simpson", page: 288, totalPages: 370 }
  ]
  // res.send('respond with a resource');
  res.json(books)
  // res.render('bookShelf', { title: 'Book Shelf', books: JSON.stringify(books) });
});

module.exports = router;
