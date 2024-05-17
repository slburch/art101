/* lab.js
appending new elements to an output in html

requirements: jquery must be loaded

author: savvy burch
date: 2024 */

function generateRandomText() {
    const text = "meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    //random start index
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    //random meowing
    return text.slice(randStart, randStart + randLen);
}

//retrieve meows
$("#meow").click(function() {


//new meows
const newText = generateRandomText();

//appending new div
$("#output").append('<div class="text"><p>' + newText + '</p></div>');

});

