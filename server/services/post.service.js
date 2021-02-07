const Post = require('../models/Post');
const PostAttribute = require('../models/PostAttribute');

exports.getAllPosts = () => {
  return Post.findAll({
    include: [
      {
        model: PostAttribute,
        as: 'post_attributes'
      }
    ]
  });
};

exports.putExistingPost = (id, data) => {
  return Post.update(data, {
    where: {
      id
    }
  });
};

exports.deleteExistingPost = id => {
  return Post.destroy({
    where: {
      id
    }
  });
};

exports.postNewPost = postData => {
  return Post.create(postData);
};
