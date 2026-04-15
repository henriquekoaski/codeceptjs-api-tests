const Joi = require('joi');

const post = Joi.object({
  userId: Joi.number().required(),
  id: Joi.number().required(),
  title: Joi.string().required(),
  body: Joi.string().required(),
});

const postsArray = Joi.array().items(post);

module.exports = {
  post,
  postsArray
};
