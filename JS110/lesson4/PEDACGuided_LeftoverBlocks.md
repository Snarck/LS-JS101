Tasks

You are provided with the problem description above. Your tasks for this step are:

    To make notes of your mental model for the problem, including explicit and 
    implicit rules Write a list of questions for things that aren't clear about
    the problem from the description provided


## The Problem

Leftover Blocks

You have a number of building blocks that can be used to build a valid structure. 
There are certain rules about what determines the validity of a structure:

    The building blocks are cubes
    The structure is built in layers
    The top layer is a single block
    A block in an upper layer must be supported by four blocks in a lower layer
    A block in a lower layer can support more than one block in an upper layer
    You cannot leave gaps between blocks

Write a program that, given the number for a specific amount of cubes, calculates 
the number of blocks left over after building the tallest possible valid structure.

  Input:
  - number representing how many cube are available to build a block
  # Output
  - Number representing leftover cubes after building blocks.

  How many cubes per block?

  Explicit Rules: 
  You must build a tower using the cubes, to the highest possible valid structure.
  A block much be supported by four blocks in a lower layer.
  In order for a layer to support another layer, each block above has to be supported by 4 blocks.
  

  [] [] []   [] []  [] 
  [] [] []   [] []
  [] [] []
    3 x 3    2 x 2   1x1

   Data Structure

   We know that each row needs to expand in this direction:
   1x1
   2x2
   3x3
   4x4

   Because of this, we can simply use a Number.  

   Algorithm:

  let layer = 1; 
  while iterating:
  blocks needed to perform a layer (blocks) = layer * layer
  if (number < blocksNeeded) {
    return number;
  } else {
    number -= blocksNeeded
  }
  layer += 1;

calculateLeftoverBlocks(6) === 1
  
  layer = 1
  while(true) {
    blocksNeeded = layer * layer;
    if (number < blocksNeeded) {
      return number;
    } else {
      number -= blocksNeeded
    }
    layer += 1;
  }

  Iteration 1:
  Number = 6
  blocksNeeded = 1
  Number > Blocks Needed
  Number - blocksNeeded = 5
  layer = 2

  Iteration 2:
  Number = 5
  blocksNeeded = 4
  Number > Blocks Needed
  Number - blocksNeeded = 1
  Layer = 3

  Iteration 3:
  Number = 1
  Blocks Needed = 3 * 3 / 9
  Number < Blocks Needed
  return "1". 

  Passes. 