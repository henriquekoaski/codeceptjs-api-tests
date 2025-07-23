const Joi = require('joi');

const user = Joi.object({
  id: Joi.number().optional(),
  name: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.object({
    street: Joi.string().required(),
    suite: Joi.string().required(),
    city: Joi.string().required(),
    zipcode: Joi.string().required(),
    geo: Joi.object({
      lat: Joi.string().required(),
      lng: Joi.string().required()
    }).required()
  }).required(),
  phone: Joi.string().required(),
  website: Joi.string().required(),
  company: Joi.object({
    name: Joi.string().required(),
    catchPhrase: Joi.string().required(),
    bs: Joi.string().required()
  }).required()
});

const usersArray = Joi.array().items(user);

module.exports = {
  user,
  usersArray
}; 