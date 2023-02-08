

Rules:

Deck - 52-card standard deck (Heart, Diamonds, Clubs and Spades)
  - 2~10, Jack, Queen, King, Ace)

Goal - Get as close to 21 as possible without going over 21.
 - going over 21 results in a bust and a loss.

 Setup:
You play against a computer
 - The player sees their cards 
 - The player only sees one of their opponents cards.

 Card Values: 
 2-10 are face values.
 Jack, Queen, King are all 10.
 Ace is 11 or 1. 

 Ace - 
 Ace is calculated whenever a new card is handed in.  If there's a bust, the Ace shrinks to 1.  If there isn't a bust, the Ace remains an 11.
 
 Put into a deck and shuffled. 


 Player Turn - 
 The player always goes first and can decide to either Hit or Stay
 - hit is another card drawn
 - stay is to end their turn.

 Opponent Turn -
 The opponent goes after the player. 
 On their turn the dealer must:
   - Hit until the total is at least 17.
   - If the dealer busts, the player wins.

Resolving Match:
At the end of dealers turn, compare to see who has the higher number, that person wins. 


- Need to incorporate caching for totals. 

- Incorporate options for:
  * Number of wins for a match.
  * Instead of 21, go to whatever number.

  ---------------------------------------


  flow of project:

  Welcome Screen
  Play & Options

  Play:

  Intantiate deck
  Deal two cards to Opponent and Player
  PLayer makes choices.
  Opponent makes choices.

  Resolve match. 
  Increment wins by one.

  End game once "best out of x" is reached. 

# # # # # # ## # # # # # # # # # #

 Welcome Screen: 


 # ##################################


 Card instantiation:
+=====+ +=====+ +=====+ +=====+ +=====+
 +=====+ 
 |A    |
 |     |
 |    A|
 +=====+
 +=====+
 |~~~~~|
 |~~~~~|
 |~~~~~|
 +=====+

 Card {
  Name: "ACE", TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN
  JACK, QUEEN, KING. 
  Value: "ACE"/ 2 3 4 5 6 7 8 9 10, 10, 10, 10
  Suit: HEART/SPADE/CLUBS/DIAMONDS
  output: [...]
 }

suits.forEach {
  13 cards instant
  pass to deck.
}
}


/////////////////////////////
Gameplay:  UI

 ||||              WIN:5 3:LOSS             ||||
 +=====+ +=====+ +=====+ +=====+ +=====+ +=====+  
 |A    |
 |     |
 |    A|
 +=====+ +=====+ +=====+ +=====+ +=====+ +=====+
 |||                TOTAL: XY                |||
 ||||||||||||||||||||COMPUTER|||||||||||||||||||
              The computer draws a X of Diamonds 
 You draw a x of hearts.
 |||||||||||||||||||| PLAYER |||||||||||||||||||
 |||                 TOTAL: XY               |||
 +=====+ +=====+ +=====+ +=====+ +=====+ +=====+
 |     |
 |     |
 |     |
 +=====+ +=====+ +=====+ +=====+ +=====+ +=====+
   1) Hit                               Stay (2

  When more than six cards: 
 +=====+==+==+==+==+==+==+==+==+==+==+==+==+==+
 |A    |  |  |  |  |  |  |  |  |  |  |  |  |  |
 |     |  |  |  |  |  |  |  |  |  |  |  |  |  |
 |    A| A| A| A| A| A| A| A| A| A| A| A| A| A|
 +=====+==+==+==+==+==+==+==+==+==+==+==+==+==+

 # # # # # # # # # # # # # # # # # # # # # # # # # 

 Core gameplay:

 Player one gets dealt two cards.
 Computer gets dealt two cards (one visible, one hidden)

 Player has option to hit and stay.  
 If player goes over 21, it's a bust. 

 Computer has strict rules: if under 17, hit. Otherwise, stay. 

 Increment win/loss by 1. 
 If hitting win goal (5/x matches) ask player if they'd like to play again.

 ------
 Gameplay loop:

 playerHand = {
  total: 
  cardsInHand = [];
 }
 opponentHand = {
  total; 
  cardsInHand;
 };

 Deal 2 cards to player:
 dealCards(playerHand, 2)
 for each card dealt:
 put card in hand, 
 calculate total every time we add a new card. 
 (with aces) 
 store total in hand.


 while ( playing )
 playerHand = instantiateHands(deck)
 cpuHand = instantiateHands(deck)
 
 gameHeader(playerHand, cpuHand, deck) 
 playerTurn(playerHand, deck)
  (hitting)
  hit?
  put card in array
   - calculate total
  check if bust
  update gameHeader
  hit? 
  repeat above

 opponentTurn(cpuHand, deck)
  similar to above but AI



## calculating total ##

sum hands.cards with aces equalling 11 unless bust.

[2, ace, 10, 8]
ace = 11

2 + 11 + 10 + 8 = 
31 > 21

sum {
  forEach Card
  sum += each card
 if(value > 21 && card === "ace") {
  - 10
 } else

}









