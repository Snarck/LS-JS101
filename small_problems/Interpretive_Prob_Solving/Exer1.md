You have a bank of switches before you, numbered from 1 to count. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them, that is, you flip every switch. All the lights are now on. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. Now, every other light is on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have made count passes.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after count passes.


Input: Integer representing the amount of lights that exist.
Output: An array of lightswitches that are "on".

// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

rules:
-lights start at 1. 
-The input determines how big the array should start.
-We have to make input count through the array. 
-each round of the array we toggle the lights if the number is divisible by the count. 

Data Structure:
1: count 5.
[1, 2, 3, 4, 5]
2: count 5
[1, 3, 5];
3: 
[1, 5]
4: 
[1, 4, 5]
5: [1, 4]

Algorithim: 

Create an object called "light" with a boolean of "true/false" for "on." default false. 
Populate an array to count with the object.

outerloop for count.
Inner loop while iteration is less than switches.
Is the object number divisible by count? toggle boolean. 
Repeat until count. 

Filter for all elements that are "on", push to a new array and return it. 


