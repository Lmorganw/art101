/*
* author: Levi
* Created: 10.21.2022
*/
//define variables
myTransport = ["car", "motorcycle", "carpooling"];

myMainRide = {
  make : "suzuki",
  model : "DRZ-400",
  color : "yellow",
}

//output
document.writeln("my main ride is:", myTransport, "<br>");
document.writeln("myMainRide: <pre>",
      JSON.stringify(myMainRide, null, '\t'), "</pre>");
alert("Hello! I am an alert box!!");
