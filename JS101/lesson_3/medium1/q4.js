/* 
Is there a difference between these implementations,
other than the method she used to add an element to the buffer? You may assume that newElement will always be a primitive value.
*/

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

/*

Concat would return a new array each time while push would mutate the original array.
you shouldn't need to return buffer in the first one, because the mutation would happen regardless

*/