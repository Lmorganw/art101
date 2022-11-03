/*
* author: Levi
* Created: 10.21.2022
*/
function sortUserName(inputName){
  var userName = inputName;

  var nameArray = userName.split('');

  var nameArraySort = nameArray.sort();

  var nameSorted = nameArraySort.join('');

  return nameSorted;
};

var buttonEl =
document.getElementById("my-button");
var outputEl =
document.getElementById("output");

buttonEl.addEventListener("click", function(){
  var enteredName =
  document.getElementById("user-name").value;
  var nameSorted = sortUserName(enteredName);
  outputEl.innerHTML = sortedNewName;
});
