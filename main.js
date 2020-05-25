// challenge 1 "Reverse a string"
// Return a string in reverse

//using built-in objects

function reverseString(str) {
  const strArray = str.split('');
  strArray.reverse();

  return strArray.join();
}

//cleaned up 
// no need for the const variable because you can use return to chain the methods instead.

function reverseString(str) {
  return str
  .split('')
  .reverse()
  .join();
}

