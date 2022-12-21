//


function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

//What does the following code output?
                           paper
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
/*

rps yellow

*/


/*

if playerFist = "Rock"
if enemyFist is paper, return paper, otherwise rock.
else if playerFist is paper
if enemyFist is scissors, return scissors, otherwise paper.
else fist 2 is rock? If so, rock.  otherwise scissors.


third nested RPS ccalls rock, paper (returns paper), rock-scissors, returns rock.  paper, rock, returns paper.
= paper. 

*/

