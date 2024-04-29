/*
 * Author: Savvy Burch
 * Created: 04/28/2024
 */

//define variables and arrays

const myMainRide = {
    make : "Mercedes",
    model : "CLK 550",
    color : "white",
    year : "2007",
    age : function() {
        return 2024 - this.year()
    }
}

const myTransport = ["car", " walking", " bus"]

//output

document.writeln("how i get around santa cruz: " + myTransport + "<br>");

document.writeln("my main ride is a: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");