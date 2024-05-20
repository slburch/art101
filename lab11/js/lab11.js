/* lab.js
accepting input in jquery

requirements: jquery must be loaded

author: savvy burch
date: 2024 */

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
  }

// click listener for button
$("#submit").click(function(){
    // get value of input field
const userName = $("#user-name").val();

// now let's sort it
userNameSorted = sortString(userName);

// append a new div to our output div
$("#output").html('<div class="second-section"><p> heres a string of letters that is not your name! ' + userNameSorted + '</p></div>');

});

function on() {
    document.getElementById("overlay").style.display = "block";
    $("#overlay").append("<div style = 'font-size: 150px' ><p>game over!</p><img src = 'https://archives.bulbagarden.net/media/upload/archive/e/ef/20170707005224%21Spr_5b_570.png' alt = 'zorua'/></div><br><nav id='links'><a href='../index.html'>homepage</a></nav>");
};
  
function off() {
    document.getElementById("overlay").style.display = "none";
};

