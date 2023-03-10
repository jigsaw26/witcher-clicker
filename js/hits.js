'use strict'

let hitAnim = document.getElementsByClassName("img_enemy2"); 
let Sword = document.getElementById("img_sword");

for (let i = 0; i < hit.length; i++)
{
    hitAnim[i].addEventListener("click", function(event) {
        shakeImage(hitAnim[i]);
        shakeImage(Sword);
    });
}

function shakeImage(div) {
  var intervalId;
  var x = 0;

  intervalId = setInterval(function() {
      x = x + ((Math.random() * 0.4) + 0.1);
      var y = Math.sin(x) * 10;
      div.style.transform = "translate(" + y + "px, " + y + "px)";
      if (x >= 3) {
      clearInterval(intervalId);
      div.style.transform = "none";
      }
  }, 20);
}
