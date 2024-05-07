/*
 * Author: Savvy Burch
 * Created: 05/06/2024
 */

//use arrays and maps for functions

//create function that adds 2 to x
function numAdd(x) {
    return (x + 2);
};

//create numArray array    
var numArray = [8, 16, 32, 64];
console.log("Array: " + numArray);

//use .map
var result = numArray.map(numAdd);
console.log("Numbers in array plus two: ", result);

//creating a function within a .map
var results = numArray.map(function (x) {
    var div = x/4;
    return (x + " is divisible by four, " + x + " divided by four is " + div + ". ");
});
console.log(results);

//jquery selecting element
$("#output").html("Array: " + numArray);
$("#output").html("Array + 2: " + result);
$("#output").html(results);