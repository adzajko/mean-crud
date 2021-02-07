const authorService = require('../services/author.service');

exports.getAllAuthors = (req, res, next) => {
  authorService
    .getAllAuthors()
    .then(response => {
      res.status(200).send(JSON.stringify(response));
    })
    .catch(err => {
      res.status(500).send(JSON.stringify(err));
    });
};

exports.postNewAuthor = (req, res, next) => {
  if (!req.body) {
    res.status(400).send();
  }

  const newAuthorData = req.body;
  authorService
    .addNewAuthor(newAuthorData)
    .then(() => {
      res.status(201).send();
    })
    .catch(err => {
      res.status(500).send(JSON.stringify(err));
    });
};

exports.putExistingAuthor = (req, res, next) => {
  const updateId = req.url.split('/')[2];
  if (!req.body) {
    res.status(400).send();
  }

  authorService
    .updateAuthor(updateId, req.body)
    .then(() => {
      res.status(200).send();
    })
    .catch(err => {
      res.status(500).send(JSON.stringify(err));
    });
};

exports.deleteAuthor = (req, res, next) => {
  const idToDelete = req.url.split('/')[2];
  authorService
    .deleteAuthor(idToDelete)
    .then(() => {
      res.status(200).send();
    })
    .catch(err => {
      res.status(500).send(JSON.stringify(err));
    });
};
