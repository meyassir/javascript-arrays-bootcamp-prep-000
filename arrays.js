function removeElementFromBeginningOfArray(arr, element)
{
  let temp = arr;
  temp.slice(1);
  return temp;
}
function destructivelyRemoveElementFromBeginningOfArray(arr)
{
  arr.shift();
  return arr;
}
function destructivelyRemoveElementFromEndOfArray(arr)
{
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr)
{
let temp = arr;
temp.slice(-1);
return temp;
}
