/* lab.js
an exploration of jquery

requirements: jquery must be loaded

author: savvy burch
date: 2024 */

//button added to bottom of challenge, problems, reflection sections

$("#body").append("<button id = 'toggleButton'> click to change </button>");

// add a click listener to the challenge button
$("#toggleButton").click(function(){
    // toggle special class
    $("#body").toggleClass("special");
    $("#challenge, #problems, #reflection").toggleClass("minor-section");
});
