var x = {
  set y(val) {
    throw new Test262Error();
  }
};
var counter = 0;
assert.throws(Test262Error, function() {
  for ([x.y] of [[23]]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);