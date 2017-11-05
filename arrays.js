function removeElementFromBeginningOfArray(arr)
{
  let temp = arr;
  //temp.shift();
  return arr;
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
//temp.pop();
return arr;
}

function addElementToBeginningOfArray(arr, element)
{
  let temp = [element, ...arr];
  return temp;
}

function destructivelyAddElementToBeginningOfArray(arr, element)
{
  arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(arr, element)
{
  let temp = [...arr, element];
  return temp;
}

function destructivelyAddElementToEndOfArray(arr, element)
{
  arr.push(element);
  return arr;
}

function accessElementInArray(arr, index)
{
  return arr[index];
}
