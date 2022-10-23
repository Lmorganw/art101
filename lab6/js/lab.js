/*
 * Author:    Levi
 * Created:   10.17.2022
 */
 // define variables
 myTransport = ["car", "motorcycle", "carpooling", "bus"];

 myMainRide = {
     make = "Suzuki"
     model = "DRZ-400"
     color = "Yellow"
     year = 2019;
}
//output
document.writeln("myTransport" + myTransport + "<br>");
document.writeln("myMainRide: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
