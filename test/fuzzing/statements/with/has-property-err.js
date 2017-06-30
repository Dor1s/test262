var thrower = new Proxy({}, {
  has: function(_, name) {
    if (name === 'test262') {
      throw new Test262Error();
    }
  }
});
with (thrower) {
  assert.throws(Test262Error, function() {
    test262;
  });
}