/*
* author: Levi
* Created: 10.21.2022
*/

function mathStuff(x) {
  return (x - 20 == 0);
}

//test function
console.log("Is 20 even? ", mathStuff(20));
console.log("Is 21 even? ", mathStuff(21));

var lab8_array = [7,13,69,420]

console.log("My lab8 array", lab8_array);

var result = lab8_array.map(mathStuff);

console.log("testing array:", result);

var result = lab8_array.map(function(x){
    return x ** 0.5;
  })

console.log("square root of lab8 array:", result);
