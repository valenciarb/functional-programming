function something (x) {
  return x != null
}

function nothing (x) {
  return !something(x)
}

function not (fn) {
  return function (argument) {
    return !fn(argument)
  }
}

var nothing = not(something);

console.log(something(1));
console.log(something(null));
console.log(nothing(null));
