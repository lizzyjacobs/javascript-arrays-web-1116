var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var new_array = [element, ...array];
  return new_array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var new_array = [...array, element];
  return new_array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningofArray(array) {
  return array.shift;
}

function removeElementFromBeginningOfArray(array) {
  var new_array = array.slice(1);
  return new_array;
}

function destructivelyRemoveElementFromEndofArray(array) {
  return array.pop;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
