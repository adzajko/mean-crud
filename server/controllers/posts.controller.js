const postService = require('../services/post.service');

exports.getAllPosts = (req, res, next) => {
  postService
    .getAllPosts()
    .then(response => {
      res.status(200).send(JSON.stringify(response));
    })
    .catch(err => {
      res.status(500).send(JSON.stringify(err));
    });
};

exports.putExistingPost = (req, res, next) => {
  if (!req.body) {
    res.status(400).send();
  }
  const id = req.url.split('/')[2];
  postService
    .putExistingPost(id, req.body)
    .then(() => {
      res.status(200).send();
    })
    .catch(err => {
      res.status(500).send(JSON.stringify(err));
    });
};

exports.deleteExistingPost = (req, res, next) => {
  const id = req.url.split('/')[2];
  postService
    .deleteExistingPost(id)
    .then(() => {
      res.status(200).send();
    })
    .catch(err => {
      res.status(500).send(JSON.stringify(err));
    });
};

exports.postNewPost = (req, res, next) => {
  if (!req.body) {
    res.status(400).send();
  }

  postService
    .postNewPost(req.body)
    .then(() => {
      res.status(201).send();
    })
    .catch(err => {
      res.status(500).send(JSON.stringify(err));
    });
};
