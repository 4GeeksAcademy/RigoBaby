/* eslint-disable */

import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function randomElement(arr) {
    return arr[Math.round(Math.random() * arr.length)];
  }

  let sentence = `${randomElement(who)} ${randomElement(
    action
  )} ${randomElement(what)} 
  ${randomElement(when)}`;

  console.log("start", sentence);

  const paraElement = document.getElementsByTagName("p");

  paraElement[0].innerText = sentence;
};
