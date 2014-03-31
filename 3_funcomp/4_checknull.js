function isSomething (value) {
  return value !== null && value !== void 0;
}

function checksForSomething (value) {
  if (isSomething(value)) {
    // function's true logic
    console.log("Function executed!");
  }
}

checksForSomething(null);
checksForSomething({});

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

var checksForSomething = maybe(function (value) {
  // function's true logic
  console.log("Function executed!");
});

checksForSomething(null);
checksForSomething({});

// one-liner
maybe(function(value) {console.log("Function executed!");})({});
