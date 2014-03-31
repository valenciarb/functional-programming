function compose (a, b) {
  return function (c) {
    return a(b(c))
  }
}

function addOne (number) {
  return number + 1
}

function double (number) {
  return number * 2
}

function doubleOfAddOne (number) {
  return double(addOne(number))
}
console.log(doubleOfAddOne(3))

var doubleOfAddOne = compose(double, addOne);
console.log(doubleOfAddOne(3))
