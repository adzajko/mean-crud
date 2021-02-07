const Author = require('../../models/Author');
const Post = require('../../models/Post');
const PostAttribute = require('../../models/PostAttribute');

exports.dbRelations = () => {
  Author.hasMany(Post, { as: 'posts', foreignKey: 'author_id' });
  Post.belongsTo(Author, { targetKey: 'id', foreignKey: 'author_id' });
  Post.hasMany(PostAttribute, { as: 'post_attributes', foreignKey: 'post_id' });
  PostAttribute.belongsTo(Post, { targetKey: 'id', foreignKey: 'post_id' });
};
