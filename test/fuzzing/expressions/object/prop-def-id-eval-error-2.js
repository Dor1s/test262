var p = new Proxy({}, {
  has: function () {
    throw new Test262Error();
  }
});
assert.throws(Test262Error, function() {
  with (p) {
    ({attr});
  }
});