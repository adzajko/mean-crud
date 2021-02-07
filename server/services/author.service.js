const Author = require('../models/Author');
const Post = require('../models/Post');
const PostAttrubute = require('../models/PostAttribute');

exports.getAllAuthors = () => {
  return Author.findAll({
    include: [
      {
        model: Post,
        as: 'posts',
        attributes: ['id', 'author_id'],
        include: [
          {
            model: PostAttrubute,
            as: 'post_attributes',
            attributes: ['attribute_name', 'attribute_value']
          }
        ]
      }
    ]
  });
};

exports.addNewAuthor = ({ firstName, lastName, email, birthdate }) => {
  return Author.create({
    first_name: firstName,
    last_name: lastName,
    birthdate,
    email
  });
};

exports.deleteAuthor = id => {
  return Author.destroy({
    where: {
      id
    }
  });
};

exports.updateAuthor = (id, newAuthorData) => {
  return Author.update(newAuthorData, {
    where: {
      id
    }
  });
};
