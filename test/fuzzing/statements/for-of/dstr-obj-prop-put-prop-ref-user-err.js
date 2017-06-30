var x = {
  set y(val) {
    throw new Test262Error();
  }
};
var counter = 0;
assert.throws(Test262Error, function() {
  for ({ a: x.y } of [{ a: 23 }]) {
    counter += 1;
  }
  counter += 1;
});
assert.sameValue(counter, 0);