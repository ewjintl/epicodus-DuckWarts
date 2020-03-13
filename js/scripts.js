$(document).ready(function() {
 $("form#charNameCard").submit(function(event) {
   var charName = $("input#charName").val();
   console.log(charName);
   $(".charName").text(charName);
   $("#introCard").show();
   event.preventDefault();
 }); 

  $("form#intro").submit(function(event) {
    var decisionIntro = $("#decisionIntro").val();
    if (decisionIntro === "B") {
      $("#branchTwo").show();
    } else if (decisionIntro === "D") {
      $("#endingOne").show();
    }
    else {
      $("#endingOne").hide();
      $("#branchOne").show();
    }
    event.preventDefault();
  }); 

  $("form#BranchOneDecision").submit(function(event) {
    var decisionOne = $("#decisionOne").val();
    if (decisionOne === "C") {
      $("#endingOne").hide();
      $("#endingTwo").show();
    } else if (decisionOne === "D"){
      $("#endingTwo").hide();
      $("#endingOne").show();
    } else if (decisionOne === "B"){
      $("#endingTwo").hide();
      $("#endingOne").hide();
      $("#branchTwo").show();
    }
    event.preventDefault();
  });

  $("form#branchTwoDecision").submit(function(event) {
    var decisionTwo = $("#decisionTwo").val();
    if (decisionTwo === "B") {
      $("#endingOne").hide();
      $("#endingTwo").show();
    } else if (decisionTwo === "C"){
      $("#endingTwo").hide();
      $("#endingOne").show();
    } else if (decisionTwo === "D"){
      $("#endingTwo").hide();
      $("#endingOne").hide();
      $("#branchThree").show();
    }
    event.preventDefault();
  }); 

  $("form#branchThreeDecision").submit(function(event) {
    var decisionThree = $("#decisionThree").val();
    if ((decisionThree === "B") || (decisionThree ===  "A")) {
      $("#endingOne").hide();
      $("#endingThree").hide();
      $("#endingTwo").show();
    } else if (decisionThree === "D"){
      $("#endingTwo").hide();
      $("#endingOne").hide();
      $("#endingThree").show();
    }
    event.preventDefault();
  }); 

});