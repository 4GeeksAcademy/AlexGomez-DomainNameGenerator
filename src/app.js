/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let ext = document.getElementById("extNew");
  let btn = document.getElementById("btn");
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".us", ".io"];

  combinaciones();

  function addToList(valor) {
    var ul = document.getElementById("ul");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(`${valor}`));
    ul.appendChild(li);
  }

  function combinaciones() {
    for (let index = 0; index < pronoun.length; index++) {
      for (let y = 0; y < adj.length; y++) {
        for (let x = 0; x < noun.length; x++) {
          for (let z = 0; z < extension.length; z++) {
            addToList(`${pronoun[index]}${adj[y]}${noun[x]}${extension[z]}`);
          }
        }
      }
    }
  }

  btn.addEventListener("click", function() {
    ul.innerHTML = "";
    if (ext.value != "") {
      if (extension.find(element => element == ext.value) == undefined) {
        extension.push(ext.value);
      }
    }
    combinaciones();
  });
};
