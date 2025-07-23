const { I } = inject();


When('I send a GET request', () => {
  I.sendGetRequest(global.endpoint);
});

Then('I should receive a {int} response', (code) => {
  I.seeResponseCodeIs(code);
}); 