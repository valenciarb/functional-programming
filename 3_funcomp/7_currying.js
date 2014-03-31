var __slice = Array.prototype.slice;
function curry (fn) {
  var arity = fn.length;
  return given([]);
  function given (argsSoFar) {
    return function helper () {
      var updatedArgsSoFar = argsSoFar.concat(__slice.call(arguments, 0));
      if (updatedArgsSoFar.length >= arity) {
        return fn.apply(this, updatedArgsSoFar)
      }
      else return given(updatedArgsSoFar)
    }
  }
}

function sumOfFour (a, b, c, d) { return a + b + c + d }
var curried = curry(sumOfFour);

console.log(curried(1)(2)(3)(4));
console.log(curried(1,2)(3,4));
console.log(curried(1,2,3,4));
