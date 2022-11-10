/*
* author: Levi
* Created: 11.9.2022
*/

function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }
else if (mod == 1) {
  return "Slytherin"
  }
else if (mod == 2) {
  return "Hufflepuff"
  }
else if (mod == 3) {
  return "Ravenclaw"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p> The sorting hat has sorted you into: " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
