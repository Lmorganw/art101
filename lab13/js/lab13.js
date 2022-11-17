/*
* author: Levi
* Created: 11.9.22
*/
function fizzBuzzBoom(maxNums, factorObj) {
  for (var num=0; num<maxNums; num++) {
debugger;
  var outputStr = "";
for (var factor in factorObj) {
  if (num % factor == 0) {
outputStr += factorObj[factor];
}
  }
if (outputStr) {
    outputStr = " - " + outputStr + "!";
}
outputToPage(num.toString() + outputStr)
}
}

function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
  var max = document.getElementById("max").value;
    console.log("max:", max)

var factorObj = getFactorObj();
  console.log("factorObj:", factorObj);

outputEl.innerHTML = "";
fizzBuzzBoom(max, factorObj);
outputEl.classList.add("cols");
})
