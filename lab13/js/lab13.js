/* lab.js
accepting input in jquery

requirements: jquery must be loaded

author: savvy burch
date: 2024 */

//prepares function for HTML doc
$(document).ready(function () {
  $('#submit').click(function() {
//takes input from text boxes in HTML
    let number = $('#number-input').val();
    let text = $('#text-input').val();

//turns number into an integer
    number = parseInt(number);

    //sets up output for HTML
    var output = '';

    //loops through numbers up to 200 with given input + fizzbuzz variables
    for (let i = 1; i<= 200; i++) {
      if (i % number == 0) {
        output += text + '!<br>';
      }
      else if (i % 3 == 0 && i % 5 == 0) {
        output += 'fizzbuzz!<br>';
      } 
      else if (i % 5 == 0) {
        output += 'buzz!<br>';
      }
      else if (i % 3 == 0) {
        output += 'fizz!<br>';
      }
      else {
        output +=i + '<br>';
      }
      }

      //displays output in HTML
      $('#output').html(output);  
    }
  )
  });

