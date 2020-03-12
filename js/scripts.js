$(document).ready(function() {
 $("form#charNameCard").submit(function(event) {
   var charName = $("input#charName").val();
   console.log(charName);
   $(".charName").text(charName);
   $("#introCard").show();
   event.preventDefault();
 }); 

  $("form#intro").submit(function(event) {
    var decsionIntro = $("#decisionIntro").val();
    console.log(decsionIntro);
    if (decisionOne === "B") {
      $("#branchFour").show();
    } else {
      $("#branchOne").show();
    }
    event.preventDefault();
  }); 
});