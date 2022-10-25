/*
* author: Levi
* Created: 10.21.2022
*/
//define variables

//sortSserName - a function that takes user imput and sorts the letters of their name
function sortUserName() {
  var userName = window.prompt("hi, please tell me your name so i can fix it.");
    console.log("userName =", userName);
      // split string to array
  var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
      // sort the array
  var nameArraySort = nameArray.sort();
    console.log("nameArraySort=", nameArraySort);
      // join array back to a string
  var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
      // note that i could have done the above lines in a single line:
      //  Username.tolower().split("").sort().join("")
      return nameSorted;
}

//output
document.writeln("Here you go!:",
sortUserName(), "</br>");
