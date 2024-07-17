/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function randomly(list) {
    let numAleatorio = Math.floor(Math.random() * list.length);
    return list[numAleatorio] + " ";
  }

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let excusa =
    randomly(who) + randomly(action) + randomly(what) + randomly(when);
  let Elementexcuse = document.querySelector("#excuse");

  Elementexcuse.innerHTML = excusa;

  let ButtonExcuse = document.querySelector("#GenerateExcuses");

  ButtonExcuse.addEventListener("click", () => {
    let NewExcuse =
      randomly(who) + randomly(action) + randomly(what) + randomly(when);
    Elementexcuse.innerHTML = NewExcuse;
  });
};
