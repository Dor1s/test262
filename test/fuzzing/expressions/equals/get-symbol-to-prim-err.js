var y = Object.defineProperty({}, Symbol.toPrimitive, {
  get: function() {
    throw new Test262Error();
  }
});
assert.throws(Test262Error, function() {
  0 == y;
});