/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let index = 0; index < pronoun.length; index++) {
    for (let y = 0; y < adj.length; y++) {
      for (let x = 0; x < noun.length; x++) {
        console.log(`${pronoun[index]}${adj[y]}${noun[x]}.com`);
      }
    }
  }
};
