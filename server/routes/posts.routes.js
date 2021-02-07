const router = require('express').Router();
const {
  deleteExistingPost,
  getAllPosts,
  postNewPost,
  putExistingPost
} = require('../controllers/posts.controller');

router.get('/posts', getAllPosts);
router.post('/posts', postNewPost);
router.put('/posts/:id', putExistingPost);
router.delete('/posts/:id', deleteExistingPost);

module.exports = router;
