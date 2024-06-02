// index.js - learning javascript, 2
// Author: Savvy Burch
// Date: 04/28/2024


// takes a name and sorts the letters 
function sortUser() {
  //prompts for name
    var userName = window.prompt("Hi! What's your name?");
    console.log("userName is : ", userName );
  //splits name into array  
    var nameArray = userName.split('');
    console.log("nameArray is : ", nameArray)
  //sorts array  
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort :", nameArraySort);
  //rejoins array into string  
    var joinName = nameArraySort.join('');
    console.log("joinName : ", joinName);
  //returns new sorted name  
    return joinName;
  }
  
  //output
  /*document.writeln("<br>", " Nice name! But here's a better one: ",
    sortUser(), "<br>");*/

  $("#output").html("'<br>', ' Nice name! But here's a better one: '" +  sortUser() + "'<br>'");  

document.addEventListener('DOMContentLoaded', function() {
      // Call the sortUser function after the DOM has fully loaded
    sortUser();

  });
