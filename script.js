window.onload = function (e) {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var msg = "";

for (var i = names.length-1;i>=0; i--) {

 var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j')
   msg= "Hello " + (names[i]);
  
  else 
    msg= "Good Bye" + (names[i]);

  console.log(msg);
  
}

}
