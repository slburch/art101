// index.js - learning javascript, 2
// Author: Savvy Burch
// Date: 04/28/2024

// Constants

// Functions

// takes a name and sorts the letters 
function sortUser() {
  //prompts for name
    var userName = window.prompt("Tell me your name.");
    console.log("userName is : " + userName );
  //splits name into array  
    var nameArray = userName.split('');
    console.log("nameArray is : " + nameArray)
  //sorts array  
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort :" + nameArraySort);
  //rejoins array into string  
    var joinName = nameArraySort.join('');
    console.log("joinName : " + joinName);
  //returns new sorted name  
    return joinName;
  }
  
  //output
  document.writeln("Hi! What's your name? ",
    sortUser(), " Nice name!", "</br>");


//  function main() {
  //  console.log("Main function started.");
    // the code that makes everything happen
//  }
  
  // let's get this party started
//  main();
  