import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import $ from "jquery";
import { User } from './../src/space-calculator';



$('form#user-input').submit(function(event) {
  event.preventDefault();
  let inputtedName = $('input#name').val();
  let inputtedAge = $('input#age').val();
  let newUser = new User(inputtedName, inputtedAge);
  let greeting = (`Hello ${inputtedName}! You are ${inputtedAge} years old, but you knew that already. But did you know our program can tell you how old you are on other planets? Try it out.`)
  $('#show').show();
  $('.user-greeting').text(greeting)
  console.log(newUser);
})