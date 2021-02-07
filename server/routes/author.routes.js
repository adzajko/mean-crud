const router = require('express').Router();
const {
  deleteAuthor,
  getAllAuthors,
  postNewAuthor,
  putExistingAuthor
} = require('../controllers/authors.controller');

router.get('/authors', getAllAuthors);
router.post('/authors', postNewAuthor);
router.put('/authors/:id', putExistingAuthor);
router.delete('/authors/:id', deleteAuthor);

module.exports = router;
