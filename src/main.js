import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import $ from "jquery";
import { User, Calculator } from './../src/space-calculator';

let spaceCalculator = new Calculator();

$('form#user-input').submit(function(event) {
  event.preventDefault();
  let inputtedName = $('input#name').val();
  let inputtedAge = parseInt($('input#age').val());
  $('input#age').val('');
  $('input#name').val('');
  let newUser = new User(inputtedName, inputtedAge);
  spaceCalculator.addUser(newUser);
  let greeting = (`Hello ${inputtedName}! You are ${inputtedAge} years old, but you knew that already. But did you know our program can tell you how old you are on other planets? Try it out.`)
  $('#show').show();
  $('.user-greeting').text(greeting);
})

$('#mercury').click(function() {
  spaceCalculator.users[spaceCalculator.users.length - 1].mercuryAge();
  $('.space-age').text(`${spaceCalculator.users[spaceCalculator.users.length - 1].name}, your age on mercury is ${spaceCalculator.users[spaceCalculator.users.length - 1].spaceAge}!`);
})
$('#venus').click(function() {
  spaceCalculator.users[spaceCalculator.users.length - 1].venusAge();
  $('.space-age').text(`${spaceCalculator.users[spaceCalculator.users.length - 1].name}, your age on venus is ${spaceCalculator.users[spaceCalculator.users.length - 1].spaceAge}!`);
})
$('#mars').click(function() {
  spaceCalculator.users[spaceCalculator.users.length - 1].marsAge();
  $('.space-age').text(`${spaceCalculator.users[spaceCalculator.users.length - 1].name}, your age on mars is ${spaceCalculator.users[spaceCalculator.users.length - 1].spaceAge}!`);
})
$('#jupiter').click(function() {
  spaceCalculator.users[spaceCalculator.users.length - 1].jupiterAge();
  $('.space-age').text(`${spaceCalculator.users[spaceCalculator.users.length - 1].name}, your age on jupiter is ${spaceCalculator.users[spaceCalculator.users.length - 1].spaceAge}!`);
})
$('#expected').click(function() {
  // spaceCalculator.users[spaceCalculator.users.length - 1].lifeExpectancy();
  $('.expected').text(spaceCalculator.users[spaceCalculator.users.length - 1].lifeExpectancy());
})