var x = {
  set y(val) {
    throw new Test262Error();
  }
};
assert.throws(Test262Error, function() {
  0, [x.y] = [23];
});