var x = {
  set y(val) {
    throw new Test262Error();
  }
};
assert.throws(Test262Error, function() {
  0, { a: x.y } = { a: 23 };
});