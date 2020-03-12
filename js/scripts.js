$(document).ready(function() {
 $("form#charNameCard").submit(function(event) {
   var charName = $("input#charName").val();
   console.log(charName);
   $(".charName").text(charName);
   $("#introCard").show();
   event.preventDefault();
 }); 
});

$(document).ready(function() {
  $("form#intro").submit(function(event) {
    var decsionOne = 

  }); 
});