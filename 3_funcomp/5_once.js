function once (fn) {
  var done = false;
  return function () {
    return done ? void 0 : ((done = true), fn.apply(this, arguments))
  }
}

var askedOnBlindDate = once(function () {
  console.log('sure, why not?');
});

askedOnBlindDate()
askedOnBlindDate()
askedOnBlindDate()
askedOnBlindDate()
askedOnBlindDate()
