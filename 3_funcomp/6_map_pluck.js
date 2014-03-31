function mapWith (fn) {
  return function (list) {
    return Array.prototype.map.call(list, function (something) {
      return fn.call(this, something);
    });
  };
};

var squareMap = mapWith(function (n) {
  return n*n;
});

console.log(squareMap([1, 2, 3, 4, 5]));

// -----

function getWith (attr) {
  return function (object) { return object[attr]; }
}

var inventory = {
  apples: 0,
  oranges: 144,
  eggs: 36
};

console.log(getWith('oranges')(inventory));

// -----

var inventories = [
  {apples: 0, oranges: 144, eggs: 36 },
  {apples: 240, oranges: 54, eggs: 12 },
  {apples: 24, oranges: 12, eggs: 42 }
];

console.log(mapWith(getWith('oranges'))(inventories));

//----
function maybe (fn) {
  return function () {
    var i;
    if (arguments.length === 0) {
      return
    }
    else {
      for (i = 0; i < arguments.length; ++i) {
        if (arguments[i] == null) return
      }
      return fn.apply(this, arguments)
    }
  }
}
//----

getOranges = mapWith(maybe(getWith('oranges')))
console.log(getOranges(inventories));


function pluckWith (attr) {
  return mapWith(getWith(attr))
}

console.log(pluckWith('oranges')(inventories));

//----
function compose (a, b) {
  return function (c) {
    return a(b(c))
  }
}
//----

var pluckWith = compose(mapWith, getWith);
console.log(pluckWith('oranges')(inventories));
