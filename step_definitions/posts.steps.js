const { I } = inject();
const Joi = require('joi');
const { post, postsArray } = require('../data/schema/postSchema');
global.endpoint = undefined;


//----------------------------------------------------------------------------------------
//Scenario: GET all posts
Given('I want to GET all posts', () => {
  global.endpoint = '/posts';
});

Then('the response body should contain a list of all posts', () => {
  I.seeResponseMatchesJsonSchema(postsArray);
});


//----------------------------------------------------------------------------------------
//Scenario: GET posts by id
Given('I want to GET a post by id {int}', (id) => {
  global.endpoint = `/posts/${id}`;
});

Then('the response body should contain data for that id {int} post', (id) => {
  I.seeResponseMatchesJsonSchema(post);
  I.seeResponseContainsJson({ id: parseInt(id) });
});


//----------------------------------------------------------------------------------------
//Scenario: GET posts by userId
Given('I want to GET all posts by userId {int}', (userId) => {
  global.endpoint = `/posts?userId=${userId}`
});

Then('the response body should contain data for the posts of userId {int}', (userId) => {
  const userPostsArray = Joi.array().items(post.keys({ userId: Joi.number().required().valid(userId) }));
  I.seeResponseMatchesJsonSchema(userPostsArray);
  I.seeResponseContainsJson({ userId: parseInt(userId) });
}); 