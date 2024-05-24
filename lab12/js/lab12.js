/* lab.js
conditionals in jquery

requirements: jquery must be loaded

author: savvy burch
date: 2024 */


//value for day input
var num1 = $("#num1").val();

//value for month input
var num2 = $("#num2").val();

//value for year input
var num3 = $("#num3").val();

//adding day, month, year
var answer = parseInt(num1) + parseInt(num2) + parseInt(num3);

//function that takes answer
function halfBlood() {
    if (answer >= 0 && answer<= 14 ) {
        return "Hermes"
    }
    else if (answer >= 15 && answer <=29 ) {
        return "Dionysus"
    }
    else if (answer >= 30 && answer <=44) {
        return "Aphrodite"
    }
    else if (answer >=45 && answer <= 59) {
        return "Ares" 
    }
    else if (answer >= 60 && answer <= 74) {
        return "Demeter"
    }
    else if (answer >= 75 && answer <= 90) {
        return "Apollo"
    }
    else if (answer >= 105 && answer <= 119) {
        return "Iris"
    }
    else if (answer >= 120 && answer <= 134) {
        return "Athena"
    }
    else if (answer >= 135 && answer <= 149) {
        return "Zeus"    
    }
    else if (answer >= 150 && answer <= 164) {
        return "Poseidon"
    }
    else (answer >= 165);
        return "Hades"    
};

//click listener for button
$(document).ready(function() {
    $("#calculate").click(function() {
        var cabin = halfBlood(name);
        newText = "<p>Your cabin at Camp Half Blood will be: " + cabin + "! </p>";
        document.getElementById("output").innerHTML = newText;
    });
});