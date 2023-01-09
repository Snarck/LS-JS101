

Problem: 
Computer needs three difficulty settings:
Easy
Medium
Hard // MiniMax

Easy :
  the AI does moves at complete random.

Normal:  
   If the computer is first it will prioritize slot 5. 
   The computer will always prioritize a winning spot.
   The computer has a 50% chance of being random
   Otherwise, it prioritizes defense (if a player is about to win)
   and then offense (if it's set to win)

Hard: Computer is near unbeatable. (minimax)
## NORMAL ##
Format: We have an array of possible wins.
After the players turn, we:

Find the number of repeats in the arrays for cpuMark.
If it's two, we win the game by selecting the value in the third.

We do a coin toss, if it's 0, we choose a spot at random.
Otherwise:
It checks for the array with the most playerMarks and defends it.
If nothing to defend,
It checks it's own marks and expands to an array that:
contains it's own and no X,
or contains neither. 
if none exist, it expands randomly. 

alternatively:
50% chance to minmax 50% chance to random. 

## MINMAX ##
Minimax is a recursive method that contains two players:
the Maximizer who tries to get the highest score
and the MInimizer who tries to get the lowest score. 

Every board state has a value associated with it. 

If the maximizer has the upper hand then the board will tend to be some positive value.

If the minimizer has the upper hand, the board score will tend to be a negative value. 

Check states such as:
Player wins +1
Computer wins -1
Tie 0

The Maxxer checks the board for best possible moves out of all possible moves.

Each move is then checked by the Mini, who selects the worst possible move for Maxxer.

Maxxer then chooses the best of all those moves. 


|| how it works ||

on AI turn:
create a copy of the availableMoves. 
loop through all available spots in the array and all possible moves.
and check the score (recursively)
player wins?
computer wins?
tie? 
update the score to find bestScore and best move. 


execute the best move.

