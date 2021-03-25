// USER STORIES:

// ✅ The page should ask the user which animal they'd like to learn about.

// When a user clicks an animal, display a div containing information 
// about that animal (including pictures).

// If they later select a different animal, make sure to hide this div 
// before displaying information about another animal.
$(document).ready(function(){

  $(".snake-button").click(function(){
    $(".turtles").hide();
    $(".insects").hide();
    $(".snakes").show();
  });

  $(".turtle-button").click(function(){
    $(".snakes").hide();
    $(".insects").hide();
    $(".turtles").show();
  });

  $(".insect-button").click(function(){
    $(".turtles").hide();
    $(".snakes").hide();
    $(".insects").show();
  });
  
});
