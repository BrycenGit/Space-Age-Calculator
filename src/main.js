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

  $('#show').show();
  $('.space-age').text('');
  $('.user-greeting').text(`Hello ${inputtedName}! You are ${inputtedAge} years old, but you knew that already. But did you know our program can tell you how old you are on other planets? Try it out.`);
})

$('#mercury').click(function() {
  $('.space-age').text(spaceCalculator.users[spaceCalculator.users.length - 1].mercuryAge());

})
$('#venus').click(function() {
  $('.space-age').text(spaceCalculator.users[spaceCalculator.users.length - 1].venusAge());
})

$('#mars').click(function() {
  $('.space-age').text(spaceCalculator.users[spaceCalculator.users.length - 1].marsAge());

})
$('#jupiter').click(function() {
  $('.space-age').text(spaceCalculator.users[spaceCalculator.users.length - 1].jupiterAge());
})

$('#expected').click(function() {
  $('.expected').text(spaceCalculator.users[spaceCalculator.users.length - 1].lifeExpectancy());
})