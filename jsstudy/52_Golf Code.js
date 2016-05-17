/*
Golf Code





In the game of golf ? each hole has a par for the average number of strokes needed to sink the ball. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):


Strokes

Return


1 "Hole-in-one!" 
<= par - 2 "Eagle" 
par - 1 "Birdie" 
par "Par" 
par + 1 "Bogey" 
par + 2 "Double Bogey" 
>= par + 3 "Go Home!" 

par and strokes will always be numeric and positive.


function golfScore(par, strokes) {
  // Only change code below this line
  
  
  return "Change Me";
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);


*/



function golfScore(par, strokes) {
  // Only change code below this line
  
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par-2) {
    return "Eagle";
  } else if (strokes == par-1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3) {
    return "Go Home!";
  }
  
  
  return "Change Me";
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);
