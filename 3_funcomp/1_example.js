function repeat (num, fn) {
  var i, value;
  for (i = 1; i <= num; ++i)
    value = fn(i);
  return value;
}

repeat(3, function () {
  console.log('Hello')
});

