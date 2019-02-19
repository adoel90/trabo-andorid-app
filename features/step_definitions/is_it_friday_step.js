const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// Given('today is Sunday', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });

// When('I ask whether it\'s Friday yet', function () {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

// Then('I should be told {string}', function (string) {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });


// function isItFriday(today) {
//   return "Sorry, i think today is Friday";
// }

function isItFriday(today) {
  if (today === "Friday") {
    return "TGIF"; 
  } else {
    return "Sorry, i think today is Friday";
  }
}

Given('today is {string}', function (givenDay) {
  this.today = givenDay;
});

When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});

