/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generadorDominios();
};
function generadorDominios() {
  let pronoun = ["the", "our"];
  let adjetive = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjetive.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let domain = pronoun[i] + adjetive[j] + noun[k] + ".com";
        console.log(domain);
      
    }
  }
}
