const { I } = inject();
const Joi = require('joi');
const assert = require('assert');
const { user, usersArray } = require('../data/schema/userSchema');
global.endpoint = undefined;
let userId;


//----------------------------------------------------------------------------------------
//Scenario: GET all users
Given('I want to GET all users', () => {
  global.endpoint = '/users';
});

Then('the response body should contain a list of all users', () => {
  I.seeResponseMatchesJsonSchema(usersArray);
});


//----------------------------------------------------------------------------------------
//Scenario: CREATE a new user
Given('I want to create a new user', () => {
  global.endpoint = '/users';
});

When('I send a POST request', () => {
  var userPayload = {
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    address: {
      street: "123 Main St",
      suite: "Apt. 101",
      city: "Anytown",
      zipcode: "12345",
      geo: {
        lat: "37.7749",
        lng: "-122.4194"
      }
    },
    phone: "555-1234",
    website: "johndoe.com",
    company: {
      name: "Doe Enterprises",
      catchPhrase: "Innovating the Future",
      bs: "business solutions"
    }
  };
  I.sendPostRequest(global.endpoint, userPayload);
});

Then('the response body should contain the user data', () => {
  I.seeResponseMatchesJsonSchema(user);
  I.seeResponseContainsJson({
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
  });
});


//----------------------------------------------------------------------------------------
//Scenario: UPDATE a user
Given('I want to update a user {int}', (id) => {
  userId = id;
  global.endpoint = `/users/${userId}`;
});

When('I send a PUT request', () => {
  var updatedUserPayload = {
    name: "John Doe Updated",
    username: "johndoeupdated",
    email: "john.doe.updated@example.com",
    address: {
      street: "123 Updated St",
      suite: "Apt. 101",
      city: "Updatedtown",
      zipcode: "54321",
      geo: {
        lat: "37.7749",
        lng: "-122.4194"
      }
    },
    phone: "555-4321",
    website: "johndoeupdated.com",
    company: {
      name: "Updated Enterprises",
      catchPhrase: "Innovating the Future Updated",
      bs: "updated business solutions"
    }
  };
  I.sendPutRequest(global.endpoint, updatedUserPayload);
});

Then('the response body should contain the updated user data', () => {
  I.seeResponseMatchesJsonSchema(user.keys({ id: Joi.number().required() }));
  I.seeResponseContainsJson({
    id: userId,
    name: "John Doe Updated",
    username: "johndoeupdated",
    email: "john.doe.updated@example.com"
  });
});


//----------------------------------------------------------------------------------------
//Scenario: DELETE a user
Given('I want to DELETE a user {int}', (id) => {
  userId = id;
  global.endpoint = `/users/${userId}`;
});

When('I send a DELETE request', () => {
  I.sendDeleteRequest(global.endpoint);
});


//----------------------------------------------------------------------------------------
// Scenario: GET a user that does not exist
Given('I want to GET a user by id {int}', (id) => {
  global.endpoint = `/users/${id}`;
});

Then('the response body should be empty or not contain user data', async () => {
  const response = await I.sendGetRequest(global.endpoint);
  assert.deepStrictEqual(response.data, {});
}); 