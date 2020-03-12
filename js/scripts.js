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
    if (decisionIntro === "B") {
      $("#branchFour").show();
    } else {
      $("#branchOne").show();
    }
    event.preventDefault();
  }); 

  $("form#BranchOneDecision").submit(function(event) {
    var decisionOne = $("#decisionOne").val();
    console.log(decisionOne);
    if (decisionOne === "C") {
      $("#endingTwo").show();
    } else if (decisionOne === "B"){
      $("#branchTwo").show();
    } else {
      $("#branchTwo").show();
    }
    event.preventDefault();
  }); 

});